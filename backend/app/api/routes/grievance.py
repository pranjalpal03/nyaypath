from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from app.core.db import (
    save_filed_grievance,
    save_recent_search,
    get_dashboard_data
)
from app.core.auth_utils import get_current_user, get_optional_current_user

router = APIRouter()

class NoteGrievanceRequest(BaseModel):
    query_text: str
    domain: str
    state: Optional[str] = "National"
    district: Optional[str] = "General"
    summary: Optional[str] = ""
    draft_letter: Optional[str] = ""
    jurisdiction: Optional[Dict[str, Any]] = {}
    action_plan: Optional[List[Dict[str, Any]]] = []

class DiscardBackRequest(BaseModel):
    query_text: str
    domain: Optional[str] = "General Legal"

@router.post("/grievance/note")
async def note_grievance(req: NoteGrievanceRequest, current_user: Optional[Dict[str, Any]] = Depends(get_optional_current_user)):
    user_id = current_user["id"] if current_user and "id" in current_user else "anonymous"
    
    # Save to filed_grievances
    filed_rec = save_filed_grievance(
        user_id=user_id,
        query_text=req.query_text,
        domain=req.domain,
        state=req.state or "National",
        district=req.district or "General",
        summary=req.summary or "",
        draft_letter=req.draft_letter or "",
        jurisdiction=req.jurisdiction or {},
        action_plan=req.action_plan or []
    )
    
    # Also save to recent_searches
    search_rec = save_recent_search(
        user_id=user_id,
        query_text=req.query_text,
        domain=req.domain
    )
    
    return {
        "status": "success",
        "message": "Grievance noted and saved successfully.",
        "filed_grievance": filed_rec,
        "recent_search": search_rec
    }

@router.post("/grievance/discard-back")
async def discard_back(req: DiscardBackRequest, current_user: Optional[Dict[str, Any]] = Depends(get_optional_current_user)):
    user_id = current_user["id"] if current_user and "id" in current_user else "anonymous"
    
    # Save query ONLY to recent_searches
    search_rec = save_recent_search(
        user_id=user_id,
        query_text=req.query_text,
        domain=req.domain
    )
    
    return {
        "status": "success",
        "message": "Query saved to recent searches.",
        "recent_search": search_rec
    }

@router.get("/user/dashboard-data")
async def get_user_dashboard(current_user: Dict[str, Any] = Depends(get_current_user)):
    data = get_dashboard_data(current_user["id"])
    return data
