from typing import List, Dict, Any
from app.rag.vectorstore import VectorStoreManager

EXPANDED_STATUTE_SEED_DATA: List[Dict[str, str]] = [
    {
        "id": "pwdva_2005",
        "title": "Protection of Women from Domestic Violence Act 2005 (PWDVA) - Sec 12, 18 & 19",
        "category": "Domestic Violence & Matrimonial Distress",
        "text": (
            "The Protection of Women from Domestic Violence Act 2005 (PWDVA) provides civil remedies for women experiencing "
            "physical, emotional, verbal, sexual, or economic abuse within a domestic relationship. "
            "Section 12 empowers an aggrieved woman or Protection Officer to present an application to the Magistrate. "
            "Section 18 provides for Protection Orders prohibiting domestic violence, contacting the victim, or entering workplace. "
            "Section 19 provides Residence Orders prohibiting eviction from the shared household regardless of legal title. "
            "Section 20 grants Monetary Relief for medical expenses, loss of earnings, and maintenance."
        )
    },
    {
        "id": "posh_act_2013",
        "title": "Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act 2013",
        "category": "Workplace Sexual Harassment (POSH)",
        "text": (
            "The POSH Act 2013 mandates that every employer with 10 or more employees must constitute an Internal Complaints Committee (ICC) "
            "headed by a senior woman employee. Complaints must be filed within 3 months of the incident. "
            "For organizations with less than 10 employees or complaints against the employer itself, the Local Committee (LC) "
            "constituted by the District Collector/Magistrate is the competent authority. "
            "Inquiry must be completed within 90 days and employer must act on recommendations within 60 days."
        )
    },
    {
        "id": "it_act_2000_cyber",
        "title": "Information Technology Act 2000 & RBI Zero-Liability Fraud Circular",
        "category": "Cyber Crime & Digital Financial Fraud",
        "text": (
            "Section 66C of the IT Act 2000 penalizes identity theft using stolen passwords, OTPs, or biometric data with imprisonment up to 3 years. "
            "Section 66D penalizes cheating by personation using computer resource or fake online portals. "
            "Under RBI Circular on Customer Protection, if a customer reports unauthorized electronic transaction within 3 working days, "
            "the customer has ZERO LIABILITY and bank must credit the shadow amount within 10 working days. "
            "Victims should immediately report active fraud to Helpline 1930 or National Cyber Crime Reporting Portal cybercrime.gov.in."
        )
    },
    {
        "id": "senior_citizens_2007",
        "title": "Maintenance and Welfare of Parents and Senior Citizens Act 2007 - Sec 4 & 23",
        "category": "Maintenance & Welfare of Senior Citizens",
        "text": (
            "The Senior Citizens Act 2007 provides effective provisions for maintenance and welfare of parents and senior citizens. "
            "Section 4 entitles senior citizens (above 60 years) to claim monthly maintenance up to Rs 10,000 from children/relatives. "
            "Section 23 provides that if a senior citizen transfers property by gift or deed with the condition of care, "
            "and children fail to provide basic amenities, the Maintenance Tribunal can declare the property transfer NULL AND VOID. "
            "Applications are adjudicated by Sub-Divisional Officers (SDO) within 90 days."
        )
    },
    {
        "id": "tenancy_act_2021",
        "title": "Model Tenancy Act & State Rent Control Provisions on Unlawful Eviction",
        "category": "Tenancy, Rent & Unlawful Eviction",
        "text": (
            "Under the Model Tenancy Act and State Rent Control Acts, no landlord can evict a tenant without serving a formal written notice "
            "and obtaining an eviction order from the Rent Authority/Rent Court. "
            "Landlords are strictly prohibited from cutting off essential services like water, electricity, or locking out the tenant. "
            "Security deposit for residential premises is capped at a maximum of 2 months' rent and must be refunded upon handover."
        )
    },
    {
        "id": "act_consumer_2019",
        "title": "Consumer Protection Act 2019 - Sections 2, 35 & 38",
        "category": "Consumer Protection & Defective Services",
        "text": (
            "The Consumer Protection Act 2019 provides for protection of consumer interests through District, State, and National Commissions. "
            "Section 35 provides that a consumer can file a complaint for defective goods, deficient services, or misleading advertisements. "
            "Every complaint shall be disposed of within 90 days from notice date when testing is not required."
        )
    },
    {
        "id": "act_rti_2005",
        "title": "Right to Information (RTI) Act 2005 - Sections 6 & 7",
        "category": "RTI (Right to Information)",
        "text": (
            "Under Section 6(1) of the RTI Act 2005, any citizen can request information from a Public Information Officer (PIO). "
            "Under Section 7(1), the PIO must provide information within 30 days. "
            "If information concerns life or liberty of a person, it shall be provided within 48 hours. "
            "Failure empowers the applicant to file First Appeal under Section 19(1)."
        )
    },
    {
        "id": "scheme_nsap_2022",
        "title": "National Social Assistance Programme (NSAP) Guidelines",
        "category": "Pension & Social Welfare (NSAP, PM-Kisan)",
        "text": (
            "NSAP comprises IGNOAPS (Old Age Pension), IGNWPS (Widow Pension), and IGNDPS (Disability Pension). "
            "Pensions are credited monthly directly into beneficiary Aadhaar-seeded bank accounts. "
            "Non-disbursement for consecutive months triggers inquiry by the Block Development Officer (BDO)."
        )
    }
]

def seed_expanded_statutes(vectorstore: VectorStoreManager):
    """
    Seeds expanded statutory documents into ChromaDB.
    """
    if not vectorstore.collection:
        return
    print(f"[SeedManager] Seeding {len(EXPANDED_STATUTE_SEED_DATA)} statutory legal documents into ChromaDB...")
    vectorstore.add_documents(EXPANDED_STATUTE_SEED_DATA)
