export type LanguageCode = 'hi' | 'mr' | 'en';

export interface TranslationDictionary {
  appTitle: string;
  appSubtitle: string;
  readyBadge: string;
  describeProblemTitle: string;
  describeProblemSub: string;
  quickSamplePrefix: string;
  selectStateLabel: string;
  selectStatePlaceholder: string;
  selectDistrictLabel: string;
  selectDistrictPlaceholder: string;
  selectStateFirstPlaceholder: string;
  textareaPlaceholder: string;
  recordVoiceBtn: string;
  stopVoiceBtn: string;
  listeningStateText: string;
  uploadAudioFileBtn: string;
  navigateGrievanceBtn: string;
  analyzingContextText: string;
  privacyHeaderTitle: string;
  piiMaskedText: string;
  noPiiText: string;
  routingConfidenceLabel: string;
  confidenceGateTitle: string;
  confidenceGateSub: string;
  plainSummaryTitle: string;
  classifiedDomainsLabel: string;
  detectedSchemesLabel: string;
  targetLocationLabel: string;
  jurisdictionTitle: string;
  primaryAuthorityLabel: string;
  venueLevelLabel: string;
  secondaryVenuesLabel: string;
  draftLetterTitle: string;
  copyLetterBtn: string;
  copiedSuccessBtn: string;
  downloadTxtBtn: string;
  escalationMatrixTitle: string;
  groundedReferencesTitle: string;
  similarityLabel: string;
  presets: Array<{
    category: string;
    query: string;
  }>;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  hi: {
    appTitle: "न्यायपथ",
    appSubtitle: "नागरिक अधिकार एवं शिकायत निवारण के लिए व्यक्तिगत कानूनी नेविगेटर",
    readyBadge: "11 कानूनी क्षेत्र सक्रिय",
    describeProblemTitle: "अपनी कानूनी या शिकायत संबंधी समस्या बताएं",
    describeProblemSub: "माइक बटन दबाकर सीधे बोलें, ऑडियो फ़ाइल अपलोड करें या टाइप करें। न्यायपथ आपको सटीक क्षेत्राधिकार, कानूनी अधिकार और औपचारिक शिकायत पत्र तैयार करके देगा।",
    quickSamplePrefix: "त्वरित उदाहरण श्रेणी चुनें:",
    selectStateLabel: "राज्य / केंद्र शासित प्रदेश चुनें:",
    selectStatePlaceholder: "-- राज्य चुनें --",
    selectDistrictLabel: "जिला चुनें:",
    selectDistrictPlaceholder: "-- जिला चुनें --",
    selectStateFirstPlaceholder: "-- पहले राज्य चुनें --",
    textareaPlaceholder: "अपनी समस्या यहाँ लिखें या नीचे 'बोलकर दर्ज करें' बटन दबाकर सीधे बोलें...",
    recordVoiceBtn: "बोलकर दर्ज करें",
    stopVoiceBtn: "रिकॉर्डिंग रोकें",
    listeningStateText: "सुन रहा हूँ... स्पष्ट बोलिए",
    uploadAudioFileBtn: "ऑडियो फ़ाइल अपलोड करें",
    navigateGrievanceBtn: "न्यायपथ खोजें",
    analyzingContextText: "कानूनी प्रावधानों का विश्लेषण हो रहा है...",
    privacyHeaderTitle: "सुरक्षा एवं गोपनीयता संरक्षण (मॉड्यूल F)",
    piiMaskedText: "निजी जानकारी (आधार/फोन) सुरक्षित की गई",
    noPiiText: "कोई निजी जानकारी नहीं पाई गई",
    routingConfidenceLabel: "क्षेत्राधिकार सटीकता",
    confidenceGateTitle: "अतिरिक्त विवरण आवश्यक है (सटीकता < 70%)",
    confidenceGateSub: "सही अधिकारी तक पहुंचने के लिए निम्नलिखित जानकारी स्पष्ट करें:",
    plainSummaryTitle: "सरल कानूनी सारांश एवं सांविधिक अधिकार",
    classifiedDomainsLabel: "वर्गीकृत कानूनी क्षेत्र:",
    detectedSchemesLabel: "पहचाने गए कानून / योजनाएं:",
    targetLocationLabel: "संबंधित स्थान:",
    jurisdictionTitle: "प्राधिकरण एवं क्षेत्राधिकार मैपिंग",
    primaryAuthorityLabel: "प्रथम संपर्क अधिकारी / प्राधिकरण",
    venueLevelLabel: "प्रशासनिक स्तर:",
    secondaryVenuesLabel: "द्वितीयक एवं अपील निकाय:",
    draftLetterTitle: "औपचारिक कानूनी शिकायत पत्र (प्रारूप)",
    copyLetterBtn: "पत्र कॉपी करें",
    copiedSuccessBtn: "कॉपी हो गया!",
    downloadTxtBtn: "डाउनलोड .txt",
    escalationMatrixTitle: "चरण-दर-चरण समय-सीमा एवं अपील योजना",
    groundedReferencesTitle: "प्रामाणिक सांविधिक संदर्भ (RAG)",
    similarityLabel: "समानता",
    presets: [
      {
        category: "घरेलू हिंसा एवं प्रताड़ना",
        query: "पति और ससुराल वाले रोजाना दहेज के लिए मार-पीट करते हैं और घर से निकालने की धमकी देते हैं।"
      },
      {
        category: "कार्यस्थल पर यौन उत्पीड़न (पॉश)",
        query: "कार्यालय में अधिकारी अनुचित संदेश भेज रहा है और शिकायत करने पर नौकरी से निकालने की धमकी दे रहा है।"
      },
      {
        category: "साइबर वित्तीय धोखाधड़ी (1930)",
        query: "कल मेरे बैंक खाते से बिना ओटीपी के नकली यूपीआई लिंक द्वारा 45,000 रुपये कट गए हैं।"
      },
      {
        category: "किरायेदार एवं मकान मालिक विवाद",
        query: "मकान मालिक ने बिना लिखित नोटिस दिए बिजली-पानी का कनेक्शन काट दिया है और घर खाली करने का दबाव बना रहा है।"
      },
      {
        category: "वरिष्ठ नागरिक भरण-पोषण",
        query: "बेटे ने संपत्ति अपने नाम करवा ली और अब 68 वर्षीय वृद्ध पिता को खाना और इलाज नहीं दे रहा है।"
      },
      {
        category: "पेंशन एवं राशन समस्या (NSAP)",
        query: "मेरा वृद्धावस्था पेंशन (NSAP) पिछले 6 महीने से नहीं आया है, ब्लॉक ऑफिस BDO में आवेदन दिया था।"
      }
    ]
  },

  mr: {
    appTitle: "न्यायपथ",
    appSubtitle: "नागरिक सक्षमीकरणासाठी वैयक्तिक कायदेशीर आणि तक्रार निवारण मार्गदर्शक",
    readyBadge: "११ कायदेशीर क्षेत्रे सक्रिय",
    describeProblemTitle: "तुमची कायदेशीर किंवा तक्रार समस्या वर्णन करा",
    describeProblemSub: "मायक्रोफोन बटणावर क्लिक करून बोला, ऑडिओ फाइल अपलोड करा किंवा टाइप करा. न्यायपथ तुम्हाला अचूक प्राधिकरण, कायदेशीर हक्क आणि तक्रार अर्ज तयार करून देईल.",
    quickSamplePrefix: "त्वरित उदाहरण श्रेणी निवडा:",
    selectStateLabel: "राज्य / केंद्रशासित प्रदेश निवडा:",
    selectStatePlaceholder: "-- राज्य निवडा --",
    selectDistrictLabel: "जिल्हा निवडा:",
    selectDistrictPlaceholder: "-- जिल्हा निवडा --",
    selectStateFirstPlaceholder: "-- आधी राज्य निवडा --",
    textareaPlaceholder: "तुमची समस्या येथे टाइप करा किंवा खालील मायक्रोफोन बटण दाबून बोला...",
    recordVoiceBtn: "बोलून नोंदवा",
    stopVoiceBtn: "रेकॉर्डिंग थांबवा",
    listeningStateText: "ऐकत आहे... स्पष्ट बोला",
    uploadAudioFileBtn: "ऑडिओ फाइल अपलोड करा",
    navigateGrievanceBtn: "कायदेशीर न्याय शोधा",
    analyzingContextText: "कायदेशीर नियमांचे विश्लेषण होत आहे...",
    privacyHeaderTitle: "सुरक्षा आणि गोपनीयता संरक्षण (मॉड्यूल F)",
    piiMaskedText: "वैयक्तिक माहिती (आधार/फोन) सुरक्षित केली",
    noPiiText: "कोणतीही वैयक्तिक माहिती आढळली नाही",
    routingConfidenceLabel: "प्राधिकरण अचूकता",
    confidenceGateTitle: "अतिरिक्त माहिती आवश्यक आहे (अचूकता < ७०%)",
    confidenceGateSub: "योग्य अधिकाऱ्याकडे तक्रार पाठवण्यासाठी खालील माहिती द्या:",
    plainSummaryTitle: "सोपा कायदेशीर सारांश आणि हक्क",
    classifiedDomainsLabel: "वर्गीकृत कायदेशीर क्षेत्रे:",
    detectedSchemesLabel: "आढळलेले कायदे / योजना:",
    targetLocationLabel: "संबंधित ठिकाण:",
    jurisdictionTitle: "प्राधिकरण आणि कार्यक्षेत्र मॅपिंग",
    primaryAuthorityLabel: "प्रथम संपर्क अधिकारी / प्राधिकरण",
    venueLevelLabel: "प्रशासकीय स्तर:",
    secondaryVenuesLabel: "द्वितीयक आणि अपील संस्था:",
    draftLetterTitle: "अधिकृत तक्रार अर्ज (मसुदा)",
    copyLetterBtn: "अर्ज कॉपी करा",
    copiedSuccessBtn: "कॉपी झाले!",
    downloadTxtBtn: "डाउनलोड .txt",
    escalationMatrixTitle: "टप्पा-दर-टप्पा मुदत आणि अपील योजना",
    groundedReferencesTitle: "अधिकृत कायदेशीर संदर्भ (RAG)",
    similarityLabel: "साम्य",
    presets: [
      {
        category: "घरगुती हिंसाचार आणि छळ",
        query: "पती आणि सासरचे लोक दररोज हुंड्यासाठी मारहाण करतात आणि घरातून काढून देण्याची धमकी देतात."
      },
      {
        category: "कामाच्या ठिकाणी होणारा छळ (पॉश)",
        query: "कार्यालयात वरिष्ठ अधिकारी अयोग्य संदेश पाठवत आहे आणि तक्रार केल्यास नोकरीवरून काढण्याची धमकी देत आहे."
      },
      {
        category: "सायबर आर्थिक फसवणूक (१९३०)",
        query: "काल माझ्या बँक खात्यातून ओटीपीशिवाय खोट्या यूपीआय लिंकद्वारे ४५,००० रुपये कापले गेले आहेत."
      },
      {
        category: "भाडेकरू आणि घरमालक विवाद",
        query: "घरमालकाने कोणतीही नोटीस न देता विजेचे आणि पाण्याचे कनेक्शन तोडले आहे आणि घर रिकामे करण्याचा दबाव आणत आहे."
      },
      {
        category: "ज्येष्ठ नागरिक देखभाल व संरक्षण",
        query: "मुलाने मालमत्ता स्वतःच्या नावावर करून घेतली आणि आता ६८ वर्षांच्या वृद्ध वडिलांना अन्न आणि औषध देत नाही."
      },
      {
        category: "पेन्शन आणि रेशन समस्या (NSAP)",
        query: "माझी वृद्धापकाळ पेन्शन गेली ६ महिने मिळालेली नाही, ब्लॉक अधिकारी लक्ष देत नाहीत."
      }
    ]
  },

  en: {
    appTitle: "NyayPath",
    appSubtitle: "Personalized Legal & Grievance Navigator for Citizen Empowerment",
    readyBadge: "11 Legal Domains Active",
    describeProblemTitle: "Please Describe Your Legal or Grievance Issue",
    describeProblemSub: "Speak directly into microphone, upload an audio recording, or type. NyayPath will compute jurisdictional routing, statutory rights, and draft a formal complaint letter.",
    quickSamplePrefix: "Select a Quick Sample Preset:",
    selectStateLabel: "Select State / Union Territory:",
    selectStatePlaceholder: "-- Select State --",
    selectDistrictLabel: "Select District:",
    selectDistrictPlaceholder: "-- Select District --",
    selectStateFirstPlaceholder: "-- Select State First --",
    textareaPlaceholder: "Type your grievance here or click the 'Record Voice' button below to dictate in real-time...",
    recordVoiceBtn: "Record Voice",
    stopVoiceBtn: "Stop Recording",
    listeningStateText: "Listening... Speak clearly",
    uploadAudioFileBtn: "Upload Audio File",
    navigateGrievanceBtn: "Navigate Grievance",
    analyzingContextText: "Analyzing statutory provisions & context...",
    privacyHeaderTitle: "Security & Privacy Protection (Module F)",
    piiMaskedText: "Sensitive PII (Aadhaar/Phone) masked for privacy",
    noPiiText: "No sensitive PII detected",
    routingConfidenceLabel: "Routing Confidence",
    confidenceGateTitle: "Clarifying Details Required (Confidence < 70%)",
    confidenceGateSub: "To avoid misrouting, please clarify the following details:",
    plainSummaryTitle: "Plain Legal Summary & Statutory Rights",
    classifiedDomainsLabel: "Classified Legal Domains:",
    detectedSchemesLabel: "Detected Schemes / Statutes:",
    targetLocationLabel: "Target Location:",
    jurisdictionTitle: "Jurisdictional Routing",
    primaryAuthorityLabel: "Primary Point of Contact Authority",
    venueLevelLabel: "Administrative Level:",
    secondaryVenuesLabel: "Secondary & Parallel Appellate Venues:",
    draftLetterTitle: "Formally Structured Legal Complaint Letter",
    copyLetterBtn: "Copy Letter",
    copiedSuccessBtn: "Copied to Clipboard!",
    downloadTxtBtn: "Download .txt",
    escalationMatrixTitle: "Step-by-Step Action Plan & Escalation Matrix",
    groundedReferencesTitle: "Grounded Statutory References (RAG)",
    similarityLabel: "Similarity",
    presets: [
      {
        category: "Domestic Violence & Cruelty",
        query: "Husband and in-laws are physically abusing me daily for dowry and threatening eviction from shared household."
      },
      {
        category: "Workplace Sexual Harassment (POSH)",
        query: "Office manager is sending inappropriate messages and threatening termination if I report to ICC."
      },
      {
        category: "Cyber Financial Fraud (1930)",
        query: "Yesterday Rs 45,000 was fraudulently debited from my bank account via unauthorized UPI phishing link."
      },
      {
        category: "Tenancy & Illegal Eviction",
        query: "Landlord abruptly cut off electricity and water supply and is threatening illegal eviction without written notice."
      },
      {
        category: "Senior Citizen Maintenance",
        query: "Son took property gift deed and is now abandoning 68 year old father without food, medical care, or maintenance."
      },
      {
        category: "Pension & Welfare Delay (NSAP)",
        query: "My old age pension (NSAP) has not been credited for 6 months despite written application to BDO office."
      }
    ]
  }
};
