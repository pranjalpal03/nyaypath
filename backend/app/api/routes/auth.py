from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from typing import Optional, List, Dict, Any
from app.core.db import (
    create_user,
    get_user_by_identifier,
    get_user_grievances,
    get_user_search_history
)
from app.core.auth_utils import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user
)

router = APIRouter()

# Pydantic Schemas

class RegisterRequest(BaseModel):
    phone_or_email: str
    password: Optional[str] = "otp_simulated_password_2026"
    full_name: Optional[str] = None
    preferred_language: Optional[str] = "hi"

class LoginRequest(BaseModel):
    phone_or_email: str
    password: Optional[str] = "otp_simulated_password_2026"

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: Dict[str, Any]

@router.post("/auth/register", response_model=TokenResponse)
async def register(req: RegisterRequest):
    identifier = req.phone_or_email.strip().lower()
    if not identifier:
        raise HTTPException(status_code=400, detail="Mobile number or email is required.")
    
    existing = get_user_by_identifier(identifier)
    if existing:
        raise HTTPException(status_code=400, detail="An account with this phone/email already exists.")
    
    hashed_pwd = hash_password(req.password or "otp_simulated_password_2026")
    user = create_user(
        phone_or_email=identifier,
        hashed_password=hashed_pwd,
        full_name=req.full_name,
        preferred_language=req.preferred_language or "hi"
    )
    
    token = create_access_token({"sub": user["id"], "identifier": user["phone_or_email"]})
    return TokenResponse(access_token=token, user=user)

@router.post("/auth/login", response_model=TokenResponse)
async def login(req: LoginRequest):
    identifier = req.phone_or_email.strip().lower()
    if not identifier:
        raise HTTPException(status_code=400, detail="Mobile number or email is required.")
    
    user = get_user_by_identifier(identifier)
    if not user:
        # Auto-provision user if using Mobile OTP flow
        hashed_pwd = hash_password(req.password or "otp_simulated_password_2026")
        user = create_user(
            phone_or_email=identifier,
            hashed_password=hashed_pwd,
            preferred_language="hi"
        )
    else:
        if req.password and user.get("hashed_password"):
            if not verify_password(req.password, user["hashed_password"]):
                raise HTTPException(status_code=401, detail="Invalid password or credentials.")
    
    user_data = {
        "id": user["id"],
        "phone_or_email": user["phone_or_email"],
        "full_name": user.get("full_name"),
        "preferred_language": user.get("preferred_language", "hi"),
        "created_at": user.get("created_at")
    }
    token = create_access_token({"sub": user["id"], "identifier": user["phone_or_email"]})
    return TokenResponse(access_token=token, user=user_data)

@router.get("/auth/me")
async def get_me(current_user: Dict[str, Any] = Depends(get_current_user)):
    return current_user

@router.get("/user/history")
async def get_history(current_user: Dict[str, Any] = Depends(get_current_user)):
    user_id = current_user["id"]
    grievances = get_user_grievances(user_id)
    searches = get_user_search_history(user_id)
    return {
        "user_id": user_id,
        "grievances": grievances,
        "search_history": searches
    }
