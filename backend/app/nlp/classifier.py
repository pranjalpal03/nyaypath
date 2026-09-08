import re
from typing import List, Dict, Tuple, Any, Optional
from app.core.constants import LEGAL_DOMAINS_MAP
from app.nlp.keyword_matcher import FastPathKeywordMatcher

class DomainClassifier:
    @staticmethod
    def classify_and_route(text: str, user_district: str = None, user_state: str = None) -> Tuple[List[str], float, Dict[str, Any], bool, List[str], Optional[Dict[str, Any]]]:
        """
        Classifies query text across 11 primary legal domains, determines emergency triggers,
        computes routing confidence, maps jurisdictional authorities, and triggers confidence gate.
        """
        emergency_sos, domain_scores = FastPathKeywordMatcher.scan_emergency_and_domain(text)

        if not domain_scores:
            top_domains = ["General Public Grievance (CPGRAMS)"]
            confidence = 0.45
        else:
            sorted_domains = sorted(domain_scores.items(), key=lambda x: x[1], reverse=True)
            top_domains = [d[0] for d in sorted_domains]
            confidence = sorted_domains[0][1]

        primary_domain = top_domains[0]

        # Determine Jurisdictional Authorities
        if primary_domain in LEGAL_DOMAINS_MAP:
            info = LEGAL_DOMAINS_MAP[primary_domain]
            primary_auth = info["primary_authority"]
            level = info["level"]
            secondary = info["secondary_venues"]
        else:
            primary_auth = "Public Grievance Redressal Officer (CPGRAMS)"
            level = "Central/State"
            secondary = ["District Collectorate", "Chief Minister Helpline"]

        # Append district/state if specified
        loc_suffix = []
        if user_district:
            loc_suffix.append(f"District {user_district}")
        if user_state:
            loc_suffix.append(f"State {user_state}")
        
        if loc_suffix:
            primary_auth = f"{primary_auth}, {', '.join(loc_suffix)}"

        routing = {
            "primary_authority": primary_auth,
            "primary_venue_level": level,
            "secondary_venues": secondary,
            "confidence_score": confidence
        }

        # Confidence Gate Check (< 0.70 threshold)
        needs_clarification = confidence < 0.70
        clarification_questions = []

        if needs_clarification:
            clarification_questions.append("Which State and District did this incident occur in?")
            clarification_questions.append("What specific department, scheme, or person is involved?")
            clarification_questions.append("When did this incident or non-payment take place?")

        return top_domains, confidence, routing, needs_clarification, clarification_questions, emergency_sos
