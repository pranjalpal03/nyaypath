import sqlite3
import json
import uuid
from datetime import datetime, timezone
from typing import List, Optional, Dict, Any

DB_PATH = "nyaypath_audit.db"

def get_db_connection():
    conn = sqlite3.connect(DB_PATH, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

def init_user_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Users table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            phone_or_email TEXT UNIQUE NOT NULL,
            hashed_password TEXT,
            full_name TEXT,
            preferred_language TEXT DEFAULT 'hi',
            created_at TEXT NOT NULL
        )
    """)
    
    # Grievance records table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS grievance_records (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            original_text TEXT NOT NULL,
            audio_url TEXT,
            state_id TEXT NOT NULL,
            district_id TEXT NOT NULL,
            detected_domain TEXT NOT NULL,
            summary TEXT NOT NULL,
            draft_letter TEXT NOT NULL,
            jurisdiction_routing TEXT NOT NULL,
            escalation_matrix TEXT NOT NULL,
            status TEXT DEFAULT 'Drafted',
            created_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    """)
    
    # Search history table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS search_history (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            query_text TEXT NOT NULL,
            matched_domain TEXT,
            created_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    """)
    
    conn.commit()
    conn.close()

# Database Helper Functions

def create_user(phone_or_email: str, hashed_password: str, full_name: Optional[str] = None, preferred_language: str = "hi") -> Dict[str, Any]:
    init_user_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    
    user_id = f"usr_{uuid.uuid4().hex[:10]}"
    created_at = datetime.now(timezone.utc).isoformat()
    
    cursor.execute("""
        INSERT INTO users (id, phone_or_email, hashed_password, full_name, preferred_language, created_at)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (user_id, phone_or_email, hashed_password, full_name, preferred_language, created_at))
    
    conn.commit()
    conn.close()
    
    return {
        "id": user_id,
        "phone_or_email": phone_or_email,
        "full_name": full_name,
        "preferred_language": preferred_language,
        "created_at": created_at
    }

def get_user_by_identifier(phone_or_email: str) -> Optional[Dict[str, Any]]:
    init_user_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE phone_or_email = ?", (phone_or_email,))
    row = cursor.fetchone()
    conn.close()
    
    if not row:
        return None
    return dict(row)

def get_user_by_id(user_id: str) -> Optional[Dict[str, Any]]:
    init_user_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    row = cursor.fetchone()
    conn.close()
    
    if not row:
        return None
    res = dict(row)
    res.pop("hashed_password", None)
    return res

def save_grievance_record(
    user_id: str,
    original_text: str,
    state_id: str,
    district_id: str,
    detected_domain: str,
    summary: str,
    draft_letter: str,
    jurisdiction_routing: Dict[str, Any],
    escalation_matrix: List[Dict[str, Any]],
    audio_url: Optional[str] = None,
    status: str = "Drafted"
) -> Dict[str, Any]:
    init_user_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    
    record_id = f"grv_{uuid.uuid4().hex[:10]}"
    created_at = datetime.now(timezone.utc).isoformat()
    
    cursor.execute("""
        INSERT INTO grievance_records (
            id, user_id, original_text, audio_url, state_id, district_id,
            detected_domain, summary, draft_letter, jurisdiction_routing,
            escalation_matrix, status, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        record_id, user_id, original_text, audio_url, state_id, district_id,
        detected_domain, summary, draft_letter, json.dumps(jurisdiction_routing),
        json.dumps(escalation_matrix), status, created_at
    ))
    
    conn.commit()
    conn.close()
    
    return {
        "id": record_id,
        "user_id": user_id,
        "original_text": original_text,
        "state_id": state_id,
        "district_id": district_id,
        "detected_domain": detected_domain,
        "summary": summary,
        "draft_letter": draft_letter,
        "jurisdiction_routing": jurisdiction_routing,
        "escalation_matrix": escalation_matrix,
        "status": status,
        "created_at": created_at
    }

def save_search_query(user_id: str, query_text: str, matched_domain: Optional[str] = None) -> Dict[str, Any]:
    init_user_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    
    search_id = f"sch_{uuid.uuid4().hex[:10]}"
    created_at = datetime.now(timezone.utc).isoformat()
    
    cursor.execute("""
        INSERT INTO search_history (id, user_id, query_text, matched_domain, created_at)
        VALUES (?, ?, ?, ?, ?)
    """, (search_id, user_id, query_text, matched_domain, created_at))
    
    conn.commit()
    conn.close()
    
    return {
        "id": search_id,
        "user_id": user_id,
        "query_text": query_text,
        "matched_domain": matched_domain,
        "created_at": created_at
    }

def get_user_grievances(user_id: str, limit: int = 50) -> List[Dict[str, Any]]:
    init_user_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("""
        SELECT * FROM grievance_records WHERE user_id = ? ORDER BY created_at DESC LIMIT ?
    """, (user_id, limit))
    rows = cursor.fetchall()
    conn.close()
    
    records = []
    for row in rows:
        r = dict(row)
        r["jurisdiction_routing"] = json.loads(r["jurisdiction_routing"]) if r["jurisdiction_routing"] else {}
        r["escalation_matrix"] = json.loads(r["escalation_matrix"]) if r["escalation_matrix"] else []
        records.append(r)
    return records

def get_user_search_history(user_id: str, limit: int = 50) -> List[Dict[str, Any]]:
    init_user_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("""
        SELECT * FROM search_history WHERE user_id = ? ORDER BY created_at DESC LIMIT ?
    """, (user_id, limit))
    rows = cursor.fetchall()
    conn.close()
    
    return [dict(row) for row in rows]
