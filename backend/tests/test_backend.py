import uuid
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.core.security import PIISecurityService
from app.core.audit import init_db
from app.nlp.normalizer import TextNormalizer
from app.nlp.classifier import DomainClassifier
from app.nlp.keyword_matcher import FastPathKeywordMatcher
from app.nlp.ner import EntityExtractor

client = TestClient(app)

@pytest.fixture(autouse=True)
def setup_database():
    init_db()

def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "NyayPath" in data["app_name"]

def test_pii_security_masking():
    raw_text = "My Aadhaar is 5432 9876 1234 and phone is +91 9876543210. Email: test@gov.in, PAN: ABCDE1234F"
    masked_text, redacted_items = PIISecurityService.mask_pii(raw_text)
    
    assert "[REDACTED_AADHAAR]" in masked_text
    assert "[REDACTED_PHONE]" in masked_text
    assert len(redacted_items) == 4

def test_conversational_colloquial_domestic_violence_intent():
    colloquial_query = "मेरा पति मारता है और सास ससुर दहेज मांग रहे हैं।"
    sos_payload, scores = FastPathKeywordMatcher.scan_emergency_and_domain(colloquial_query)
    
    assert sos_payload is not None
    assert sos_payload["triggered"] is True
    assert "Domestic Violence" in sos_payload["category"]

def test_conversational_colloquial_cyber_fraud_intent():
    cyber_query = "मेरे बैंक खाते से पैसे कट गए हैं ऑनलाइन फ्रॉड हुआ है।"
    sos_payload, scores = FastPathKeywordMatcher.scan_emergency_and_domain(cyber_query)
    
    assert sos_payload is not None
    assert sos_payload["triggered"] is True
    assert "1930" in [h["number"] for h in sos_payload["helplines"]]

def test_expanded_domain_classifier():
    posh_query = "My boss at office is sexually harassing me and ICC internal complaints committee is ignoring it."
    domains, confidence, routing, needs_clarification, questions, emergency_sos = DomainClassifier.classify_and_route(posh_query)
    
    assert "Workplace Sexual Harassment (POSH)" in domains
    assert confidence >= 0.70
    assert "Internal Complaints Committee" in routing["primary_authority"]

def test_conversational_senior_citizens_maintenance_classifier():
    senior_query = "बेटा खाना नहीं दे रहा और जायदाद नाम करवा कर घर से निकाल दिया।"
    domains, confidence, routing, needs_clarification, questions, emergency_sos = DomainClassifier.classify_and_route(senior_query)
    
    assert "Maintenance & Welfare of Senior Citizens" in domains
    assert "Maintenance Tribunal" in routing["primary_authority"]

def test_navigate_endpoint_end_to_end_with_location():
    payload = {
        "query": "मेरा पति मारता है और दहेज मांगता है। Aadhaar 5432 9876 1234.",
        "language": "hi",
        "state": "Uttar Pradesh",
        "district": "Varanasi"
    }
    response = client.post("/api/v1/navigate", json=payload)
    assert response.status_code == 200
    data = response.json()
    
    assert "session_id" in data
    assert data["emergency_sos"] is not None
    assert data["emergency_sos"]["triggered"] is True
    assert "District Varanasi" in data["jurisdictional_routing"]["primary_authority"]
    assert data["draft_complaint_letter"] is not None
    assert len(data["escalation_matrix"]) == 4

def test_authentication_and_user_history_flow():
    email = f"citizen_{uuid.uuid4().hex[:6]}@example.com"
    reg_payload = {
        "phone_or_email": email,
        "password": "SecurePassword123!",
        "full_name": "Ramesh Kumar",
        "preferred_language": "hi"
    }
    reg_res = client.post("/api/v1/auth/register", json=reg_payload)
    assert reg_res.status_code == 200
    token = reg_res.json()["access_token"]
    assert token is not None

    # Test /auth/me with Bearer token
    headers = {"Authorization": f"Bearer {token}"}
    me_res = client.get("/api/v1/auth/me", headers=headers)
    assert me_res.status_code == 200
    assert me_res.json()["phone_or_email"] == email

    # Test navigate with authenticated user token to record history
    nav_payload = {
        "query": "राशन कार्ड में नाम नहीं जोड़ा गया है",
        "language": "hi",
        "state": "Bihar",
        "district": "Patna"
    }
    nav_res = client.post("/api/v1/navigate", json=nav_payload, headers=headers)
    assert nav_res.status_code == 200

    # Fetch user history
    hist_res = client.get("/api/v1/user/history", headers=headers)
    assert hist_res.status_code == 200
    hist_data = hist_res.json()
    assert len(hist_data["grievances"]) >= 1
    assert len(hist_data["search_history"]) >= 1

def test_grievance_note_and_discard_back_endpoints():
    email = f"citizen_{uuid.uuid4().hex[:6]}@example.com"
    reg_payload = {
        "phone_or_email": email,
        "password": "SecurePassword123!",
        "full_name": "Anita Verma",
        "preferred_language": "hi"
    }
    reg_res = client.post("/api/v1/auth/register", json=reg_payload)
    token = reg_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Test /grievance/note
    note_payload = {
        "query_text": "पति दहेज के लिए मारपीट करता है",
        "domain": "Domestic Violence & Matrimonial Distress",
        "state": "Uttar Pradesh",
        "district": "Varanasi",
        "summary": "घरेलू हिंसा शिकायत",
        "draft_letter": "TO: Mahila Police Station",
        "jurisdiction": {"primary_authority": "Mahila Police Station"},
        "action_plan": [{"step_number": 1, "timeline_days": "Day 0-15"}]
    }
    note_res = client.post("/api/v1/grievance/note", json=note_payload, headers=headers)
    assert note_res.status_code == 200
    assert note_res.json()["status"] == "success"

    # Test /grievance/discard-back
    discard_payload = {
        "query_text": "साइबर फ्रॉड 1930 सहायता",
        "domain": "Cyber Crime & Financial Fraud"
    }
    disc_res = client.post("/api/v1/grievance/discard-back", json=discard_payload, headers=headers)
    assert disc_res.status_code == 200
    assert disc_res.json()["status"] == "success"

    # Fetch dashboard data
    dash_res = client.get("/api/v1/user/dashboard-data", headers=headers)
    assert dash_res.status_code == 200
    dash_data = dash_res.json()
    assert len(dash_data["filed_grievances"]) >= 1
    assert len(dash_data["recent_searches"]) >= 2


