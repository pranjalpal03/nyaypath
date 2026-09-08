from typing import Dict, List, Any

# 24x7 Emergency Helplines
EMERGENCY_HELPLINES = {
    "DOMESTIC_VIOLENCE": {
        "category": "Domestic Violence & Women in Distress",
        "headline": "Immediate Safety & Protection Assistance (24x7)",
        "urgent_advice": "If you or someone you know is in immediate physical danger, contact Emergency Helplines 181 or 112 immediately. Protection Officers and Mahila Police Stations provide free legal shelter and emergency protection orders under PWDVA 2005.",
        "helplines": [
            {"name": "Women Helpline (NCW)", "number": "181", "description": "National Women Distress Line"},
            {"name": "National Emergency", "number": "112", "description": "Police & Immediate Response"},
            {"name": "NCW WhatsApp Helpline", "number": "7217735372", "description": "Domestic Violence Response"}
        ]
    },
    "WORKPLACE_HARASSMENT": {
        "category": "Workplace Sexual Harassment (POSH)",
        "headline": "POSH Statutory Redressal & Support",
        "urgent_advice": "Under the POSH Act 2013, every organization must have an Internal Committee (IC). You have the right to file a confidential complaint within 90 days. If your organization lacks an IC, contact the Local District Committee or SHe-Box portal.",
        "helplines": [
            {"name": "National Commission for Women", "number": "7827170170", "description": "POSH Support"},
            {"name": "Women Helpline", "number": "181", "description": "24x7 Toll Free"}
        ]
    },
    "CYBER_FRAUD": {
        "category": "Active Cyber Crime & Financial Theft",
        "headline": "Golden Hours Financial Freeze Assistance",
        "urgent_advice": "CRITICAL: Report unauthorized debit or cyber fraud within 2 hours ('Golden Hours') to Helpline 1930 to freeze stolen money in perpetrator bank accounts before withdrawal. Under RBI circular, reporting within 3 days ensures customer zero-liability.",
        "helplines": [
            {"name": "Cyber Financial Crime", "number": "1930", "description": "Immediate Money Freeze Line"},
            {"name": "National Cyber Portal", "number": "cybercrime.gov.in", "description": "Online Complaint Portal"}
        ]
    },
    "SENIOR_CITIZEN_ABUSE": {
        "category": "Senior Citizen Abuse & Abandonment",
        "headline": "National Elder Line & Protection Tribunal",
        "urgent_advice": "Under Section 23 of the Senior Citizens Act 2007, property gifted to children can be revoked by the Maintenance Tribunal if they fail to provide maintenance. Call Elder Line 14567 for free legal aid and rescue.",
        "helplines": [
            {"name": "National Elder Line", "number": "14567", "description": "Senior Citizens Helpline"},
            {"name": "Police Assistance", "number": "112", "description": "Emergency Helpline"}
        ]
    }
}

# 11 Primary Legal Domains & Conversational Keyword Anchors
LEGAL_DOMAINS_MAP: Dict[str, Dict[str, Any]] = {
    "Domestic Violence & Matrimonial Distress": {
        "keywords": [
            "domestic violence", "beating", "dowry", "dahej", "maar peet", "verbal abuse",
            "sasural", "in-laws harassment", "kharcha", "protection order",
            "stri dhan", "evict from shared household", "mahila helpline", "patni ko peetna",
            "husband beating", "domestic abuse", "498a", "pwdva", "मेरा पति मारता है", "पति मारता है",
            "सास ससुर परेशान कर रहे हैं", "दहेज मांग रहे हैं", "घरेलू हिंसा", "दहेज", "तक्रार महिला", "नवऱ्याकडून मारहाण"
        ],
        "statutes": ["Protection of Women from Domestic Violence Act 2005 (PWDVA - Sec 12, 18, 19, 20, 22)", "Section 498A IPC / Section 85-86 BNS", "Dowry Prohibition Act 1961"],
        "primary_authority": "Protection Officer (WCD) / Mahila Police Station",
        "level": "District/Sub-Division",
        "secondary_venues": ["District Magistrate / Protection Magistrate Court", "National Commission for Women (NCW 181)", "State Legal Services Authority (SLSA)"]
    },
    "Workplace Sexual Harassment (POSH)": {
        "keywords": [
            "posh", "sexual harassment at office", "boss misbehavior", "unwanted touch",
            "inappropriate messages", "internal complaints committee", "icc", "workplace abuse",
            "she-box", "office harassment", "quid pro quo", "कार्यस्थल पर उत्पीड़न", "ऑफ़िस में परेशान"
        ],
        "statutes": ["Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013 (POSH Act)"],
        "primary_authority": "Internal Complaints Committee (ICC) of Employer",
        "level": "Organization Level",
        "secondary_venues": ["Local Committee (LC) at District Collectorate", "SHe-Box Ministry Portal", "District Labour Commissioner"]
    },
    "Cyber Crime & Digital Financial Fraud": {
        "keywords": [
            "cyber fraud", "otp scam", "account hacked", "upi fraud", "morphing", "blackmailed",
            "fake loan app", "money debited", "phishing", "deepfake", "identity theft",
            "online fraud", "paise kat gaye", "खाते से पैसे कट गए", "ओटीपी फ्रॉड", "bank fraud", "cyber crime", "साइबर फ्रॉड", "ऑनलाइन फसवणूक"
        ],
        "statutes": ["Information Technology Act 2000 (Sec 43, 66C, 66D, 66E, 67)", "Section 420 IPC / Section 318 BNS", "RBI Circular on Customer Zero-Liability"],
        "primary_authority": "National Cyber Crime Reporting Portal (cybercrime.gov.in / Helpline 1930)",
        "level": "National/State Cyber Police",
        "secondary_venues": ["District Police Cyber Cell", "Banking Ombudsman (RBI)", "Adjudicating Officer under IT Act"]
    },
    "Tenancy, Rent & Unlawful Eviction": {
        "keywords": [
            "landlord throwing out", "tenant not paying rent", "deposit refund", "electricity cut by landlord",
            "rent agreement dispute", "pagdi", "illegal eviction", "security deposit", "eviction notice",
            "rent dispute", "मकान खाली करवा रहा है", "बिजली पानी काट दिया", "किराएदार", "मकान मालिक", "घर रिकामे"
        ],
        "statutes": ["Model Tenancy Act 2021", "State Rent Control Acts (e.g., Maharashtra Rent Control Act 1999)", "Transfer of Property Act 1882"],
        "primary_authority": "Rent Authority / Rent Court",
        "level": "Sub-Division/District",
        "secondary_venues": ["Sub-Divisional Magistrate (SDM) Court", "Civil Court (Rent Tribunal)"]
    },
    "Maintenance & Welfare of Senior Citizens": {
        "keywords": [
            "senior citizen", "elder abuse", "abandoning father", "father without food", "abandoned father",
            "beta khana nahi de raha", "बेटा खाना नहीं दे रहा", "जायदाद नाम करवा कर निकाल दिया",
            "senior citizen maintenance", "property transfer cancelled", "old age abuse", "nursing home neglect",
            "parents maintenance", "senior citizen act", "वरिष्ठ नागरिक", "आई वडील देखभाल"
        ],
        "statutes": ["Maintenance and Welfare of Parents and Senior Citizens Act 2007 (Sec 4, 9, 23)"],
        "primary_authority": "Maintenance Tribunal (chaired by Sub-Divisional Officer / SDO)",
        "level": "Sub-Divisional Level",
        "secondary_venues": ["Appellate Tribunal (District Magistrate)", "National Elder Line 14567"]
    },
    "Pension & Social Welfare (NSAP, PM-Kisan)": {
        "keywords": [
            "pension", "nsap", "pm-kisan", "pm kisan", "old age pension", "widow pension",
            "disability pension", "samman nidhi", "ration", "pds", "social welfare",
            "vridha pension", "kisan nidhi", "पेन्शन", "पेंशन", "राशन"
        ],
        "statutes": ["National Social Assistance Programme (NSAP) Guidelines", "PM-Kisan Samman Nidhi Rules", "National Food Security Act (NFSA) 2013"],
        "primary_authority": "Block Development Officer (BDO) / Tehsil Social Welfare Office",
        "level": "Block/Tehsil",
        "secondary_venues": ["District Social Welfare Officer", "CPGRAMS Portal (pgportal.gov.in)"]
    },
    "Land Records & Property Disputes": {
        "keywords": [
            "encroachment", "khatauni", "khasra", "7/12", "mutation",
            "dakhil kharij", "patwari", "tehsildar", "boundary dispute", "illegal possession",
            "kabza", "zameen", "jameen", "जमीन", "सातबारा", "कब्जा"
        ],
        "statutes": ["State Land Revenue Code", "Registration Act 1908", "Specific Relief Act 1963"],
        "primary_authority": "Tehsildar / Sub-Divisional Magistrate (SDM) Court",
        "level": "Tehsil/Sub-Division",
        "secondary_venues": ["District Collectorate Revenue Court", "State Revenue Appellate Tribunal"]
    },
    "Consumer Protection & Defective Services": {
        "keywords": [
            "consumer", "defective", "warranty", "refund", "faulty product", "e-commerce",
            "service deficiency", "misleading ad", "overcharging", "bill dispute",
            "guarantee", "harassment", "saman", "kharab saman", "ग्राहक", "सामान"
        ],
        "statutes": ["Consumer Protection Act 2019 (Sec 2, 35, 38, 47)"],
        "primary_authority": "District Consumer Disputes Redressal Commission (District Consumer Forum)",
        "level": "District",
        "secondary_venues": ["State Consumer Disputes Redressal Commission", "National Consumer Helpline (1915 / edaakhil.nic.in)"]
    },
    "Labor Rights & Wage Issues": {
        "keywords": [
            "labor", "wages", "salary", "unpaid salary", "mgnrega", "workplace",
            "minimum wage", "termination", "overtime", "contractor", "bonus",
            "mazdoori", "vetan", "tanha", "मजदुरी", "वेतन"
        ],
        "statutes": ["Minimum Wages Act 1948", "Code on Wages 2019", "MGNREGA Act 2005"],
        "primary_authority": "Office of the Assistant Labour Commissioner",
        "level": "District",
        "secondary_venues": ["Labour Court / Industrial Tribunal", "District NREGA Ombudsman"]
    },
    "RTI (Right to Information)": {
        "keywords": [
            "rti", "right to information", "information request", "pio", "public information officer",
            "first appeal", "appellate authority", "application delay", "soochna ka adhikar",
            "सूचना का अधिकार", "माहिती अधिकार"
        ],
        "statutes": ["Right to Information Act 2005 (Sec 6(1), 7(1), 19(1))"],
        "primary_authority": "Public Information Officer (PIO) of Concerned Department",
        "level": "Departmental",
        "secondary_venues": ["First Appellate Authority (FAA)", "State / Central Information Commission (SIC/CIC)"]
    },
    "General Public Grievance (CPGRAMS)": {
        "keywords": [
            "grievance", "public complaint", "cpgrams", "delay in service", "corruption",
            "unresponsive officer", "public grievance", "जन शिकायत"
        ],
        "statutes": ["Centralised Public Grievance Redress and Monitoring System (CPGRAMS) Norms 2023"],
        "primary_authority": "Public Grievance Redressal Officer (CPGRAMS)",
        "level": "Central/State Level",
        "secondary_venues": ["District Collector / Magistrate", "Chief Minister Special Cell"]
    }
}
