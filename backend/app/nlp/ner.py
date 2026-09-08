import re
from typing import Dict, List, Optional, Any

KNOWN_SCHEMES = [
    "PWDVA 2005", "Section 498A", "POSH Act", "IT Act 2000", "Senior Citizens Act",
    "PM-Kisan", "PM Kisan", "NSAP", "MGNREGA", "PDS", "Ayushman Bharat",
    "PM Awas Yojana", "PMAY", "Sukanya Samriddhi", "Old Age Pension",
    "Widow Pension", "Disability Pension", "Model Tenancy Act", "CPGRAMS"
]

KNOWN_AUTHORITIES = [
    "Protection Officer", "Mahila Police Station", "Internal Complaints Committee", "ICC",
    "Local Committee", "Cyber Crime Cell", "Maintenance Tribunal", "Rent Authority",
    "Rent Court", "Block Development Officer", "BDO", "Tehsildar", "SDM", "Sub-Divisional Magistrate",
    "District Collector", "District Magistrate", "Consumer Forum", "Labour Commissioner",
    "Public Information Officer", "PIO", "Bank Manager", "Patwari"
]

STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal", "Delhi", "Chandigarh", "Jammu and Kashmir", "Ladakh"
]

class EntityExtractor:
    @staticmethod
    def extract_entities(text: str) -> Dict[str, Any]:
        if not text:
            return {
                "government_schemes": [],
                "geographic_location": {"district": None, "tehsil_block": None, "state": None},
                "authorities_mentioned": [],
                "incident_dates": []
            }

        extracted_schemes = []
        for scheme in KNOWN_SCHEMES:
            if re.search(r'\b' + re.escape(scheme) + r'\b', text, re.IGNORECASE):
                extracted_schemes.append(scheme)

        extracted_authorities = []
        for auth in KNOWN_AUTHORITIES:
            if re.search(r'\b' + re.escape(auth) + r'\b', text, re.IGNORECASE):
                extracted_authorities.append(auth)

        # Detect State
        detected_state = None
        for state in STATES:
            if re.search(r'\b' + re.escape(state) + r'\b', text, re.IGNORECASE):
                detected_state = state
                break

        # Detect District / Tehsil Regex
        district_match = re.search(r'district\s+([A-Za-z]+)|जिला\s+([^\s,]+)|जिल्हा\s+([^\s,]+)', text, re.IGNORECASE)
        detected_district = None
        if district_match:
            detected_district = next(g for g in district_match.groups() if g is not None)

        tehsil_match = re.search(r'(tehsil|block|taluka)\s+([A-Za-z]+)|तहसील\b|ब्लॉक\b', text, re.IGNORECASE)
        detected_tehsil = tehsil_match.group(2) if tehsil_match and tehsil_match.group(2) else None

        # Dates
        date_patterns = [
            r'\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b',
            r'\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* \d{4}\b',
            r'\b\d+\s+(?:months|years|days|weeks)\s+ago\b',
            r'\b(?:last month|last year|past 6 months|पिछले 6 महीने|गेल्या 6 महिन्यात)\b'
        ]
        extracted_dates = []
        for pattern in date_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            extracted_dates.extend(matches)

        return {
            "government_schemes": list(set(extracted_schemes)),
            "geographic_location": {
                "district": detected_district,
                "tehsil_block": detected_tehsil,
                "state": detected_state
            },
            "authorities_mentioned": list(set(extracted_authorities)),
            "incident_dates": list(set(extracted_dates))
        }
