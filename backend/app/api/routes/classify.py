from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from app.nlp.classifier import DomainClassifier

router = APIRouter()

class ClassifyRequest(BaseModel):
    text: str
    district: Optional[str] = None
    state: Optional[str] = None

@router.post("/classify", summary="Classify complaint domain and map jurisdiction")
async def classify_grievance(req: ClassifyRequest):
    domains, confidence, routing, needs_clarification, questions = DomainClassifier.classify_and_route(
        text=req.text,
        user_district=req.district,
        user_state=req.state
    )

    return {
        "detected_domains": domains,
        "confidence_score": confidence,
        "jurisdictional_routing": routing,
        "needs_clarification": needs_clarification,
        "clarification_questions": questions
    }
