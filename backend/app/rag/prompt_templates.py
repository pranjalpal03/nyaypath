import json
from typing import Dict, Any, List, Optional
from datetime import datetime

class ResponseGenerator:
    @staticmethod
    def generate_structured_response(
        query: str,
        language: str,
        detected_domains: List[str],
        entities: Dict[str, Any],
        routing: Dict[str, Any],
        context_str: str,
        sources: List[Dict[str, Any]],
        needs_clarification: bool,
        clarification_questions: List[str],
        emergency_sos: Optional[Dict[str, Any]] = None
    ) -> Dict[str, Any]:
        primary_domain = detected_domains[0] if detected_domains else "General Public Grievance"
        
        summary = ResponseGenerator._build_plain_summary(query, primary_domain, language, entities)
        draft = ResponseGenerator._build_draft_letter(query, primary_domain, language, entities, routing, sources)
        escalation = ResponseGenerator._build_escalation_matrix(primary_domain, routing)

        return {
            "plain_summary": summary,
            "draft_complaint_letter": draft,
            "escalation_matrix": escalation
        }

    @staticmethod
    def _build_plain_summary(query: str, domain: str, lang: str, entities: Dict[str, Any]) -> str:
        loc = entities.get("geographic_location", {})
        dist_str = f" in District {loc['district']}" if loc.get("district") else ""
        scheme_str = f" regarding scheme/law ({', '.join(entities['government_schemes'])})" if entities.get("government_schemes") else ""

        if lang == "hi":
            return (
                f"आपकी शिकायत **'{domain}'** कानून एवं क्षेत्राधिकार से संबंधित है{dist_str}{scheme_str}। "
                "भारतीय कानून के तहत आपको त्वरित जन सेवा, कानूनी सुरक्षा और अधिकार प्राप्त करने का पूर्ण सांविधिक अधिकार है। "
                "सक्षम प्राधिकारी के समक्ष लिखित शिकायत प्रस्तुत करने पर निर्धारित समय-सीमा के भीतर समाधान बाध्यकारी है।"
            )
        elif lang == "mr":
            return (
                f"तुमची तक्रार **'{domain}'** या क्षेत्राशी संबंधित आहे{dist_str}{scheme_str}. "
                "भारतीय कायद्यानुसार तुम्हाला कायदेशीर संरक्षण आणि सेवा मिळण्याचा पूर्ण हक्क आहे. "
                "सक्षम प्राधिकरणाकडे तक्रार सादर केल्यानंतर विहित मुदतीत कार्यवाही करणे बंधनकारक आहे."
            )
        else:
            return (
                f"Your grievance pertains to **'{domain}'**{dist_str}{scheme_str}. "
                "Under Indian statutory provisions, citizens are entitled to immediate protection, timely grievance redressal, and legal remedies. "
                "Submitting a formal written complaint triggers mandatory departmental and statutory appeal timelines."
            )

    @staticmethod
    def _build_draft_letter(
        query: str, domain: str, lang: str, entities: Dict[str, Any], routing: Dict[str, Any], sources: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        today_str = datetime.now().strftime("%d %B %Y")
        loc = entities.get("geographic_location", {})
        place = loc.get("district") or "District Headquarters"
        
        provisions = [s.get("title", "Statutory Provision") for s in sources[:3]] if sources else ["Citizen Charter & Statutory Redressal Rules"]

        subject = f"Formal Complaint & Petition regarding {domain} - Urgent Statutory Intervention Requested"
        to_auth = routing.get("primary_authority", "The Competent Public Authority / Officer in Charge")

        facts = (
            f"Respectfully submit that I reside at {place}. "
            f"I am filing this formal representation regarding an issue falling under {domain}. "
            f"Grievance Details: {query}. "
            "Despite verbal/written requests, the grievance remains unaddressed, necessitating statutory intervention."
        )

        prayers = [
            "1. Take immediate official cognizance of this complaint under applicable statutory provisions.",
            "2. Direct concerned officials to resolve the matter and provide formal status within 15 days.",
            "3. Grant appropriate relief, protection, or statutory compensation as prescribed under law."
        ]

        return {
            "to_authority": to_auth,
            "subject": subject,
            "date_place": f"Date: {today_str} | Place: {place}",
            "statement_of_facts": facts,
            "applicable_provisions": provisions,
            "prayers_relief_sought": prayers,
            "signature_placeholder": "[Applicant Full Name, Address & Mobile Number]"
        }

    @staticmethod
    def _build_escalation_matrix(domain: str, routing: Dict[str, Any]) -> List[Dict[str, Any]]:
        sec_venues = routing.get("secondary_venues", ["District Magistrate", "State Appellate Authority"])
        sec_auth_1 = sec_venues[0] if len(sec_venues) > 0 else "District Collectorate"
        sec_auth_2 = sec_venues[1] if len(sec_venues) > 1 else "State Statutory Commission"

        return [
            {
                "step_number": 1,
                "timeline_days": "Day 0 - Day 15",
                "authority_name": routing.get("primary_authority", "First Point of Contact"),
                "action_required": "Submit formal written complaint letter and obtain signed acknowledgement receipt / complaint reference number.",
                "legal_basis": "Primary Departmental Procedure & Statutory Rules"
            },
            {
                "step_number": 2,
                "timeline_days": "Day 16 - Day 30",
                "authority_name": sec_auth_1,
                "action_required": "File First Appeal / Statutory Escalation Notice if no resolution or written communication is provided.",
                "legal_basis": "Departmental First Appeal Provisions"
            },
            {
                "step_number": 3,
                "timeline_days": "Day 31 - Day 45",
                "authority_name": "Public Information Officer (RTI)",
                "action_required": "File RTI Application under Sec 6(1) seeking certified copies of file notes, progress report, and reason for delay.",
                "legal_basis": "Right to Information Act 2005"
            },
            {
                "step_number": 4,
                "timeline_days": "Day 46+",
                "authority_name": sec_auth_2,
                "action_required": "File statutory petition / appeal before District Court, Consumer Forum, Cyber Police, or State Human Rights/Women Commission.",
                "legal_basis": "Statutory Commission / Judicial Redressal Provisions"
            }
        ]
