import re
from typing import Dict, Tuple, List

# Regex patterns for PII detection in Indian context
AADHAAR_PATTERN = re.compile(r"\b[2-9]{1}\d{3}\s?\d{4}\s?\d{4}\b")
PHONE_PATTERN = re.compile(r"\b(?:\+91[\-\s]?)?[6-9]\d{9}\b")
EMAIL_PATTERN = re.compile(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b")
PAN_PATTERN = re.compile(r"\b[A-Z]{5}[0-9]{4}[A-Z]{1}\b")

class PIISecurityService:
    @staticmethod
    def mask_pii(text: str) -> Tuple[str, List[Dict[str, str]]]:
        """
        Masks sensitive PII attributes (Aadhaar, Phone, Email, PAN) from text.
        Returns the sanitized text and audit list of redacted fields.
        """
        if not text:
            return "", []

        redacted_items = []
        sanitized_text = text

        # Mask Aadhaar
        aadhaar_matches = AADHAAR_PATTERN.findall(sanitized_text)
        for match in aadhaar_matches:
            redacted_items.append({"type": "AADHAAR", "original_length": len(match)})
            sanitized_text = sanitized_text.replace(match, "[REDACTED_AADHAAR]")

        # Mask Phone Numbers
        phone_matches = PHONE_PATTERN.findall(sanitized_text)
        for match in phone_matches:
            redacted_items.append({"type": "PHONE_NUMBER", "original_length": len(match)})
            sanitized_text = sanitized_text.replace(match, "[REDACTED_PHONE]")

        # Mask Emails
        email_matches = EMAIL_PATTERN.findall(sanitized_text)
        for match in email_matches:
            redacted_items.append({"type": "EMAIL", "original_length": len(match)})
            sanitized_text = sanitized_text.replace(match, "[REDACTED_EMAIL]")

        # Mask PAN Cards
        pan_matches = PAN_PATTERN.findall(sanitized_text)
        for match in pan_matches:
            redacted_items.append({"type": "PAN_CARD", "original_length": len(match)})
            sanitized_text = sanitized_text.replace(match, "[REDACTED_PAN]")

        return sanitized_text, redacted_items
