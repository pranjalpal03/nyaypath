import time
import uuid
from typing import Optional, Dict, Any
from fastapi import APIRouter, HTTPException, Depends
from app.schemas.grievance import GrievanceRequest, GrievanceResponse, NamedEntities, AuthorityRouting, DraftComplaintLetter, EscalationStep, EmergencySOS
from app.core.security import PIISecurityService
from app.core.audit import AuditLogger
from app.core.db import save_grievance_record, save_search_query
from app.core.auth_utils import get_optional_current_user
from app.nlp.normalizer import TextNormalizer
from app.nlp.classifier import DomainClassifier
from app.nlp.ner import EntityExtractor
from app.rag.vectorstore import VectorStoreManager
from app.rag.retriever import LegalRetriever
from app.rag.prompt_templates import ResponseGenerator

router = APIRouter()
vectorstore_manager = VectorStoreManager()
legal_retriever = LegalRetriever(vectorstore_manager)

@router.post("/navigate", response_model=GrievanceResponse, summary="Process legal grievance end-to-end")
async def navigate_grievance(req: GrievanceRequest, current_user: Optional[Dict[str, Any]] = Depends(get_optional_current_user)):
    start_time = time.time()
    session_id = req.session_id or f"sess_{uuid.uuid4().hex[:8]}"

    if not req.query or not req.query.strip():
        raise HTTPException(status_code=400, detail="Grievance text query cannot be empty.")

    # Step 1: Security & Privacy (PII Masking)
    sanitized_text, pii_redactions = PIISecurityService.mask_pii(req.query)

    # Step 2: Text Normalization & Language Detection
    lang = TextNormalizer.detect_language(sanitized_text, default_lang=req.language)
    normalized_query = TextNormalizer.normalize_text(sanitized_text)

    # Step 3: Named Entity Recognition (NER)
    ner_dict = EntityExtractor.extract_entities(normalized_query)
    if req.district:
        ner_dict["geographic_location"]["district"] = req.district
    if req.state:
        ner_dict["geographic_location"]["state"] = req.state

    # Step 4: Multi-Label Domain Classification & Fast-Path Emergency SOS Scanner
    domains, confidence, routing_dict, needs_clarification, questions, emergency_sos_dict = DomainClassifier.classify_and_route(
        text=normalized_query,
        user_district=ner_dict["geographic_location"].get("district"),
        user_state=ner_dict["geographic_location"].get("state")
    )

    # Step 5: Statutory Knowledge Retrieval (RAG)
    context_str, retrieved_sources = legal_retriever.retrieve_grounded_context(normalized_query, top_k=5)

    # Step 6: Response Generation & Structured Output
    gen_results = ResponseGenerator.generate_structured_response(
        query=sanitized_text,
        language=lang,
        detected_domains=domains,
        entities=ner_dict,
        routing=routing_dict,
        context_str=context_str,
        sources=retrieved_sources,
        needs_clarification=needs_clarification,
        clarification_questions=questions,
        emergency_sos=emergency_sos_dict
    )

    latency_ms = round((time.time() - start_time) * 1000, 2)

    # Step 7: Audit Logging
    retrieved_ids = [s.get("id", "") for s in retrieved_sources]
    AuditLogger.log_session(
        session_id=session_id,
        language=lang,
        detected_domains=domains,
        routing_confidence=confidence,
        pii_redacted_count=len(pii_redactions),
        retrieved_chunk_ids=retrieved_ids,
        needs_clarification=needs_clarification,
        latency_ms=latency_ms
    )

    # Format Pydantic Objects
    entities_model = NamedEntities(
        government_schemes=ner_dict.get("government_schemes", []),
        geographic_location=ner_dict.get("geographic_location", {}),
        authorities_mentioned=ner_dict.get("authorities_mentioned", []),
        incident_dates=ner_dict.get("incident_dates", [])
    )

    routing_model = AuthorityRouting(
        primary_authority=routing_dict.get("primary_authority", ""),
        primary_venue_level=routing_dict.get("primary_venue_level", "District"),
        secondary_venues=routing_dict.get("secondary_venues", []),
        confidence_score=confidence
    )

    draft_dict = gen_results.get("draft_complaint_letter")
    draft_model = DraftComplaintLetter(**draft_dict) if draft_dict else None

    escalation_list = [
        EscalationStep(**step) for step in gen_results.get("escalation_matrix", [])
    ]

    emergency_sos_model = EmergencySOS(**emergency_sos_dict) if emergency_sos_dict else None

    # Step 8: Per-User Persistent Record Storage
    if current_user and "id" in current_user:
        try:
            save_search_query(
                user_id=current_user["id"],
                query_text=sanitized_text,
                matched_domain=domains[0] if domains else "General"
            )
            draft_text_formatted = f"To: {draft_dict.get('to_authority')}\nSubject: {draft_dict.get('subject')}\n\n{draft_dict.get('statement_of_facts')}" if draft_dict else ""
            save_grievance_record(
                user_id=current_user["id"],
                original_text=sanitized_text,
                state_id=req.state or "National",
                district_id=req.district or "General",
                detected_domain=domains[0] if domains else "General Legal",
                summary=gen_results.get("plain_summary", ""),
                draft_letter=draft_text_formatted,
                jurisdiction_routing=routing_dict,
                escalation_matrix=gen_results.get("escalation_matrix", []),
                status="Drafted"
            )
        except Exception as err:
            print(f"[User History Error] Failed to persist user record: {err}")

    return GrievanceResponse(
        session_id=session_id,
        language=lang,
        sanitized_query=sanitized_text,
        detected_domains=domains,
        confidence_score=confidence,
        needs_clarification=needs_clarification,
        clarification_questions=questions,
        emergency_sos=emergency_sos_model,
        plain_summary=gen_results.get("plain_summary", ""),
        entities=entities_model,
        jurisdictional_routing=routing_model,
        draft_complaint_letter=draft_model,
        escalation_matrix=escalation_list,
        retrieved_sources=retrieved_sources,
        pii_redacted_count=len(pii_redactions)
    )
