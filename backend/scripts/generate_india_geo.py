import os
import json
import re

# Comprehensive list of all 36 States and UTs with their official districts and Devanagari (HI/MR) transliterations

RAW_GEO_DATA = [
    {
        "id": "andhra_pradesh", "nameEn": "Andhra Pradesh", "nameHi": "आंध्र प्रदेश", "nameMr": "आंध्र प्रदेश", "type": "State",
        "districts": [
            {"id": "anantapur", "nameEn": "Anantapur", "nameHi": "अनंतपुर", "nameMr": "अनंतपूर"},
            {"id": "chittoor", "nameEn": "Chittoor", "nameHi": "चित्तूर", "nameMr": "चित्तूर"},
            {"id": "east_godavari", "nameEn": "East Godavari", "nameHi": "पूर्वी गोदावरी", "nameMr": "पूर्व गोदावरी"},
            {"id": "guntur", "nameEn": "Guntur", "nameHi": "गुंटूर", "nameMr": "गुंटूर"},
            {"id": "krishna", "nameEn": "Krishna", "nameHi": "कृष्णा", "nameMr": "कृष्णा"},
            {"id": "kurnool", "nameEn": "Kurnool", "nameHi": "कुरनूल", "nameMr": "कुर्नूल"},
            {"id": "prakasam", "nameEn": "Prakasam", "nameHi": "प्रकाशम", "nameMr": "प्रकाशम"},
            {"id": "srikakulam", "nameEn": "Srikakulam", "nameHi": "श्रीकाकुलम", "nameMr": "श्रीकाकुलम"},
            {"id": "visakhapatnam", "nameEn": "Visakhapatnam", "nameHi": "विशाखापत्तनम", "nameMr": "विशाखापट्टणम"},
            {"id": "vizianagaram", "nameEn": "Vizianagaram", "nameHi": "विजयनगरम", "nameMr": "विजयनगरम"},
            {"id": "west_godavari", "nameEn": "West Godavari", "nameHi": "पश्चिम गोदावरी", "nameMr": "पश्चिम गोदावरी"},
            {"id": "ysr_kadapa", "nameEn": "YSR Kadapa", "nameHi": "वाईएसआर कड़पा", "nameMr": "वायएसआर कडापा"},
            {"id": "nandyal", "nameEn": "Nandyal", "nameHi": "नंदयाल", "nameMr": "नंदयाल"},
            {"id": "bapatla", "nameEn": "Bapatla", "nameHi": "बापटला", "nameMr": "बापटला"},
            {"id": "eluru", "nameEn": "Eluru", "nameHi": "एलुरु", "nameMr": "एलुरु"},
            {"id": "tirupati", "nameEn": "Tirupati", "nameHi": "तिरुपति", "nameMr": "तिरुपती"},
            {"id": "kakinada", "nameEn": "Kakinada", "nameHi": "काकीनाडा", "nameMr": "काकीनाडा"},
            {"id": "konaseema", "nameEn": "Konaseema", "nameHi": "कोनासीमा", "nameMr": "कोनासीमा"},
            {"id": "anakapalli", "nameEn": "Anakapalli", "nameHi": "अनाकापल्ली", "nameMr": "अनाकापल्ली"},
            {"id": "parvathipuram_manyam", "nameEn": "Parvathipuram Manyam", "nameHi": "पार्वतीपुरम मान्यम", "nameMr": "पार्वतीपुरम मान्यम"},
            {"id": "alluri_sitharama_raju", "nameEn": "Alluri Sitharama Raju", "nameHi": "अल्लूरी सीताराम राजू", "nameMr": "अल्लुरी सीताराम राजू"},
            {"id": "palnadu", "nameEn": "Palnadu", "nameHi": "पलनाडू", "nameMr": "पलनाडू"},
            {"id": "ntr", "nameEn": "NTR", "nameHi": "एनटीआर", "nameMr": "एनटीआर"},
            {"id": "sri_sathya_sai", "nameEn": "Sri Sathya Sai", "nameHi": "श्री सत्य साई", "nameMr": "श्री सत्य साई"},
            {"id": "annamayya", "nameEn": "Annamayya", "nameHi": "अन्नमया", "nameMr": "अन्नमया"},
            {"id": "sri_potti_sriramulu_nellore", "nameEn": "Sri Potti Sriramulu Nellore", "nameHi": "नेल्लोर", "nameMr": "नेल्लोर"}
        ]
    },
    {
        "id": "arunachal_pradesh", "nameEn": "Arunachal Pradesh", "nameHi": "अरुणाचल प्रदेश", "nameMr": "अरुणाचल प्रदेश", "type": "State",
        "districts": [
            {"id": "tawang", "nameEn": "Tawang", "nameHi": "तवांग", "nameMr": "तवांग"},
            {"id": "west_kameng", "nameEn": "West Kameng", "nameHi": "पश्चिम कामेंग", "nameMr": "पश्चिम कामेंग"},
            {"id": "east_kameng", "nameEn": "East Kameng", "nameHi": "पूर्वी कामेंग", "nameMr": "पूर्व कामेंग"},
            {"id": "papum_pare", "nameEn": "Papum Pare", "nameHi": "पापुम पारे", "nameMr": "पापुम पारे"},
            {"id": "kurung_kumey", "nameEn": "Kurung Kumey", "nameHi": "कुरुंग कुमे", "nameMr": "कुरुंग कुमे"},
            {"id": "kra_daadi", "nameEn": "Kra Daadi", "nameHi": "क्रा दादी", "nameMr": "क्रा दादी"},
            {"id": "lower_subansiri", "nameEn": "Lower Subansiri", "nameHi": "निचला सुबनसिरी", "nameMr": "खालचा सुबनसिरी"},
            {"id": "upper_subansiri", "nameEn": "Upper Subansiri", "nameHi": "ऊपरी सुबनसिरी", "nameMr": "वरचा सुबनसिरी"},
            {"id": "west_siang", "nameEn": "West Siang", "nameHi": "पश्चिम सियांग", "nameMr": "पश्चिम सियांग"},
            {"id": "east_siang", "nameEn": "East Siang", "nameHi": "पूर्वी सियांग", "nameMr": "पूर्व सियांग"},
            {"id": "siang", "nameEn": "Siang", "nameHi": "सियांग", "nameMr": "सियांग"},
            {"id": "upper_siang", "nameEn": "Upper Siang", "nameHi": "ऊपरी सियांग", "nameMr": "वरचा सियांग"},
            {"id": "lower_siang", "nameEn": "Lower Siang", "nameHi": "निचला सियांग", "nameMr": "खालचा सियांग"},
            {"id": "dibang_valley", "nameEn": "Dibang Valley", "nameHi": "दिबांग घाटी", "nameMr": "दिबांग व्हॅली"},
            {"id": "lower_dibang_valley", "nameEn": "Lower Dibang Valley", "nameHi": "निचली दिबांग घाटी", "nameMr": "खालची दिबांग व्हॅली"},
            {"id": "anjaw", "nameEn": "Anjaw", "nameHi": "अंजाव", "nameMr": "अंजाव"},
            {"id": "lohit", "nameEn": "Lohit", "nameHi": "लोहित", "nameMr": "लोहित"},
            {"id": "namsai", "nameEn": "Namsai", "nameHi": "नामसाई", "nameMr": "नामसाई"},
            {"id": "changlang", "nameEn": "Changlang", "nameHi": "चांगलांग", "nameMr": "चांगलांग"},
            {"id": "tirap", "nameEn": "Tirap", "nameHi": "तिराप", "nameMr": "तिराप"},
            {"id": "longding", "nameEn": "Longding", "nameHi": "लोंगडिंग", "nameMr": "लोंगडिंग"},
            {"id": "kamle", "nameEn": "Kamle", "nameHi": "कमले", "nameMr": "कमले"},
            {"id": "pakke_kessang", "nameEn": "Pakke Kessang", "nameHi": "पक्के केसांग", "nameMr": "पक्के केसांग"},
            {"id": "shi_yomi", "nameEn": "Shi Yomi", "nameHi": "शी योमी", "nameMr": "शी योमी"},
            {"id": "lepa_rada", "nameEn": "Lepa Rada", "nameHi": "लेपा राडा", "nameMr": "लेपा राडा"},
            {"id": "itanagar", "nameEn": "Itanagar Capital Complex", "nameHi": "ईटानगर राजधानी", "nameMr": "ईटानगर"}
        ]
    },
    {
        "id": "assam", "nameEn": "Assam", "nameHi": "असम", "nameMr": "आसाम", "type": "State",
        "districts": [
            {"id": "baksa", "nameEn": "Baksa", "nameHi": "बाक्सा", "nameMr": "बाक्सा"},
            {"id": "barpeta", "nameEn": "Barpeta", "nameHi": "बरपेटा", "nameMr": "बरपेटा"},
            {"id": "biswanath", "nameEn": "Biswanath", "nameHi": "विश्वनाथ", "nameMr": "विश्वनाथ"},
            {"id": "bongaigaon", "nameEn": "Bongaigaon", "nameHi": "बोंगाईगांव", "nameMr": "बोंगाईगाव"},
            {"id": "cachar", "nameEn": "Cachar", "nameHi": "कछार", "nameMr": "कछार"},
            {"id": "charaideo", "nameEn": "Charaideo", "nameHi": "चराईदेव", "nameMr": "चराईदेव"},
            {"id": "chirang", "nameEn": "Chirang", "nameHi": "चिरांग", "nameMr": "चिरांग"},
            {"id": "darrang", "nameEn": "Darrang", "nameHi": "दर्रांग", "nameMr": "दर्रांग"},
            {"id": "dhemaji", "nameEn": "Dhemaji", "nameHi": "धेमाजी", "nameMr": "धेमाजी"},
            {"id": "dhubri", "nameEn": "Dhubri", "nameHi": "धुबरी", "nameMr": "धुबरी"},
            {"id": "dibrugarh", "nameEn": "Dibrugarh", "nameHi": "डिब्रूगढ़", "nameMr": "डिब्रूगढ"},
            {"id": "goalpara", "nameEn": "Goalpara", "nameHi": "गोपालपारा", "nameMr": "गोपालपारा"},
            {"id": "golaghat", "nameEn": "Golaghat", "nameHi": "गोलाघाट", "nameMr": "गोलाघाट"},
            {"id": "hailakandi", "nameEn": "Hailakandi", "nameHi": "हैलाकांडी", "nameMr": "हैलाकांडी"},
            {"id": "hojai", "nameEn": "Hojai", "nameHi": "होजाई", "nameMr": "होजाई"},
            {"id": "jorhat", "nameEn": "Jorhat", "nameHi": "जोरहाट", "nameMr": "जोरहाट"},
            {"id": "kamrup", "nameEn": "Kamrup", "nameHi": "कामरूप", "nameMr": "कामरूप"},
            {"id": "kamrup_metro", "nameEn": "Kamrup Metropolitan", "nameHi": "कामरूप मेट्रो", "nameMr": "कामरूप मेट्रो"},
            {"id": "karbi_anglong", "nameEn": "Karbi Anglong", "nameHi": "कारबी आंगलोंग", "nameMr": "कारबी आंगलोंग"},
            {"id": "karimganj", "nameEn": "Karimganj", "nameHi": "करीमगंज", "nameMr": "करीमगंज"},
            {"id": "kokrajhar", "nameEn": "Kokrajhar", "nameHi": "कोकराझार", "nameMr": "कोकराझार"},
            {"id": "lakhimpur", "nameEn": "Lakhimpur", "nameHi": "लखीमपुर", "nameMr": "लखीमपूर"},
            {"id": "majuli", "nameEn": "Majuli", "nameHi": "माजुली", "nameMr": "माजुली"},
            {"id": "morigaon", "nameEn": "Morigaon", "nameHi": "मोरीगांव", "nameMr": "मोरीगाव"},
            {"id": "nagaon", "nameEn": "Nagaon", "nameHi": "नगांव", "nameMr": "नगाव"},
            {"id": "nalbari", "nameEn": "Nalbari", "nameHi": "नलबाड़ी", "nameMr": "नलबारी"},
            {"id": "dima_hasao", "nameEn": "Dima Hasao", "nameHi": "दिमा हसाओ", "nameMr": "दिमा हसाओ"},
            {"id": "sivasagar", "nameEn": "Sivasagar", "nameHi": "शिवसागर", "nameMr": "शिवसागर"},
            {"id": "sonitpur", "nameEn": "Sonitpur", "nameHi": "शोणितपुर", "nameMr": "शोणितपूर"},
            {"id": "tinsukia", "nameEn": "Tinsukia", "nameHi": "तिनसुकिया", "nameMr": "तिनसुकिया"},
            {"id": "udalguri", "nameEn": "Udalguri", "nameHi": "उदलगुड़ी", "nameMr": "उदलगुडी"},
            {"id": "west_karbi_anglong", "nameEn": "West Karbi Anglong", "nameHi": "पश्चिम कारबी आंगलोंग", "nameMr": "पश्चिम कारबी आंगलोंग"},
            {"id": "bajali", "nameEn": "Bajali", "nameHi": "बजाली", "nameMr": "बजाली"},
            {"id": "tamulpur", "nameEn": "Tamulpur", "nameHi": "तामुलपुर", "nameMr": "तामुलपूर"}
        ]
    },
    {
        "id": "bihar", "nameEn": "Bihar", "nameHi": "बिहार", "nameMr": "बिहार", "type": "State",
        "districts": [
            {"id": "araria", "nameEn": "Araria", "nameHi": "अररिया", "nameMr": "अररिया"},
            {"id": "arwal", "nameEn": "Arwal", "nameHi": "अरवल", "nameMr": "अरवल"},
            {"id": "aurangabad_bh", "nameEn": "Aurangabad", "nameHi": "औरंगाबाद (बिहार)", "nameMr": "औरंगाबाद"},
            {"id": "banka", "nameEn": "Banka", "nameHi": "बांका", "nameMr": "बांका"},
            {"id": "begusarai", "nameEn": "Begusarai", "nameHi": "बेगूसराय", "nameMr": "बेगूसराय"},
            {"id": "bhagalpur", "nameEn": "Bhagalpur", "nameHi": "भागलपुर", "nameMr": "भागलपूर"},
            {"id": "bhojpur", "nameEn": "Bhojpur", "nameHi": "भोजपुर", "nameMr": "भोजपूर"},
            {"id": "buxar", "nameEn": "Buxar", "nameHi": "बक्सर", "nameMr": "बक्सर"},
            {"id": "darbhanga", "nameEn": "Darbhanga", "nameHi": "दरभंगा", "nameMr": "दरभंगा"},
            {"id": "gaya", "nameEn": "Gaya", "nameHi": "गया", "nameMr": "गया"},
            {"id": "gopalganj", "nameEn": "Gopalganj", "nameHi": "गोपालगंज", "nameMr": "गोपालगंज"},
            {"id": "jamui", "nameEn": "Jamui", "nameHi": "जमुई", "nameMr": "जमुई"},
            {"id": "jehanabad", "nameEn": "Jehanabad", "nameHi": "जहानाबाद", "nameMr": "जहानाबाद"},
            {"id": "kaimur", "nameEn": "Kaimur", "nameHi": "कैमूर", "nameMr": "कैमूर"},
            {"id": "katihar", "nameEn": "Katihar", "nameHi": "कटिहार", "nameMr": "कटिहार"},
            {"id": "khagaria", "nameEn": "Khagaria", "nameHi": "खगड़िया", "nameMr": "खगडिया"},
            {"id": "kishanganj", "nameEn": "Kishanganj", "nameHi": "किशनगंज", "nameMr": "किशनगंज"},
            {"id": "lakhisarai", "nameEn": "Lakhisarai", "nameHi": "लखीसराय", "nameMr": "लखीसराय"},
            {"id": "madhepura", "nameEn": "Madhepura", "nameHi": "मधेपुरा", "nameMr": "मधेपुरा"},
            {"id": "madhubani", "nameEn": "Madhubani", "nameHi": "मधुबनी", "nameMr": "मधुबनी"},
            {"id": "munger", "nameEn": "Munger", "nameHi": "मुंगेर", "nameMr": "मुंगेर"},
            {"id": "muzaffarpur", "nameEn": "Muzaffarpur", "nameHi": "मुजफ्फरपुर", "nameMr": "मुझफ्फरपूर"},
            {"id": "nalanda", "nameEn": "Nalanda", "nameHi": "नालंदा", "nameMr": "नालंदा"},
            {"id": "nawada", "nameEn": "Nawada", "nameHi": "नवादा", "nameMr": "नवादा"},
            {"id": "paschim_champaran", "nameEn": "Paschim Champaran", "nameHi": "पश्चिम चंपारण", "nameMr": "पश्चिम चंपारण"},
            {"id": "patna", "nameEn": "Patna", "nameHi": "पटना", "nameMr": "पटना"},
            {"id": "purbi_champaran", "nameEn": "Purbi Champaran", "nameHi": "पूर्वी चंपारण", "nameMr": "पूर्व चंपारण"},
            {"id": "purnia", "nameEn": "Purnia", "nameHi": "पूर्णिया", "nameMr": "पूर्णिया"},
            {"id": "rohtas", "nameEn": "Rohtas", "nameHi": "रोहतास", "nameMr": "रोहतास"},
            {"id": "saharsa", "nameEn": "Saharsa", "nameHi": "सहरसा", "nameMr": "सहरसा"},
            {"id": "samastipur", "nameEn": "Samastipur", "nameHi": "समस्तीपुर", "nameMr": "समस्तीपूर"},
            {"id": "saran", "nameEn": "Saran", "nameHi": "सारण (छपरा)", "nameMr": "सारण"},
            {"id": "sheikhpura", "nameEn": "Sheikhpura", "nameHi": "शेखपुरा", "nameMr": "शेखपुरा"},
            {"id": "sheohar", "nameEn": "Sheohar", "nameHi": "शिवहर", "nameMr": "शिवहर"},
            {"id": "sitamarhi", "nameEn": "Sitamarhi", "nameHi": "सीतामढ़ी", "nameMr": "सीतामढी"},
            {"id": "siwan", "nameEn": "Siwan", "nameHi": "सिवान", "nameMr": "सिवान"},
            {"id": "supaul", "nameEn": "Supaul", "nameHi": "सुपौल", "nameMr": "सुपौल"},
            {"id": "vaishali", "nameEn": "Vaishali", "nameHi": "वैशाली", "nameMr": "वैशाली"}
        ]
    },
    {
        "id": "chhattisgarh", "nameEn": "Chhattisgarh", "nameHi": "छत्तीसगढ़", "nameMr": "छत्तीसगड", "type": "State",
        "districts": [
            {"id": "balod", "nameEn": "Balod", "nameHi": "बालोद", "nameMr": "बालोद"},
            {"id": "baloda_bazar", "nameEn": "Baloda Bazar", "nameHi": "बलौदा बाजार", "nameMr": "बलौदा बाजार"},
            {"id": "balrampur_cg", "nameEn": "Balrampur", "nameHi": "बलरामपुर", "nameMr": "बलरामपूर"},
            {"id": "bastar", "nameEn": "Bastar", "nameHi": "बस्तर", "nameMr": "बस्तर"},
            {"id": "bemetara", "nameEn": "Bemetara", "nameHi": "बेमेतरा", "nameMr": "बेमेतरा"},
            {"id": "bijapur_cg", "nameEn": "Bijapur", "nameHi": "बीजापुर", "nameMr": "बीजापूर"},
            {"id": "bilaspur_cg", "nameEn": "Bilaspur", "nameHi": "बिलासपुर", "nameMr": "बिलासपूर"},
            {"id": "dantewada", "nameEn": "Dantewada", "nameHi": "दंतेवाड़ा", "nameMr": "दंतेवाडा"},
            {"id": "dhamtari", "nameEn": "Dhamtari", "nameHi": "धमतरी", "nameMr": "धमतरी"},
            {"id": "durg", "nameEn": "Durg", "nameHi": "दुर्ग", "nameMr": "दुर्ग"},
            {"id": "gariaband", "nameEn": "Gariaband", "nameHi": "गरियाबंद", "nameMr": "गरियाबंद"},
            {"id": "gaurela_pendra_marwahi", "nameEn": "Gaurela Pendra Marwahi", "nameHi": "गौरेला-पेंड्रा-मरवाही", "nameMr": "गौरेला पेंड्रा मरवाही"},
            {"id": "janjgir_champa", "nameEn": "Janjgir-Champa", "nameHi": "जांजगीर-चांपा", "nameMr": "जांजगीर चांपा"},
            {"id": "jashpur", "nameEn": "Jashpur", "nameHi": "जशपुर", "nameMr": "जशपूर"},
            {"id": "kabirdham", "nameEn": "Kabirdham", "nameHi": "कबीरधाम (कवर्धा)", "nameMr": "कबीरधाम"},
            {"id": "kanker", "nameEn": "Kanker", "nameHi": "कांकेर", "nameMr": "कांकेर"},
            {"id": "kondagaon", "nameEn": "Kondagaon", "nameHi": "कोंडागांव", "nameMr": "कोंडागाव"},
            {"id": "korba", "nameEn": "Korba", "nameHi": "कोरबा", "nameMr": "कोरबा"},
            {"id": "koriya", "nameEn": "Koriya", "nameHi": "कोरिया", "nameMr": "कोरिया"},
            {"id": "mahasamund", "nameEn": "Mahasamund", "nameHi": "महासमुंद", "nameMr": "महासमुंद"},
            {"id": "mungeli", "nameEn": "Mungeli", "nameHi": "मुंगेली", "nameMr": "मुंगेली"},
            {"id": "narayanpur", "nameEn": "Narayanpur", "nameHi": "नारायणपुर", "nameMr": "नारायणपूर"},
            {"id": "raigarh", "nameEn": "Raigarh", "nameHi": "रायगढ़", "nameMr": "रायगड (छत्तीसगड)"},
            {"id": "raipur", "nameEn": "Raipur", "nameHi": "रायपुर", "nameMr": "रायपूर"},
            {"id": "rajnandgaon", "nameEn": "Rajnandgaon", "nameHi": "राजनांदगांव", "nameMr": "राजनांदगाव"},
            {"id": "sukma", "nameEn": "Sukma", "nameHi": "सुकमा", "nameMr": "सुकमा"},
            {"id": "surajpur", "nameEn": "Surajpur", "nameHi": "सूरजपुर", "nameMr": "सूरजपूर"},
            {"id": "surguja", "nameEn": "Surguja", "nameHi": "सरगुजा", "nameMr": "सरगुजा"},
            {"id": "mcb", "nameEn": "Manendragarh-Chirmiri-Bharatpur", "nameHi": "मनेन्द्रगढ़-चिरमिरी-भरतपुर", "nameMr": "मनेन्द्रगड-चिरमिरी-भरतपूर"},
            {"id": "sakthi", "nameEn": "Sakti", "nameHi": "सक्ती", "nameMr": "सक्ती"}
        ]
    },
    {
        "id": "delhi", "nameEn": "Delhi (NCT)", "nameHi": "दिल्ली (राष्ट्रीय राजधानी क्षेत्र)", "nameMr": "दिल्ली (एनसीटी)", "type": "Union Territory",
        "districts": [
            {"id": "central_delhi", "nameEn": "Central Delhi", "nameHi": "मध्य दिल्ली", "nameMr": "मध्य दिल्ली"},
            {"id": "east_delhi", "nameEn": "East Delhi", "nameHi": "पूर्वी दिल्ली", "nameMr": "पूर्व दिल्ली"},
            {"id": "new_delhi", "nameEn": "New Delhi", "nameHi": "नई दिल्ली", "nameMr": "नवी दिल्ली"},
            {"id": "north_delhi", "nameEn": "North Delhi", "nameHi": "उत्तरी दिल्ली", "nameMr": "उत्तर दिल्ली"},
            {"id": "north_east_delhi", "nameEn": "North East Delhi", "nameHi": "उत्तर पूर्वी दिल्ली", "nameMr": "ईशान्य दिल्ली"},
            {"id": "north_west_delhi", "nameEn": "North West Delhi", "nameHi": "उत्तर पश्चिमी दिल्ली", "nameMr": "वायव्य दिल्ली"},
            {"id": "shahdara", "nameEn": "Shahdara", "nameHi": "शाहदरा", "nameMr": "शाहदरा"},
            {"id": "south_delhi", "nameEn": "South Delhi", "nameHi": "दक्षिणी दिल्ली", "nameMr": "दक्षिण दिल्ली"},
            {"id": "south_east_delhi", "nameEn": "South East Delhi", "nameHi": "दक्षिण पूर्वी दिल्ली", "nameMr": "आग्नेय दिल्ली"},
            {"id": "south_west_delhi", "nameEn": "South West Delhi", "nameHi": "दक्षिण पश्चिमी दिल्ली", "nameMr": "नैऋत्य दिल्ली"},
            {"id": "west_delhi", "nameEn": "West Delhi", "nameHi": "पश्चिमी दिल्ली", "nameMr": "पश्चिम दिल्ली"}
        ]
    },
    {
        "id": "gujarat", "nameEn": "Gujarat", "nameHi": "गुजरात", "nameMr": "गुजरात", "type": "State",
        "districts": [
            {"id": "ahmedabad", "nameEn": "Ahmedabad", "nameHi": "अहमदाबाद", "nameMr": "अहमदाबाद"},
            {"id": "amreli", "nameEn": "Amreli", "nameHi": "अमरेली", "nameMr": "अमरेली"},
            {"id": "anand", "nameEn": "Anand", "nameHi": "आणंद", "nameMr": "आणंद"},
            {"id": "aravalli", "nameEn": "Aravalli", "nameHi": "अरावली", "nameMr": "अरावली"},
            {"id": "banaskantha", "nameEn": "Banaskantha", "nameHi": "बनासकांठा", "nameMr": "बनासकांठा"},
            {"id": "bharuch", "nameEn": "Bharuch", "nameHi": "भरूच", "nameMr": "भरूच"},
            {"id": "bhavnagar", "nameEn": "Bhavnagar", "nameHi": "भावनगर", "nameMr": "भावनगर"},
            {"id": "botad", "nameEn": "Botad", "nameHi": "बोटाद", "nameMr": "बोटाद"},
            {"id": "chhota_udepur", "nameEn": "Chhota Udepur", "nameHi": "छोटा उदयपुर", "nameMr": "छोटा उदेपूर"},
            {"id": "dahod", "nameEn": "Dahod", "nameHi": "दाहोद", "nameMr": "दाहोद"},
            {"id": "dang", "nameEn": "Dang", "nameHi": "डांग", "nameMr": "डांग"},
            {"id": "devbhoomi_dwarka", "nameEn": "Devbhoomi Dwarka", "nameHi": "देवभूमि द्वारका", "nameMr": "देवभूमी द्वारका"},
            {"id": "gandhinagar", "nameEn": "Gandhinagar", "nameHi": "गांधीनगर", "nameMr": "गांधीनगर"},
            {"id": "gir_somnath", "nameEn": "Gir Somnath", "nameHi": "गीर सोमनाथ", "nameMr": "गीर सोमनाथ"},
            {"id": "jamnagar", "nameEn": "Jamnagar", "nameHi": "जामनगर", "nameMr": "जामनगर"},
            {"id": "junagadh", "nameEn": "Junagadh", "nameHi": "जूनागढ़", "nameMr": "जुनागढ"},
            {"id": "kheda", "nameEn": "Kheda", "nameHi": "खेड़ा", "nameMr": "खेडा"},
            {"id": "kutch", "nameEn": "Kutch", "nameHi": "कच्छ", "nameMr": "कच्छ"},
            {"id": "mahisagar", "nameEn": "Mahisagar", "nameHi": "महीसागर", "nameMr": "महीसागर"},
            {"id": "mehsana", "nameEn": "Mehsana", "nameHi": "मेहसाणा", "nameMr": "मेहसाणा"},
            {"id": "morbi", "nameEn": "Morbi", "nameHi": "मोरबी", "nameMr": "मोरबी"},
            {"id": "narmada", "nameEn": "Narmada", "nameHi": "नर्मदा", "nameMr": "नर्मदा"},
            {"id": "navsari", "nameEn": "Navsari", "nameHi": "नवसारी", "nameMr": "नवसारी"},
            {"id": "panchmahal", "nameEn": "Panchmahal", "nameHi": "पंचमहल", "nameMr": "पंचमहाल"},
            {"id": "patan", "nameEn": "Patan", "nameHi": "पाटन", "nameMr": "पाटन"},
            {"id": "porbandar", "nameEn": "Porbandar", "nameHi": "पोरबंदर", "nameMr": "पोरबंदर"},
            {"id": "rajkot", "nameEn": "Rajkot", "nameHi": "राजकोट", "nameMr": "राजकोट"},
            {"id": "sabarkantha", "nameEn": "Sabarkantha", "nameHi": "साबरकांठा", "nameMr": "साबरकांठा"},
            {"id": "surat", "nameEn": "Surat", "nameHi": "सूरत", "nameMr": "सूरत"},
            {"id": "surendranagar", "nameEn": "Surendranagar", "nameHi": "सुरेंद्रनगर", "nameMr": "सुरेंद्रनगर"},
            {"id": "tapi", "nameEn": "Tapi", "nameHi": "तापी", "nameMr": "तापी"},
            {"id": "vadodara", "nameEn": "Vadodara", "nameHi": "वडोदरा", "nameMr": "वडोदरा"},
            {"id": "valsad", "nameEn": "Valsad", "nameHi": "वलसाड", "nameMr": "वलसाड"}
        ]
    },
    {
        "id": "haryana", "nameEn": "Haryana", "nameHi": "हरियाणा", "nameMr": "हरियाणा", "type": "State",
        "districts": [
            {"id": "ambala", "nameEn": "Ambala", "nameHi": "अंबाला", "nameMr": "अंबाला"},
            {"id": "bhiwani", "nameEn": "Bhiwani", "nameHi": "भिवानी", "nameMr": "भिवानी"},
            {"id": "charkhi_dadri", "nameEn": "Charkhi Dadri", "nameHi": "चरखी दादरी", "nameMr": "चरखी दादरी"},
            {"id": "faridabad", "nameEn": "Faridabad", "nameHi": "फरीदाबाद", "nameMr": "फरीदाबाद"},
            {"id": "fatehabad", "nameEn": "Fatehabad", "nameHi": "फतेहाबाद", "nameMr": "फतेहाबाद"},
            {"id": "gurugram", "nameEn": "Gurugram", "nameHi": "गुरुग्राम", "nameMr": "गुरुग्राम"},
            {"id": "hisar", "nameEn": "Hisar", "nameHi": "हिसार", "nameMr": "हिसार"},
            {"id": "jhajjar", "nameEn": "Jhajjar", "nameHi": "झज्जर", "nameMr": "झज्जर"},
            {"id": "jind", "nameEn": "Jind", "nameHi": "जींद", "nameMr": "जींद"},
            {"id": "kaithal", "nameEn": "Kaithal", "nameHi": "कैथल", "nameMr": "कैथल"},
            {"id": "karnal", "nameEn": "Karnal", "nameHi": "करनाल", "nameMr": "करनाल"},
            {"id": "kurukshetra", "nameEn": "Kurukshetra", "nameHi": "कुरुक्षेत्र", "nameMr": "कुरुक्षेत्र"},
            {"id": "mahendragarh", "nameEn": "Mahendragarh", "nameHi": "महेंद्रगढ़", "nameMr": "महेंद्रगड"},
            {"id": "nuh", "nameEn": "Nuh", "nameHi": "नूह (मेवात)", "nameMr": "नूह"},
            {"id": "palwal", "nameEn": "Palwal", "nameHi": "पलवल", "nameMr": "पलवल"},
            {"id": "panchkula", "nameEn": "Panchkula", "nameHi": "पंचकुला", "nameMr": "पंचकुला"},
            {"id": "panipat", "nameEn": "Panipat", "nameHi": "पानीपत", "nameMr": "पानीपत"},
            {"id": "rewari", "nameEn": "Rewari", "nameHi": "रेवाड़ी", "nameMr": "रेवाडी"},
            {"id": "rohtak", "nameEn": "Rohtak", "nameHi": "रोहतक", "nameMr": "रोहतक"},
            {"id": "sirsa", "nameEn": "Sirsa", "nameHi": "सिरसा", "nameMr": "सिरसा"},
            {"id": "sonipat", "nameEn": "Sonipat", "nameHi": "सोनीपत", "nameMr": "सोनीपत"},
            {"id": "yamunanagar", "nameEn": "Yamunanagar", "nameHi": "यमुनानगर", "nameMr": "यमुनानगर"}
        ]
    },
    {
        "id": "karnataka", "nameEn": "Karnataka", "nameHi": "कर्नाटक", "nameMr": "कर्नाटक", "type": "State",
        "districts": [
            {"id": "bagalkot", "nameEn": "Bagalkot", "nameHi": "बागलकोट", "nameMr": "बागलकोट"},
            {"id": "ballari", "nameEn": "Ballari", "nameHi": "बल्लारी (बेल्लारी)", "nameMr": "बल्लारी"},
            {"id": "belagavi", "nameEn": "Belagavi", "nameHi": "बेलगाम (बेलगावी)", "nameMr": "बेळगाव"},
            {"id": "bengaluru_rural", "nameEn": "Bengaluru Rural", "nameHi": "बेंगलुरु ग्रामीण", "nameMr": "बंगळुरू ग्रामीण"},
            {"id": "bengaluru_urban", "nameEn": "Bengaluru Urban", "nameHi": "बेंगलुरु शहरी", "nameMr": "बंगळुरू शहर"},
            {"id": "bidar", "nameEn": "Bidar", "nameHi": "बीदर", "nameMr": "बीदर"},
            {"id": "chamarajanagar", "nameEn": "Chamarajanagar", "nameHi": "चामराजनगर", "nameMr": "चामराजनगर"},
            {"id": "chikkaballapur", "nameEn": "Chikkaballapur", "nameHi": "चिक्काबल्लापुर", "nameMr": "चिक्काबल्लापूर"},
            {"id": "chikkamagaluru", "nameEn": "Chikkamagaluru", "nameHi": "चिक्कमगलुरु", "nameMr": "चिक्कमगळुरू"},
            {"id": "chitradurga", "nameEn": "Chitradurga", "nameHi": "चित्रदुर्ग", "nameMr": "चित्रदुर्ग"},
            {"id": "dakshina_kannada", "nameEn": "Dakshina Kannada", "nameHi": "दक्षिण कन्नड़ (मंगलुरु)", "nameMr": "दक्षिण कन्नड"},
            {"id": "davanagere", "nameEn": "Davanagere", "nameHi": "दावणगेरे", "nameMr": "दावणगेरे"},
            {"id": "dharwad", "nameEn": "Dharwad", "nameHi": "धारवाड़", "nameMr": "धारवाड"},
            {"id": "gadag", "nameEn": "Gadag", "nameHi": "गदग", "nameMr": "गदग"},
            {"id": "hassan", "nameEn": "Hassan", "nameHi": "हासन", "nameMr": "हासन"},
            {"id": "haveri", "nameEn": "Haveri", "nameHi": "हावेरी", "nameMr": "हावेरी"},
            {"id": "kalaburagi", "nameEn": "Kalaburagi", "nameHi": "गुलबर्गा (कलबुर्गी)", "nameMr": "कलबुर्गी"},
            {"id": "kodagu", "nameEn": "Kodagu", "nameHi": "कोडागू (कुर्ग)", "nameMr": "कोडागू"},
            {"id": "kolar", "nameEn": "Kolar", "nameHi": "कोलार", "nameMr": "कोलार"},
            {"id": "koppal", "nameEn": "Koppal", "nameHi": "कोप्पल", "nameMr": "कोप्पल"},
            {"id": "mandya", "nameEn": "Mandya", "nameHi": "मंड्या", "nameMr": "मांड्या"},
            {"id": "mysuru", "nameEn": "Mysuru", "nameHi": "मैसूर (मैसूरु)", "nameMr": "म्हैसूर"},
            {"id": "raichur", "nameEn": "Raichur", "nameHi": "रायचूर", "nameMr": "रायचूर"},
            {"id": "ramanagara", "nameEn": "Ramanagara", "nameHi": "रामनगर", "nameMr": "रामनगर"},
            {"id": "shivamogga", "nameEn": "Shivamogga", "nameHi": "शिमोगा (शिवमोग्गा)", "nameMr": "शिवमोग्गा"},
            {"id": "tumakuru", "nameEn": "Tumakuru", "nameHi": "तुमकुर (तुमकुरु)", "nameMr": "तुमकुरू"},
            {"id": "udupi", "nameEn": "Udupi", "nameHi": "उडुपी", "nameMr": "उडुपी"},
            {"id": "uttara_kannada", "nameEn": "Uttara Kannada", "nameHi": "उत्तर कन्नड़ (कारवार)", "nameMr": "उत्तर कन्नड"},
            {"id": "vijayanagara", "nameEn": "Vijayanagara", "nameHi": "विजयनगर", "nameMr": "विजयनगर"},
            {"id": "vijayapura", "nameEn": "Vijayapura", "nameHi": "बीजापुर (विजयपुरा)", "nameMr": "विजयपूर"},
            {"id": "yadgir", "nameEn": "Yadgir", "nameHi": "यादगीर", "nameMr": "यादगीर"}
        ]
    },
    {
        "id": "kerala", "nameEn": "Kerala", "nameHi": "केरल", "nameMr": "केरळ", "type": "State",
        "districts": [
            {"id": "alappuzha", "nameEn": "Alappuzha", "nameHi": "अलप्पुझा (अलेप्पी)", "nameMr": "अलप्पुझा"},
            {"id": "ernakulam", "nameEn": "Ernakulam", "nameHi": "एर्नाकुलम (कोच्चि)", "nameMr": "कोची"},
            {"id": "idukki", "nameEn": "Idukki", "nameHi": "इदुक्की", "nameMr": "इदुक्की"},
            {"id": "kannur", "nameEn": "Kannur", "nameHi": "कन्नूर", "nameMr": "कन्नूर"},
            {"id": "kasaragod", "nameEn": "Kasaragod", "nameHi": "कासरगोड", "nameMr": "कासरगोड"},
            {"id": "kollam", "nameEn": "Kollam", "nameHi": "कोल्लम (क्विलोन)", "nameMr": "कोल्लम"},
            {"id": "kottayam", "nameEn": "Kottayam", "nameHi": "कोट्टायम", "nameMr": "कोट्टायम"},
            {"id": "kozhikode", "nameEn": "Kozhikode", "nameHi": "कोझिकोड (कालीकट)", "nameMr": "कोझिकोड"},
            {"id": "malappuram", "nameEn": "Malappuram", "nameHi": "मलप्पुरम", "nameMr": "मलप्पुरम"},
            {"id": "palakkad", "nameEn": "Palakkad", "nameHi": "पालक्कड़ (पालघाट)", "nameMr": "पालक्काड"},
            {"id": "pathanamthitta", "nameEn": "Pathanamthitta", "nameHi": "पथानामथिट्टा", "nameMr": "पथानामथिट्टा"},
            {"id": "thiruvananthapuram", "nameEn": "Thiruvananthapuram", "nameHi": "तिरुवनंतपुरम (त्रिवेंद्रम)", "nameMr": "तिरुअनंतपुरम"},
            {"id": "thrissur", "nameEn": "Thrissur", "nameHi": "त्रिशूर", "nameMr": "त्रिशूर"},
            {"id": "wayanad", "nameEn": "Wayanad", "nameHi": "वायनाड", "nameMr": "वायनाड"}
        ]
    },
    {
        "id": "madhya_pradesh", "nameEn": "Madhya Pradesh", "nameHi": "मध्य प्रदेश", "nameMr": "मध्य प्रदेश", "type": "State",
        "districts": [
            {"id": "agar_malwa", "nameEn": "Agar Malwa", "nameHi": "आगर मालवा", "nameMr": "आगर मालवा"},
            {"id": "alirajpur", "nameEn": "Alirajpur", "nameHi": "अलीराजपुर", "nameMr": "अलिराजपूर"},
            {"id": "anuppur", "nameEn": "Anuppur", "nameHi": "अनूपपुर", "nameMr": "अनूपपूर"},
            {"id": "ashoknagar", "nameEn": "Ashoknagar", "nameHi": "अशोकनगर", "nameMr": "अशोकनगर"},
            {"id": "balaghat", "nameEn": "Balaghat", "nameHi": "बालाघाट", "nameMr": "बालाघाट"},
            {"id": "barwani", "nameEn": "Barwani", "nameHi": "बड़वानी", "nameMr": "बडवानी"},
            {"id": "betul", "nameEn": "Betul", "nameHi": "बैतूल", "nameMr": "बैतूल"},
            {"id": "bhind", "nameEn": "Bhind", "nameHi": "भिंड", "nameMr": "भिंड"},
            {"id": "bhopal", "nameEn": "Bhopal", "nameHi": "भोपाल", "nameMr": "भोपाळ"},
            {"id": "burhanpur", "nameEn": "Burhanpur", "nameHi": "बुरहानपुर", "nameMr": "बुरहानपूर"},
            {"id": "chhatarpur", "nameEn": "Chhatarpur", "nameHi": "छतरपुर", "nameMr": "छतरपूर"},
            {"id": "chhindwara", "nameEn": "Chhindwara", "nameHi": "छिंदवाड़ा", "nameMr": "छिंदवाडा"},
            {"id": "damoh", "nameEn": "Damoh", "nameHi": "दमोह", "nameMr": "दमोह"},
            {"id": "datia", "nameEn": "Datia", "nameHi": "दतिया", "nameMr": "दतिया"},
            {"id": "dewas", "nameEn": "Dewas", "nameHi": "देवास", "nameMr": "देवास"},
            {"id": "dhar", "nameEn": "Dhar", "nameHi": "धार", "nameMr": "धार"},
            {"id": "dindori", "nameEn": "Dindori", "nameHi": "डिंडौरी", "nameMr": "डिंडोरी"},
            {"id": "guna", "nameEn": "Guna", "nameHi": "गुना", "nameMr": "गुना"},
            {"id": "gwalior", "nameEn": "Gwalior", "nameHi": "ग्वालियर", "nameMr": "ग्वाल्हेर"},
            {"id": "harda", "nameEn": "Harda", "nameHi": "हरदा", "nameMr": "हरदा"},
            {"id": "indore", "nameEn": "Indore", "nameHi": "इंदौर", "nameMr": "इंदूर"},
            {"id": "jabalpur", "nameEn": "Jabalpur", "nameHi": "जबलपुर", "nameMr": "जबलपूर"},
            {"id": "jhabua", "nameEn": "Jhabua", "nameHi": "झाबुआ", "nameMr": "झाबुआ"},
            {"id": "katni", "nameEn": "Katni", "nameHi": "कटनी", "nameMr": "कटनी"},
            {"id": "khandwa", "nameEn": "Khandwa", "nameHi": "खंडवा", "nameMr": "खंडवा"},
            {"id": "khargone", "nameEn": "Khargone", "nameHi": "खरगोन", "nameMr": "खरगोन"},
            {"id": "mandla", "nameEn": "Mandla", "nameHi": "मंडला", "nameMr": "मंडला"},
            {"id": "mandsaur", "nameEn": "Mandsaur", "nameHi": "मंदसौर", "nameMr": "मंदसौर"},
            {"id": "morena", "nameEn": "Morena", "nameHi": "मुरैना", "nameMr": "मुरैना"},
            {"id": "narsinghpur", "nameEn": "Narsinghpur", "nameHi": "नरसिंहपुर", "nameMr": "नरसिंगपूर"},
            {"id": "neemuch", "nameEn": "Neemuch", "nameHi": "नीमच", "nameMr": "नीमच"},
            {"id": "panna", "nameEn": "Panna", "nameHi": "पन्ना", "nameMr": "पन्ना"},
            {"id": "raisen", "nameEn": "Raisen", "nameHi": "रायसेन", "nameMr": "रायसेन"},
            {"id": "rajgarh", "nameEn": "Rajgarh", "nameHi": "राजगढ़", "nameMr": "राजगड"},
            {"id": "ratlam", "nameEn": "Ratlam", "nameHi": "रतलाम", "nameMr": "रतलाम"},
            {"id": "rewa", "nameEn": "Rewa", "nameHi": "रीवा", "nameMr": "रीवा"},
            {"id": "sagar", "nameEn": "Sagar", "nameHi": "सागर", "nameMr": "सागर"},
            {"id": "satna", "nameEn": "Satna", "nameHi": "सतना", "nameMr": "सतना"},
            {"id": "sehore", "nameEn": "Sehore", "nameHi": "सीहोर", "nameMr": "सीहोर"},
            {"id": "seoni", "nameEn": "Seoni", "nameHi": "सिवनी", "nameMr": "सिवनी"},
            {"id": "shahdol", "nameEn": "Shahdol", "nameHi": "शहडोल", "nameMr": "शहडोल"},
            {"id": "shajapur", "nameEn": "Shajapur", "nameHi": "शाजापुर", "nameMr": "शाजापूर"},
            {"id": "sheopur", "nameEn": "Sheopur", "nameHi": "श्योपुर", "nameMr": "श्योपूर"},
            {"id": "shivpuri", "nameEn": "Shivpuri", "nameHi": "शिवपुरी", "nameMr": "शिवपुरी"},
            {"id": "sidhi", "nameEn": "Sidhi", "nameHi": "सीधी", "nameMr": "सीधी"},
            {"id": "singrauli", "nameEn": "Singrauli", "nameHi": "सिंगरौली", "nameMr": "सिंगरौली"},
            {"id": "tikamgarh", "nameEn": "Tikamgarh", "nameHi": "टीकमगढ़", "nameMr": "टीकमगड"},
            {"id": "ujjain", "nameEn": "Ujjain", "nameHi": "उज्जैन", "nameMr": "उज्जैन"},
            {"id": "umaria", "nameEn": "Umaria", "nameHi": "उमरिया", "nameMr": "उमरिया"},
            {"id": "vidisha", "nameEn": "Vidisha", "nameHi": "विदिशा", "nameMr": "विदिशा"},
            {"id": "mauganj", "nameEn": "Mauganj", "nameHi": "मऊगंज", "nameMr": "मऊगंज"},
            {"id": "maihar", "nameEn": "Maihar", "nameHi": "मैहर", "nameMr": "मैहर"},
            {"id": "pandhurna", "nameEn": "Pandhurna", "nameHi": "पांढुर्णा", "nameMr": "पांढुर्णा"}
        ]
    },
    {
        "id": "maharashtra", "nameEn": "Maharashtra", "nameHi": "महाराष्ट्र", "nameMr": "महाराष्ट्र", "type": "State",
        "districts": [
            {"id": "ahmednagar", "nameEn": "Ahilyanagar (Ahmednagar)", "nameHi": "अहिल्यानगर (अहमदनगर)", "nameMr": "अहिल्यानगर"},
            {"id": "akola", "nameEn": "Akola", "nameHi": "अकोला", "nameMr": "अकोला"},
            {"id": "amravati", "nameEn": "Amravati", "nameHi": "अमरावती", "nameMr": "अमरावती"},
            {"id": "aurangabad", "nameEn": "Chhatrapati Sambhajinagar", "nameHi": "छत्रपति संभाजीनगर (औरंगाबाद)", "nameMr": "छत्रपती संभाजीनगर"},
            {"id": "beed", "nameEn": "Beed", "nameHi": "बीड", "nameMr": "बीड"},
            {"id": "bhandara", "nameEn": "Bhandara", "nameHi": "भंडारा", "nameMr": "भंडारा"},
            {"id": "buldhana", "nameEn": "Buldhana", "nameHi": "बुलढाणा", "nameMr": "बुलढाणा"},
            {"id": "chandrapur", "nameEn": "Chandrapur", "nameHi": "चंद्रपुर", "nameMr": "चंद्रपूर"},
            {"id": "dhule", "nameEn": "Dhule", "nameHi": "धुले", "nameMr": "धुळे"},
            {"id": "gadchiroli", "nameEn": "Gadchiroli", "nameHi": "गडचिरोली", "nameMr": "गडचिरोली"},
            {"id": "gondia", "nameEn": "Gondia", "nameHi": "गोंदिया", "nameMr": "गोंदिया"},
            {"id": "hingoli", "nameEn": "Hingoli", "nameHi": "हिंगोली", "nameMr": "हिंगोली"},
            {"id": "jalgaon", "nameEn": "Jalgaon", "nameHi": "जलगांव", "nameMr": "जळगाव"},
            {"id": "jalna", "nameEn": "Jalna", "nameHi": "जालना", "nameMr": "जालना"},
            {"id": "kolhapur", "nameEn": "Kolhapur", "nameHi": "कोल्हापुर", "nameMr": "कोल्हापूर"},
            {"id": "latur", "nameEn": "Latur", "nameHi": "लातूर", "nameMr": "लातूर"},
            {"id": "mumbai_city", "nameEn": "Mumbai City", "nameHi": "मुंबई शहर", "nameMr": "मुंबई शहर"},
            {"id": "mumbai_suburban", "nameEn": "Mumbai Suburban", "nameHi": "मुंबई उपनगरीय", "nameMr": "मुंबई उपनगर"},
            {"id": "nagpur", "nameEn": "Nagpur", "nameHi": "नागपुर", "nameMr": "नागपूर"},
            {"id": "nanded", "nameEn": "Nanded", "nameHi": "नांदेड़", "nameMr": "नांदेड"},
            {"id": "nandurbar", "nameEn": "Nandurbar", "nameHi": "नंदुरबार", "nameMr": "नंदुरबार"},
            {"id": "nashik", "nameEn": "Nashik", "nameHi": "नाशिक", "nameMr": "नाशिक"},
            {"id": "osmanabad", "nameEn": "Dharashiv (Osmanabad)", "nameHi": "धाराशिव (उस्मानाबाद)", "nameMr": "धाराशिव"},
            {"id": "palghar", "nameEn": "Palghar", "nameHi": "पालघर", "nameMr": "पालघर"},
            {"id": "parbhani", "nameEn": "Parbhani", "nameHi": "परभणी", "nameMr": "परभणी"},
            {"id": "pune", "nameEn": "Pune", "nameHi": "पुणे", "nameMr": "पुणे"},
            {"id": "raigad", "nameEn": "Raigad", "nameHi": "रायगढ़ (महाराष्ट्र)", "nameMr": "रायगड"},
            {"id": "ratnagiri", "nameEn": "Ratnagiri", "nameHi": "रत्नागिरी", "nameMr": "रत्नागिरी"},
            {"id": "sangli", "nameEn": "Sangli", "nameHi": "सांगली", "nameMr": "सांगली"},
            {"id": "satara", "nameEn": "Satara", "nameHi": "सतारा", "nameMr": "सातारा"},
            {"id": "sindhudurg", "nameEn": "Sindhudurg", "nameHi": "सिंधुदुर्ग", "nameMr": "सिंधुदुर्ग"},
            {"id": "solapur", "nameEn": "Solapur", "nameHi": "सोलापुर", "nameMr": "सोलापूर"},
            {"id": "thane", "nameEn": "Thane", "nameHi": "ठाणे", "nameMr": "ठाणे"},
            {"id": "wardha", "nameEn": "Wardha", "nameHi": "वर्धा", "nameMr": "वर्धा"},
            {"id": "washim", "nameEn": "Washim", "nameHi": "वाशिम", "nameMr": "वाशीम"},
            {"id": "yavatmal", "nameEn": "Yavatmal", "nameHi": "यवतमाल", "nameMr": "यवतमाळ"}
        ]
    },
    {
        "id": "odisha", "nameEn": "Odisha", "nameHi": "ओडिशा", "nameMr": "ओडिशा", "type": "State",
        "districts": [
            {"id": "angul", "nameEn": "Angul", "nameHi": "अनुगुल", "nameMr": "अनुगुल"},
            {"id": "balangir", "nameEn": "Balangir", "nameHi": "बलांगिर", "nameMr": "बलांगिर"},
            {"id": "balasore", "nameEn": "Balasore (Baleswar)", "nameHi": "बालेश्वर", "nameMr": "बालेश्वर"},
            {"id": "bargarh", "nameEn": "Bargarh", "nameHi": "बरगढ़", "nameMr": "बरगड"},
            {"id": "bhadrak", "nameEn": "Bhadrak", "nameHi": "भद्रक", "nameMr": "भद्रक"},
            {"id": "boudh", "nameEn": "Boudh", "nameHi": "बौध", "nameMr": "बौध"},
            {"id": "cuttack", "nameEn": "Cuttack", "nameHi": "कटक", "nameMr": "कटक"},
            {"id": "deogarh_or", "nameEn": "Deogarh", "nameHi": "देवगढ़", "nameMr": "देवगड"},
            {"id": "dhenkanal", "nameEn": "Dhenkanal", "nameHi": "ढेंकानाल", "nameMr": "ढेंकानाल"},
            {"id": "gajapati", "nameEn": "Gajapati", "nameHi": "गजपति", "nameMr": "गजपती"},
            {"id": "ganjam", "nameEn": "Ganjam", "nameHi": "गंजाम", "nameMr": "गंजाम"},
            {"id": "jagatsinghpur", "nameEn": "Jagatsinghpur", "nameHi": "जगतसिंहपुर", "nameMr": "जगतसिंहपूर"},
            {"id": "jajpur", "nameEn": "Jajpur", "nameHi": "जाजपुर", "nameMr": "जाजपूर"},
            {"id": "jharsuguda", "nameEn": "Jharsuguda", "nameHi": "झारसुगुड़ा", "nameMr": "झारसुगुडा"},
            {"id": "kalahandi", "nameEn": "Kalahandi", "nameHi": "कालाहांडी", "nameMr": "कालाहांडी"},
            {"id": "kandhamal", "nameEn": "Kandhamal", "nameHi": "कंधमाल", "nameMr": "कंधमाल"},
            {"id": "kendrapara", "nameEn": "Kendrapara", "nameHi": "केंद्रपाड़ा", "nameMr": "केंद्रपाडा"},
            {"id": "kendujhar", "nameEn": "Kendujhar (Keonjhar)", "nameHi": "केंदुझार", "nameMr": "केंदुझार"},
            {"id": "khordha", "nameEn": "Khordha (Bhubaneswar)", "nameHi": "खोर्धा (भुवनेश्वर)", "nameMr": "खोर्धा"},
            {"id": "koraput", "nameEn": "Koraput", "nameHi": "कोरापुट", "nameMr": "कोरापुट"},
            {"id": "malkangiri", "nameEn": "Malkangiri", "nameHi": "मलकानगिरी", "nameMr": "मलकानगिरी"},
            {"id": "mayurbhanj", "nameEn": "Mayurbhanj", "nameHi": "मयूरभंज", "nameMr": "मयूरभंज"},
            {"id": "nabarangpur", "nameEn": "Nabarangpur", "nameHi": "नबरंगपुर", "nameMr": "नबरंगपूर"},
            {"id": "nayagarh", "nameEn": "Nayagarh", "nameHi": "नयागढ़", "nameMr": "नयागड"},
            {"id": "nuapada", "nameEn": "Nuapada", "nameHi": "नुआपाड़ा", "nameMr": "नुआपाडा"},
            {"id": "puri", "nameEn": "Puri", "nameHi": "पुरी", "nameMr": "पुरी"},
            {"id": "rayagada", "nameEn": "Rayagada", "nameHi": "रायगड़ा", "nameMr": "रायगडा"},
            {"id": "sambalpur", "nameEn": "Sambalpur", "nameHi": "संबलपुर", "nameMr": "संबलपूर"},
            {"id": "subarnapur", "nameEn": "Subarnapur (Sonepur)", "nameHi": "सुवर्णपुर", "nameMr": "सुवर्णपूर"},
            {"id": "sundargarh", "nameEn": "Sundargarh", "nameHi": "सुंदरगढ़", "nameMr": "सुंदरगड"}
        ]
    },
    {
        "id": "punjab", "nameEn": "Punjab", "nameHi": "पंजाब", "nameMr": "पंजाब", "type": "State",
        "districts": [
            {"id": "amritsar", "nameEn": "Amritsar", "nameHi": "अमृतसर", "nameMr": "अमृतसर"},
            {"id": "barnala", "nameEn": "Barnala", "nameHi": "बरनाला", "nameMr": "बरनाला"},
            {"id": "bathinda", "nameEn": "Bathinda", "nameHi": "बठिंडा", "nameMr": "बठिंडा"},
            {"id": "faridkot", "nameEn": "Faridkot", "nameHi": "फरीदकोट", "nameMr": "फरीदकोट"},
            {"id": "fatehgarh_sahib", "nameEn": "Fatehgarh Sahib", "nameHi": "फतेहगढ़ साहिब", "nameMr": "फतेहगढ साहिब"},
            {"id": "fazilka", "nameEn": "Fazilka", "nameHi": "फाजिल्का", "nameMr": "फाजिल्का"},
            {"id": "firozpur", "nameEn": "Firozpur", "nameHi": "फिरोजपुर", "nameMr": "फिरोजपूर"},
            {"id": "gurdaspur", "nameEn": "Gurdaspur", "nameHi": "गुरदासपुर", "nameMr": "गुरदासपूर"},
            {"id": "hoshiarpur", "nameEn": "Hoshiarpur", "nameHi": "होशियारपुर", "nameMr": "होशियारपूर"},
            {"id": "jalandhar", "nameEn": "Jalandhar", "nameHi": "जालंधर", "nameMr": "जालंधर"},
            {"id": "kapurthala", "nameEn": "Kapurthala", "nameHi": "कपूरथला", "nameMr": "कपूरथला"},
            {"id": "ludhiana", "nameEn": "Ludhiana", "nameHi": "लुधियाना", "nameMr": "लुधियाना"},
            {"id": "malerkotla", "nameEn": "Malerkotla", "nameHi": "मलेरकोटला", "nameMr": "मलेरकोटला"},
            {"id": "mansa", "nameEn": "Mansa", "nameHi": "मानसा", "nameMr": "मानसा"},
            {"id": "moga", "nameEn": "Moga", "nameHi": "मोगा", "nameMr": "मोगा"},
            {"id": "pathankot", "nameEn": "Pathankot", "nameHi": "पठानकोट", "nameMr": "पठानकोट"},
            {"id": "patiala", "nameEn": "Patiala", "nameHi": "पटियाला", "nameMr": "पटियाला"},
            {"id": "rupnagar", "nameEn": "Rupnagar (Ropar)", "nameHi": "रूपनगर", "nameMr": "रूपनगर"},
            {"id": "sas_nagar", "nameEn": "SAS Nagar (Mohali)", "nameHi": "मोहाली (एसएएस नगर)", "nameMr": "मोहाली"},
            {"id": "sangrur", "nameEn": "Sangrur", "nameHi": "संगरूर", "nameMr": "संगरूर"},
            {"id": "sbs_nagar", "nameEn": "SBS Nagar (Nawanshahr)", "nameHi": "नवांशहर (एसबीएस नगर)", "nameMr": "नवांशहर"},
            {"id": "sri_muktsar_sahib", "nameEn": "Sri Muktsar Sahib", "nameHi": "श्री मुक्तसर साहिब", "nameMr": "श्री मुक्तसर साहिब"},
            {"id": "tarn_taran", "nameEn": "Tarn Taran", "nameHi": "तरनतारन", "nameMr": "तरनतारन"}
        ]
    },
    {
        "id": "rajasthan", "nameEn": "Rajasthan", "nameHi": "राजस्थान", "nameMr": "राजस्थान", "type": "State",
        "districts": [
            {"id": "ajmer", "nameEn": "Ajmer", "nameHi": "अजमेर", "nameMr": "अजमेर"},
            {"id": "alwar", "nameEn": "Alwar", "nameHi": "अलवर", "nameMr": "अलवर"},
            {"id": "banswara", "nameEn": "Banswara", "nameHi": "बांसवाड़ा", "nameMr": "बांसवाडा"},
            {"id": "baran", "nameEn": "Baran", "nameHi": "बारां", "nameMr": "बारां"},
            {"id": "barmer", "nameEn": "Barmer", "nameHi": "बाड़मेर", "nameMr": "बाडमेर"},
            {"id": "bharatpur", "nameEn": "Bharatpur", "nameHi": "भरतपुर", "nameMr": "भरतपूर"},
            {"id": "bhilwara", "nameEn": "Bhilwara", "nameHi": "भीलवाड़ा", "nameMr": "भीलवाडा"},
            {"id": "bikaner", "nameEn": "Bikaner", "nameHi": "बीकानेर", "nameMr": "बीकानेर"},
            {"id": "bundi", "nameEn": "Bundi", "nameHi": "बूंदी", "nameMr": "बूंदी"},
            {"id": "chittorgarh", "nameEn": "Chittorgarh", "nameHi": "चित्तौड़गढ़", "nameMr": "चित्तोडगड"},
            {"id": "churu", "nameEn": "Churu", "nameHi": "चूरू", "nameMr": "चूरू"},
            {"id": "dausa", "nameEn": "Dausa", "nameHi": "दौसा", "nameMr": "दौसा"},
            {"id": "dholpur", "nameEn": "Dholpur", "nameHi": "धौलपुर", "nameMr": "धोलपूर"},
            {"id": "dungarpur", "nameEn": "Dungarpur", "nameHi": "डूंगरपुर", "nameMr": "डूंगरपूर"},
            {"id": "hanumangarh", "nameEn": "Hanumangarh", "nameHi": "हनुमानगढ़", "nameMr": "हनुमानगड"},
            {"id": "jaipur", "nameEn": "Jaipur", "nameHi": "जयपुर", "nameMr": "जयपूर"},
            {"id": "jaisalmer", "nameEn": "Jaisalmer", "nameHi": "जैसलमेर", "nameMr": "जैसलमेर"},
            {"id": "jalore", "nameEn": "Jalore", "nameHi": "जालौर", "nameMr": "जालोर"},
            {"id": "jhalawar", "nameEn": "Jhalawar", "nameHi": "झालावाड़", "nameMr": "झालावाड"},
            {"id": "jhunjhunu", "nameEn": "Jhunjhunu", "nameHi": "झुंझुनूं", "nameMr": "झुंझुनू"},
            {"id": "jodhpur", "nameEn": "Jodhpur", "nameHi": "जोधपुर", "nameMr": "जोधपूर"},
            {"id": "karauli", "nameEn": "Karauli", "nameHi": "करौली", "nameMr": "करौली"},
            {"id": "kota", "nameEn": "Kota", "nameHi": "कोटा", "nameMr": "कोटा"},
            {"id": "nagaur", "nameEn": "Nagaur", "nameHi": "नागौर", "nameMr": "नागौर"},
            {"id": "pali", "nameEn": "Pali", "nameHi": "पाली", "nameMr": "पाली"},
            {"id": "pratapgarh_rj", "nameEn": "Pratapgarh", "nameHi": "प्रतापगढ़ (राजस्थान)", "nameMr": "प्रतापगड"},
            {"id": "rajsamand", "nameEn": "Rajsamand", "nameHi": "राजसमंद", "nameMr": "राजसमंद"},
            {"id": "sawai_madhopur", "nameEn": "Sawai Madhopur", "nameHi": "सवाई माधोपुर", "nameMr": "सवाई माधोपूर"},
            {"id": "sikar", "nameEn": "Sikar", "nameHi": "सीकर", "nameMr": "सीकर"},
            {"id": "sirohi", "nameEn": "Sirohi", "nameHi": "सिरोही", "nameMr": "सिरोही"},
            {"id": "sri_ganganagar", "nameEn": "Sri Ganganagar", "nameHi": "श्रीगंगानगर", "nameMr": "श्रीगंगानगर"},
            {"id": "tonk", "nameEn": "Tonk", "nameHi": "टोंक", "nameMr": "टोंक"},
            {"id": "udaipur", "nameEn": "Udaipur", "nameHi": "उदयपुर", "nameMr": "उदयपूर"},
            {"id": "anupgarh", "nameEn": "Anupgarh", "nameHi": "अनूपगढ़", "nameMr": "अनूपगड"},
            {"id": "balotra", "nameEn": "Balotra", "nameHi": "बालोतरा", "nameMr": "बालोतरा"},
            {"id": "beawar", "nameEn": "Beawar", "nameHi": "ब्यावर", "nameMr": "ब्यावर"},
            {"id": "deeg", "nameEn": "Deeg", "nameHi": "डीग", "nameMr": "डीग"},
            {"id": "didwana_kuchaman", "nameEn": "Didwana Kuchaman", "nameHi": "डीडवाना-कुचामन", "nameMr": "डीडवाना कुचामन"},
            {"id": "kotputli_behror", "nameEn": "Kotputli Behror", "nameHi": "कोटपूतली-बहरोड़", "nameMr": "कोटपूतली बहरोड"},
            {"id": "phalodi", "nameEn": "Phalodi", "nameHi": "फलोदी", "nameMr": "फलोदी"}
        ]
    },
    {
        "id": "tamil_nadu", "nameEn": "Tamil Nadu", "nameHi": "तमिलनाडु", "nameMr": "तमिळनाडू", "type": "State",
        "districts": [
            {"id": "ariyalur", "nameEn": "Ariyalur", "nameHi": "अरियालुर", "nameMr": "अरियालुर"},
            {"id": "chengalpattu", "nameEn": "Chengalpattu", "nameHi": "चेंगलपट्टू", "nameMr": "चेंगलपट्टू"},
            {"id": "chennai", "nameEn": "Chennai", "nameHi": "चेन्नई", "nameMr": "चेन्नई"},
            {"id": "coimbatore", "nameEn": "Coimbatore", "nameHi": "कोयंबटूर", "nameMr": "कोइम्बतूर"},
            {"id": "cuddalore", "nameEn": "Cuddalore", "nameHi": "कुड्डालोर", "nameMr": "कुड्डालोर"},
            {"id": "dharmapuri", "nameEn": "Dharmapuri", "nameHi": "धर्मपुरी", "nameMr": "धर्मपुरी"},
            {"id": "dindigul", "nameEn": "Dindigul", "nameHi": "दिंडीगुल", "nameMr": "दिंडीगुल"},
            {"id": "erode", "nameEn": "Erode", "nameHi": "इरोड", "nameMr": "इरोड"},
            {"id": "kanchipuram", "nameEn": "Kanchipuram", "nameHi": "कांचीपुरम", "nameMr": "कांचीपुरम"},
            {"id": "kanyakumari", "nameEn": "Kanyakumari", "nameHi": "कन्याकुमारी", "nameMr": "कन्याकुमारी"},
            {"id": "karur", "nameEn": "Karur", "nameHi": "करूर", "nameMr": "करूर"},
            {"id": "krishnagiri", "nameEn": "Krishnagiri", "nameHi": "कृष्णगिरि", "nameMr": "कृष्णगिरी"},
            {"id": "madurai", "nameEn": "Madurai", "nameHi": "मदुरै", "nameMr": "मदुराई"},
            {"id": "mayiladuthurai", "nameEn": "Mayiladuthurai", "nameHi": "मयीलादुथुरै", "nameMr": "मयीलादुथुरै"},
            {"id": "nagapattinam", "nameEn": "Nagapattinam", "nameHi": "नागापट्टिनम", "nameMr": "नागापट्टिनम"},
            {"id": "namakkal", "nameEn": "Namakkal", "nameHi": "नमक्कल", "nameMr": "नमक्कल"},
            {"id": "nilgiris", "nameEn": "Nilgiris (Ooty)", "nameHi": "नीलगिरि (ऊटी)", "nameMr": "नीलगिरी"},
            {"id": "perambalur", "nameEn": "Perambalur", "nameHi": "पेरम्बलूर", "nameMr": "पेरम्बलूर"},
            {"id": "pudukkottai", "nameEn": "Pudukkottai", "nameHi": "पुदुक्कोट्टै", "nameMr": "पुदुक्कोट्टै"},
            {"id": "ramanathapuram", "nameEn": "Ramanathapuram", "nameHi": "रामनाथपुरम", "nameMr": "रामनाथपुरम"},
            {"id": "ranipet", "nameEn": "Ranipet", "nameHi": "रानीपेट", "nameMr": "रानीपेट"},
            {"id": "salem", "nameEn": "Salem", "nameHi": "सेलम", "nameMr": "सेलम"},
            {"id": "sivaganga", "nameEn": "Sivaganga", "nameHi": "शिवगंगा", "nameMr": "शिवगंगा"},
            {"id": "tenkasi", "nameEn": "Tenkasi", "nameHi": "तेनकासी", "nameMr": "तेनकासी"},
            {"id": "thanjavur", "nameEn": "Thanjavur", "nameHi": "तंजावुर", "nameMr": "तंजावर"},
            {"id": "theni", "nameEn": "Theni", "nameHi": "ठेनी", "nameMr": "ठेनी"},
            {"id": "thoothukudi", "nameEn": "Thoothukudi (Tuticorin)", "nameHi": "थूथुकुडी (तूतीकोरिन)", "nameMr": "थूथुकुडी"},
            {"id": "tiruchirappalli", "nameEn": "Tiruchirappalli (Trichy)", "nameHi": "तिरुचिरापल्ली", "nameMr": "तिरुचिरापल्ली"},
            {"id": "tirunelveli", "nameEn": "Tirunelveli", "nameHi": "तिरुनेलवेली", "nameMr": "तिरुनेलवेली"},
            {"id": "tirupathur_tn", "nameEn": "Tirupathur", "nameHi": "तिरुपुथुर", "nameMr": "तिरुपुथुर"},
            {"id": "tiruppur", "nameEn": "Tiruppur", "nameHi": "तिरुपूर", "nameMr": "तिरुपूर"},
            {"id": "tiruvallur", "nameEn": "Tiruvallur", "nameHi": "तिरुवल्लूर", "nameMr": "तिरुवल्लूर"},
            {"id": "tiruvannamalai", "nameEn": "Tiruvannamalai", "nameHi": "तिरुवन्नमलाई", "nameMr": "तिरुवन्नमलाई"},
            {"id": "tiruvarur", "nameEn": "Tiruvarur", "nameHi": "तिरुवारूर", "nameMr": "तिरुवारूर"},
            {"id": "vellore", "nameEn": "Vellore", "nameHi": "वेल्लोर", "nameMr": "वेल्लोर"},
            {"id": "viluppuram", "nameEn": "Viluppuram", "nameHi": "विलुप्पुरम", "nameMr": "विलुप्पुरम"},
            {"id": "virudhunagar", "nameEn": "Virudhunagar", "nameHi": "विरुधुनगर", "nameMr": "विरुधुनगर"}
        ]
    },
    {
        "id": "telangana", "nameEn": "Telangana", "nameHi": "तेलंगाना", "nameMr": "तेलंगणा", "type": "State",
        "districts": [
            {"id": "adilabad", "nameEn": "Adilabad", "nameHi": "आदिलाबाद", "nameMr": "आदिलाबाद"},
            {"id": "bhadradri_kothagudem", "nameEn": "Bhadradri Kothagudem", "nameHi": "भद्राद्रि कोठागुडेम", "nameMr": "भद्राद्रि कोठागुडेम"},
            {"id": "hyderabad", "nameEn": "Hyderabad", "nameHi": "हैदराबाद", "nameMr": "हैदराबाद"},
            {"id": "jagtial", "nameEn": "Jagtial", "nameHi": "जगितियाल", "nameMr": "जगितियाल"},
            {"id": "jangaon", "nameEn": "Jangaon", "nameHi": "जनगांव", "nameMr": "जनगाव"},
            {"id": "jayashankar_bhupalpally", "nameEn": "Jayashankar Bhupalpally", "nameHi": "जयशंकर भूपालपल्ली", "nameMr": "जयशंकर भूपालपल्ली"},
            {"id": "jogulamba_gadwal", "nameEn": "Jogulamba Gadwal", "nameHi": "जोगुलम्बा गडवाल", "nameMr": "जोगुलम्बा गडवाल"},
            {"id": "kamareddy", "nameEn": "Kamareddy", "nameHi": "कामारेड्डी", "nameMr": "कामारेड्डी"},
            {"id": "karimnagar", "nameEn": "Karimnagar", "nameHi": "करीमनगर", "nameMr": "करीमनगर"},
            {"id": "khammam", "nameEn": "Khammam", "nameHi": "खम्मम", "nameMr": "खम्मम"},
            {"id": "asifabad", "nameEn": "Kumuram Bheem Asifabad", "nameHi": "कुमुराम भीम आसिफाबाद", "nameMr": "कुमुराम भीम आसिफाबाद"},
            {"id": "mahabubabad", "nameEn": "Mahabubabad", "nameHi": "महबूबाबाद", "nameMr": "महबूबाबाद"},
            {"id": "mahabubnagar", "nameEn": "Mahabubnagar", "nameHi": "महबूबनगर", "nameMr": "महबूबनगर"},
            {"id": "mancherial", "nameEn": "Mancherial", "nameHi": "मंचेरियल", "nameMr": "मंचेरियल"},
            {"id": "medak", "nameEn": "Medak", "nameHi": "मेडक", "nameMr": "मेडक"},
            {"id": "medchal_malkajgiri", "nameEn": "Medchal Malkajgiri", "nameHi": "मेडचल-मलकाजगिरि", "nameMr": "मेडचल मलकाजगिरि"},
            {"id": "mulugu", "nameEn": "Mulugu", "nameHi": "मुलुगु", "nameMr": "मुलुगु"},
            {"id": "nalgonda", "nameEn": "Nalgonda", "nameHi": "नलगोंडा", "nameMr": "नलगोंडा"},
            {"id": "narayanpet", "nameEn": "Narayanpet", "nameHi": "नारायणपेट", "nameMr": "नारायणपेट"},
            {"id": "nirmal", "nameEn": "Nirmal", "nameHi": "निर्मल", "nameMr": "निर्मल"},
            {"id": "nizamabad", "nameEn": "Nizamabad", "nameHi": "निजामाबाद", "nameMr": "निजामाबाद"},
            {"id": "peddapalli", "nameEn": "Peddapalli", "nameHi": "पेद्दापल्ली", "nameMr": "पेद्दापल्ली"},
            {"id": "rajanna_sircilla", "nameEn": "Rajanna Sircilla", "nameHi": "राजन्ना सिरसिला", "nameMr": "राजन्ना सिरसिला"},
            {"id": "ranga_reddy", "nameEn": "Ranga Reddy", "nameHi": "रंगारेड्डी", "nameMr": "रंगारेड्डी"},
            {"id": "sangareddy", "nameEn": "Sangareddy", "nameHi": "संगारेड्डी", "nameMr": "संगारेड्डी"},
            {"id": "siddipet", "nameEn": "Siddipet", "nameHi": "सिद्धिपेट", "nameMr": "सिद्धिपेट"},
            {"id": "suryapet", "nameEn": "Suryapet", "nameHi": "सूर्यापेट", "nameMr": "सूर्यापेट"},
            {"id": "vikarabad", "nameEn": "Vikarabad", "nameHi": "विकाराबाद", "nameMr": "विकाराबाद"},
            {"id": "wanaparthy", "nameEn": "Wanaparthy", "nameHi": "वनापार्थी", "nameMr": "वनापार्थी"},
            {"id": "warangal", "nameEn": "Warangal", "nameHi": "वरंगल", "nameMr": "वरंगल"},
            {"id": "hanamkonda", "nameEn": "Hanamkonda", "nameHi": "हनमकोंडा", "nameMr": "हनमकोंडा"},
            {"id": "yadadri_bhuvanagiri", "nameEn": "Yadadri Bhuvanagiri", "nameHi": "यादाद्रि भुवनागिरि", "nameMr": "यादाद्रि भुवनागिरि"}
        ]
    },
    {
        "id": "uttar_pradesh", "nameEn": "Uttar Pradesh", "nameHi": "उत्तर प्रदेश", "nameMr": "उत्तर प्रदेश", "type": "State",
        "districts": [
            {"id": "agra", "nameEn": "Agra", "nameHi": "आगरा", "nameMr": "आग्रा"},
            {"id": "aligarh", "nameEn": "Aligarh", "nameHi": "अलीगढ़", "nameMr": "अलिगढ"},
            {"id": "ambbedkar_nagar", "nameEn": "Ambedkar Nagar", "nameHi": "अंबेडकर नगर", "nameMr": "आंबेडकर नगर"},
            {"id": "amethi", "nameEn": "Amethi", "nameHi": "अमेठी", "nameMr": "अमेठी"},
            {"id": "amroha", "nameEn": "Amroha", "nameHi": "अमरोहा", "nameMr": "अमरोहा"},
            {"id": "auraiya", "nameEn": "Auraiya", "nameHi": "औरैया", "nameMr": "औरैया"},
            {"id": "ayodhya", "nameEn": "Ayodhya", "nameHi": "अयोध्या", "nameMr": "अयोध्या"},
            {"id": "azamgarh", "nameEn": "Azamgarh", "nameHi": "आजमगढ़", "nameMr": "आजमगड"},
            {"id": "baghpat", "nameEn": "Baghpat", "nameHi": "बागपत", "nameMr": "बागपत"},
            {"id": "bahraich", "nameEn": "Bahraich", "nameHi": "बहराइच", "nameMr": "बहराइच"},
            {"id": "ballia", "nameEn": "Ballia", "nameHi": "बलिया", "nameMr": "बलिया"},
            {"id": "balrampur_up", "nameEn": "Balrampur", "nameHi": "बलरामपुर (यूपी)", "nameMr": "बलरामपूर"},
            {"id": "banda", "nameEn": "Banda", "nameHi": "बांदा", "nameMr": "बांदा"},
            {"id": "barabanki", "nameEn": "Barabanki", "nameHi": "बाराबंकी", "nameMr": "बाराबंकी"},
            {"id": "bareilly", "nameEn": "Bareilly", "nameHi": "बरेली", "nameMr": "बरेली"},
            {"id": "basti", "nameEn": "Basti", "nameHi": "बस्ती", "nameMr": "बस्ती"},
            {"id": "bhadohi", "nameEn": "Bhadohi", "nameHi": "भदोही", "nameMr": "भदोही"},
            {"id": "bijnor", "nameEn": "Bijnor", "nameHi": "बिजनौर", "nameMr": "बिजनौर"},
            {"id": "budaun", "nameEn": "Budaun", "nameHi": "बदायूं", "nameMr": "बदायूं"},
            {"id": "bulandshahr", "nameEn": "Bulandshahr", "nameHi": "बुलंदशहर", "nameMr": "बुलंदशहर"},
            {"id": "chandauli", "nameEn": "Chandauli", "nameHi": "चंदौली", "nameMr": "चंदौली"},
            {"id": "chitrakoot", "nameEn": "Chitrakoot", "nameHi": "चित्रकूट", "nameMr": "चित्रकूट"},
            {"id": "deoria", "nameEn": "Deoria", "nameHi": "देवरिया", "nameMr": "देवरिया"},
            {"id": "etah", "nameEn": "Etah", "nameHi": "एटा", "nameMr": "एटा"},
            {"id": "etawah", "nameEn": "Etawah", "nameHi": "इटावा", "nameMr": "इटावा"},
            {"id": "farrukhabad", "nameEn": "Farrukhabad", "nameHi": "फर्रुखाबाद", "nameMr": "फरुखाबाद"},
            {"id": "fatehpur", "nameEn": "Fatehpur", "nameHi": "फतेहपुर", "nameMr": "फतेहपूर"},
            {"id": "firozabad", "nameEn": "Firozabad", "nameHi": "फिरोजाबाद", "nameMr": "फिरोजाबाद"},
            {"id": "gautam_buddha_nagar", "nameEn": "Gautam Buddha Nagar (Noida)", "nameHi": "गौतम बुद्ध नगर (नोएडा)", "nameMr": "नोएडा"},
            {"id": "ghaziabad", "nameEn": "Ghaziabad", "nameHi": "गाजियाबाद", "nameMr": "गाझियाबाद"},
            {"id": "ghazipur", "nameEn": "Ghazipur", "nameHi": "गाजीपुर", "nameMr": "गाझीपूर"},
            {"id": "gonda", "nameEn": "Gonda", "nameHi": "गोंडा", "nameMr": "गोंडा"},
            {"id": "gorakhpur", "nameEn": "Gorakhpur", "nameHi": "गोरखपुर", "nameMr": "गोरखपूर"},
            {"id": "hamirpur_up", "nameEn": "Hamirpur", "nameHi": "हमीरपुर (यूपी)", "nameMr": "हमीरपूर"},
            {"id": "hapur", "nameEn": "Hapur", "nameHi": "हापुड़", "nameMr": "हापूड"},
            {"id": "hardoi", "nameEn": "Hardoi", "nameHi": "हरदोई", "nameMr": "हरदोई"},
            {"id": "hathras", "nameEn": "Hathras", "nameHi": "हाथरस", "nameMr": "हाथरस"},
            {"id": "jalaun", "nameEn": "Jalaun", "nameHi": "जालौन", "nameMr": "जालौन"},
            {"id": "jaunpur", "nameEn": "Jaunpur", "nameHi": "जौनपुर", "nameMr": "जौनपूर"},
            {"id": "jhansi", "nameEn": "Jhansi", "nameHi": "झांसी", "nameMr": "झांसी"},
            {"id": "kannauj", "nameEn": "Kannauj", "nameHi": "कन्नौज", "nameMr": "कन्नौज"},
            {"id": "kanpur_dehat", "nameEn": "Kanpur Dehat", "nameHi": "कानपुर देहात", "nameMr": "कानपूर देहात"},
            {"id": "kanpur_nagar", "nameEn": "Kanpur Nagar", "nameHi": "कानपुर नगर", "nameMr": "कानपूर शहर"},
            {"id": "kasganj", "nameEn": "Kasganj", "nameHi": "कासगंज", "nameMr": "कासगंज"},
            {"id": "kaushambi", "nameEn": "Kaushambi", "nameHi": "कौशांबी", "nameMr": "कौशांबी"},
            {"id": "kheri", "nameEn": "Lakhimpur Kheri", "nameHi": "लखीमपुर खीरी", "nameMr": "लखीमपूर खिरी"},
            {"id": "kushinagar", "nameEn": "Kushinagar", "nameHi": "कुशीनगर", "nameMr": "कुशीनगर"},
            {"id": "lalitpur", "nameEn": "Lalitpur", "nameHi": "ललितपुर", "nameMr": "ललितपूर"},
            {"id": "lucknow", "nameEn": "Lucknow", "nameHi": "लखनऊ", "nameMr": "लखनऊ"},
            {"id": "maharajganj", "nameEn": "Maharajganj", "nameHi": "महराजगंज", "nameMr": "महराजगंज"},
            {"id": "mahoba", "nameEn": "Mahoba", "nameHi": "महोबा", "nameMr": "महोबा"},
            {"id": "mainpuri", "nameEn": "Mainpuri", "nameHi": "मैनपुरी", "nameMr": "मैनपुरी"},
            {"id": "mathura", "nameEn": "Mathura", "nameHi": "मथुरा", "nameMr": "मथुरा"},
            {"id": "mau", "nameEn": "Mau", "nameHi": "मऊ", "nameMr": "मऊ"},
            {"id": "meerut", "nameEn": "Meerut", "nameHi": "मेरठ", "nameMr": "मेरठ"},
            {"id": "mirzapur", "nameEn": "Mirzapur", "nameHi": "मिर्जापुर", "nameMr": "मिर्झापूर"},
            {"id": "moradabad", "nameEn": "Moradabad", "nameHi": "मुरादाबाद", "nameMr": "मुरादाबाद"},
            {"id": "muzaffarnagar", "nameEn": "Muzaffarnagar", "nameHi": "मुजफ्फरनगर", "nameMr": "मुझफ्फरनगर"},
            {"id": "pilibhit", "nameEn": "Pilibhit", "nameHi": "पीलीभीत", "nameMr": "पीलीभीत"},
            {"id": "pratapgarh_up", "nameEn": "Pratapgarh", "nameHi": "प्रतापगढ़ (यूपी)", "nameMr": "प्रतापगड"},
            {"id": "prayagraj", "nameEn": "Prayagraj (Allahabad)", "nameHi": "प्रयागराज (इलाहाबाद)", "nameMr": "प्रयागराज"},
            {"id": "raebareli", "nameEn": "Raebareli", "nameHi": "रायबरेली", "nameMr": "रायबरेली"},
            {"id": "rampur", "nameEn": "Rampur", "nameHi": "रामपुर", "nameMr": "रामपूर"},
            {"id": "saharanpur", "nameEn": "Saharanpur", "nameHi": "सहारनपुर", "nameMr": "सहारनपूर"},
            {"id": "sambhal", "nameEn": "Sambhal", "nameHi": "संभल", "nameMr": "संभल"},
            {"id": "sant_kabir_nagar", "nameEn": "Sant Kabir Nagar", "nameHi": "संत कबीर नगर", "nameMr": "संत कबीर नगर"},
            {"id": "shahjahanpur", "nameEn": "Shahjahanpur", "nameHi": "शाहजहांपुर", "nameMr": "शाहजहानपूर"},
            {"id": "shamli", "nameEn": "Shamli", "nameHi": "शामली", "nameMr": "शामली"},
            {"id": "shravasti", "nameEn": "Shravasti", "nameHi": "श्रावस्ती", "nameMr": "श्रावस्ती"},
            {"id": "siddharthnagar", "nameEn": "Siddharthnagar", "nameHi": "सिद्धार्थनगर", "nameMr": "सिद्धार्थनगर"},
            {"id": "sitapur", "nameEn": "Sitapur", "nameHi": "सीतापुर", "nameMr": "सीतापूर"},
            {"id": "sonbhadra", "nameEn": "Sonbhadra", "nameHi": "सोनभद्र", "nameMr": "सोनभद्र"},
            {"id": "sultanpur", "nameEn": "Sultanpur", "nameHi": "सुल्तानपुर", "nameMr": "सुल्तानपूर"},
            {"id": "unnao", "nameEn": "Unnao", "nameHi": "उन्नाव", "nameMr": "उन्नाव"},
            {"id": "varanasi", "nameEn": "Varanasi (Kashi)", "nameHi": "वाराणसी (काशी)", "nameMr": "वाराणसी"}
        ]
    },
    {
        "id": "uttarakhand", "nameEn": "Uttarakhand", "nameHi": "उत्तराखंड", "nameMr": "उत्तराखंड", "type": "State",
        "districts": [
            {"id": "almora", "nameEn": "Almora", "nameHi": "अल्मोड़ा", "nameMr": "अल्मोडा"},
            {"id": "bageshwar", "nameEn": "Bageshwar", "nameHi": "बागेश्वर", "nameMr": "बागेश्वर"},
            {"id": "chamoli", "nameEn": "Chamoli", "nameHi": "चमोली", "nameMr": "चमोली"},
            {"id": "champawat", "nameEn": "Champawat", "nameHi": "चंपावत", "nameMr": "चंपावत"},
            {"id": "dehradun", "nameEn": "Dehradun", "nameHi": "देहरादून", "nameMr": "डेहराडून"},
            {"id": "haridwar", "nameEn": "Haridwar", "nameHi": "हरिद्वार", "nameMr": "हरिद्वार"},
            {"id": "nainital", "nameEn": "Nainital", "nameHi": "नैनीताल", "nameMr": "नैनीताल"},
            {"id": "pauri_garhwal", "nameEn": "Pauri Garhwal", "nameHi": "पौड़ी गढ़वाल", "nameMr": "पौडी गडवाल"},
            {"id": "pithoragarh", "nameEn": "Pithoragarh", "nameHi": "पिथौरागढ़", "nameMr": "पिथौरागड"},
            {"id": "rudraprayag", "nameEn": "Rudraprayag", "nameHi": "रुद्रप्रयाग", "nameMr": "रुद्रप्रयाग"},
            {"id": "tehri_garhwal", "nameEn": "Tehri Garhwal", "nameHi": "टिहरी गढ़वाल", "nameMr": "टिहरी गडवाल"},
            {"id": "udham_singh_nagar", "nameEn": "Udham Singh Nagar", "nameHi": "ऊधम सिंह नगर", "nameMr": "उधमसिंग नगर"},
            {"id": "uttarkashi", "nameEn": "Uttarkashi", "nameHi": "उत्तरकाशी", "nameMr": "उत्तरकाशी"}
        ]
    },
    {
        "id": "west_bengal", "nameEn": "West Bengal", "nameHi": "पश्चिम बंगाल", "nameMr": "पश्चिम बंगाल", "type": "State",
        "districts": [
            {"id": "alipurduar", "nameEn": "Alipurduar", "nameHi": "अलीपुरद्वार", "nameMr": "अलिपूरद्वार"},
            {"id": "bankura", "nameEn": "Bankura", "nameHi": "बांकुरा", "nameMr": "बांकुरा"},
            {"id": "birbhum", "nameEn": "Birbhum", "nameHi": "बीरभूम", "nameMr": "बीरभूम"},
            {"id": "cooch_behar", "nameEn": "Cooch Behar", "nameHi": "कूचबिहार", "nameMr": "कूचबिहार"},
            {"id": "dakshin_dinajpur", "nameEn": "Dakshin Dinajpur", "nameHi": "दक्षिण दिनाजपुर", "nameMr": "दक्षिण दिनाजपूर"},
            {"id": "darjeeling", "nameEn": "Darjeeling", "nameHi": "दार्जिलिंग", "nameMr": "दार्जिलिंग"},
            {"id": "hooghly", "nameEn": "Hooghly", "nameHi": "हुगली", "nameMr": "हुगळी"},
            {"id": "howrah", "nameEn": "Howrah", "nameHi": "हावड़ा", "nameMr": "हावडा"},
            {"id": "jalpaiguri", "nameEn": "Jalpaiguri", "nameHi": "जलपाईगुड़ी", "nameMr": "जलपाईगुडी"},
            {"id": "jhargram", "nameEn": "Jhargram", "nameHi": "झारग्राम", "nameMr": "झारग्राम"},
            {"id": "kalimpong", "nameEn": "Kalimpong", "nameHi": "कालिम्पोंग", "nameMr": "कालिम्पोंग"},
            {"id": "kolkata", "nameEn": "Kolkata", "nameHi": "कोलकाता", "nameMr": "कोलकाता"},
            {"id": "malda", "nameEn": "Malda", "nameHi": "मालदा", "nameMr": "मालदा"},
            {"id": "murshidabad", "nameEn": "Murshidabad", "nameHi": "मूर्शिदाबाद", "nameMr": "मुरशिदाबाद"},
            {"id": "nadia", "nameEn": "Nadia", "nameHi": "नदिया", "nameMr": "नदिया"},
            {"id": "north_24_parganas", "nameEn": "North 24 Parganas", "nameHi": "उत्तर 24 परगना", "nameMr": "उत्तर २४ परगना"},
            {"id": "paschim_bardhaman", "nameEn": "Paschim Bardhaman (Asansol)", "nameHi": "पश्चिम बर्धमान", "nameMr": "पश्चिम बर्धमान"},
            {"id": "paschim_medinipur", "nameEn": "Paschim Medinipur", "nameHi": "पश्चिम मेदिनीपुर", "nameMr": "पश्चिम मेदिनीपूर"},
            {"id": "purba_bardhaman", "nameEn": "Purba Bardhaman", "nameHi": "पूर्व बर्धमान", "nameMr": "पूर्व बर्धमान"},
            {"id": "purba_medinipur", "nameEn": "Purba Medinipur", "nameHi": "पूर्व मेदिनीपुर", "nameMr": "पूर्व मेदिनीपूर"},
            {"id": "purulia", "nameEn": "Purulia", "nameHi": "पुरुलिया", "nameMr": "पुरुलिया"},
            {"id": "south_24_parganas", "nameEn": "South 24 Parganas", "nameHi": "दक्षिण 24 परगना", "nameMr": "दक्षिण २४ परगना"},
            {"id": "uttar_dinajpur", "nameEn": "Uttar Dinajpur", "nameHi": "उत्तर दिनाजपुर", "nameMr": "उत्तर दिनाजपूर"}
        ]
    }
]

def generate_ts_content(data):
    header = """export interface DistrictOption {
  id: string;
  nameEn: string;
  nameHi: string;
  nameMr: string;
  en?: string;
  hi?: string;
  mr?: string;
}

export interface StateOption {
  id: string;
  nameEn: string;
  nameHi: string;
  nameMr: string;
  type: 'State' | 'Union Territory';
  districts: DistrictOption[];
  en?: string;
  hi?: string;
  mr?: string;
}

export type District = DistrictOption;
export type State = StateOption;

"""
    # Format data cleanly
    for state in data:
        state["en"] = state["nameEn"]
        state["hi"] = state["nameHi"]
        state["mr"] = state["nameMr"]
        for dist in state["districts"]:
            dist["en"] = dist["nameEn"]
            dist["hi"] = dist["nameHi"]
            dist["mr"] = dist["nameMr"]

    ts_data = f"export const INDIA_GEO_DATA: StateOption[] = {json.dumps(data, ensure_ascii=False, indent=2)};\n\n"
    
    helpers = """export function getStatesList(lang: 'hi' | 'mr' | 'en' = 'hi'): Array<{ id: string; label: string }> {
  return INDIA_GEO_DATA.map(st => {
    let label = st.nameEn;
    if (lang === 'hi') label = st.nameHi;
    else if (lang === 'mr') label = st.nameMr;
    return { id: st.id, label };
  }).sort((a, b) => a.label.localeCompare(b.label));
}

export function getDistrictsForState(stateId: string, lang: 'hi' | 'mr' | 'en' = 'hi'): Array<{ id: string; label: string }> {
  const match = INDIA_GEO_DATA.find(st => st.id === stateId || st.nameEn.toLowerCase() === stateId.toLowerCase() || (st.en && st.en.toLowerCase() === stateId.toLowerCase()));
  if (!match) return [];
  return match.districts.map(d => {
    let label = d.nameEn;
    if (lang === 'hi') label = d.nameHi;
    else if (lang === 'mr') label = d.nameMr;
    return { id: d.id, label };
  }).sort((a, b) => a.label.localeCompare(b.label));
}

export function getCanonicalName(idOrName: string, type: 'state' | 'district', lang: 'hi' | 'mr' | 'en' = 'en'): string {
  if (!idOrName) return '';
  for (const st of INDIA_GEO_DATA) {
    if (type === 'state') {
      if (st.id === idOrName || st.nameEn.toLowerCase() === idOrName.toLowerCase()) {
        if (lang === 'hi') return st.nameHi;
        if (lang === 'mr') return st.nameMr;
        return st.nameEn;
      }
    } else {
      for (const dist of st.districts) {
        if (dist.id === idOrName || dist.nameEn.toLowerCase() === idOrName.toLowerCase()) {
          if (lang === 'hi') return dist.nameHi;
          if (lang === 'mr') return dist.nameMr;
          return dist.nameEn;
        }
      }
    }
  }
  return idOrName;
}
"""
    return header + ts_data + helpers

if __name__ == "__main__":
    content = generate_ts_content(RAW_GEO_DATA)
    output_path = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "src", "data", "indiaGeoData.ts")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"[GenerateGeo] Wrote {len(RAW_GEO_DATA)} States/UTs to {output_path}")
