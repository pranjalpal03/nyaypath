from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class GrievanceRequest(BaseModel):
    query: str = Field(..., description="User's grievance text input or voice transcription")
    language: str = Field("hi", description="Preferred language code ('hi', 'mr', 'en')")
    session_id: Optional[str] = Field(None, description="Optional session tracking identifier")
    district: Optional[str] = Field(None, description="Selected district name")
    state: Optional[str] = Field(None, description="Selected state name")

class VoiceUploadResponse(BaseModel):
    transcription: str
    detected_language: str
    confidence: float
    message: str

class NamedEntities(BaseModel):
    government_schemes: List[str] = Field(default_factory=list)
    geographic_location: Dict[str, Optional[str]] = Field(
        default_factory=lambda: {"district": None, "tehsil_block": None, "state": None}
    )
    authorities_mentioned: List[str] = Field(default_factory=list)
    incident_dates: List[str] = Field(default_factory=list)

class AuthorityRouting(BaseModel):
    primary_authority: str
    primary_venue_level: str
    secondary_venues: List[str] = Field(default_factory=list)
    confidence_score: float

class DraftComplaintLetter(BaseModel):
    to_authority: str
    subject: str
    date_place: str
    statement_of_facts: str
    applicable_provisions: List[str]
    prayers_relief_sought: List[str]
    signature_placeholder: str

class EscalationStep(BaseModel):
    step_number: int
    timeline_days: str
    authority_name: str
    action_required: str
    legal_basis: str

class EmergencySOS(BaseModel):
    triggered: bool = False
    category: str = ""
    headline: str = ""
    urgent_advice: str = ""
    helplines: List[Dict[str, str]] = Field(default_factory=list)

class GrievanceResponse(BaseModel):
    session_id: str
    language: str
    sanitized_query: str
    detected_domains: List[str]
    confidence_score: float
    needs_clarification: bool
    clarification_questions: List[str] = Field(default_factory=list)
    emergency_sos: Optional[EmergencySOS] = None
    plain_summary: str
    entities: NamedEntities
    jurisdictional_routing: AuthorityRouting
    draft_complaint_letter: Optional[DraftComplaintLetter] = None
    escalation_matrix: List[EscalationStep] = Field(default_factory=list)
    retrieved_sources: List[Dict[str, Any]] = Field(default_factory=list)
    pii_redacted_count: int = 0
