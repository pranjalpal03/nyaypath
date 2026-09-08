import re
from typing import Dict, List, Tuple, Any, Optional
from app.core.constants import LEGAL_DOMAINS_MAP, EMERGENCY_HELPLINES

EMERGENCY_TRIGGER_PATTERNS = {
    "DOMESTIC_VIOLENCE": [
        r'\b(domestic violence|beating|maar peet|patni ko peetna|husband beating|dowry harassment|dahej|sasural|181)\b',
        r'(मेरा पति मारता है|पति मारता है|सास ससुर परेशान कर रहे हैं|दहेज मांग रहे हैं|घरेलू हिंसा|दहेज|मारपीट|नवऱ्याकडून मारहाण)'
    ],
    "CYBER_FRAUD": [
        r'\b(cyber fraud|otp scam|money debited|upi fraud|bank account debited|hacked|1930|phishing)\b',
        r'(खाते से पैसे कट गए|ओटीपी फ्रॉड|साइबर फ्रॉड|खाते से पैसे|ऑनलाइन फ्रॉड|पैसे कापले गेले)'
    ],
    "WORKPLACE_HARASSMENT": [
        r'\b(posh|sexual harassment|internal complaints committee|icc|she-box)\b',
        r'(कार्यस्थल पर उत्पीड़न|ऑफ़िस में परेशान)'
    ],
    "SENIOR_CITIZEN_ABUSE": [
        r'\b(son abandoned father|senior citizen maintenance|14567|property gift cancelled)\b',
        r'(बेटा खाना नहीं दे रहा|जायदाद नाम करवा कर निकाल दिया|वरिष्ठ नागरिक|आई वडील)'
    ]
}

class FastPathKeywordMatcher:
    @staticmethod
    def scan_emergency_and_domain(text: str) -> Tuple[Optional[Dict[str, Any]], Dict[str, float]]:
        if not text:
            return None, {}

        text_lower = text.lower()
        emergency_payload = None

        # 1. Scan Emergency Safeguard Triggers
        for key, patterns in EMERGENCY_TRIGGER_PATTERNS.items():
            for pattern in patterns:
                if re.search(pattern, text, re.IGNORECASE) or re.search(pattern, text_lower, re.IGNORECASE):
                    if key in EMERGENCY_HELPLINES:
                        info = EMERGENCY_HELPLINES[key]
                        emergency_payload = {
                            "triggered": True,
                            "category": info["category"],
                            "headline": info["headline"],
                            "urgent_advice": info["urgent_advice"],
                            "helplines": info["helplines"]
                        }
                        break
            if emergency_payload:
                break

        # 2. Compute Lexical Domain Scores
        domain_scores: Dict[str, float] = {}
        for domain_name, domain_data in LEGAL_DOMAINS_MAP.items():
            keywords = domain_data.get("keywords", [])
            match_count = 0
            for kw in keywords:
                if kw in text or kw in text_lower:
                    match_count += 1

            if match_count > 0:
                domain_scores[domain_name] = min(0.60 + (match_count * 0.15), 0.98)

        return emergency_payload, domain_scores
