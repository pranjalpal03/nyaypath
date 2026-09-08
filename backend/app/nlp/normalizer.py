import re
from typing import Tuple, Dict

# Standard legal misspellings / colloquial terms mapping
LEGAL_TERM_NORMALIZATION: Dict[str, str] = {
    # Hindi / Hinglish colloquial terms to standardized legal terms
    "pension nahi mila": "pension non-disbursement",
    "pension nahi aayi": "pension non-receipt",
    "kisaan paise": "PM-Kisan instalment delay",
    "kisan nidhi": "PM-Kisan Samman Nidhi",
    "rashan": "ration PDS allocation",
    "ration nahi de raha": "PDS ration denial",
    "zameen kabza": "illegal land encroachment",
    "jameen kabza": "illegal land encroachment",
    "khatauni": "land record khatauni mutation",
    "dakhil kharij": "property mutation dakhil kharij",
    "kharab saman": "defective product consumer claim",
    "paise kat gaye": "unauthorized digital bank debit cyber fraud",
    "fraud ho gaya": "cyber fraud digital theft",
    "online fraud": "cyber crime financial fraud",
    "shikayat": "grievance complaint",
    "tanha": "salary wage dispute",
    "vetan": "unpaid salary wages",
    "mazdoori": "labor wage payment dispute",
    "soochna ka adhikar": "Right to Information RTI",
    "rti application": "RTI application inquiry",
    
    # Marathi colloquial terms
    "पेन्शन": "pension social welfare",
    "जमीन ताबा": "illegal land encroachment",
    "सातबारा": "7/12 land record extract",
    "रेशन": "PDS ration supply",
    "वेतन": "unpaid wages salary"
}

# Devanagari Hindi vs Marathi script pattern checks
HINDI_KEYWORDS = ["है", "था", "नहीं", "मिला", "गया", "करवाएं", "आवेदन", "शिकायत", "पैसा", "किसान"]
MARATHI_KEYWORDS = ["आहे", "होता", "नाही", "मिळाले", "गेला", "करावा", "अर्ज", "तक्रार", "पैसे", "शेतकरी", "सातबारा"]

class TextNormalizer:
    @staticmethod
    def detect_language(text: str, default_lang: str = "hi") -> str:
        """
        Detects primary language code: 'hi' (Hindi), 'mr' (Marathi), 'en' (English).
        """
        if not text:
            return default_lang

        lowered = text.lower()
        
        # Check Devanagari script presence
        devanagari_count = len(re.findall(r'[\u0900-\u097F]', text))
        total_len = max(len(text), 1)

        if devanagari_count / total_len > 0.2:
            # Differentiate Marathi vs Hindi
            for word in MARATHI_KEYWORDS:
                if word in text:
                    return "mr"
            for word in HINDI_KEYWORDS:
                if word in text:
                    return "hi"
            return default_lang if default_lang in ["hi", "mr"] else "hi"

        # Latin Script (English or Hinglish)
        return "en"

    @staticmethod
    def normalize_text(text: str) -> str:
        """
        Strips filler words, normalizes whitespace, standardizes colloquial terms.
        """
        if not text:
            return ""

        # Remove filler noise (um, ah, matlab, yaani, like)
        fillers = [r'\b(um+|uh+|ah+|matlab|yaani|bhai|sir|please|plz)\b']
        cleaned = text
        for filler in fillers:
            cleaned = re.sub(filler, '', cleaned, flags=re.IGNORECASE)

        # Standardize multiple spaces
        cleaned = re.sub(r'\s+', ' ', cleaned).strip()

        # Apply term standardization
        lowered = cleaned.lower()
        for colloquial, std_term in LEGAL_TERM_NORMALIZATION.items():
            if colloquial in lowered:
                # Append standardized legal term in brackets to boost embedding search precision
                cleaned += f" ({std_term})"

        return cleaned
