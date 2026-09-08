import sqlite3
import json
import time
from datetime import datetime, timezone
from typing import List, Optional, Dict, Any

DB_PATH = "nyaypath_audit.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS audit_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            timestamp TEXT NOT NULL,
            language TEXT,
            detected_domains TEXT,
            routing_confidence REAL,
            pii_redacted_count INTEGER,
            retrieved_chunk_ids TEXT,
            needs_clarification INTEGER,
            latency_ms REAL
        )
    """)
    conn.commit()
    conn.close()

class AuditLogger:
    @staticmethod
    def log_session(
        session_id: str,
        language: str,
        detected_domains: List[str],
        routing_confidence: float,
        pii_redacted_count: int,
        retrieved_chunk_ids: List[str],
        needs_clarification: bool,
        latency_ms: float
    ):
        try:
            init_db()  # Ensure table exists
            conn = sqlite3.connect(DB_PATH)
            cursor = conn.cursor()
            timestamp = datetime.now(timezone.utc).isoformat()
            cursor.execute("""
                INSERT INTO audit_logs (
                    session_id, timestamp, language, detected_domains, 
                    routing_confidence, pii_redacted_count, retrieved_chunk_ids, 
                    needs_clarification, latency_ms
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                session_id,
                timestamp,
                language,
                json.dumps(detected_domains),
                routing_confidence,
                pii_redacted_count,
                json.dumps(retrieved_chunk_ids),
                1 if needs_clarification else 0,
                latency_ms
            ))
            conn.commit()
            conn.close()
        except Exception as e:
            print(f"[AuditLogger Error] Failed to log session audit: {e}")

    @staticmethod
    def get_recent_logs(limit: int = 20) -> List[Dict[str, Any]]:
        try:
            init_db()
            conn = sqlite3.connect(DB_PATH)
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM audit_logs ORDER BY id DESC LIMIT ?", (limit,))
            rows = cursor.fetchall()
            conn.close()

            logs = []
            for row in rows:
                logs.append({
                    "id": row[0],
                    "session_id": row[1],
                    "timestamp": row[2],
                    "language": row[3],
                    "detected_domains": json.loads(row[4]) if row[4] else [],
                    "routing_confidence": row[5],
                    "pii_redacted_count": row[6],
                    "retrieved_chunk_ids": json.loads(row[7]) if row[7] else [],
                    "needs_clarification": bool(row[8]),
                    "latency_ms": row[9]
                })
            return logs
        except Exception as e:
            print(f"[AuditLogger Error] Failed to fetch audit logs: {e}")
            return []
