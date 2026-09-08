export interface DistrictOption {
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

export const INDIA_GEO_DATA: StateOption[] = [
  {
    "id": "andhra_pradesh",
    "nameEn": "Andhra Pradesh",
    "nameHi": "आंध्र प्रदेश",
    "nameMr": "आंध्र प्रदेश",
    "type": "State",
    "districts": [
      {
        "id": "anantapur",
        "nameEn": "Anantapur",
        "nameHi": "अनंतपुर",
        "nameMr": "अनंतपूर",
        "en": "Anantapur",
        "hi": "अनंतपुर",
        "mr": "अनंतपूर"
      },
      {
        "id": "chittoor",
        "nameEn": "Chittoor",
        "nameHi": "चित्तूर",
        "nameMr": "चित्तूर",
        "en": "Chittoor",
        "hi": "चित्तूर",
        "mr": "चित्तूर"
      },
      {
        "id": "east_godavari",
        "nameEn": "East Godavari",
        "nameHi": "पूर्वी गोदावरी",
        "nameMr": "पूर्व गोदावरी",
        "en": "East Godavari",
        "hi": "पूर्वी गोदावरी",
        "mr": "पूर्व गोदावरी"
      },
      {
        "id": "guntur",
        "nameEn": "Guntur",
        "nameHi": "गुंटूर",
        "nameMr": "गुंटूर",
        "en": "Guntur",
        "hi": "गुंटूर",
        "mr": "गुंटूर"
      },
      {
        "id": "krishna",
        "nameEn": "Krishna",
        "nameHi": "कृष्णा",
        "nameMr": "कृष्णा",
        "en": "Krishna",
        "hi": "कृष्णा",
        "mr": "कृष्णा"
      },
      {
        "id": "kurnool",
        "nameEn": "Kurnool",
        "nameHi": "कुरनूल",
        "nameMr": "कुर्नूल",
        "en": "Kurnool",
        "hi": "कुरनूल",
        "mr": "कुर्नूल"
      },
      {
        "id": "prakasam",
        "nameEn": "Prakasam",
        "nameHi": "प्रकाशम",
        "nameMr": "प्रकाशम",
        "en": "Prakasam",
        "hi": "प्रकाशम",
        "mr": "प्रकाशम"
      },
      {
        "id": "srikakulam",
        "nameEn": "Srikakulam",
        "nameHi": "श्रीकाकुलम",
        "nameMr": "श्रीकाकुलम",
        "en": "Srikakulam",
        "hi": "श्रीकाकुलम",
        "mr": "श्रीकाकुलम"
      },
      {
        "id": "visakhapatnam",
        "nameEn": "Visakhapatnam",
        "nameHi": "विशाखापत्तनम",
        "nameMr": "विशाखापट्टणम",
        "en": "Visakhapatnam",
        "hi": "विशाखापत्तनम",
        "mr": "विशाखापट्टणम"
      },
      {
        "id": "vizianagaram",
        "nameEn": "Vizianagaram",
        "nameHi": "विजयनगरम",
        "nameMr": "विजयनगरम",
        "en": "Vizianagaram",
        "hi": "विजयनगरम",
        "mr": "विजयनगरम"
      },
      {
        "id": "west_godavari",
        "nameEn": "West Godavari",
        "nameHi": "पश्चिम गोदावरी",
        "nameMr": "पश्चिम गोदावरी",
        "en": "West Godavari",
        "hi": "पश्चिम गोदावरी",
        "mr": "पश्चिम गोदावरी"
      },
      {
        "id": "ysr_kadapa",
        "nameEn": "YSR Kadapa",
        "nameHi": "वाईएसआर कड़पा",
        "nameMr": "वायएसआर कडापा",
        "en": "YSR Kadapa",
        "hi": "वाईएसआर कड़पा",
        "mr": "वायएसआर कडापा"
      },
      {
        "id": "nandyal",
        "nameEn": "Nandyal",
        "nameHi": "नंदयाल",
        "nameMr": "नंदयाल",
        "en": "Nandyal",
        "hi": "नंदयाल",
        "mr": "नंदयाल"
      },
      {
        "id": "bapatla",
        "nameEn": "Bapatla",
        "nameHi": "बापटला",
        "nameMr": "बापटला",
        "en": "Bapatla",
        "hi": "बापटला",
        "mr": "बापटला"
      },
      {
        "id": "eluru",
        "nameEn": "Eluru",
        "nameHi": "एलुरु",
        "nameMr": "एलुरु",
        "en": "Eluru",
        "hi": "एलुरु",
        "mr": "एलुरु"
      },
      {
        "id": "tirupati",
        "nameEn": "Tirupati",
        "nameHi": "तिरुपति",
        "nameMr": "तिरुपती",
        "en": "Tirupati",
        "hi": "तिरुपति",
        "mr": "तिरुपती"
      },
      {
        "id": "kakinada",
        "nameEn": "Kakinada",
        "nameHi": "काकीनाडा",
        "nameMr": "काकीनाडा",
        "en": "Kakinada",
        "hi": "काकीनाडा",
        "mr": "काकीनाडा"
      },
      {
        "id": "konaseema",
        "nameEn": "Konaseema",
        "nameHi": "कोनासीमा",
        "nameMr": "कोनासीमा",
        "en": "Konaseema",
        "hi": "कोनासीमा",
        "mr": "कोनासीमा"
      },
      {
        "id": "anakapalli",
        "nameEn": "Anakapalli",
        "nameHi": "अनाकापल्ली",
        "nameMr": "अनाकापल्ली",
        "en": "Anakapalli",
        "hi": "अनाकापल्ली",
        "mr": "अनाकापल्ली"
      },
      {
        "id": "parvathipuram_manyam",
        "nameEn": "Parvathipuram Manyam",
        "nameHi": "पार्वतीपुरम मान्यम",
        "nameMr": "पार्वतीपुरम मान्यम",
        "en": "Parvathipuram Manyam",
        "hi": "पार्वतीपुरम मान्यम",
        "mr": "पार्वतीपुरम मान्यम"
      },
      {
        "id": "alluri_sitharama_raju",
        "nameEn": "Alluri Sitharama Raju",
        "nameHi": "अल्लूरी सीताराम राजू",
        "nameMr": "अल्लुरी सीताराम राजू",
        "en": "Alluri Sitharama Raju",
        "hi": "अल्लूरी सीताराम राजू",
        "mr": "अल्लुरी सीताराम राजू"
      },
      {
        "id": "palnadu",
        "nameEn": "Palnadu",
        "nameHi": "पलनाडू",
        "nameMr": "पलनाडू",
        "en": "Palnadu",
        "hi": "पलनाडू",
        "mr": "पलनाडू"
      },
      {
        "id": "ntr",
        "nameEn": "NTR",
        "nameHi": "एनटीआर",
        "nameMr": "एनटीआर",
        "en": "NTR",
        "hi": "एनटीआर",
        "mr": "एनटीआर"
      },
      {
        "id": "sri_sathya_sai",
        "nameEn": "Sri Sathya Sai",
        "nameHi": "श्री सत्य साई",
        "nameMr": "श्री सत्य साई",
        "en": "Sri Sathya Sai",
        "hi": "श्री सत्य साई",
        "mr": "श्री सत्य साई"
      },
      {
        "id": "annamayya",
        "nameEn": "Annamayya",
        "nameHi": "अन्नमया",
        "nameMr": "अन्नमया",
        "en": "Annamayya",
        "hi": "अन्नमया",
        "mr": "अन्नमया"
      },
      {
        "id": "sri_potti_sriramulu_nellore",
        "nameEn": "Sri Potti Sriramulu Nellore",
        "nameHi": "नेल्लोर",
        "nameMr": "नेल्लोर",
        "en": "Sri Potti Sriramulu Nellore",
        "hi": "नेल्लोर",
        "mr": "नेल्लोर"
      }
    ],
    "en": "Andhra Pradesh",
    "hi": "आंध्र प्रदेश",
    "mr": "आंध्र प्रदेश"
  },
  {
    "id": "arunachal_pradesh",
    "nameEn": "Arunachal Pradesh",
    "nameHi": "अरुणाचल प्रदेश",
    "nameMr": "अरुणाचल प्रदेश",
    "type": "State",
    "districts": [
      {
        "id": "tawang",
        "nameEn": "Tawang",
        "nameHi": "तवांग",
        "nameMr": "तवांग",
        "en": "Tawang",
        "hi": "तवांग",
        "mr": "तवांग"
      },
      {
        "id": "west_kameng",
        "nameEn": "West Kameng",
        "nameHi": "पश्चिम कामेंग",
        "nameMr": "पश्चिम कामेंग",
        "en": "West Kameng",
        "hi": "पश्चिम कामेंग",
        "mr": "पश्चिम कामेंग"
      },
      {
        "id": "east_kameng",
        "nameEn": "East Kameng",
        "nameHi": "पूर्वी कामेंग",
        "nameMr": "पूर्व कामेंग",
        "en": "East Kameng",
        "hi": "पूर्वी कामेंग",
        "mr": "पूर्व कामेंग"
      },
      {
        "id": "papum_pare",
        "nameEn": "Papum Pare",
        "nameHi": "पापुम पारे",
        "nameMr": "पापुम पारे",
        "en": "Papum Pare",
        "hi": "पापुम पारे",
        "mr": "पापुम पारे"
      },
      {
        "id": "kurung_kumey",
        "nameEn": "Kurung Kumey",
        "nameHi": "कुरुंग कुमे",
        "nameMr": "कुरुंग कुमे",
        "en": "Kurung Kumey",
        "hi": "कुरुंग कुमे",
        "mr": "कुरुंग कुमे"
      },
      {
        "id": "kra_daadi",
        "nameEn": "Kra Daadi",
        "nameHi": "क्रा दादी",
        "nameMr": "क्रा दादी",
        "en": "Kra Daadi",
        "hi": "क्रा दादी",
        "mr": "क्रा दादी"
      },
      {
        "id": "lower_subansiri",
        "nameEn": "Lower Subansiri",
        "nameHi": "निचला सुबनसिरी",
        "nameMr": "खालचा सुबनसिरी",
        "en": "Lower Subansiri",
        "hi": "निचला सुबनसिरी",
        "mr": "खालचा सुबनसिरी"
      },
      {
        "id": "upper_subansiri",
        "nameEn": "Upper Subansiri",
        "nameHi": "ऊपरी सुबनसिरी",
        "nameMr": "वरचा सुबनसिरी",
        "en": "Upper Subansiri",
        "hi": "ऊपरी सुबनसिरी",
        "mr": "वरचा सुबनसिरी"
      },
      {
        "id": "west_siang",
        "nameEn": "West Siang",
        "nameHi": "पश्चिम सियांग",
        "nameMr": "पश्चिम सियांग",
        "en": "West Siang",
        "hi": "पश्चिम सियांग",
        "mr": "पश्चिम सियांग"
      },
      {
        "id": "east_siang",
        "nameEn": "East Siang",
        "nameHi": "पूर्वी सियांग",
        "nameMr": "पूर्व सियांग",
        "en": "East Siang",
        "hi": "पूर्वी सियांग",
        "mr": "पूर्व सियांग"
      },
      {
        "id": "siang",
        "nameEn": "Siang",
        "nameHi": "सियांग",
        "nameMr": "सियांग",
        "en": "Siang",
        "hi": "सियांग",
        "mr": "सियांग"
      },
      {
        "id": "upper_siang",
        "nameEn": "Upper Siang",
        "nameHi": "ऊपरी सियांग",
        "nameMr": "वरचा सियांग",
        "en": "Upper Siang",
        "hi": "ऊपरी सियांग",
        "mr": "वरचा सियांग"
      },
      {
        "id": "lower_siang",
        "nameEn": "Lower Siang",
        "nameHi": "निचला सियांग",
        "nameMr": "खालचा सियांग",
        "en": "Lower Siang",
        "hi": "निचला सियांग",
        "mr": "खालचा सियांग"
      },
      {
        "id": "dibang_valley",
        "nameEn": "Dibang Valley",
        "nameHi": "दिबांग घाटी",
        "nameMr": "दिबांग व्हॅली",
        "en": "Dibang Valley",
        "hi": "दिबांग घाटी",
        "mr": "दिबांग व्हॅली"
      },
      {
        "id": "lower_dibang_valley",
        "nameEn": "Lower Dibang Valley",
        "nameHi": "निचली दिबांग घाटी",
        "nameMr": "खालची दिबांग व्हॅली",
        "en": "Lower Dibang Valley",
        "hi": "निचली दिबांग घाटी",
        "mr": "खालची दिबांग व्हॅली"
      },
      {
        "id": "anjaw",
        "nameEn": "Anjaw",
        "nameHi": "अंजाव",
        "nameMr": "अंजाव",
        "en": "Anjaw",
        "hi": "अंजाव",
        "mr": "अंजाव"
      },
      {
        "id": "lohit",
        "nameEn": "Lohit",
        "nameHi": "लोहित",
        "nameMr": "लोहित",
        "en": "Lohit",
        "hi": "लोहित",
        "mr": "लोहित"
      },
      {
        "id": "namsai",
        "nameEn": "Namsai",
        "nameHi": "नामसाई",
        "nameMr": "नामसाई",
        "en": "Namsai",
        "hi": "नामसाई",
        "mr": "नामसाई"
      },
      {
        "id": "changlang",
        "nameEn": "Changlang",
        "nameHi": "चांगलांग",
        "nameMr": "चांगलांग",
        "en": "Changlang",
        "hi": "चांगलांग",
        "mr": "चांगलांग"
      },
      {
        "id": "tirap",
        "nameEn": "Tirap",
        "nameHi": "तिराप",
        "nameMr": "तिराप",
        "en": "Tirap",
        "hi": "तिराप",
        "mr": "तिराप"
      },
      {
        "id": "longding",
        "nameEn": "Longding",
        "nameHi": "लोंगडिंग",
        "nameMr": "लोंगडिंग",
        "en": "Longding",
        "hi": "लोंगडिंग",
        "mr": "लोंगडिंग"
      },
      {
        "id": "kamle",
        "nameEn": "Kamle",
        "nameHi": "कमले",
        "nameMr": "कमले",
        "en": "Kamle",
        "hi": "कमले",
        "mr": "कमले"
      },
      {
        "id": "pakke_kessang",
        "nameEn": "Pakke Kessang",
        "nameHi": "पक्के केसांग",
        "nameMr": "पक्के केसांग",
        "en": "Pakke Kessang",
        "hi": "पक्के केसांग",
        "mr": "पक्के केसांग"
      },
      {
        "id": "shi_yomi",
        "nameEn": "Shi Yomi",
        "nameHi": "शी योमी",
        "nameMr": "शी योमी",
        "en": "Shi Yomi",
        "hi": "शी योमी",
        "mr": "शी योमी"
      },
      {
        "id": "lepa_rada",
        "nameEn": "Lepa Rada",
        "nameHi": "लेपा राडा",
        "nameMr": "लेपा राडा",
        "en": "Lepa Rada",
        "hi": "लेपा राडा",
        "mr": "लेपा राडा"
      },
      {
        "id": "itanagar",
        "nameEn": "Itanagar Capital Complex",
        "nameHi": "ईटानगर राजधानी",
        "nameMr": "ईटानगर",
        "en": "Itanagar Capital Complex",
        "hi": "ईटानगर राजधानी",
        "mr": "ईटानगर"
      }
    ],
    "en": "Arunachal Pradesh",
    "hi": "अरुणाचल प्रदेश",
    "mr": "अरुणाचल प्रदेश"
  },
  {
    "id": "assam",
    "nameEn": "Assam",
    "nameHi": "असम",
    "nameMr": "आसाम",
    "type": "State",
    "districts": [
      {
        "id": "baksa",
        "nameEn": "Baksa",
        "nameHi": "बाक्सा",
        "nameMr": "बाक्सा",
        "en": "Baksa",
        "hi": "बाक्सा",
        "mr": "बाक्सा"
      },
      {
        "id": "barpeta",
        "nameEn": "Barpeta",
        "nameHi": "बरपेटा",
        "nameMr": "बरपेटा",
        "en": "Barpeta",
        "hi": "बरपेटा",
        "mr": "बरपेटा"
      },
      {
        "id": "biswanath",
        "nameEn": "Biswanath",
        "nameHi": "विश्वनाथ",
        "nameMr": "विश्वनाथ",
        "en": "Biswanath",
        "hi": "विश्वनाथ",
        "mr": "विश्वनाथ"
      },
      {
        "id": "bongaigaon",
        "nameEn": "Bongaigaon",
        "nameHi": "बोंगाईगांव",
        "nameMr": "बोंगाईगाव",
        "en": "Bongaigaon",
        "hi": "बोंगाईगांव",
        "mr": "बोंगाईगाव"
      },
      {
        "id": "cachar",
        "nameEn": "Cachar",
        "nameHi": "कछार",
        "nameMr": "कछार",
        "en": "Cachar",
        "hi": "कछार",
        "mr": "कछार"
      },
      {
        "id": "charaideo",
        "nameEn": "Charaideo",
        "nameHi": "चराईदेव",
        "nameMr": "चराईदेव",
        "en": "Charaideo",
        "hi": "चराईदेव",
        "mr": "चराईदेव"
      },
      {
        "id": "chirang",
        "nameEn": "Chirang",
        "nameHi": "चिरांग",
        "nameMr": "चिरांग",
        "en": "Chirang",
        "hi": "चिरांग",
        "mr": "चिरांग"
      },
      {
        "id": "darrang",
        "nameEn": "Darrang",
        "nameHi": "दर्रांग",
        "nameMr": "दर्रांग",
        "en": "Darrang",
        "hi": "दर्रांग",
        "mr": "दर्रांग"
      },
      {
        "id": "dhemaji",
        "nameEn": "Dhemaji",
        "nameHi": "धेमाजी",
        "nameMr": "धेमाजी",
        "en": "Dhemaji",
        "hi": "धेमाजी",
        "mr": "धेमाजी"
      },
      {
        "id": "dhubri",
        "nameEn": "Dhubri",
        "nameHi": "धुबरी",
        "nameMr": "धुबरी",
        "en": "Dhubri",
        "hi": "धुबरी",
        "mr": "धुबरी"
      },
      {
        "id": "dibrugarh",
        "nameEn": "Dibrugarh",
        "nameHi": "डिब्रूगढ़",
        "nameMr": "डिब्रूगढ",
        "en": "Dibrugarh",
        "hi": "डिब्रूगढ़",
        "mr": "डिब्रूगढ"
      },
      {
        "id": "goalpara",
        "nameEn": "Goalpara",
        "nameHi": "गोपालपारा",
        "nameMr": "गोपालपारा",
        "en": "Goalpara",
        "hi": "गोपालपारा",
        "mr": "गोपालपारा"
      },
      {
        "id": "golaghat",
        "nameEn": "Golaghat",
        "nameHi": "गोलाघाट",
        "nameMr": "गोलाघाट",
        "en": "Golaghat",
        "hi": "गोलाघाट",
        "mr": "गोलाघाट"
      },
      {
        "id": "hailakandi",
        "nameEn": "Hailakandi",
        "nameHi": "हैलाकांडी",
        "nameMr": "हैलाकांडी",
        "en": "Hailakandi",
        "hi": "हैलाकांडी",
        "mr": "हैलाकांडी"
      },
      {
        "id": "hojai",
        "nameEn": "Hojai",
        "nameHi": "होजाई",
        "nameMr": "होजाई",
        "en": "Hojai",
        "hi": "होजाई",
        "mr": "होजाई"
      },
      {
        "id": "jorhat",
        "nameEn": "Jorhat",
        "nameHi": "जोरहाट",
        "nameMr": "जोरहाट",
        "en": "Jorhat",
        "hi": "जोरहाट",
        "mr": "जोरहाट"
      },
      {
        "id": "kamrup",
        "nameEn": "Kamrup",
        "nameHi": "कामरूप",
        "nameMr": "कामरूप",
        "en": "Kamrup",
        "hi": "कामरूप",
        "mr": "कामरूप"
      },
      {
        "id": "kamrup_metro",
        "nameEn": "Kamrup Metropolitan",
        "nameHi": "कामरूप मेट्रो",
        "nameMr": "कामरूप मेट्रो",
        "en": "Kamrup Metropolitan",
        "hi": "कामरूप मेट्रो",
        "mr": "कामरूप मेट्रो"
      },
      {
        "id": "karbi_anglong",
        "nameEn": "Karbi Anglong",
        "nameHi": "कारबी आंगलोंग",
        "nameMr": "कारबी आंगलोंग",
        "en": "Karbi Anglong",
        "hi": "कारबी आंगलोंग",
        "mr": "कारबी आंगलोंग"
      },
      {
        "id": "karimganj",
        "nameEn": "Karimganj",
        "nameHi": "करीमगंज",
        "nameMr": "करीमगंज",
        "en": "Karimganj",
        "hi": "करीमगंज",
        "mr": "करीमगंज"
      },
      {
        "id": "kokrajhar",
        "nameEn": "Kokrajhar",
        "nameHi": "कोकराझार",
        "nameMr": "कोकराझार",
        "en": "Kokrajhar",
        "hi": "कोकराझार",
        "mr": "कोकराझार"
      },
      {
        "id": "lakhimpur",
        "nameEn": "Lakhimpur",
        "nameHi": "लखीमपुर",
        "nameMr": "लखीमपूर",
        "en": "Lakhimpur",
        "hi": "लखीमपुर",
        "mr": "लखीमपूर"
      },
      {
        "id": "majuli",
        "nameEn": "Majuli",
        "nameHi": "माजुली",
        "nameMr": "माजुली",
        "en": "Majuli",
        "hi": "माजुली",
        "mr": "माजुली"
      },
      {
        "id": "morigaon",
        "nameEn": "Morigaon",
        "nameHi": "मोरीगांव",
        "nameMr": "मोरीगाव",
        "en": "Morigaon",
        "hi": "मोरीगांव",
        "mr": "मोरीगाव"
      },
      {
        "id": "nagaon",
        "nameEn": "Nagaon",
        "nameHi": "नगांव",
        "nameMr": "नगाव",
        "en": "Nagaon",
        "hi": "नगांव",
        "mr": "नगाव"
      },
      {
        "id": "nalbari",
        "nameEn": "Nalbari",
        "nameHi": "नलबाड़ी",
        "nameMr": "नलबारी",
        "en": "Nalbari",
        "hi": "नलबाड़ी",
        "mr": "नलबारी"
      },
      {
        "id": "dima_hasao",
        "nameEn": "Dima Hasao",
        "nameHi": "दिमा हसाओ",
        "nameMr": "दिमा हसाओ",
        "en": "Dima Hasao",
        "hi": "दिमा हसाओ",
        "mr": "दिमा हसाओ"
      },
      {
        "id": "sivasagar",
        "nameEn": "Sivasagar",
        "nameHi": "शिवसागर",
        "nameMr": "शिवसागर",
        "en": "Sivasagar",
        "hi": "शिवसागर",
        "mr": "शिवसागर"
      },
      {
        "id": "sonitpur",
        "nameEn": "Sonitpur",
        "nameHi": "शोणितपुर",
        "nameMr": "शोणितपूर",
        "en": "Sonitpur",
        "hi": "शोणितपुर",
        "mr": "शोणितपूर"
      },
      {
        "id": "tinsukia",
        "nameEn": "Tinsukia",
        "nameHi": "तिनसुकिया",
        "nameMr": "तिनसुकिया",
        "en": "Tinsukia",
        "hi": "तिनसुकिया",
        "mr": "तिनसुकिया"
      },
      {
        "id": "udalguri",
        "nameEn": "Udalguri",
        "nameHi": "उदलगुड़ी",
        "nameMr": "उदलगुडी",
        "en": "Udalguri",
        "hi": "उदलगुड़ी",
        "mr": "उदलगुडी"
      },
      {
        "id": "west_karbi_anglong",
        "nameEn": "West Karbi Anglong",
        "nameHi": "पश्चिम कारबी आंगलोंग",
        "nameMr": "पश्चिम कारबी आंगलोंग",
        "en": "West Karbi Anglong",
        "hi": "पश्चिम कारबी आंगलोंग",
        "mr": "पश्चिम कारबी आंगलोंग"
      },
      {
        "id": "bajali",
        "nameEn": "Bajali",
        "nameHi": "बजाली",
        "nameMr": "बजाली",
        "en": "Bajali",
        "hi": "बजाली",
        "mr": "बजाली"
      },
      {
        "id": "tamulpur",
        "nameEn": "Tamulpur",
        "nameHi": "तामुलपुर",
        "nameMr": "तामुलपूर",
        "en": "Tamulpur",
        "hi": "तामुलपुर",
        "mr": "तामुलपूर"
      }
    ],
    "en": "Assam",
    "hi": "असम",
    "mr": "आसाम"
  },
  {
    "id": "bihar",
    "nameEn": "Bihar",
    "nameHi": "बिहार",
    "nameMr": "बिहार",
    "type": "State",
    "districts": [
      {
        "id": "araria",
        "nameEn": "Araria",
        "nameHi": "अररिया",
        "nameMr": "अररिया",
        "en": "Araria",
        "hi": "अररिया",
        "mr": "अररिया"
      },
      {
        "id": "arwal",
        "nameEn": "Arwal",
        "nameHi": "अरवल",
        "nameMr": "अरवल",
        "en": "Arwal",
        "hi": "अरवल",
        "mr": "अरवल"
      },
      {
        "id": "aurangabad_bh",
        "nameEn": "Aurangabad",
        "nameHi": "औरंगाबाद (बिहार)",
        "nameMr": "औरंगाबाद",
        "en": "Aurangabad",
        "hi": "औरंगाबाद (बिहार)",
        "mr": "औरंगाबाद"
      },
      {
        "id": "banka",
        "nameEn": "Banka",
        "nameHi": "बांका",
        "nameMr": "बांका",
        "en": "Banka",
        "hi": "बांका",
        "mr": "बांका"
      },
      {
        "id": "begusarai",
        "nameEn": "Begusarai",
        "nameHi": "बेगूसराय",
        "nameMr": "बेगूसराय",
        "en": "Begusarai",
        "hi": "बेगूसराय",
        "mr": "बेगूसराय"
      },
      {
        "id": "bhagalpur",
        "nameEn": "Bhagalpur",
        "nameHi": "भागलपुर",
        "nameMr": "भागलपूर",
        "en": "Bhagalpur",
        "hi": "भागलपुर",
        "mr": "भागलपूर"
      },
      {
        "id": "bhojpur",
        "nameEn": "Bhojpur",
        "nameHi": "भोजपुर",
        "nameMr": "भोजपूर",
        "en": "Bhojpur",
        "hi": "भोजपुर",
        "mr": "भोजपूर"
      },
      {
        "id": "buxar",
        "nameEn": "Buxar",
        "nameHi": "बक्सर",
        "nameMr": "बक्सर",
        "en": "Buxar",
        "hi": "बक्सर",
        "mr": "बक्सर"
      },
      {
        "id": "darbhanga",
        "nameEn": "Darbhanga",
        "nameHi": "दरभंगा",
        "nameMr": "दरभंगा",
        "en": "Darbhanga",
        "hi": "दरभंगा",
        "mr": "दरभंगा"
      },
      {
        "id": "gaya",
        "nameEn": "Gaya",
        "nameHi": "गया",
        "nameMr": "गया",
        "en": "Gaya",
        "hi": "गया",
        "mr": "गया"
      },
      {
        "id": "gopalganj",
        "nameEn": "Gopalganj",
        "nameHi": "गोपालगंज",
        "nameMr": "गोपालगंज",
        "en": "Gopalganj",
        "hi": "गोपालगंज",
        "mr": "गोपालगंज"
      },
      {
        "id": "jamui",
        "nameEn": "Jamui",
        "nameHi": "जमुई",
        "nameMr": "जमुई",
        "en": "Jamui",
        "hi": "जमुई",
        "mr": "जमुई"
      },
      {
        "id": "jehanabad",
        "nameEn": "Jehanabad",
        "nameHi": "जहानाबाद",
        "nameMr": "जहानाबाद",
        "en": "Jehanabad",
        "hi": "जहानाबाद",
        "mr": "जहानाबाद"
      },
      {
        "id": "kaimur",
        "nameEn": "Kaimur",
        "nameHi": "कैमूर",
        "nameMr": "कैमूर",
        "en": "Kaimur",
        "hi": "कैमूर",
        "mr": "कैमूर"
      },
      {
        "id": "katihar",
        "nameEn": "Katihar",
        "nameHi": "कटिहार",
        "nameMr": "कटिहार",
        "en": "Katihar",
        "hi": "कटिहार",
        "mr": "कटिहार"
      },
      {
        "id": "khagaria",
        "nameEn": "Khagaria",
        "nameHi": "खगड़िया",
        "nameMr": "खगडिया",
        "en": "Khagaria",
        "hi": "खगड़िया",
        "mr": "खगडिया"
      },
      {
        "id": "kishanganj",
        "nameEn": "Kishanganj",
        "nameHi": "किशनगंज",
        "nameMr": "किशनगंज",
        "en": "Kishanganj",
        "hi": "किशनगंज",
        "mr": "किशनगंज"
      },
      {
        "id": "lakhisarai",
        "nameEn": "Lakhisarai",
        "nameHi": "लखीसराय",
        "nameMr": "लखीसराय",
        "en": "Lakhisarai",
        "hi": "लखीसराय",
        "mr": "लखीसराय"
      },
      {
        "id": "madhepura",
        "nameEn": "Madhepura",
        "nameHi": "मधेपुरा",
        "nameMr": "मधेपुरा",
        "en": "Madhepura",
        "hi": "मधेपुरा",
        "mr": "मधेपुरा"
      },
      {
        "id": "madhubani",
        "nameEn": "Madhubani",
        "nameHi": "मधुबनी",
        "nameMr": "मधुबनी",
        "en": "Madhubani",
        "hi": "मधुबनी",
        "mr": "मधुबनी"
      },
      {
        "id": "munger",
        "nameEn": "Munger",
        "nameHi": "मुंगेर",
        "nameMr": "मुंगेर",
        "en": "Munger",
        "hi": "मुंगेर",
        "mr": "मुंगेर"
      },
      {
        "id": "muzaffarpur",
        "nameEn": "Muzaffarpur",
        "nameHi": "मुजफ्फरपुर",
        "nameMr": "मुझफ्फरपूर",
        "en": "Muzaffarpur",
        "hi": "मुजफ्फरपुर",
        "mr": "मुझफ्फरपूर"
      },
      {
        "id": "nalanda",
        "nameEn": "Nalanda",
        "nameHi": "नालंदा",
        "nameMr": "नालंदा",
        "en": "Nalanda",
        "hi": "नालंदा",
        "mr": "नालंदा"
      },
      {
        "id": "nawada",
        "nameEn": "Nawada",
        "nameHi": "नवादा",
        "nameMr": "नवादा",
        "en": "Nawada",
        "hi": "नवादा",
        "mr": "नवादा"
      },
      {
        "id": "paschim_champaran",
        "nameEn": "Paschim Champaran",
        "nameHi": "पश्चिम चंपारण",
        "nameMr": "पश्चिम चंपारण",
        "en": "Paschim Champaran",
        "hi": "पश्चिम चंपारण",
        "mr": "पश्चिम चंपारण"
      },
      {
        "id": "patna",
        "nameEn": "Patna",
        "nameHi": "पटना",
        "nameMr": "पटना",
        "en": "Patna",
        "hi": "पटना",
        "mr": "पटना"
      },
      {
        "id": "purbi_champaran",
        "nameEn": "Purbi Champaran",
        "nameHi": "पूर्वी चंपारण",
        "nameMr": "पूर्व चंपारण",
        "en": "Purbi Champaran",
        "hi": "पूर्वी चंपारण",
        "mr": "पूर्व चंपारण"
      },
      {
        "id": "purnia",
        "nameEn": "Purnia",
        "nameHi": "पूर्णिया",
        "nameMr": "पूर्णिया",
        "en": "Purnia",
        "hi": "पूर्णिया",
        "mr": "पूर्णिया"
      },
      {
        "id": "rohtas",
        "nameEn": "Rohtas",
        "nameHi": "रोहतास",
        "nameMr": "रोहतास",
        "en": "Rohtas",
        "hi": "रोहतास",
        "mr": "रोहतास"
      },
      {
        "id": "saharsa",
        "nameEn": "Saharsa",
        "nameHi": "सहरसा",
        "nameMr": "सहरसा",
        "en": "Saharsa",
        "hi": "सहरसा",
        "mr": "सहरसा"
      },
      {
        "id": "samastipur",
        "nameEn": "Samastipur",
        "nameHi": "समस्तीपुर",
        "nameMr": "समस्तीपूर",
        "en": "Samastipur",
        "hi": "समस्तीपुर",
        "mr": "समस्तीपूर"
      },
      {
        "id": "saran",
        "nameEn": "Saran",
        "nameHi": "सारण (छपरा)",
        "nameMr": "सारण",
        "en": "Saran",
        "hi": "सारण (छपरा)",
        "mr": "सारण"
      },
      {
        "id": "sheikhpura",
        "nameEn": "Sheikhpura",
        "nameHi": "शेखपुरा",
        "nameMr": "शेखपुरा",
        "en": "Sheikhpura",
        "hi": "शेखपुरा",
        "mr": "शेखपुरा"
      },
      {
        "id": "sheohar",
        "nameEn": "Sheohar",
        "nameHi": "शिवहर",
        "nameMr": "शिवहर",
        "en": "Sheohar",
        "hi": "शिवहर",
        "mr": "शिवहर"
      },
      {
        "id": "sitamarhi",
        "nameEn": "Sitamarhi",
        "nameHi": "सीतामढ़ी",
        "nameMr": "सीतामढी",
        "en": "Sitamarhi",
        "hi": "सीतामढ़ी",
        "mr": "सीतामढी"
      },
      {
        "id": "siwan",
        "nameEn": "Siwan",
        "nameHi": "सिवान",
        "nameMr": "सिवान",
        "en": "Siwan",
        "hi": "सिवान",
        "mr": "सिवान"
      },
      {
        "id": "supaul",
        "nameEn": "Supaul",
        "nameHi": "सुपौल",
        "nameMr": "सुपौल",
        "en": "Supaul",
        "hi": "सुपौल",
        "mr": "सुपौल"
      },
      {
        "id": "vaishali",
        "nameEn": "Vaishali",
        "nameHi": "वैशाली",
        "nameMr": "वैशाली",
        "en": "Vaishali",
        "hi": "वैशाली",
        "mr": "वैशाली"
      }
    ],
    "en": "Bihar",
    "hi": "बिहार",
    "mr": "बिहार"
  },
  {
    "id": "chhattisgarh",
    "nameEn": "Chhattisgarh",
    "nameHi": "छत्तीसगढ़",
    "nameMr": "छत्तीसगड",
    "type": "State",
    "districts": [
      {
        "id": "balod",
        "nameEn": "Balod",
        "nameHi": "बालोद",
        "nameMr": "बालोद",
        "en": "Balod",
        "hi": "बालोद",
        "mr": "बालोद"
      },
      {
        "id": "baloda_bazar",
        "nameEn": "Baloda Bazar",
        "nameHi": "बलौदा बाजार",
        "nameMr": "बलौदा बाजार",
        "en": "Baloda Bazar",
        "hi": "बलौदा बाजार",
        "mr": "बलौदा बाजार"
      },
      {
        "id": "balrampur_cg",
        "nameEn": "Balrampur",
        "nameHi": "बलरामपुर",
        "nameMr": "बलरामपूर",
        "en": "Balrampur",
        "hi": "बलरामपुर",
        "mr": "बलरामपूर"
      },
      {
        "id": "bastar",
        "nameEn": "Bastar",
        "nameHi": "बस्तर",
        "nameMr": "बस्तर",
        "en": "Bastar",
        "hi": "बस्तर",
        "mr": "बस्तर"
      },
      {
        "id": "bemetara",
        "nameEn": "Bemetara",
        "nameHi": "बेमेतरा",
        "nameMr": "बेमेतरा",
        "en": "Bemetara",
        "hi": "बेमेतरा",
        "mr": "बेमेतरा"
      },
      {
        "id": "bijapur_cg",
        "nameEn": "Bijapur",
        "nameHi": "बीजापुर",
        "nameMr": "बीजापूर",
        "en": "Bijapur",
        "hi": "बीजापुर",
        "mr": "बीजापूर"
      },
      {
        "id": "bilaspur_cg",
        "nameEn": "Bilaspur",
        "nameHi": "बिलासपुर",
        "nameMr": "बिलासपूर",
        "en": "Bilaspur",
        "hi": "बिलासपुर",
        "mr": "बिलासपूर"
      },
      {
        "id": "dantewada",
        "nameEn": "Dantewada",
        "nameHi": "दंतेवाड़ा",
        "nameMr": "दंतेवाडा",
        "en": "Dantewada",
        "hi": "दंतेवाड़ा",
        "mr": "दंतेवाडा"
      },
      {
        "id": "dhamtari",
        "nameEn": "Dhamtari",
        "nameHi": "धमतरी",
        "nameMr": "धमतरी",
        "en": "Dhamtari",
        "hi": "धमतरी",
        "mr": "धमतरी"
      },
      {
        "id": "durg",
        "nameEn": "Durg",
        "nameHi": "दुर्ग",
        "nameMr": "दुर्ग",
        "en": "Durg",
        "hi": "दुर्ग",
        "mr": "दुर्ग"
      },
      {
        "id": "gariaband",
        "nameEn": "Gariaband",
        "nameHi": "गरियाबंद",
        "nameMr": "गरियाबंद",
        "en": "Gariaband",
        "hi": "गरियाबंद",
        "mr": "गरियाबंद"
      },
      {
        "id": "gaurela_pendra_marwahi",
        "nameEn": "Gaurela Pendra Marwahi",
        "nameHi": "गौरेला-पेंड्रा-मरवाही",
        "nameMr": "गौरेला पेंड्रा मरवाही",
        "en": "Gaurela Pendra Marwahi",
        "hi": "गौरेला-पेंड्रा-मरवाही",
        "mr": "गौरेला पेंड्रा मरवाही"
      },
      {
        "id": "janjgir_champa",
        "nameEn": "Janjgir-Champa",
        "nameHi": "जांजगीर-चांपा",
        "nameMr": "जांजगीर चांपा",
        "en": "Janjgir-Champa",
        "hi": "जांजगीर-चांपा",
        "mr": "जांजगीर चांपा"
      },
      {
        "id": "jashpur",
        "nameEn": "Jashpur",
        "nameHi": "जशपुर",
        "nameMr": "जशपूर",
        "en": "Jashpur",
        "hi": "जशपुर",
        "mr": "जशपूर"
      },
      {
        "id": "kabirdham",
        "nameEn": "Kabirdham",
        "nameHi": "कबीरधाम (कवर्धा)",
        "nameMr": "कबीरधाम",
        "en": "Kabirdham",
        "hi": "कबीरधाम (कवर्धा)",
        "mr": "कबीरधाम"
      },
      {
        "id": "kanker",
        "nameEn": "Kanker",
        "nameHi": "कांकेर",
        "nameMr": "कांकेर",
        "en": "Kanker",
        "hi": "कांकेर",
        "mr": "कांकेर"
      },
      {
        "id": "kondagaon",
        "nameEn": "Kondagaon",
        "nameHi": "कोंडागांव",
        "nameMr": "कोंडागाव",
        "en": "Kondagaon",
        "hi": "कोंडागांव",
        "mr": "कोंडागाव"
      },
      {
        "id": "korba",
        "nameEn": "Korba",
        "nameHi": "कोरबा",
        "nameMr": "कोरबा",
        "en": "Korba",
        "hi": "कोरबा",
        "mr": "कोरबा"
      },
      {
        "id": "koriya",
        "nameEn": "Koriya",
        "nameHi": "कोरिया",
        "nameMr": "कोरिया",
        "en": "Koriya",
        "hi": "कोरिया",
        "mr": "कोरिया"
      },
      {
        "id": "mahasamund",
        "nameEn": "Mahasamund",
        "nameHi": "महासमुंद",
        "nameMr": "महासमुंद",
        "en": "Mahasamund",
        "hi": "महासमुंद",
        "mr": "महासमुंद"
      },
      {
        "id": "mungeli",
        "nameEn": "Mungeli",
        "nameHi": "मुंगेली",
        "nameMr": "मुंगेली",
        "en": "Mungeli",
        "hi": "मुंगेली",
        "mr": "मुंगेली"
      },
      {
        "id": "narayanpur",
        "nameEn": "Narayanpur",
        "nameHi": "नारायणपुर",
        "nameMr": "नारायणपूर",
        "en": "Narayanpur",
        "hi": "नारायणपुर",
        "mr": "नारायणपूर"
      },
      {
        "id": "raigarh",
        "nameEn": "Raigarh",
        "nameHi": "रायगढ़",
        "nameMr": "रायगड (छत्तीसगड)",
        "en": "Raigarh",
        "hi": "रायगढ़",
        "mr": "रायगड (छत्तीसगड)"
      },
      {
        "id": "raipur",
        "nameEn": "Raipur",
        "nameHi": "रायपुर",
        "nameMr": "रायपूर",
        "en": "Raipur",
        "hi": "रायपुर",
        "mr": "रायपूर"
      },
      {
        "id": "rajnandgaon",
        "nameEn": "Rajnandgaon",
        "nameHi": "राजनांदगांव",
        "nameMr": "राजनांदगाव",
        "en": "Rajnandgaon",
        "hi": "राजनांदगांव",
        "mr": "राजनांदगाव"
      },
      {
        "id": "sukma",
        "nameEn": "Sukma",
        "nameHi": "सुकमा",
        "nameMr": "सुकमा",
        "en": "Sukma",
        "hi": "सुकमा",
        "mr": "सुकमा"
      },
      {
        "id": "surajpur",
        "nameEn": "Surajpur",
        "nameHi": "सूरजपुर",
        "nameMr": "सूरजपूर",
        "en": "Surajpur",
        "hi": "सूरजपुर",
        "mr": "सूरजपूर"
      },
      {
        "id": "surguja",
        "nameEn": "Surguja",
        "nameHi": "सरगुजा",
        "nameMr": "सरगुजा",
        "en": "Surguja",
        "hi": "सरगुजा",
        "mr": "सरगुजा"
      },
      {
        "id": "mcb",
        "nameEn": "Manendragarh-Chirmiri-Bharatpur",
        "nameHi": "मनेन्द्रगढ़-चिरमिरी-भरतपुर",
        "nameMr": "मनेन्द्रगड-चिरमिरी-भरतपूर",
        "en": "Manendragarh-Chirmiri-Bharatpur",
        "hi": "मनेन्द्रगढ़-चिरमिरी-भरतपुर",
        "mr": "मनेन्द्रगड-चिरमिरी-भरतपूर"
      },
      {
        "id": "sakthi",
        "nameEn": "Sakti",
        "nameHi": "सक्ती",
        "nameMr": "सक्ती",
        "en": "Sakti",
        "hi": "सक्ती",
        "mr": "सक्ती"
      }
    ],
    "en": "Chhattisgarh",
    "hi": "छत्तीसगढ़",
    "mr": "छत्तीसगड"
  },
  {
    "id": "delhi",
    "nameEn": "Delhi (NCT)",
    "nameHi": "दिल्ली (राष्ट्रीय राजधानी क्षेत्र)",
    "nameMr": "दिल्ली (एनसीटी)",
    "type": "Union Territory",
    "districts": [
      {
        "id": "central_delhi",
        "nameEn": "Central Delhi",
        "nameHi": "मध्य दिल्ली",
        "nameMr": "मध्य दिल्ली",
        "en": "Central Delhi",
        "hi": "मध्य दिल्ली",
        "mr": "मध्य दिल्ली"
      },
      {
        "id": "east_delhi",
        "nameEn": "East Delhi",
        "nameHi": "पूर्वी दिल्ली",
        "nameMr": "पूर्व दिल्ली",
        "en": "East Delhi",
        "hi": "पूर्वी दिल्ली",
        "mr": "पूर्व दिल्ली"
      },
      {
        "id": "new_delhi",
        "nameEn": "New Delhi",
        "nameHi": "नई दिल्ली",
        "nameMr": "नवी दिल्ली",
        "en": "New Delhi",
        "hi": "नई दिल्ली",
        "mr": "नवी दिल्ली"
      },
      {
        "id": "north_delhi",
        "nameEn": "North Delhi",
        "nameHi": "उत्तरी दिल्ली",
        "nameMr": "उत्तर दिल्ली",
        "en": "North Delhi",
        "hi": "उत्तरी दिल्ली",
        "mr": "उत्तर दिल्ली"
      },
      {
        "id": "north_east_delhi",
        "nameEn": "North East Delhi",
        "nameHi": "उत्तर पूर्वी दिल्ली",
        "nameMr": "ईशान्य दिल्ली",
        "en": "North East Delhi",
        "hi": "उत्तर पूर्वी दिल्ली",
        "mr": "ईशान्य दिल्ली"
      },
      {
        "id": "north_west_delhi",
        "nameEn": "North West Delhi",
        "nameHi": "उत्तर पश्चिमी दिल्ली",
        "nameMr": "वायव्य दिल्ली",
        "en": "North West Delhi",
        "hi": "उत्तर पश्चिमी दिल्ली",
        "mr": "वायव्य दिल्ली"
      },
      {
        "id": "shahdara",
        "nameEn": "Shahdara",
        "nameHi": "शाहदरा",
        "nameMr": "शाहदरा",
        "en": "Shahdara",
        "hi": "शाहदरा",
        "mr": "शाहदरा"
      },
      {
        "id": "south_delhi",
        "nameEn": "South Delhi",
        "nameHi": "दक्षिणी दिल्ली",
        "nameMr": "दक्षिण दिल्ली",
        "en": "South Delhi",
        "hi": "दक्षिणी दिल्ली",
        "mr": "दक्षिण दिल्ली"
      },
      {
        "id": "south_east_delhi",
        "nameEn": "South East Delhi",
        "nameHi": "दक्षिण पूर्वी दिल्ली",
        "nameMr": "आग्नेय दिल्ली",
        "en": "South East Delhi",
        "hi": "दक्षिण पूर्वी दिल्ली",
        "mr": "आग्नेय दिल्ली"
      },
      {
        "id": "south_west_delhi",
        "nameEn": "South West Delhi",
        "nameHi": "दक्षिण पश्चिमी दिल्ली",
        "nameMr": "नैऋत्य दिल्ली",
        "en": "South West Delhi",
        "hi": "दक्षिण पश्चिमी दिल्ली",
        "mr": "नैऋत्य दिल्ली"
      },
      {
        "id": "west_delhi",
        "nameEn": "West Delhi",
        "nameHi": "पश्चिमी दिल्ली",
        "nameMr": "पश्चिम दिल्ली",
        "en": "West Delhi",
        "hi": "पश्चिमी दिल्ली",
        "mr": "पश्चिम दिल्ली"
      }
    ],
    "en": "Delhi (NCT)",
    "hi": "दिल्ली (राष्ट्रीय राजधानी क्षेत्र)",
    "mr": "दिल्ली (एनसीटी)"
  },
  {
    "id": "gujarat",
    "nameEn": "Gujarat",
    "nameHi": "गुजरात",
    "nameMr": "गुजरात",
    "type": "State",
    "districts": [
      {
        "id": "ahmedabad",
        "nameEn": "Ahmedabad",
        "nameHi": "अहमदाबाद",
        "nameMr": "अहमदाबाद",
        "en": "Ahmedabad",
        "hi": "अहमदाबाद",
        "mr": "अहमदाबाद"
      },
      {
        "id": "amreli",
        "nameEn": "Amreli",
        "nameHi": "अमरेली",
        "nameMr": "अमरेली",
        "en": "Amreli",
        "hi": "अमरेली",
        "mr": "अमरेली"
      },
      {
        "id": "anand",
        "nameEn": "Anand",
        "nameHi": "आणंद",
        "nameMr": "आणंद",
        "en": "Anand",
        "hi": "आणंद",
        "mr": "आणंद"
      },
      {
        "id": "aravalli",
        "nameEn": "Aravalli",
        "nameHi": "अरावली",
        "nameMr": "अरावली",
        "en": "Aravalli",
        "hi": "अरावली",
        "mr": "अरावली"
      },
      {
        "id": "banaskantha",
        "nameEn": "Banaskantha",
        "nameHi": "बनासकांठा",
        "nameMr": "बनासकांठा",
        "en": "Banaskantha",
        "hi": "बनासकांठा",
        "mr": "बनासकांठा"
      },
      {
        "id": "bharuch",
        "nameEn": "Bharuch",
        "nameHi": "भरूच",
        "nameMr": "भरूच",
        "en": "Bharuch",
        "hi": "भरूच",
        "mr": "भरूच"
      },
      {
        "id": "bhavnagar",
        "nameEn": "Bhavnagar",
        "nameHi": "भावनगर",
        "nameMr": "भावनगर",
        "en": "Bhavnagar",
        "hi": "भावनगर",
        "mr": "भावनगर"
      },
      {
        "id": "botad",
        "nameEn": "Botad",
        "nameHi": "बोटाद",
        "nameMr": "बोटाद",
        "en": "Botad",
        "hi": "बोटाद",
        "mr": "बोटाद"
      },
      {
        "id": "chhota_udepur",
        "nameEn": "Chhota Udepur",
        "nameHi": "छोटा उदयपुर",
        "nameMr": "छोटा उदेपूर",
        "en": "Chhota Udepur",
        "hi": "छोटा उदयपुर",
        "mr": "छोटा उदेपूर"
      },
      {
        "id": "dahod",
        "nameEn": "Dahod",
        "nameHi": "दाहोद",
        "nameMr": "दाहोद",
        "en": "Dahod",
        "hi": "दाहोद",
        "mr": "दाहोद"
      },
      {
        "id": "dang",
        "nameEn": "Dang",
        "nameHi": "डांग",
        "nameMr": "डांग",
        "en": "Dang",
        "hi": "डांग",
        "mr": "डांग"
      },
      {
        "id": "devbhoomi_dwarka",
        "nameEn": "Devbhoomi Dwarka",
        "nameHi": "देवभूमि द्वारका",
        "nameMr": "देवभूमी द्वारका",
        "en": "Devbhoomi Dwarka",
        "hi": "देवभूमि द्वारका",
        "mr": "देवभूमी द्वारका"
      },
      {
        "id": "gandhinagar",
        "nameEn": "Gandhinagar",
        "nameHi": "गांधीनगर",
        "nameMr": "गांधीनगर",
        "en": "Gandhinagar",
        "hi": "गांधीनगर",
        "mr": "गांधीनगर"
      },
      {
        "id": "gir_somnath",
        "nameEn": "Gir Somnath",
        "nameHi": "गीर सोमनाथ",
        "nameMr": "गीर सोमनाथ",
        "en": "Gir Somnath",
        "hi": "गीर सोमनाथ",
        "mr": "गीर सोमनाथ"
      },
      {
        "id": "jamnagar",
        "nameEn": "Jamnagar",
        "nameHi": "जामनगर",
        "nameMr": "जामनगर",
        "en": "Jamnagar",
        "hi": "जामनगर",
        "mr": "जामनगर"
      },
      {
        "id": "junagadh",
        "nameEn": "Junagadh",
        "nameHi": "जूनागढ़",
        "nameMr": "जुनागढ",
        "en": "Junagadh",
        "hi": "जूनागढ़",
        "mr": "जुनागढ"
      },
      {
        "id": "kheda",
        "nameEn": "Kheda",
        "nameHi": "खेड़ा",
        "nameMr": "खेडा",
        "en": "Kheda",
        "hi": "खेड़ा",
        "mr": "खेडा"
      },
      {
        "id": "kutch",
        "nameEn": "Kutch",
        "nameHi": "कच्छ",
        "nameMr": "कच्छ",
        "en": "Kutch",
        "hi": "कच्छ",
        "mr": "कच्छ"
      },
      {
        "id": "mahisagar",
        "nameEn": "Mahisagar",
        "nameHi": "महीसागर",
        "nameMr": "महीसागर",
        "en": "Mahisagar",
        "hi": "महीसागर",
        "mr": "महीसागर"
      },
      {
        "id": "mehsana",
        "nameEn": "Mehsana",
        "nameHi": "मेहसाणा",
        "nameMr": "मेहसाणा",
        "en": "Mehsana",
        "hi": "मेहसाणा",
        "mr": "मेहसाणा"
      },
      {
        "id": "morbi",
        "nameEn": "Morbi",
        "nameHi": "मोरबी",
        "nameMr": "मोरबी",
        "en": "Morbi",
        "hi": "मोरबी",
        "mr": "मोरबी"
      },
      {
        "id": "narmada",
        "nameEn": "Narmada",
        "nameHi": "नर्मदा",
        "nameMr": "नर्मदा",
        "en": "Narmada",
        "hi": "नर्मदा",
        "mr": "नर्मदा"
      },
      {
        "id": "navsari",
        "nameEn": "Navsari",
        "nameHi": "नवसारी",
        "nameMr": "नवसारी",
        "en": "Navsari",
        "hi": "नवसारी",
        "mr": "नवसारी"
      },
      {
        "id": "panchmahal",
        "nameEn": "Panchmahal",
        "nameHi": "पंचमहल",
        "nameMr": "पंचमहाल",
        "en": "Panchmahal",
        "hi": "पंचमहल",
        "mr": "पंचमहाल"
      },
      {
        "id": "patan",
        "nameEn": "Patan",
        "nameHi": "पाटन",
        "nameMr": "पाटन",
        "en": "Patan",
        "hi": "पाटन",
        "mr": "पाटन"
      },
      {
        "id": "porbandar",
        "nameEn": "Porbandar",
        "nameHi": "पोरबंदर",
        "nameMr": "पोरबंदर",
        "en": "Porbandar",
        "hi": "पोरबंदर",
        "mr": "पोरबंदर"
      },
      {
        "id": "rajkot",
        "nameEn": "Rajkot",
        "nameHi": "राजकोट",
        "nameMr": "राजकोट",
        "en": "Rajkot",
        "hi": "राजकोट",
        "mr": "राजकोट"
      },
      {
        "id": "sabarkantha",
        "nameEn": "Sabarkantha",
        "nameHi": "साबरकांठा",
        "nameMr": "साबरकांठा",
        "en": "Sabarkantha",
        "hi": "साबरकांठा",
        "mr": "साबरकांठा"
      },
      {
        "id": "surat",
        "nameEn": "Surat",
        "nameHi": "सूरत",
        "nameMr": "सूरत",
        "en": "Surat",
        "hi": "सूरत",
        "mr": "सूरत"
      },
      {
        "id": "surendranagar",
        "nameEn": "Surendranagar",
        "nameHi": "सुरेंद्रनगर",
        "nameMr": "सुरेंद्रनगर",
        "en": "Surendranagar",
        "hi": "सुरेंद्रनगर",
        "mr": "सुरेंद्रनगर"
      },
      {
        "id": "tapi",
        "nameEn": "Tapi",
        "nameHi": "तापी",
        "nameMr": "तापी",
        "en": "Tapi",
        "hi": "तापी",
        "mr": "तापी"
      },
      {
        "id": "vadodara",
        "nameEn": "Vadodara",
        "nameHi": "वडोदरा",
        "nameMr": "वडोदरा",
        "en": "Vadodara",
        "hi": "वडोदरा",
        "mr": "वडोदरा"
      },
      {
        "id": "valsad",
        "nameEn": "Valsad",
        "nameHi": "वलसाड",
        "nameMr": "वलसाड",
        "en": "Valsad",
        "hi": "वलसाड",
        "mr": "वलसाड"
      }
    ],
    "en": "Gujarat",
    "hi": "गुजरात",
    "mr": "गुजरात"
  },
  {
    "id": "haryana",
    "nameEn": "Haryana",
    "nameHi": "हरियाणा",
    "nameMr": "हरियाणा",
    "type": "State",
    "districts": [
      {
        "id": "ambala",
        "nameEn": "Ambala",
        "nameHi": "अंबाला",
        "nameMr": "अंबाला",
        "en": "Ambala",
        "hi": "अंबाला",
        "mr": "अंबाला"
      },
      {
        "id": "bhiwani",
        "nameEn": "Bhiwani",
        "nameHi": "भिवानी",
        "nameMr": "भिवानी",
        "en": "Bhiwani",
        "hi": "भिवानी",
        "mr": "भिवानी"
      },
      {
        "id": "charkhi_dadri",
        "nameEn": "Charkhi Dadri",
        "nameHi": "चरखी दादरी",
        "nameMr": "चरखी दादरी",
        "en": "Charkhi Dadri",
        "hi": "चरखी दादरी",
        "mr": "चरखी दादरी"
      },
      {
        "id": "faridabad",
        "nameEn": "Faridabad",
        "nameHi": "फरीदाबाद",
        "nameMr": "फरीदाबाद",
        "en": "Faridabad",
        "hi": "फरीदाबाद",
        "mr": "फरीदाबाद"
      },
      {
        "id": "fatehabad",
        "nameEn": "Fatehabad",
        "nameHi": "फतेहाबाद",
        "nameMr": "फतेहाबाद",
        "en": "Fatehabad",
        "hi": "फतेहाबाद",
        "mr": "फतेहाबाद"
      },
      {
        "id": "gurugram",
        "nameEn": "Gurugram",
        "nameHi": "गुरुग्राम",
        "nameMr": "गुरुग्राम",
        "en": "Gurugram",
        "hi": "गुरुग्राम",
        "mr": "गुरुग्राम"
      },
      {
        "id": "hisar",
        "nameEn": "Hisar",
        "nameHi": "हिसार",
        "nameMr": "हिसार",
        "en": "Hisar",
        "hi": "हिसार",
        "mr": "हिसार"
      },
      {
        "id": "jhajjar",
        "nameEn": "Jhajjar",
        "nameHi": "झज्जर",
        "nameMr": "झज्जर",
        "en": "Jhajjar",
        "hi": "झज्जर",
        "mr": "झज्जर"
      },
      {
        "id": "jind",
        "nameEn": "Jind",
        "nameHi": "जींद",
        "nameMr": "जींद",
        "en": "Jind",
        "hi": "जींद",
        "mr": "जींद"
      },
      {
        "id": "kaithal",
        "nameEn": "Kaithal",
        "nameHi": "कैथल",
        "nameMr": "कैथल",
        "en": "Kaithal",
        "hi": "कैथल",
        "mr": "कैथल"
      },
      {
        "id": "karnal",
        "nameEn": "Karnal",
        "nameHi": "करनाल",
        "nameMr": "करनाल",
        "en": "Karnal",
        "hi": "करनाल",
        "mr": "करनाल"
      },
      {
        "id": "kurukshetra",
        "nameEn": "Kurukshetra",
        "nameHi": "कुरुक्षेत्र",
        "nameMr": "कुरुक्षेत्र",
        "en": "Kurukshetra",
        "hi": "कुरुक्षेत्र",
        "mr": "कुरुक्षेत्र"
      },
      {
        "id": "mahendragarh",
        "nameEn": "Mahendragarh",
        "nameHi": "महेंद्रगढ़",
        "nameMr": "महेंद्रगड",
        "en": "Mahendragarh",
        "hi": "महेंद्रगढ़",
        "mr": "महेंद्रगड"
      },
      {
        "id": "nuh",
        "nameEn": "Nuh",
        "nameHi": "नूह (मेवात)",
        "nameMr": "नूह",
        "en": "Nuh",
        "hi": "नूह (मेवात)",
        "mr": "नूह"
      },
      {
        "id": "palwal",
        "nameEn": "Palwal",
        "nameHi": "पलवल",
        "nameMr": "पलवल",
        "en": "Palwal",
        "hi": "पलवल",
        "mr": "पलवल"
      },
      {
        "id": "panchkula",
        "nameEn": "Panchkula",
        "nameHi": "पंचकुला",
        "nameMr": "पंचकुला",
        "en": "Panchkula",
        "hi": "पंचकुला",
        "mr": "पंचकुला"
      },
      {
        "id": "panipat",
        "nameEn": "Panipat",
        "nameHi": "पानीपत",
        "nameMr": "पानीपत",
        "en": "Panipat",
        "hi": "पानीपत",
        "mr": "पानीपत"
      },
      {
        "id": "rewari",
        "nameEn": "Rewari",
        "nameHi": "रेवाड़ी",
        "nameMr": "रेवाडी",
        "en": "Rewari",
        "hi": "रेवाड़ी",
        "mr": "रेवाडी"
      },
      {
        "id": "rohtak",
        "nameEn": "Rohtak",
        "nameHi": "रोहतक",
        "nameMr": "रोहतक",
        "en": "Rohtak",
        "hi": "रोहतक",
        "mr": "रोहतक"
      },
      {
        "id": "sirsa",
        "nameEn": "Sirsa",
        "nameHi": "सिरसा",
        "nameMr": "सिरसा",
        "en": "Sirsa",
        "hi": "सिरसा",
        "mr": "सिरसा"
      },
      {
        "id": "sonipat",
        "nameEn": "Sonipat",
        "nameHi": "सोनीपत",
        "nameMr": "सोनीपत",
        "en": "Sonipat",
        "hi": "सोनीपत",
        "mr": "सोनीपत"
      },
      {
        "id": "yamunanagar",
        "nameEn": "Yamunanagar",
        "nameHi": "यमुनानगर",
        "nameMr": "यमुनानगर",
        "en": "Yamunanagar",
        "hi": "यमुनानगर",
        "mr": "यमुनानगर"
      }
    ],
    "en": "Haryana",
    "hi": "हरियाणा",
    "mr": "हरियाणा"
  },
  {
    "id": "karnataka",
    "nameEn": "Karnataka",
    "nameHi": "कर्नाटक",
    "nameMr": "कर्नाटक",
    "type": "State",
    "districts": [
      {
        "id": "bagalkot",
        "nameEn": "Bagalkot",
        "nameHi": "बागलकोट",
        "nameMr": "बागलकोट",
        "en": "Bagalkot",
        "hi": "बागलकोट",
        "mr": "बागलकोट"
      },
      {
        "id": "ballari",
        "nameEn": "Ballari",
        "nameHi": "बल्लारी (बेल्लारी)",
        "nameMr": "बल्लारी",
        "en": "Ballari",
        "hi": "बल्लारी (बेल्लारी)",
        "mr": "बल्लारी"
      },
      {
        "id": "belagavi",
        "nameEn": "Belagavi",
        "nameHi": "बेलगाम (बेलगावी)",
        "nameMr": "बेळगाव",
        "en": "Belagavi",
        "hi": "बेलगाम (बेलगावी)",
        "mr": "बेळगाव"
      },
      {
        "id": "bengaluru_rural",
        "nameEn": "Bengaluru Rural",
        "nameHi": "बेंगलुरु ग्रामीण",
        "nameMr": "बंगळुरू ग्रामीण",
        "en": "Bengaluru Rural",
        "hi": "बेंगलुरु ग्रामीण",
        "mr": "बंगळुरू ग्रामीण"
      },
      {
        "id": "bengaluru_urban",
        "nameEn": "Bengaluru Urban",
        "nameHi": "बेंगलुरु शहरी",
        "nameMr": "बंगळुरू शहर",
        "en": "Bengaluru Urban",
        "hi": "बेंगलुरु शहरी",
        "mr": "बंगळुरू शहर"
      },
      {
        "id": "bidar",
        "nameEn": "Bidar",
        "nameHi": "बीदर",
        "nameMr": "बीदर",
        "en": "Bidar",
        "hi": "बीदर",
        "mr": "बीदर"
      },
      {
        "id": "chamarajanagar",
        "nameEn": "Chamarajanagar",
        "nameHi": "चामराजनगर",
        "nameMr": "चामराजनगर",
        "en": "Chamarajanagar",
        "hi": "चामराजनगर",
        "mr": "चामराजनगर"
      },
      {
        "id": "chikkaballapur",
        "nameEn": "Chikkaballapur",
        "nameHi": "चिक्काबल्लापुर",
        "nameMr": "चिक्काबल्लापूर",
        "en": "Chikkaballapur",
        "hi": "चिक्काबल्लापुर",
        "mr": "चिक्काबल्लापूर"
      },
      {
        "id": "chikkamagaluru",
        "nameEn": "Chikkamagaluru",
        "nameHi": "चिक्कमगलुरु",
        "nameMr": "चिक्कमगळुरू",
        "en": "Chikkamagaluru",
        "hi": "चिक्कमगलुरु",
        "mr": "चिक्कमगळुरू"
      },
      {
        "id": "chitradurga",
        "nameEn": "Chitradurga",
        "nameHi": "चित्रदुर्ग",
        "nameMr": "चित्रदुर्ग",
        "en": "Chitradurga",
        "hi": "चित्रदुर्ग",
        "mr": "चित्रदुर्ग"
      },
      {
        "id": "dakshina_kannada",
        "nameEn": "Dakshina Kannada",
        "nameHi": "दक्षिण कन्नड़ (मंगलुरु)",
        "nameMr": "दक्षिण कन्नड",
        "en": "Dakshina Kannada",
        "hi": "दक्षिण कन्नड़ (मंगलुरु)",
        "mr": "दक्षिण कन्नड"
      },
      {
        "id": "davanagere",
        "nameEn": "Davanagere",
        "nameHi": "दावणगेरे",
        "nameMr": "दावणगेरे",
        "en": "Davanagere",
        "hi": "दावणगेरे",
        "mr": "दावणगेरे"
      },
      {
        "id": "dharwad",
        "nameEn": "Dharwad",
        "nameHi": "धारवाड़",
        "nameMr": "धारवाड",
        "en": "Dharwad",
        "hi": "धारवाड़",
        "mr": "धारवाड"
      },
      {
        "id": "gadag",
        "nameEn": "Gadag",
        "nameHi": "गदग",
        "nameMr": "गदग",
        "en": "Gadag",
        "hi": "गदग",
        "mr": "गदग"
      },
      {
        "id": "hassan",
        "nameEn": "Hassan",
        "nameHi": "हासन",
        "nameMr": "हासन",
        "en": "Hassan",
        "hi": "हासन",
        "mr": "हासन"
      },
      {
        "id": "haveri",
        "nameEn": "Haveri",
        "nameHi": "हावेरी",
        "nameMr": "हावेरी",
        "en": "Haveri",
        "hi": "हावेरी",
        "mr": "हावेरी"
      },
      {
        "id": "kalaburagi",
        "nameEn": "Kalaburagi",
        "nameHi": "गुलबर्गा (कलबुर्गी)",
        "nameMr": "कलबुर्गी",
        "en": "Kalaburagi",
        "hi": "गुलबर्गा (कलबुर्गी)",
        "mr": "कलबुर्गी"
      },
      {
        "id": "kodagu",
        "nameEn": "Kodagu",
        "nameHi": "कोडागू (कुर्ग)",
        "nameMr": "कोडागू",
        "en": "Kodagu",
        "hi": "कोडागू (कुर्ग)",
        "mr": "कोडागू"
      },
      {
        "id": "kolar",
        "nameEn": "Kolar",
        "nameHi": "कोलार",
        "nameMr": "कोलार",
        "en": "Kolar",
        "hi": "कोलार",
        "mr": "कोलार"
      },
      {
        "id": "koppal",
        "nameEn": "Koppal",
        "nameHi": "कोप्पल",
        "nameMr": "कोप्पल",
        "en": "Koppal",
        "hi": "कोप्पल",
        "mr": "कोप्पल"
      },
      {
        "id": "mandya",
        "nameEn": "Mandya",
        "nameHi": "मंड्या",
        "nameMr": "मांड्या",
        "en": "Mandya",
        "hi": "मंड्या",
        "mr": "मांड्या"
      },
      {
        "id": "mysuru",
        "nameEn": "Mysuru",
        "nameHi": "मैसूर (मैसूरु)",
        "nameMr": "म्हैसूर",
        "en": "Mysuru",
        "hi": "मैसूर (मैसूरु)",
        "mr": "म्हैसूर"
      },
      {
        "id": "raichur",
        "nameEn": "Raichur",
        "nameHi": "रायचूर",
        "nameMr": "रायचूर",
        "en": "Raichur",
        "hi": "रायचूर",
        "mr": "रायचूर"
      },
      {
        "id": "ramanagara",
        "nameEn": "Ramanagara",
        "nameHi": "रामनगर",
        "nameMr": "रामनगर",
        "en": "Ramanagara",
        "hi": "रामनगर",
        "mr": "रामनगर"
      },
      {
        "id": "shivamogga",
        "nameEn": "Shivamogga",
        "nameHi": "शिमोगा (शिवमोग्गा)",
        "nameMr": "शिवमोग्गा",
        "en": "Shivamogga",
        "hi": "शिमोगा (शिवमोग्गा)",
        "mr": "शिवमोग्गा"
      },
      {
        "id": "tumakuru",
        "nameEn": "Tumakuru",
        "nameHi": "तुमकुर (तुमकुरु)",
        "nameMr": "तुमकुरू",
        "en": "Tumakuru",
        "hi": "तुमकुर (तुमकुरु)",
        "mr": "तुमकुरू"
      },
      {
        "id": "udupi",
        "nameEn": "Udupi",
        "nameHi": "उडुपी",
        "nameMr": "उडुपी",
        "en": "Udupi",
        "hi": "उडुपी",
        "mr": "उडुपी"
      },
      {
        "id": "uttara_kannada",
        "nameEn": "Uttara Kannada",
        "nameHi": "उत्तर कन्नड़ (कारवार)",
        "nameMr": "उत्तर कन्नड",
        "en": "Uttara Kannada",
        "hi": "उत्तर कन्नड़ (कारवार)",
        "mr": "उत्तर कन्नड"
      },
      {
        "id": "vijayanagara",
        "nameEn": "Vijayanagara",
        "nameHi": "विजयनगर",
        "nameMr": "विजयनगर",
        "en": "Vijayanagara",
        "hi": "विजयनगर",
        "mr": "विजयनगर"
      },
      {
        "id": "vijayapura",
        "nameEn": "Vijayapura",
        "nameHi": "बीजापुर (विजयपुरा)",
        "nameMr": "विजयपूर",
        "en": "Vijayapura",
        "hi": "बीजापुर (विजयपुरा)",
        "mr": "विजयपूर"
      },
      {
        "id": "yadgir",
        "nameEn": "Yadgir",
        "nameHi": "यादगीर",
        "nameMr": "यादगीर",
        "en": "Yadgir",
        "hi": "यादगीर",
        "mr": "यादगीर"
      }
    ],
    "en": "Karnataka",
    "hi": "कर्नाटक",
    "mr": "कर्नाटक"
  },
  {
    "id": "kerala",
    "nameEn": "Kerala",
    "nameHi": "केरल",
    "nameMr": "केरळ",
    "type": "State",
    "districts": [
      {
        "id": "alappuzha",
        "nameEn": "Alappuzha",
        "nameHi": "अलप्पुझा (अलेप्पी)",
        "nameMr": "अलप्पुझा",
        "en": "Alappuzha",
        "hi": "अलप्पुझा (अलेप्पी)",
        "mr": "अलप्पुझा"
      },
      {
        "id": "ernakulam",
        "nameEn": "Ernakulam",
        "nameHi": "एर्नाकुलम (कोच्चि)",
        "nameMr": "कोची",
        "en": "Ernakulam",
        "hi": "एर्नाकुलम (कोच्चि)",
        "mr": "कोची"
      },
      {
        "id": "idukki",
        "nameEn": "Idukki",
        "nameHi": "इदुक्की",
        "nameMr": "इदुक्की",
        "en": "Idukki",
        "hi": "इदुक्की",
        "mr": "इदुक्की"
      },
      {
        "id": "kannur",
        "nameEn": "Kannur",
        "nameHi": "कन्नूर",
        "nameMr": "कन्नूर",
        "en": "Kannur",
        "hi": "कन्नूर",
        "mr": "कन्नूर"
      },
      {
        "id": "kasaragod",
        "nameEn": "Kasaragod",
        "nameHi": "कासरगोड",
        "nameMr": "कासरगोड",
        "en": "Kasaragod",
        "hi": "कासरगोड",
        "mr": "कासरगोड"
      },
      {
        "id": "kollam",
        "nameEn": "Kollam",
        "nameHi": "कोल्लम (क्विलोन)",
        "nameMr": "कोल्लम",
        "en": "Kollam",
        "hi": "कोल्लम (क्विलोन)",
        "mr": "कोल्लम"
      },
      {
        "id": "kottayam",
        "nameEn": "Kottayam",
        "nameHi": "कोट्टायम",
        "nameMr": "कोट्टायम",
        "en": "Kottayam",
        "hi": "कोट्टायम",
        "mr": "कोट्टायम"
      },
      {
        "id": "kozhikode",
        "nameEn": "Kozhikode",
        "nameHi": "कोझिकोड (कालीकट)",
        "nameMr": "कोझिकोड",
        "en": "Kozhikode",
        "hi": "कोझिकोड (कालीकट)",
        "mr": "कोझिकोड"
      },
      {
        "id": "malappuram",
        "nameEn": "Malappuram",
        "nameHi": "मलप्पुरम",
        "nameMr": "मलप्पुरम",
        "en": "Malappuram",
        "hi": "मलप्पुरम",
        "mr": "मलप्पुरम"
      },
      {
        "id": "palakkad",
        "nameEn": "Palakkad",
        "nameHi": "पालक्कड़ (पालघाट)",
        "nameMr": "पालक्काड",
        "en": "Palakkad",
        "hi": "पालक्कड़ (पालघाट)",
        "mr": "पालक्काड"
      },
      {
        "id": "pathanamthitta",
        "nameEn": "Pathanamthitta",
        "nameHi": "पथानामथिट्टा",
        "nameMr": "पथानामथिट्टा",
        "en": "Pathanamthitta",
        "hi": "पथानामथिट्टा",
        "mr": "पथानामथिट्टा"
      },
      {
        "id": "thiruvananthapuram",
        "nameEn": "Thiruvananthapuram",
        "nameHi": "तिरुवनंतपुरम (त्रिवेंद्रम)",
        "nameMr": "तिरुअनंतपुरम",
        "en": "Thiruvananthapuram",
        "hi": "तिरुवनंतपुरम (त्रिवेंद्रम)",
        "mr": "तिरुअनंतपुरम"
      },
      {
        "id": "thrissur",
        "nameEn": "Thrissur",
        "nameHi": "त्रिशूर",
        "nameMr": "त्रिशूर",
        "en": "Thrissur",
        "hi": "त्रिशूर",
        "mr": "त्रिशूर"
      },
      {
        "id": "wayanad",
        "nameEn": "Wayanad",
        "nameHi": "वायनाड",
        "nameMr": "वायनाड",
        "en": "Wayanad",
        "hi": "वायनाड",
        "mr": "वायनाड"
      }
    ],
    "en": "Kerala",
    "hi": "केरल",
    "mr": "केरळ"
  },
  {
    "id": "madhya_pradesh",
    "nameEn": "Madhya Pradesh",
    "nameHi": "मध्य प्रदेश",
    "nameMr": "मध्य प्रदेश",
    "type": "State",
    "districts": [
      {
        "id": "agar_malwa",
        "nameEn": "Agar Malwa",
        "nameHi": "आगर मालवा",
        "nameMr": "आगर मालवा",
        "en": "Agar Malwa",
        "hi": "आगर मालवा",
        "mr": "आगर मालवा"
      },
      {
        "id": "alirajpur",
        "nameEn": "Alirajpur",
        "nameHi": "अलीराजपुर",
        "nameMr": "अलिराजपूर",
        "en": "Alirajpur",
        "hi": "अलीराजपुर",
        "mr": "अलिराजपूर"
      },
      {
        "id": "anuppur",
        "nameEn": "Anuppur",
        "nameHi": "अनूपपुर",
        "nameMr": "अनूपपूर",
        "en": "Anuppur",
        "hi": "अनूपपुर",
        "mr": "अनूपपूर"
      },
      {
        "id": "ashoknagar",
        "nameEn": "Ashoknagar",
        "nameHi": "अशोकनगर",
        "nameMr": "अशोकनगर",
        "en": "Ashoknagar",
        "hi": "अशोकनगर",
        "mr": "अशोकनगर"
      },
      {
        "id": "balaghat",
        "nameEn": "Balaghat",
        "nameHi": "बालाघाट",
        "nameMr": "बालाघाट",
        "en": "Balaghat",
        "hi": "बालाघाट",
        "mr": "बालाघाट"
      },
      {
        "id": "barwani",
        "nameEn": "Barwani",
        "nameHi": "बड़वानी",
        "nameMr": "बडवानी",
        "en": "Barwani",
        "hi": "बड़वानी",
        "mr": "बडवानी"
      },
      {
        "id": "betul",
        "nameEn": "Betul",
        "nameHi": "बैतूल",
        "nameMr": "बैतूल",
        "en": "Betul",
        "hi": "बैतूल",
        "mr": "बैतूल"
      },
      {
        "id": "bhind",
        "nameEn": "Bhind",
        "nameHi": "भिंड",
        "nameMr": "भिंड",
        "en": "Bhind",
        "hi": "भिंड",
        "mr": "भिंड"
      },
      {
        "id": "bhopal",
        "nameEn": "Bhopal",
        "nameHi": "भोपाल",
        "nameMr": "भोपाळ",
        "en": "Bhopal",
        "hi": "भोपाल",
        "mr": "भोपाळ"
      },
      {
        "id": "burhanpur",
        "nameEn": "Burhanpur",
        "nameHi": "बुरहानपुर",
        "nameMr": "बुरहानपूर",
        "en": "Burhanpur",
        "hi": "बुरहानपुर",
        "mr": "बुरहानपूर"
      },
      {
        "id": "chhatarpur",
        "nameEn": "Chhatarpur",
        "nameHi": "छतरपुर",
        "nameMr": "छतरपूर",
        "en": "Chhatarpur",
        "hi": "छतरपुर",
        "mr": "छतरपूर"
      },
      {
        "id": "chhindwara",
        "nameEn": "Chhindwara",
        "nameHi": "छिंदवाड़ा",
        "nameMr": "छिंदवाडा",
        "en": "Chhindwara",
        "hi": "छिंदवाड़ा",
        "mr": "छिंदवाडा"
      },
      {
        "id": "damoh",
        "nameEn": "Damoh",
        "nameHi": "दमोह",
        "nameMr": "दमोह",
        "en": "Damoh",
        "hi": "दमोह",
        "mr": "दमोह"
      },
      {
        "id": "datia",
        "nameEn": "Datia",
        "nameHi": "दतिया",
        "nameMr": "दतिया",
        "en": "Datia",
        "hi": "दतिया",
        "mr": "दतिया"
      },
      {
        "id": "dewas",
        "nameEn": "Dewas",
        "nameHi": "देवास",
        "nameMr": "देवास",
        "en": "Dewas",
        "hi": "देवास",
        "mr": "देवास"
      },
      {
        "id": "dhar",
        "nameEn": "Dhar",
        "nameHi": "धार",
        "nameMr": "धार",
        "en": "Dhar",
        "hi": "धार",
        "mr": "धार"
      },
      {
        "id": "dindori",
        "nameEn": "Dindori",
        "nameHi": "डिंडौरी",
        "nameMr": "डिंडोरी",
        "en": "Dindori",
        "hi": "डिंडौरी",
        "mr": "डिंडोरी"
      },
      {
        "id": "guna",
        "nameEn": "Guna",
        "nameHi": "गुना",
        "nameMr": "गुना",
        "en": "Guna",
        "hi": "गुना",
        "mr": "गुना"
      },
      {
        "id": "gwalior",
        "nameEn": "Gwalior",
        "nameHi": "ग्वालियर",
        "nameMr": "ग्वाल्हेर",
        "en": "Gwalior",
        "hi": "ग्वालियर",
        "mr": "ग्वाल्हेर"
      },
      {
        "id": "harda",
        "nameEn": "Harda",
        "nameHi": "हरदा",
        "nameMr": "हरदा",
        "en": "Harda",
        "hi": "हरदा",
        "mr": "हरदा"
      },
      {
        "id": "indore",
        "nameEn": "Indore",
        "nameHi": "इंदौर",
        "nameMr": "इंदूर",
        "en": "Indore",
        "hi": "इंदौर",
        "mr": "इंदूर"
      },
      {
        "id": "jabalpur",
        "nameEn": "Jabalpur",
        "nameHi": "जबलपुर",
        "nameMr": "जबलपूर",
        "en": "Jabalpur",
        "hi": "जबलपुर",
        "mr": "जबलपूर"
      },
      {
        "id": "jhabua",
        "nameEn": "Jhabua",
        "nameHi": "झाबुआ",
        "nameMr": "झाबुआ",
        "en": "Jhabua",
        "hi": "झाबुआ",
        "mr": "झाबुआ"
      },
      {
        "id": "katni",
        "nameEn": "Katni",
        "nameHi": "कटनी",
        "nameMr": "कटनी",
        "en": "Katni",
        "hi": "कटनी",
        "mr": "कटनी"
      },
      {
        "id": "khandwa",
        "nameEn": "Khandwa",
        "nameHi": "खंडवा",
        "nameMr": "खंडवा",
        "en": "Khandwa",
        "hi": "खंडवा",
        "mr": "खंडवा"
      },
      {
        "id": "khargone",
        "nameEn": "Khargone",
        "nameHi": "खरगोन",
        "nameMr": "खरगोन",
        "en": "Khargone",
        "hi": "खरगोन",
        "mr": "खरगोन"
      },
      {
        "id": "mandla",
        "nameEn": "Mandla",
        "nameHi": "मंडला",
        "nameMr": "मंडला",
        "en": "Mandla",
        "hi": "मंडला",
        "mr": "मंडला"
      },
      {
        "id": "mandsaur",
        "nameEn": "Mandsaur",
        "nameHi": "मंदसौर",
        "nameMr": "मंदसौर",
        "en": "Mandsaur",
        "hi": "मंदसौर",
        "mr": "मंदसौर"
      },
      {
        "id": "morena",
        "nameEn": "Morena",
        "nameHi": "मुरैना",
        "nameMr": "मुरैना",
        "en": "Morena",
        "hi": "मुरैना",
        "mr": "मुरैना"
      },
      {
        "id": "narsinghpur",
        "nameEn": "Narsinghpur",
        "nameHi": "नरसिंहपुर",
        "nameMr": "नरसिंगपूर",
        "en": "Narsinghpur",
        "hi": "नरसिंहपुर",
        "mr": "नरसिंगपूर"
      },
      {
        "id": "neemuch",
        "nameEn": "Neemuch",
        "nameHi": "नीमच",
        "nameMr": "नीमच",
        "en": "Neemuch",
        "hi": "नीमच",
        "mr": "नीमच"
      },
      {
        "id": "panna",
        "nameEn": "Panna",
        "nameHi": "पन्ना",
        "nameMr": "पन्ना",
        "en": "Panna",
        "hi": "पन्ना",
        "mr": "पन्ना"
      },
      {
        "id": "raisen",
        "nameEn": "Raisen",
        "nameHi": "रायसेन",
        "nameMr": "रायसेन",
        "en": "Raisen",
        "hi": "रायसेन",
        "mr": "रायसेन"
      },
      {
        "id": "rajgarh",
        "nameEn": "Rajgarh",
        "nameHi": "राजगढ़",
        "nameMr": "राजगड",
        "en": "Rajgarh",
        "hi": "राजगढ़",
        "mr": "राजगड"
      },
      {
        "id": "ratlam",
        "nameEn": "Ratlam",
        "nameHi": "रतलाम",
        "nameMr": "रतलाम",
        "en": "Ratlam",
        "hi": "रतलाम",
        "mr": "रतलाम"
      },
      {
        "id": "rewa",
        "nameEn": "Rewa",
        "nameHi": "रीवा",
        "nameMr": "रीवा",
        "en": "Rewa",
        "hi": "रीवा",
        "mr": "रीवा"
      },
      {
        "id": "sagar",
        "nameEn": "Sagar",
        "nameHi": "सागर",
        "nameMr": "सागर",
        "en": "Sagar",
        "hi": "सागर",
        "mr": "सागर"
      },
      {
        "id": "satna",
        "nameEn": "Satna",
        "nameHi": "सतना",
        "nameMr": "सतना",
        "en": "Satna",
        "hi": "सतना",
        "mr": "सतना"
      },
      {
        "id": "sehore",
        "nameEn": "Sehore",
        "nameHi": "सीहोर",
        "nameMr": "सीहोर",
        "en": "Sehore",
        "hi": "सीहोर",
        "mr": "सीहोर"
      },
      {
        "id": "seoni",
        "nameEn": "Seoni",
        "nameHi": "सिवनी",
        "nameMr": "सिवनी",
        "en": "Seoni",
        "hi": "सिवनी",
        "mr": "सिवनी"
      },
      {
        "id": "shahdol",
        "nameEn": "Shahdol",
        "nameHi": "शहडोल",
        "nameMr": "शहडोल",
        "en": "Shahdol",
        "hi": "शहडोल",
        "mr": "शहडोल"
      },
      {
        "id": "shajapur",
        "nameEn": "Shajapur",
        "nameHi": "शाजापुर",
        "nameMr": "शाजापूर",
        "en": "Shajapur",
        "hi": "शाजापुर",
        "mr": "शाजापूर"
      },
      {
        "id": "sheopur",
        "nameEn": "Sheopur",
        "nameHi": "श्योपुर",
        "nameMr": "श्योपूर",
        "en": "Sheopur",
        "hi": "श्योपुर",
        "mr": "श्योपूर"
      },
      {
        "id": "shivpuri",
        "nameEn": "Shivpuri",
        "nameHi": "शिवपुरी",
        "nameMr": "शिवपुरी",
        "en": "Shivpuri",
        "hi": "शिवपुरी",
        "mr": "शिवपुरी"
      },
      {
        "id": "sidhi",
        "nameEn": "Sidhi",
        "nameHi": "सीधी",
        "nameMr": "सीधी",
        "en": "Sidhi",
        "hi": "सीधी",
        "mr": "सीधी"
      },
      {
        "id": "singrauli",
        "nameEn": "Singrauli",
        "nameHi": "सिंगरौली",
        "nameMr": "सिंगरौली",
        "en": "Singrauli",
        "hi": "सिंगरौली",
        "mr": "सिंगरौली"
      },
      {
        "id": "tikamgarh",
        "nameEn": "Tikamgarh",
        "nameHi": "टीकमगढ़",
        "nameMr": "टीकमगड",
        "en": "Tikamgarh",
        "hi": "टीकमगढ़",
        "mr": "टीकमगड"
      },
      {
        "id": "ujjain",
        "nameEn": "Ujjain",
        "nameHi": "उज्जैन",
        "nameMr": "उज्जैन",
        "en": "Ujjain",
        "hi": "उज्जैन",
        "mr": "उज्जैन"
      },
      {
        "id": "umaria",
        "nameEn": "Umaria",
        "nameHi": "उमरिया",
        "nameMr": "उमरिया",
        "en": "Umaria",
        "hi": "उमरिया",
        "mr": "उमरिया"
      },
      {
        "id": "vidisha",
        "nameEn": "Vidisha",
        "nameHi": "विदिशा",
        "nameMr": "विदिशा",
        "en": "Vidisha",
        "hi": "विदिशा",
        "mr": "विदिशा"
      },
      {
        "id": "mauganj",
        "nameEn": "Mauganj",
        "nameHi": "मऊगंज",
        "nameMr": "मऊगंज",
        "en": "Mauganj",
        "hi": "मऊगंज",
        "mr": "मऊगंज"
      },
      {
        "id": "maihar",
        "nameEn": "Maihar",
        "nameHi": "मैहर",
        "nameMr": "मैहर",
        "en": "Maihar",
        "hi": "मैहर",
        "mr": "मैहर"
      },
      {
        "id": "pandhurna",
        "nameEn": "Pandhurna",
        "nameHi": "पांढुर्णा",
        "nameMr": "पांढुर्णा",
        "en": "Pandhurna",
        "hi": "पांढुर्णा",
        "mr": "पांढुर्णा"
      }
    ],
    "en": "Madhya Pradesh",
    "hi": "मध्य प्रदेश",
    "mr": "मध्य प्रदेश"
  },
  {
    "id": "maharashtra",
    "nameEn": "Maharashtra",
    "nameHi": "महाराष्ट्र",
    "nameMr": "महाराष्ट्र",
    "type": "State",
    "districts": [
      {
        "id": "ahmednagar",
        "nameEn": "Ahilyanagar (Ahmednagar)",
        "nameHi": "अहिल्यानगर (अहमदनगर)",
        "nameMr": "अहिल्यानगर",
        "en": "Ahilyanagar (Ahmednagar)",
        "hi": "अहिल्यानगर (अहमदनगर)",
        "mr": "अहिल्यानगर"
      },
      {
        "id": "akola",
        "nameEn": "Akola",
        "nameHi": "अकोला",
        "nameMr": "अकोला",
        "en": "Akola",
        "hi": "अकोला",
        "mr": "अकोला"
      },
      {
        "id": "amravati",
        "nameEn": "Amravati",
        "nameHi": "अमरावती",
        "nameMr": "अमरावती",
        "en": "Amravati",
        "hi": "अमरावती",
        "mr": "अमरावती"
      },
      {
        "id": "aurangabad",
        "nameEn": "Chhatrapati Sambhajinagar",
        "nameHi": "छत्रपति संभाजीनगर (औरंगाबाद)",
        "nameMr": "छत्रपती संभाजीनगर",
        "en": "Chhatrapati Sambhajinagar",
        "hi": "छत्रपति संभाजीनगर (औरंगाबाद)",
        "mr": "छत्रपती संभाजीनगर"
      },
      {
        "id": "beed",
        "nameEn": "Beed",
        "nameHi": "बीड",
        "nameMr": "बीड",
        "en": "Beed",
        "hi": "बीड",
        "mr": "बीड"
      },
      {
        "id": "bhandara",
        "nameEn": "Bhandara",
        "nameHi": "भंडारा",
        "nameMr": "भंडारा",
        "en": "Bhandara",
        "hi": "भंडारा",
        "mr": "भंडारा"
      },
      {
        "id": "buldhana",
        "nameEn": "Buldhana",
        "nameHi": "बुलढाणा",
        "nameMr": "बुलढाणा",
        "en": "Buldhana",
        "hi": "बुलढाणा",
        "mr": "बुलढाणा"
      },
      {
        "id": "chandrapur",
        "nameEn": "Chandrapur",
        "nameHi": "चंद्रपुर",
        "nameMr": "चंद्रपूर",
        "en": "Chandrapur",
        "hi": "चंद्रपुर",
        "mr": "चंद्रपूर"
      },
      {
        "id": "dhule",
        "nameEn": "Dhule",
        "nameHi": "धुले",
        "nameMr": "धुळे",
        "en": "Dhule",
        "hi": "धुले",
        "mr": "धुळे"
      },
      {
        "id": "gadchiroli",
        "nameEn": "Gadchiroli",
        "nameHi": "गडचिरोली",
        "nameMr": "गडचिरोली",
        "en": "Gadchiroli",
        "hi": "गडचिरोली",
        "mr": "गडचिरोली"
      },
      {
        "id": "gondia",
        "nameEn": "Gondia",
        "nameHi": "गोंदिया",
        "nameMr": "गोंदिया",
        "en": "Gondia",
        "hi": "गोंदिया",
        "mr": "गोंदिया"
      },
      {
        "id": "hingoli",
        "nameEn": "Hingoli",
        "nameHi": "हिंगोली",
        "nameMr": "हिंगोली",
        "en": "Hingoli",
        "hi": "हिंगोली",
        "mr": "हिंगोली"
      },
      {
        "id": "jalgaon",
        "nameEn": "Jalgaon",
        "nameHi": "जलगांव",
        "nameMr": "जळगाव",
        "en": "Jalgaon",
        "hi": "जलगांव",
        "mr": "जळगाव"
      },
      {
        "id": "jalna",
        "nameEn": "Jalna",
        "nameHi": "जालना",
        "nameMr": "जालना",
        "en": "Jalna",
        "hi": "जालना",
        "mr": "जालना"
      },
      {
        "id": "kolhapur",
        "nameEn": "Kolhapur",
        "nameHi": "कोल्हापुर",
        "nameMr": "कोल्हापूर",
        "en": "Kolhapur",
        "hi": "कोल्हापुर",
        "mr": "कोल्हापूर"
      },
      {
        "id": "latur",
        "nameEn": "Latur",
        "nameHi": "लातूर",
        "nameMr": "लातूर",
        "en": "Latur",
        "hi": "लातूर",
        "mr": "लातूर"
      },
      {
        "id": "mumbai_city",
        "nameEn": "Mumbai City",
        "nameHi": "मुंबई शहर",
        "nameMr": "मुंबई शहर",
        "en": "Mumbai City",
        "hi": "मुंबई शहर",
        "mr": "मुंबई शहर"
      },
      {
        "id": "mumbai_suburban",
        "nameEn": "Mumbai Suburban",
        "nameHi": "मुंबई उपनगरीय",
        "nameMr": "मुंबई उपनगर",
        "en": "Mumbai Suburban",
        "hi": "मुंबई उपनगरीय",
        "mr": "मुंबई उपनगर"
      },
      {
        "id": "nagpur",
        "nameEn": "Nagpur",
        "nameHi": "नागपुर",
        "nameMr": "नागपूर",
        "en": "Nagpur",
        "hi": "नागपुर",
        "mr": "नागपूर"
      },
      {
        "id": "nanded",
        "nameEn": "Nanded",
        "nameHi": "नांदेड़",
        "nameMr": "नांदेड",
        "en": "Nanded",
        "hi": "नांदेड़",
        "mr": "नांदेड"
      },
      {
        "id": "nandurbar",
        "nameEn": "Nandurbar",
        "nameHi": "नंदुरबार",
        "nameMr": "नंदुरबार",
        "en": "Nandurbar",
        "hi": "नंदुरबार",
        "mr": "नंदुरबार"
      },
      {
        "id": "nashik",
        "nameEn": "Nashik",
        "nameHi": "नाशिक",
        "nameMr": "नाशिक",
        "en": "Nashik",
        "hi": "नाशिक",
        "mr": "नाशिक"
      },
      {
        "id": "osmanabad",
        "nameEn": "Dharashiv (Osmanabad)",
        "nameHi": "धाराशिव (उस्मानाबाद)",
        "nameMr": "धाराशिव",
        "en": "Dharashiv (Osmanabad)",
        "hi": "धाराशिव (उस्मानाबाद)",
        "mr": "धाराशिव"
      },
      {
        "id": "palghar",
        "nameEn": "Palghar",
        "nameHi": "पालघर",
        "nameMr": "पालघर",
        "en": "Palghar",
        "hi": "पालघर",
        "mr": "पालघर"
      },
      {
        "id": "parbhani",
        "nameEn": "Parbhani",
        "nameHi": "परभणी",
        "nameMr": "परभणी",
        "en": "Parbhani",
        "hi": "परभणी",
        "mr": "परभणी"
      },
      {
        "id": "pune",
        "nameEn": "Pune",
        "nameHi": "पुणे",
        "nameMr": "पुणे",
        "en": "Pune",
        "hi": "पुणे",
        "mr": "पुणे"
      },
      {
        "id": "raigad",
        "nameEn": "Raigad",
        "nameHi": "रायगढ़ (महाराष्ट्र)",
        "nameMr": "रायगड",
        "en": "Raigad",
        "hi": "रायगढ़ (महाराष्ट्र)",
        "mr": "रायगड"
      },
      {
        "id": "ratnagiri",
        "nameEn": "Ratnagiri",
        "nameHi": "रत्नागिरी",
        "nameMr": "रत्नागिरी",
        "en": "Ratnagiri",
        "hi": "रत्नागिरी",
        "mr": "रत्नागिरी"
      },
      {
        "id": "sangli",
        "nameEn": "Sangli",
        "nameHi": "सांगली",
        "nameMr": "सांगली",
        "en": "Sangli",
        "hi": "सांगली",
        "mr": "सांगली"
      },
      {
        "id": "satara",
        "nameEn": "Satara",
        "nameHi": "सतारा",
        "nameMr": "सातारा",
        "en": "Satara",
        "hi": "सतारा",
        "mr": "सातारा"
      },
      {
        "id": "sindhudurg",
        "nameEn": "Sindhudurg",
        "nameHi": "सिंधुदुर्ग",
        "nameMr": "सिंधुदुर्ग",
        "en": "Sindhudurg",
        "hi": "सिंधुदुर्ग",
        "mr": "सिंधुदुर्ग"
      },
      {
        "id": "solapur",
        "nameEn": "Solapur",
        "nameHi": "सोलापुर",
        "nameMr": "सोलापूर",
        "en": "Solapur",
        "hi": "सोलापुर",
        "mr": "सोलापूर"
      },
      {
        "id": "thane",
        "nameEn": "Thane",
        "nameHi": "ठाणे",
        "nameMr": "ठाणे",
        "en": "Thane",
        "hi": "ठाणे",
        "mr": "ठाणे"
      },
      {
        "id": "wardha",
        "nameEn": "Wardha",
        "nameHi": "वर्धा",
        "nameMr": "वर्धा",
        "en": "Wardha",
        "hi": "वर्धा",
        "mr": "वर्धा"
      },
      {
        "id": "washim",
        "nameEn": "Washim",
        "nameHi": "वाशिम",
        "nameMr": "वाशीम",
        "en": "Washim",
        "hi": "वाशिम",
        "mr": "वाशीम"
      },
      {
        "id": "yavatmal",
        "nameEn": "Yavatmal",
        "nameHi": "यवतमाल",
        "nameMr": "यवतमाळ",
        "en": "Yavatmal",
        "hi": "यवतमाल",
        "mr": "यवतमाळ"
      }
    ],
    "en": "Maharashtra",
    "hi": "महाराष्ट्र",
    "mr": "महाराष्ट्र"
  },
  {
    "id": "odisha",
    "nameEn": "Odisha",
    "nameHi": "ओडिशा",
    "nameMr": "ओडिशा",
    "type": "State",
    "districts": [
      {
        "id": "angul",
        "nameEn": "Angul",
        "nameHi": "अनुगुल",
        "nameMr": "अनुगुल",
        "en": "Angul",
        "hi": "अनुगुल",
        "mr": "अनुगुल"
      },
      {
        "id": "balangir",
        "nameEn": "Balangir",
        "nameHi": "बलांगिर",
        "nameMr": "बलांगिर",
        "en": "Balangir",
        "hi": "बलांगिर",
        "mr": "बलांगिर"
      },
      {
        "id": "balasore",
        "nameEn": "Balasore (Baleswar)",
        "nameHi": "बालेश्वर",
        "nameMr": "बालेश्वर",
        "en": "Balasore (Baleswar)",
        "hi": "बालेश्वर",
        "mr": "बालेश्वर"
      },
      {
        "id": "bargarh",
        "nameEn": "Bargarh",
        "nameHi": "बरगढ़",
        "nameMr": "बरगड",
        "en": "Bargarh",
        "hi": "बरगढ़",
        "mr": "बरगड"
      },
      {
        "id": "bhadrak",
        "nameEn": "Bhadrak",
        "nameHi": "भद्रक",
        "nameMr": "भद्रक",
        "en": "Bhadrak",
        "hi": "भद्रक",
        "mr": "भद्रक"
      },
      {
        "id": "boudh",
        "nameEn": "Boudh",
        "nameHi": "बौध",
        "nameMr": "बौध",
        "en": "Boudh",
        "hi": "बौध",
        "mr": "बौध"
      },
      {
        "id": "cuttack",
        "nameEn": "Cuttack",
        "nameHi": "कटक",
        "nameMr": "कटक",
        "en": "Cuttack",
        "hi": "कटक",
        "mr": "कटक"
      },
      {
        "id": "deogarh_or",
        "nameEn": "Deogarh",
        "nameHi": "देवगढ़",
        "nameMr": "देवगड",
        "en": "Deogarh",
        "hi": "देवगढ़",
        "mr": "देवगड"
      },
      {
        "id": "dhenkanal",
        "nameEn": "Dhenkanal",
        "nameHi": "ढेंकानाल",
        "nameMr": "ढेंकानाल",
        "en": "Dhenkanal",
        "hi": "ढेंकानाल",
        "mr": "ढेंकानाल"
      },
      {
        "id": "gajapati",
        "nameEn": "Gajapati",
        "nameHi": "गजपति",
        "nameMr": "गजपती",
        "en": "Gajapati",
        "hi": "गजपति",
        "mr": "गजपती"
      },
      {
        "id": "ganjam",
        "nameEn": "Ganjam",
        "nameHi": "गंजाम",
        "nameMr": "गंजाम",
        "en": "Ganjam",
        "hi": "गंजाम",
        "mr": "गंजाम"
      },
      {
        "id": "jagatsinghpur",
        "nameEn": "Jagatsinghpur",
        "nameHi": "जगतसिंहपुर",
        "nameMr": "जगतसिंहपूर",
        "en": "Jagatsinghpur",
        "hi": "जगतसिंहपुर",
        "mr": "जगतसिंहपूर"
      },
      {
        "id": "jajpur",
        "nameEn": "Jajpur",
        "nameHi": "जाजपुर",
        "nameMr": "जाजपूर",
        "en": "Jajpur",
        "hi": "जाजपुर",
        "mr": "जाजपूर"
      },
      {
        "id": "jharsuguda",
        "nameEn": "Jharsuguda",
        "nameHi": "झारसुगुड़ा",
        "nameMr": "झारसुगुडा",
        "en": "Jharsuguda",
        "hi": "झारसुगुड़ा",
        "mr": "झारसुगुडा"
      },
      {
        "id": "kalahandi",
        "nameEn": "Kalahandi",
        "nameHi": "कालाहांडी",
        "nameMr": "कालाहांडी",
        "en": "Kalahandi",
        "hi": "कालाहांडी",
        "mr": "कालाहांडी"
      },
      {
        "id": "kandhamal",
        "nameEn": "Kandhamal",
        "nameHi": "कंधमाल",
        "nameMr": "कंधमाल",
        "en": "Kandhamal",
        "hi": "कंधमाल",
        "mr": "कंधमाल"
      },
      {
        "id": "kendrapara",
        "nameEn": "Kendrapara",
        "nameHi": "केंद्रपाड़ा",
        "nameMr": "केंद्रपाडा",
        "en": "Kendrapara",
        "hi": "केंद्रपाड़ा",
        "mr": "केंद्रपाडा"
      },
      {
        "id": "kendujhar",
        "nameEn": "Kendujhar (Keonjhar)",
        "nameHi": "केंदुझार",
        "nameMr": "केंदुझार",
        "en": "Kendujhar (Keonjhar)",
        "hi": "केंदुझार",
        "mr": "केंदुझार"
      },
      {
        "id": "khordha",
        "nameEn": "Khordha (Bhubaneswar)",
        "nameHi": "खोर्धा (भुवनेश्वर)",
        "nameMr": "खोर्धा",
        "en": "Khordha (Bhubaneswar)",
        "hi": "खोर्धा (भुवनेश्वर)",
        "mr": "खोर्धा"
      },
      {
        "id": "koraput",
        "nameEn": "Koraput",
        "nameHi": "कोरापुट",
        "nameMr": "कोरापुट",
        "en": "Koraput",
        "hi": "कोरापुट",
        "mr": "कोरापुट"
      },
      {
        "id": "malkangiri",
        "nameEn": "Malkangiri",
        "nameHi": "मलकानगिरी",
        "nameMr": "मलकानगिरी",
        "en": "Malkangiri",
        "hi": "मलकानगिरी",
        "mr": "मलकानगिरी"
      },
      {
        "id": "mayurbhanj",
        "nameEn": "Mayurbhanj",
        "nameHi": "मयूरभंज",
        "nameMr": "मयूरभंज",
        "en": "Mayurbhanj",
        "hi": "मयूरभंज",
        "mr": "मयूरभंज"
      },
      {
        "id": "nabarangpur",
        "nameEn": "Nabarangpur",
        "nameHi": "नबरंगपुर",
        "nameMr": "नबरंगपूर",
        "en": "Nabarangpur",
        "hi": "नबरंगपुर",
        "mr": "नबरंगपूर"
      },
      {
        "id": "nayagarh",
        "nameEn": "Nayagarh",
        "nameHi": "नयागढ़",
        "nameMr": "नयागड",
        "en": "Nayagarh",
        "hi": "नयागढ़",
        "mr": "नयागड"
      },
      {
        "id": "nuapada",
        "nameEn": "Nuapada",
        "nameHi": "नुआपाड़ा",
        "nameMr": "नुआपाडा",
        "en": "Nuapada",
        "hi": "नुआपाड़ा",
        "mr": "नुआपाडा"
      },
      {
        "id": "puri",
        "nameEn": "Puri",
        "nameHi": "पुरी",
        "nameMr": "पुरी",
        "en": "Puri",
        "hi": "पुरी",
        "mr": "पुरी"
      },
      {
        "id": "rayagada",
        "nameEn": "Rayagada",
        "nameHi": "रायगड़ा",
        "nameMr": "रायगडा",
        "en": "Rayagada",
        "hi": "रायगड़ा",
        "mr": "रायगडा"
      },
      {
        "id": "sambalpur",
        "nameEn": "Sambalpur",
        "nameHi": "संबलपुर",
        "nameMr": "संबलपूर",
        "en": "Sambalpur",
        "hi": "संबलपुर",
        "mr": "संबलपूर"
      },
      {
        "id": "subarnapur",
        "nameEn": "Subarnapur (Sonepur)",
        "nameHi": "सुवर्णपुर",
        "nameMr": "सुवर्णपूर",
        "en": "Subarnapur (Sonepur)",
        "hi": "सुवर्णपुर",
        "mr": "सुवर्णपूर"
      },
      {
        "id": "sundargarh",
        "nameEn": "Sundargarh",
        "nameHi": "सुंदरगढ़",
        "nameMr": "सुंदरगड",
        "en": "Sundargarh",
        "hi": "सुंदरगढ़",
        "mr": "सुंदरगड"
      }
    ],
    "en": "Odisha",
    "hi": "ओडिशा",
    "mr": "ओडिशा"
  },
  {
    "id": "punjab",
    "nameEn": "Punjab",
    "nameHi": "पंजाब",
    "nameMr": "पंजाब",
    "type": "State",
    "districts": [
      {
        "id": "amritsar",
        "nameEn": "Amritsar",
        "nameHi": "अमृतसर",
        "nameMr": "अमृतसर",
        "en": "Amritsar",
        "hi": "अमृतसर",
        "mr": "अमृतसर"
      },
      {
        "id": "barnala",
        "nameEn": "Barnala",
        "nameHi": "बरनाला",
        "nameMr": "बरनाला",
        "en": "Barnala",
        "hi": "बरनाला",
        "mr": "बरनाला"
      },
      {
        "id": "bathinda",
        "nameEn": "Bathinda",
        "nameHi": "बठिंडा",
        "nameMr": "बठिंडा",
        "en": "Bathinda",
        "hi": "बठिंडा",
        "mr": "बठिंडा"
      },
      {
        "id": "faridkot",
        "nameEn": "Faridkot",
        "nameHi": "फरीदकोट",
        "nameMr": "फरीदकोट",
        "en": "Faridkot",
        "hi": "फरीदकोट",
        "mr": "फरीदकोट"
      },
      {
        "id": "fatehgarh_sahib",
        "nameEn": "Fatehgarh Sahib",
        "nameHi": "फतेहगढ़ साहिब",
        "nameMr": "फतेहगढ साहिब",
        "en": "Fatehgarh Sahib",
        "hi": "फतेहगढ़ साहिब",
        "mr": "फतेहगढ साहिब"
      },
      {
        "id": "fazilka",
        "nameEn": "Fazilka",
        "nameHi": "फाजिल्का",
        "nameMr": "फाजिल्का",
        "en": "Fazilka",
        "hi": "फाजिल्का",
        "mr": "फाजिल्का"
      },
      {
        "id": "firozpur",
        "nameEn": "Firozpur",
        "nameHi": "फिरोजपुर",
        "nameMr": "फिरोजपूर",
        "en": "Firozpur",
        "hi": "फिरोजपुर",
        "mr": "फिरोजपूर"
      },
      {
        "id": "gurdaspur",
        "nameEn": "Gurdaspur",
        "nameHi": "गुरदासपुर",
        "nameMr": "गुरदासपूर",
        "en": "Gurdaspur",
        "hi": "गुरदासपुर",
        "mr": "गुरदासपूर"
      },
      {
        "id": "hoshiarpur",
        "nameEn": "Hoshiarpur",
        "nameHi": "होशियारपुर",
        "nameMr": "होशियारपूर",
        "en": "Hoshiarpur",
        "hi": "होशियारपुर",
        "mr": "होशियारपूर"
      },
      {
        "id": "jalandhar",
        "nameEn": "Jalandhar",
        "nameHi": "जालंधर",
        "nameMr": "जालंधर",
        "en": "Jalandhar",
        "hi": "जालंधर",
        "mr": "जालंधर"
      },
      {
        "id": "kapurthala",
        "nameEn": "Kapurthala",
        "nameHi": "कपूरथला",
        "nameMr": "कपूरथला",
        "en": "Kapurthala",
        "hi": "कपूरथला",
        "mr": "कपूरथला"
      },
      {
        "id": "ludhiana",
        "nameEn": "Ludhiana",
        "nameHi": "लुधियाना",
        "nameMr": "लुधियाना",
        "en": "Ludhiana",
        "hi": "लुधियाना",
        "mr": "लुधियाना"
      },
      {
        "id": "malerkotla",
        "nameEn": "Malerkotla",
        "nameHi": "मलेरकोटला",
        "nameMr": "मलेरकोटला",
        "en": "Malerkotla",
        "hi": "मलेरकोटला",
        "mr": "मलेरकोटला"
      },
      {
        "id": "mansa",
        "nameEn": "Mansa",
        "nameHi": "मानसा",
        "nameMr": "मानसा",
        "en": "Mansa",
        "hi": "मानसा",
        "mr": "मानसा"
      },
      {
        "id": "moga",
        "nameEn": "Moga",
        "nameHi": "मोगा",
        "nameMr": "मोगा",
        "en": "Moga",
        "hi": "मोगा",
        "mr": "मोगा"
      },
      {
        "id": "pathankot",
        "nameEn": "Pathankot",
        "nameHi": "पठानकोट",
        "nameMr": "पठानकोट",
        "en": "Pathankot",
        "hi": "पठानकोट",
        "mr": "पठानकोट"
      },
      {
        "id": "patiala",
        "nameEn": "Patiala",
        "nameHi": "पटियाला",
        "nameMr": "पटियाला",
        "en": "Patiala",
        "hi": "पटियाला",
        "mr": "पटियाला"
      },
      {
        "id": "rupnagar",
        "nameEn": "Rupnagar (Ropar)",
        "nameHi": "रूपनगर",
        "nameMr": "रूपनगर",
        "en": "Rupnagar (Ropar)",
        "hi": "रूपनगर",
        "mr": "रूपनगर"
      },
      {
        "id": "sas_nagar",
        "nameEn": "SAS Nagar (Mohali)",
        "nameHi": "मोहाली (एसएएस नगर)",
        "nameMr": "मोहाली",
        "en": "SAS Nagar (Mohali)",
        "hi": "मोहाली (एसएएस नगर)",
        "mr": "मोहाली"
      },
      {
        "id": "sangrur",
        "nameEn": "Sangrur",
        "nameHi": "संगरूर",
        "nameMr": "संगरूर",
        "en": "Sangrur",
        "hi": "संगरूर",
        "mr": "संगरूर"
      },
      {
        "id": "sbs_nagar",
        "nameEn": "SBS Nagar (Nawanshahr)",
        "nameHi": "नवांशहर (एसबीएस नगर)",
        "nameMr": "नवांशहर",
        "en": "SBS Nagar (Nawanshahr)",
        "hi": "नवांशहर (एसबीएस नगर)",
        "mr": "नवांशहर"
      },
      {
        "id": "sri_muktsar_sahib",
        "nameEn": "Sri Muktsar Sahib",
        "nameHi": "श्री मुक्तसर साहिब",
        "nameMr": "श्री मुक्तसर साहिब",
        "en": "Sri Muktsar Sahib",
        "hi": "श्री मुक्तसर साहिब",
        "mr": "श्री मुक्तसर साहिब"
      },
      {
        "id": "tarn_taran",
        "nameEn": "Tarn Taran",
        "nameHi": "तरनतारन",
        "nameMr": "तरनतारन",
        "en": "Tarn Taran",
        "hi": "तरनतारन",
        "mr": "तरनतारन"
      }
    ],
    "en": "Punjab",
    "hi": "पंजाब",
    "mr": "पंजाब"
  },
  {
    "id": "rajasthan",
    "nameEn": "Rajasthan",
    "nameHi": "राजस्थान",
    "nameMr": "राजस्थान",
    "type": "State",
    "districts": [
      {
        "id": "ajmer",
        "nameEn": "Ajmer",
        "nameHi": "अजमेर",
        "nameMr": "अजमेर",
        "en": "Ajmer",
        "hi": "अजमेर",
        "mr": "अजमेर"
      },
      {
        "id": "alwar",
        "nameEn": "Alwar",
        "nameHi": "अलवर",
        "nameMr": "अलवर",
        "en": "Alwar",
        "hi": "अलवर",
        "mr": "अलवर"
      },
      {
        "id": "banswara",
        "nameEn": "Banswara",
        "nameHi": "बांसवाड़ा",
        "nameMr": "बांसवाडा",
        "en": "Banswara",
        "hi": "बांसवाड़ा",
        "mr": "बांसवाडा"
      },
      {
        "id": "baran",
        "nameEn": "Baran",
        "nameHi": "बारां",
        "nameMr": "बारां",
        "en": "Baran",
        "hi": "बारां",
        "mr": "बारां"
      },
      {
        "id": "barmer",
        "nameEn": "Barmer",
        "nameHi": "बाड़मेर",
        "nameMr": "बाडमेर",
        "en": "Barmer",
        "hi": "बाड़मेर",
        "mr": "बाडमेर"
      },
      {
        "id": "bharatpur",
        "nameEn": "Bharatpur",
        "nameHi": "भरतपुर",
        "nameMr": "भरतपूर",
        "en": "Bharatpur",
        "hi": "भरतपुर",
        "mr": "भरतपूर"
      },
      {
        "id": "bhilwara",
        "nameEn": "Bhilwara",
        "nameHi": "भीलवाड़ा",
        "nameMr": "भीलवाडा",
        "en": "Bhilwara",
        "hi": "भीलवाड़ा",
        "mr": "भीलवाडा"
      },
      {
        "id": "bikaner",
        "nameEn": "Bikaner",
        "nameHi": "बीकानेर",
        "nameMr": "बीकानेर",
        "en": "Bikaner",
        "hi": "बीकानेर",
        "mr": "बीकानेर"
      },
      {
        "id": "bundi",
        "nameEn": "Bundi",
        "nameHi": "बूंदी",
        "nameMr": "बूंदी",
        "en": "Bundi",
        "hi": "बूंदी",
        "mr": "बूंदी"
      },
      {
        "id": "chittorgarh",
        "nameEn": "Chittorgarh",
        "nameHi": "चित्तौड़गढ़",
        "nameMr": "चित्तोडगड",
        "en": "Chittorgarh",
        "hi": "चित्तौड़गढ़",
        "mr": "चित्तोडगड"
      },
      {
        "id": "churu",
        "nameEn": "Churu",
        "nameHi": "चूरू",
        "nameMr": "चूरू",
        "en": "Churu",
        "hi": "चूरू",
        "mr": "चूरू"
      },
      {
        "id": "dausa",
        "nameEn": "Dausa",
        "nameHi": "दौसा",
        "nameMr": "दौसा",
        "en": "Dausa",
        "hi": "दौसा",
        "mr": "दौसा"
      },
      {
        "id": "dholpur",
        "nameEn": "Dholpur",
        "nameHi": "धौलपुर",
        "nameMr": "धोलपूर",
        "en": "Dholpur",
        "hi": "धौलपुर",
        "mr": "धोलपूर"
      },
      {
        "id": "dungarpur",
        "nameEn": "Dungarpur",
        "nameHi": "डूंगरपुर",
        "nameMr": "डूंगरपूर",
        "en": "Dungarpur",
        "hi": "डूंगरपुर",
        "mr": "डूंगरपूर"
      },
      {
        "id": "hanumangarh",
        "nameEn": "Hanumangarh",
        "nameHi": "हनुमानगढ़",
        "nameMr": "हनुमानगड",
        "en": "Hanumangarh",
        "hi": "हनुमानगढ़",
        "mr": "हनुमानगड"
      },
      {
        "id": "jaipur",
        "nameEn": "Jaipur",
        "nameHi": "जयपुर",
        "nameMr": "जयपूर",
        "en": "Jaipur",
        "hi": "जयपुर",
        "mr": "जयपूर"
      },
      {
        "id": "jaisalmer",
        "nameEn": "Jaisalmer",
        "nameHi": "जैसलमेर",
        "nameMr": "जैसलमेर",
        "en": "Jaisalmer",
        "hi": "जैसलमेर",
        "mr": "जैसलमेर"
      },
      {
        "id": "jalore",
        "nameEn": "Jalore",
        "nameHi": "जालौर",
        "nameMr": "जालोर",
        "en": "Jalore",
        "hi": "जालौर",
        "mr": "जालोर"
      },
      {
        "id": "jhalawar",
        "nameEn": "Jhalawar",
        "nameHi": "झालावाड़",
        "nameMr": "झालावाड",
        "en": "Jhalawar",
        "hi": "झालावाड़",
        "mr": "झालावाड"
      },
      {
        "id": "jhunjhunu",
        "nameEn": "Jhunjhunu",
        "nameHi": "झुंझुनूं",
        "nameMr": "झुंझुनू",
        "en": "Jhunjhunu",
        "hi": "झुंझुनूं",
        "mr": "झुंझुनू"
      },
      {
        "id": "jodhpur",
        "nameEn": "Jodhpur",
        "nameHi": "जोधपुर",
        "nameMr": "जोधपूर",
        "en": "Jodhpur",
        "hi": "जोधपुर",
        "mr": "जोधपूर"
      },
      {
        "id": "karauli",
        "nameEn": "Karauli",
        "nameHi": "करौली",
        "nameMr": "करौली",
        "en": "Karauli",
        "hi": "करौली",
        "mr": "करौली"
      },
      {
        "id": "kota",
        "nameEn": "Kota",
        "nameHi": "कोटा",
        "nameMr": "कोटा",
        "en": "Kota",
        "hi": "कोटा",
        "mr": "कोटा"
      },
      {
        "id": "nagaur",
        "nameEn": "Nagaur",
        "nameHi": "नागौर",
        "nameMr": "नागौर",
        "en": "Nagaur",
        "hi": "नागौर",
        "mr": "नागौर"
      },
      {
        "id": "pali",
        "nameEn": "Pali",
        "nameHi": "पाली",
        "nameMr": "पाली",
        "en": "Pali",
        "hi": "पाली",
        "mr": "पाली"
      },
      {
        "id": "pratapgarh_rj",
        "nameEn": "Pratapgarh",
        "nameHi": "प्रतापगढ़ (राजस्थान)",
        "nameMr": "प्रतापगड",
        "en": "Pratapgarh",
        "hi": "प्रतापगढ़ (राजस्थान)",
        "mr": "प्रतापगड"
      },
      {
        "id": "rajsamand",
        "nameEn": "Rajsamand",
        "nameHi": "राजसमंद",
        "nameMr": "राजसमंद",
        "en": "Rajsamand",
        "hi": "राजसमंद",
        "mr": "राजसमंद"
      },
      {
        "id": "sawai_madhopur",
        "nameEn": "Sawai Madhopur",
        "nameHi": "सवाई माधोपुर",
        "nameMr": "सवाई माधोपूर",
        "en": "Sawai Madhopur",
        "hi": "सवाई माधोपुर",
        "mr": "सवाई माधोपूर"
      },
      {
        "id": "sikar",
        "nameEn": "Sikar",
        "nameHi": "सीकर",
        "nameMr": "सीकर",
        "en": "Sikar",
        "hi": "सीकर",
        "mr": "सीकर"
      },
      {
        "id": "sirohi",
        "nameEn": "Sirohi",
        "nameHi": "सिरोही",
        "nameMr": "सिरोही",
        "en": "Sirohi",
        "hi": "सिरोही",
        "mr": "सिरोही"
      },
      {
        "id": "sri_ganganagar",
        "nameEn": "Sri Ganganagar",
        "nameHi": "श्रीगंगानगर",
        "nameMr": "श्रीगंगानगर",
        "en": "Sri Ganganagar",
        "hi": "श्रीगंगानगर",
        "mr": "श्रीगंगानगर"
      },
      {
        "id": "tonk",
        "nameEn": "Tonk",
        "nameHi": "टोंक",
        "nameMr": "टोंक",
        "en": "Tonk",
        "hi": "टोंक",
        "mr": "टोंक"
      },
      {
        "id": "udaipur",
        "nameEn": "Udaipur",
        "nameHi": "उदयपुर",
        "nameMr": "उदयपूर",
        "en": "Udaipur",
        "hi": "उदयपुर",
        "mr": "उदयपूर"
      },
      {
        "id": "anupgarh",
        "nameEn": "Anupgarh",
        "nameHi": "अनूपगढ़",
        "nameMr": "अनूपगड",
        "en": "Anupgarh",
        "hi": "अनूपगढ़",
        "mr": "अनूपगड"
      },
      {
        "id": "balotra",
        "nameEn": "Balotra",
        "nameHi": "बालोतरा",
        "nameMr": "बालोतरा",
        "en": "Balotra",
        "hi": "बालोतरा",
        "mr": "बालोतरा"
      },
      {
        "id": "beawar",
        "nameEn": "Beawar",
        "nameHi": "ब्यावर",
        "nameMr": "ब्यावर",
        "en": "Beawar",
        "hi": "ब्यावर",
        "mr": "ब्यावर"
      },
      {
        "id": "deeg",
        "nameEn": "Deeg",
        "nameHi": "डीग",
        "nameMr": "डीग",
        "en": "Deeg",
        "hi": "डीग",
        "mr": "डीग"
      },
      {
        "id": "didwana_kuchaman",
        "nameEn": "Didwana Kuchaman",
        "nameHi": "डीडवाना-कुचामन",
        "nameMr": "डीडवाना कुचामन",
        "en": "Didwana Kuchaman",
        "hi": "डीडवाना-कुचामन",
        "mr": "डीडवाना कुचामन"
      },
      {
        "id": "kotputli_behror",
        "nameEn": "Kotputli Behror",
        "nameHi": "कोटपूतली-बहरोड़",
        "nameMr": "कोटपूतली बहरोड",
        "en": "Kotputli Behror",
        "hi": "कोटपूतली-बहरोड़",
        "mr": "कोटपूतली बहरोड"
      },
      {
        "id": "phalodi",
        "nameEn": "Phalodi",
        "nameHi": "फलोदी",
        "nameMr": "फलोदी",
        "en": "Phalodi",
        "hi": "फलोदी",
        "mr": "फलोदी"
      }
    ],
    "en": "Rajasthan",
    "hi": "राजस्थान",
    "mr": "राजस्थान"
  },
  {
    "id": "tamil_nadu",
    "nameEn": "Tamil Nadu",
    "nameHi": "तमिलनाडु",
    "nameMr": "तमिळनाडू",
    "type": "State",
    "districts": [
      {
        "id": "ariyalur",
        "nameEn": "Ariyalur",
        "nameHi": "अरियालुर",
        "nameMr": "अरियालुर",
        "en": "Ariyalur",
        "hi": "अरियालुर",
        "mr": "अरियालुर"
      },
      {
        "id": "chengalpattu",
        "nameEn": "Chengalpattu",
        "nameHi": "चेंगलपट्टू",
        "nameMr": "चेंगलपट्टू",
        "en": "Chengalpattu",
        "hi": "चेंगलपट्टू",
        "mr": "चेंगलपट्टू"
      },
      {
        "id": "chennai",
        "nameEn": "Chennai",
        "nameHi": "चेन्नई",
        "nameMr": "चेन्नई",
        "en": "Chennai",
        "hi": "चेन्नई",
        "mr": "चेन्नई"
      },
      {
        "id": "coimbatore",
        "nameEn": "Coimbatore",
        "nameHi": "कोयंबटूर",
        "nameMr": "कोइम्बतूर",
        "en": "Coimbatore",
        "hi": "कोयंबटूर",
        "mr": "कोइम्बतूर"
      },
      {
        "id": "cuddalore",
        "nameEn": "Cuddalore",
        "nameHi": "कुड्डालोर",
        "nameMr": "कुड्डालोर",
        "en": "Cuddalore",
        "hi": "कुड्डालोर",
        "mr": "कुड्डालोर"
      },
      {
        "id": "dharmapuri",
        "nameEn": "Dharmapuri",
        "nameHi": "धर्मपुरी",
        "nameMr": "धर्मपुरी",
        "en": "Dharmapuri",
        "hi": "धर्मपुरी",
        "mr": "धर्मपुरी"
      },
      {
        "id": "dindigul",
        "nameEn": "Dindigul",
        "nameHi": "दिंडीगुल",
        "nameMr": "दिंडीगुल",
        "en": "Dindigul",
        "hi": "दिंडीगुल",
        "mr": "दिंडीगुल"
      },
      {
        "id": "erode",
        "nameEn": "Erode",
        "nameHi": "इरोड",
        "nameMr": "इरोड",
        "en": "Erode",
        "hi": "इरोड",
        "mr": "इरोड"
      },
      {
        "id": "kanchipuram",
        "nameEn": "Kanchipuram",
        "nameHi": "कांचीपुरम",
        "nameMr": "कांचीपुरम",
        "en": "Kanchipuram",
        "hi": "कांचीपुरम",
        "mr": "कांचीपुरम"
      },
      {
        "id": "kanyakumari",
        "nameEn": "Kanyakumari",
        "nameHi": "कन्याकुमारी",
        "nameMr": "कन्याकुमारी",
        "en": "Kanyakumari",
        "hi": "कन्याकुमारी",
        "mr": "कन्याकुमारी"
      },
      {
        "id": "karur",
        "nameEn": "Karur",
        "nameHi": "करूर",
        "nameMr": "करूर",
        "en": "Karur",
        "hi": "करूर",
        "mr": "करूर"
      },
      {
        "id": "krishnagiri",
        "nameEn": "Krishnagiri",
        "nameHi": "कृष्णगिरि",
        "nameMr": "कृष्णगिरी",
        "en": "Krishnagiri",
        "hi": "कृष्णगिरि",
        "mr": "कृष्णगिरी"
      },
      {
        "id": "madurai",
        "nameEn": "Madurai",
        "nameHi": "मदुरै",
        "nameMr": "मदुराई",
        "en": "Madurai",
        "hi": "मदुरै",
        "mr": "मदुराई"
      },
      {
        "id": "mayiladuthurai",
        "nameEn": "Mayiladuthurai",
        "nameHi": "मयीलादुथुरै",
        "nameMr": "मयीलादुथुरै",
        "en": "Mayiladuthurai",
        "hi": "मयीलादुथुरै",
        "mr": "मयीलादुथुरै"
      },
      {
        "id": "nagapattinam",
        "nameEn": "Nagapattinam",
        "nameHi": "नागापट्टिनम",
        "nameMr": "नागापट्टिनम",
        "en": "Nagapattinam",
        "hi": "नागापट्टिनम",
        "mr": "नागापट्टिनम"
      },
      {
        "id": "namakkal",
        "nameEn": "Namakkal",
        "nameHi": "नमक्कल",
        "nameMr": "नमक्कल",
        "en": "Namakkal",
        "hi": "नमक्कल",
        "mr": "नमक्कल"
      },
      {
        "id": "nilgiris",
        "nameEn": "Nilgiris (Ooty)",
        "nameHi": "नीलगिरि (ऊटी)",
        "nameMr": "नीलगिरी",
        "en": "Nilgiris (Ooty)",
        "hi": "नीलगिरि (ऊटी)",
        "mr": "नीलगिरी"
      },
      {
        "id": "perambalur",
        "nameEn": "Perambalur",
        "nameHi": "पेरम्बलूर",
        "nameMr": "पेरम्बलूर",
        "en": "Perambalur",
        "hi": "पेरम्बलूर",
        "mr": "पेरम्बलूर"
      },
      {
        "id": "pudukkottai",
        "nameEn": "Pudukkottai",
        "nameHi": "पुदुक्कोट्टै",
        "nameMr": "पुदुक्कोट्टै",
        "en": "Pudukkottai",
        "hi": "पुदुक्कोट्टै",
        "mr": "पुदुक्कोट्टै"
      },
      {
        "id": "ramanathapuram",
        "nameEn": "Ramanathapuram",
        "nameHi": "रामनाथपुरम",
        "nameMr": "रामनाथपुरम",
        "en": "Ramanathapuram",
        "hi": "रामनाथपुरम",
        "mr": "रामनाथपुरम"
      },
      {
        "id": "ranipet",
        "nameEn": "Ranipet",
        "nameHi": "रानीपेट",
        "nameMr": "रानीपेट",
        "en": "Ranipet",
        "hi": "रानीपेट",
        "mr": "रानीपेट"
      },
      {
        "id": "salem",
        "nameEn": "Salem",
        "nameHi": "सेलम",
        "nameMr": "सेलम",
        "en": "Salem",
        "hi": "सेलम",
        "mr": "सेलम"
      },
      {
        "id": "sivaganga",
        "nameEn": "Sivaganga",
        "nameHi": "शिवगंगा",
        "nameMr": "शिवगंगा",
        "en": "Sivaganga",
        "hi": "शिवगंगा",
        "mr": "शिवगंगा"
      },
      {
        "id": "tenkasi",
        "nameEn": "Tenkasi",
        "nameHi": "तेनकासी",
        "nameMr": "तेनकासी",
        "en": "Tenkasi",
        "hi": "तेनकासी",
        "mr": "तेनकासी"
      },
      {
        "id": "thanjavur",
        "nameEn": "Thanjavur",
        "nameHi": "तंजावुर",
        "nameMr": "तंजावर",
        "en": "Thanjavur",
        "hi": "तंजावुर",
        "mr": "तंजावर"
      },
      {
        "id": "theni",
        "nameEn": "Theni",
        "nameHi": "ठेनी",
        "nameMr": "ठेनी",
        "en": "Theni",
        "hi": "ठेनी",
        "mr": "ठेनी"
      },
      {
        "id": "thoothukudi",
        "nameEn": "Thoothukudi (Tuticorin)",
        "nameHi": "थूथुकुडी (तूतीकोरिन)",
        "nameMr": "थूथुकुडी",
        "en": "Thoothukudi (Tuticorin)",
        "hi": "थूथुकुडी (तूतीकोरिन)",
        "mr": "थूथुकुडी"
      },
      {
        "id": "tiruchirappalli",
        "nameEn": "Tiruchirappalli (Trichy)",
        "nameHi": "तिरुचिरापल्ली",
        "nameMr": "तिरुचिरापल्ली",
        "en": "Tiruchirappalli (Trichy)",
        "hi": "तिरुचिरापल्ली",
        "mr": "तिरुचिरापल्ली"
      },
      {
        "id": "tirunelveli",
        "nameEn": "Tirunelveli",
        "nameHi": "तिरुनेलवेली",
        "nameMr": "तिरुनेलवेली",
        "en": "Tirunelveli",
        "hi": "तिरुनेलवेली",
        "mr": "तिरुनेलवेली"
      },
      {
        "id": "tirupathur_tn",
        "nameEn": "Tirupathur",
        "nameHi": "तिरुपुथुर",
        "nameMr": "तिरुपुथुर",
        "en": "Tirupathur",
        "hi": "तिरुपुथुर",
        "mr": "तिरुपुथुर"
      },
      {
        "id": "tiruppur",
        "nameEn": "Tiruppur",
        "nameHi": "तिरुपूर",
        "nameMr": "तिरुपूर",
        "en": "Tiruppur",
        "hi": "तिरुपूर",
        "mr": "तिरुपूर"
      },
      {
        "id": "tiruvallur",
        "nameEn": "Tiruvallur",
        "nameHi": "तिरुवल्लूर",
        "nameMr": "तिरुवल्लूर",
        "en": "Tiruvallur",
        "hi": "तिरुवल्लूर",
        "mr": "तिरुवल्लूर"
      },
      {
        "id": "tiruvannamalai",
        "nameEn": "Tiruvannamalai",
        "nameHi": "तिरुवन्नमलाई",
        "nameMr": "तिरुवन्नमलाई",
        "en": "Tiruvannamalai",
        "hi": "तिरुवन्नमलाई",
        "mr": "तिरुवन्नमलाई"
      },
      {
        "id": "tiruvarur",
        "nameEn": "Tiruvarur",
        "nameHi": "तिरुवारूर",
        "nameMr": "तिरुवारूर",
        "en": "Tiruvarur",
        "hi": "तिरुवारूर",
        "mr": "तिरुवारूर"
      },
      {
        "id": "vellore",
        "nameEn": "Vellore",
        "nameHi": "वेल्लोर",
        "nameMr": "वेल्लोर",
        "en": "Vellore",
        "hi": "वेल्लोर",
        "mr": "वेल्लोर"
      },
      {
        "id": "viluppuram",
        "nameEn": "Viluppuram",
        "nameHi": "विलुप्पुरम",
        "nameMr": "विलुप्पुरम",
        "en": "Viluppuram",
        "hi": "विलुप्पुरम",
        "mr": "विलुप्पुरम"
      },
      {
        "id": "virudhunagar",
        "nameEn": "Virudhunagar",
        "nameHi": "विरुधुनगर",
        "nameMr": "विरुधुनगर",
        "en": "Virudhunagar",
        "hi": "विरुधुनगर",
        "mr": "विरुधुनगर"
      }
    ],
    "en": "Tamil Nadu",
    "hi": "तमिलनाडु",
    "mr": "तमिळनाडू"
  },
  {
    "id": "telangana",
    "nameEn": "Telangana",
    "nameHi": "तेलंगाना",
    "nameMr": "तेलंगणा",
    "type": "State",
    "districts": [
      {
        "id": "adilabad",
        "nameEn": "Adilabad",
        "nameHi": "आदिलाबाद",
        "nameMr": "आदिलाबाद",
        "en": "Adilabad",
        "hi": "आदिलाबाद",
        "mr": "आदिलाबाद"
      },
      {
        "id": "bhadradri_kothagudem",
        "nameEn": "Bhadradri Kothagudem",
        "nameHi": "भद्राद्रि कोठागुडेम",
        "nameMr": "भद्राद्रि कोठागुडेम",
        "en": "Bhadradri Kothagudem",
        "hi": "भद्राद्रि कोठागुडेम",
        "mr": "भद्राद्रि कोठागुडेम"
      },
      {
        "id": "hyderabad",
        "nameEn": "Hyderabad",
        "nameHi": "हैदराबाद",
        "nameMr": "हैदराबाद",
        "en": "Hyderabad",
        "hi": "हैदराबाद",
        "mr": "हैदराबाद"
      },
      {
        "id": "jagtial",
        "nameEn": "Jagtial",
        "nameHi": "जगितियाल",
        "nameMr": "जगितियाल",
        "en": "Jagtial",
        "hi": "जगितियाल",
        "mr": "जगितियाल"
      },
      {
        "id": "jangaon",
        "nameEn": "Jangaon",
        "nameHi": "जनगांव",
        "nameMr": "जनगाव",
        "en": "Jangaon",
        "hi": "जनगांव",
        "mr": "जनगाव"
      },
      {
        "id": "jayashankar_bhupalpally",
        "nameEn": "Jayashankar Bhupalpally",
        "nameHi": "जयशंकर भूपालपल्ली",
        "nameMr": "जयशंकर भूपालपल्ली",
        "en": "Jayashankar Bhupalpally",
        "hi": "जयशंकर भूपालपल्ली",
        "mr": "जयशंकर भूपालपल्ली"
      },
      {
        "id": "jogulamba_gadwal",
        "nameEn": "Jogulamba Gadwal",
        "nameHi": "जोगुलम्बा गडवाल",
        "nameMr": "जोगुलम्बा गडवाल",
        "en": "Jogulamba Gadwal",
        "hi": "जोगुलम्बा गडवाल",
        "mr": "जोगुलम्बा गडवाल"
      },
      {
        "id": "kamareddy",
        "nameEn": "Kamareddy",
        "nameHi": "कामारेड्डी",
        "nameMr": "कामारेड्डी",
        "en": "Kamareddy",
        "hi": "कामारेड्डी",
        "mr": "कामारेड्डी"
      },
      {
        "id": "karimnagar",
        "nameEn": "Karimnagar",
        "nameHi": "करीमनगर",
        "nameMr": "करीमनगर",
        "en": "Karimnagar",
        "hi": "करीमनगर",
        "mr": "करीमनगर"
      },
      {
        "id": "khammam",
        "nameEn": "Khammam",
        "nameHi": "खम्मम",
        "nameMr": "खम्मम",
        "en": "Khammam",
        "hi": "खम्मम",
        "mr": "खम्मम"
      },
      {
        "id": "asifabad",
        "nameEn": "Kumuram Bheem Asifabad",
        "nameHi": "कुमुराम भीम आसिफाबाद",
        "nameMr": "कुमुराम भीम आसिफाबाद",
        "en": "Kumuram Bheem Asifabad",
        "hi": "कुमुराम भीम आसिफाबाद",
        "mr": "कुमुराम भीम आसिफाबाद"
      },
      {
        "id": "mahabubabad",
        "nameEn": "Mahabubabad",
        "nameHi": "महबूबाबाद",
        "nameMr": "महबूबाबाद",
        "en": "Mahabubabad",
        "hi": "महबूबाबाद",
        "mr": "महबूबाबाद"
      },
      {
        "id": "mahabubnagar",
        "nameEn": "Mahabubnagar",
        "nameHi": "महबूबनगर",
        "nameMr": "महबूबनगर",
        "en": "Mahabubnagar",
        "hi": "महबूबनगर",
        "mr": "महबूबनगर"
      },
      {
        "id": "mancherial",
        "nameEn": "Mancherial",
        "nameHi": "मंचेरियल",
        "nameMr": "मंचेरियल",
        "en": "Mancherial",
        "hi": "मंचेरियल",
        "mr": "मंचेरियल"
      },
      {
        "id": "medak",
        "nameEn": "Medak",
        "nameHi": "मेडक",
        "nameMr": "मेडक",
        "en": "Medak",
        "hi": "मेडक",
        "mr": "मेडक"
      },
      {
        "id": "medchal_malkajgiri",
        "nameEn": "Medchal Malkajgiri",
        "nameHi": "मेडचल-मलकाजगिरि",
        "nameMr": "मेडचल मलकाजगिरि",
        "en": "Medchal Malkajgiri",
        "hi": "मेडचल-मलकाजगिरि",
        "mr": "मेडचल मलकाजगिरि"
      },
      {
        "id": "mulugu",
        "nameEn": "Mulugu",
        "nameHi": "मुलुगु",
        "nameMr": "मुलुगु",
        "en": "Mulugu",
        "hi": "मुलुगु",
        "mr": "मुलुगु"
      },
      {
        "id": "nalgonda",
        "nameEn": "Nalgonda",
        "nameHi": "नलगोंडा",
        "nameMr": "नलगोंडा",
        "en": "Nalgonda",
        "hi": "नलगोंडा",
        "mr": "नलगोंडा"
      },
      {
        "id": "narayanpet",
        "nameEn": "Narayanpet",
        "nameHi": "नारायणपेट",
        "nameMr": "नारायणपेट",
        "en": "Narayanpet",
        "hi": "नारायणपेट",
        "mr": "नारायणपेट"
      },
      {
        "id": "nirmal",
        "nameEn": "Nirmal",
        "nameHi": "निर्मल",
        "nameMr": "निर्मल",
        "en": "Nirmal",
        "hi": "निर्मल",
        "mr": "निर्मल"
      },
      {
        "id": "nizamabad",
        "nameEn": "Nizamabad",
        "nameHi": "निजामाबाद",
        "nameMr": "निजामाबाद",
        "en": "Nizamabad",
        "hi": "निजामाबाद",
        "mr": "निजामाबाद"
      },
      {
        "id": "peddapalli",
        "nameEn": "Peddapalli",
        "nameHi": "पेद्दापल्ली",
        "nameMr": "पेद्दापल्ली",
        "en": "Peddapalli",
        "hi": "पेद्दापल्ली",
        "mr": "पेद्दापल्ली"
      },
      {
        "id": "rajanna_sircilla",
        "nameEn": "Rajanna Sircilla",
        "nameHi": "राजन्ना सिरसिला",
        "nameMr": "राजन्ना सिरसिला",
        "en": "Rajanna Sircilla",
        "hi": "राजन्ना सिरसिला",
        "mr": "राजन्ना सिरसिला"
      },
      {
        "id": "ranga_reddy",
        "nameEn": "Ranga Reddy",
        "nameHi": "रंगारेड्डी",
        "nameMr": "रंगारेड्डी",
        "en": "Ranga Reddy",
        "hi": "रंगारेड्डी",
        "mr": "रंगारेड्डी"
      },
      {
        "id": "sangareddy",
        "nameEn": "Sangareddy",
        "nameHi": "संगारेड्डी",
        "nameMr": "संगारेड्डी",
        "en": "Sangareddy",
        "hi": "संगारेड्डी",
        "mr": "संगारेड्डी"
      },
      {
        "id": "siddipet",
        "nameEn": "Siddipet",
        "nameHi": "सिद्धिपेट",
        "nameMr": "सिद्धिपेट",
        "en": "Siddipet",
        "hi": "सिद्धिपेट",
        "mr": "सिद्धिपेट"
      },
      {
        "id": "suryapet",
        "nameEn": "Suryapet",
        "nameHi": "सूर्यापेट",
        "nameMr": "सूर्यापेट",
        "en": "Suryapet",
        "hi": "सूर्यापेट",
        "mr": "सूर्यापेट"
      },
      {
        "id": "vikarabad",
        "nameEn": "Vikarabad",
        "nameHi": "विकाराबाद",
        "nameMr": "विकाराबाद",
        "en": "Vikarabad",
        "hi": "विकाराबाद",
        "mr": "विकाराबाद"
      },
      {
        "id": "wanaparthy",
        "nameEn": "Wanaparthy",
        "nameHi": "वनापार्थी",
        "nameMr": "वनापार्थी",
        "en": "Wanaparthy",
        "hi": "वनापार्थी",
        "mr": "वनापार्थी"
      },
      {
        "id": "warangal",
        "nameEn": "Warangal",
        "nameHi": "वरंगल",
        "nameMr": "वरंगल",
        "en": "Warangal",
        "hi": "वरंगल",
        "mr": "वरंगल"
      },
      {
        "id": "hanamkonda",
        "nameEn": "Hanamkonda",
        "nameHi": "हनमकोंडा",
        "nameMr": "हनमकोंडा",
        "en": "Hanamkonda",
        "hi": "हनमकोंडा",
        "mr": "हनमकोंडा"
      },
      {
        "id": "yadadri_bhuvanagiri",
        "nameEn": "Yadadri Bhuvanagiri",
        "nameHi": "यादाद्रि भुवनागिरि",
        "nameMr": "यादाद्रि भुवनागिरि",
        "en": "Yadadri Bhuvanagiri",
        "hi": "यादाद्रि भुवनागिरि",
        "mr": "यादाद्रि भुवनागिरि"
      }
    ],
    "en": "Telangana",
    "hi": "तेलंगाना",
    "mr": "तेलंगणा"
  },
  {
    "id": "uttar_pradesh",
    "nameEn": "Uttar Pradesh",
    "nameHi": "उत्तर प्रदेश",
    "nameMr": "उत्तर प्रदेश",
    "type": "State",
    "districts": [
      {
        "id": "agra",
        "nameEn": "Agra",
        "nameHi": "आगरा",
        "nameMr": "आग्रा",
        "en": "Agra",
        "hi": "आगरा",
        "mr": "आग्रा"
      },
      {
        "id": "aligarh",
        "nameEn": "Aligarh",
        "nameHi": "अलीगढ़",
        "nameMr": "अलिगढ",
        "en": "Aligarh",
        "hi": "अलीगढ़",
        "mr": "अलिगढ"
      },
      {
        "id": "ambbedkar_nagar",
        "nameEn": "Ambedkar Nagar",
        "nameHi": "अंबेडकर नगर",
        "nameMr": "आंबेडकर नगर",
        "en": "Ambedkar Nagar",
        "hi": "अंबेडकर नगर",
        "mr": "आंबेडकर नगर"
      },
      {
        "id": "amethi",
        "nameEn": "Amethi",
        "nameHi": "अमेठी",
        "nameMr": "अमेठी",
        "en": "Amethi",
        "hi": "अमेठी",
        "mr": "अमेठी"
      },
      {
        "id": "amroha",
        "nameEn": "Amroha",
        "nameHi": "अमरोहा",
        "nameMr": "अमरोहा",
        "en": "Amroha",
        "hi": "अमरोहा",
        "mr": "अमरोहा"
      },
      {
        "id": "auraiya",
        "nameEn": "Auraiya",
        "nameHi": "औरैया",
        "nameMr": "औरैया",
        "en": "Auraiya",
        "hi": "औरैया",
        "mr": "औरैया"
      },
      {
        "id": "ayodhya",
        "nameEn": "Ayodhya",
        "nameHi": "अयोध्या",
        "nameMr": "अयोध्या",
        "en": "Ayodhya",
        "hi": "अयोध्या",
        "mr": "अयोध्या"
      },
      {
        "id": "azamgarh",
        "nameEn": "Azamgarh",
        "nameHi": "आजमगढ़",
        "nameMr": "आजमगड",
        "en": "Azamgarh",
        "hi": "आजमगढ़",
        "mr": "आजमगड"
      },
      {
        "id": "baghpat",
        "nameEn": "Baghpat",
        "nameHi": "बागपत",
        "nameMr": "बागपत",
        "en": "Baghpat",
        "hi": "बागपत",
        "mr": "बागपत"
      },
      {
        "id": "bahraich",
        "nameEn": "Bahraich",
        "nameHi": "बहराइच",
        "nameMr": "बहराइच",
        "en": "Bahraich",
        "hi": "बहराइच",
        "mr": "बहराइच"
      },
      {
        "id": "ballia",
        "nameEn": "Ballia",
        "nameHi": "बलिया",
        "nameMr": "बलिया",
        "en": "Ballia",
        "hi": "बलिया",
        "mr": "बलिया"
      },
      {
        "id": "balrampur_up",
        "nameEn": "Balrampur",
        "nameHi": "बलरामपुर (यूपी)",
        "nameMr": "बलरामपूर",
        "en": "Balrampur",
        "hi": "बलरामपुर (यूपी)",
        "mr": "बलरामपूर"
      },
      {
        "id": "banda",
        "nameEn": "Banda",
        "nameHi": "बांदा",
        "nameMr": "बांदा",
        "en": "Banda",
        "hi": "बांदा",
        "mr": "बांदा"
      },
      {
        "id": "barabanki",
        "nameEn": "Barabanki",
        "nameHi": "बाराबंकी",
        "nameMr": "बाराबंकी",
        "en": "Barabanki",
        "hi": "बाराबंकी",
        "mr": "बाराबंकी"
      },
      {
        "id": "bareilly",
        "nameEn": "Bareilly",
        "nameHi": "बरेली",
        "nameMr": "बरेली",
        "en": "Bareilly",
        "hi": "बरेली",
        "mr": "बरेली"
      },
      {
        "id": "basti",
        "nameEn": "Basti",
        "nameHi": "बस्ती",
        "nameMr": "बस्ती",
        "en": "Basti",
        "hi": "बस्ती",
        "mr": "बस्ती"
      },
      {
        "id": "bhadohi",
        "nameEn": "Bhadohi",
        "nameHi": "भदोही",
        "nameMr": "भदोही",
        "en": "Bhadohi",
        "hi": "भदोही",
        "mr": "भदोही"
      },
      {
        "id": "bijnor",
        "nameEn": "Bijnor",
        "nameHi": "बिजनौर",
        "nameMr": "बिजनौर",
        "en": "Bijnor",
        "hi": "बिजनौर",
        "mr": "बिजनौर"
      },
      {
        "id": "budaun",
        "nameEn": "Budaun",
        "nameHi": "बदायूं",
        "nameMr": "बदायूं",
        "en": "Budaun",
        "hi": "बदायूं",
        "mr": "बदायूं"
      },
      {
        "id": "bulandshahr",
        "nameEn": "Bulandshahr",
        "nameHi": "बुलंदशहर",
        "nameMr": "बुलंदशहर",
        "en": "Bulandshahr",
        "hi": "बुलंदशहर",
        "mr": "बुलंदशहर"
      },
      {
        "id": "chandauli",
        "nameEn": "Chandauli",
        "nameHi": "चंदौली",
        "nameMr": "चंदौली",
        "en": "Chandauli",
        "hi": "चंदौली",
        "mr": "चंदौली"
      },
      {
        "id": "chitrakoot",
        "nameEn": "Chitrakoot",
        "nameHi": "चित्रकूट",
        "nameMr": "चित्रकूट",
        "en": "Chitrakoot",
        "hi": "चित्रकूट",
        "mr": "चित्रकूट"
      },
      {
        "id": "deoria",
        "nameEn": "Deoria",
        "nameHi": "देवरिया",
        "nameMr": "देवरिया",
        "en": "Deoria",
        "hi": "देवरिया",
        "mr": "देवरिया"
      },
      {
        "id": "etah",
        "nameEn": "Etah",
        "nameHi": "एटा",
        "nameMr": "एटा",
        "en": "Etah",
        "hi": "एटा",
        "mr": "एटा"
      },
      {
        "id": "etawah",
        "nameEn": "Etawah",
        "nameHi": "इटावा",
        "nameMr": "इटावा",
        "en": "Etawah",
        "hi": "इटावा",
        "mr": "इटावा"
      },
      {
        "id": "farrukhabad",
        "nameEn": "Farrukhabad",
        "nameHi": "फर्रुखाबाद",
        "nameMr": "फरुखाबाद",
        "en": "Farrukhabad",
        "hi": "फर्रुखाबाद",
        "mr": "फरुखाबाद"
      },
      {
        "id": "fatehpur",
        "nameEn": "Fatehpur",
        "nameHi": "फतेहपुर",
        "nameMr": "फतेहपूर",
        "en": "Fatehpur",
        "hi": "फतेहपुर",
        "mr": "फतेहपूर"
      },
      {
        "id": "firozabad",
        "nameEn": "Firozabad",
        "nameHi": "फिरोजाबाद",
        "nameMr": "फिरोजाबाद",
        "en": "Firozabad",
        "hi": "फिरोजाबाद",
        "mr": "फिरोजाबाद"
      },
      {
        "id": "gautam_buddha_nagar",
        "nameEn": "Gautam Buddha Nagar (Noida)",
        "nameHi": "गौतम बुद्ध नगर (नोएडा)",
        "nameMr": "नोएडा",
        "en": "Gautam Buddha Nagar (Noida)",
        "hi": "गौतम बुद्ध नगर (नोएडा)",
        "mr": "नोएडा"
      },
      {
        "id": "ghaziabad",
        "nameEn": "Ghaziabad",
        "nameHi": "गाजियाबाद",
        "nameMr": "गाझियाबाद",
        "en": "Ghaziabad",
        "hi": "गाजियाबाद",
        "mr": "गाझियाबाद"
      },
      {
        "id": "ghazipur",
        "nameEn": "Ghazipur",
        "nameHi": "गाजीपुर",
        "nameMr": "गाझीपूर",
        "en": "Ghazipur",
        "hi": "गाजीपुर",
        "mr": "गाझीपूर"
      },
      {
        "id": "gonda",
        "nameEn": "Gonda",
        "nameHi": "गोंडा",
        "nameMr": "गोंडा",
        "en": "Gonda",
        "hi": "गोंडा",
        "mr": "गोंडा"
      },
      {
        "id": "gorakhpur",
        "nameEn": "Gorakhpur",
        "nameHi": "गोरखपुर",
        "nameMr": "गोरखपूर",
        "en": "Gorakhpur",
        "hi": "गोरखपुर",
        "mr": "गोरखपूर"
      },
      {
        "id": "hamirpur_up",
        "nameEn": "Hamirpur",
        "nameHi": "हमीरपुर (यूपी)",
        "nameMr": "हमीरपूर",
        "en": "Hamirpur",
        "hi": "हमीरपुर (यूपी)",
        "mr": "हमीरपूर"
      },
      {
        "id": "hapur",
        "nameEn": "Hapur",
        "nameHi": "हापुड़",
        "nameMr": "हापूड",
        "en": "Hapur",
        "hi": "हापुड़",
        "mr": "हापूड"
      },
      {
        "id": "hardoi",
        "nameEn": "Hardoi",
        "nameHi": "हरदोई",
        "nameMr": "हरदोई",
        "en": "Hardoi",
        "hi": "हरदोई",
        "mr": "हरदोई"
      },
      {
        "id": "hathras",
        "nameEn": "Hathras",
        "nameHi": "हाथरस",
        "nameMr": "हाथरस",
        "en": "Hathras",
        "hi": "हाथरस",
        "mr": "हाथरस"
      },
      {
        "id": "jalaun",
        "nameEn": "Jalaun",
        "nameHi": "जालौन",
        "nameMr": "जालौन",
        "en": "Jalaun",
        "hi": "जालौन",
        "mr": "जालौन"
      },
      {
        "id": "jaunpur",
        "nameEn": "Jaunpur",
        "nameHi": "जौनपुर",
        "nameMr": "जौनपूर",
        "en": "Jaunpur",
        "hi": "जौनपुर",
        "mr": "जौनपूर"
      },
      {
        "id": "jhansi",
        "nameEn": "Jhansi",
        "nameHi": "झांसी",
        "nameMr": "झांसी",
        "en": "Jhansi",
        "hi": "झांसी",
        "mr": "झांसी"
      },
      {
        "id": "kannauj",
        "nameEn": "Kannauj",
        "nameHi": "कन्नौज",
        "nameMr": "कन्नौज",
        "en": "Kannauj",
        "hi": "कन्नौज",
        "mr": "कन्नौज"
      },
      {
        "id": "kanpur_dehat",
        "nameEn": "Kanpur Dehat",
        "nameHi": "कानपुर देहात",
        "nameMr": "कानपूर देहात",
        "en": "Kanpur Dehat",
        "hi": "कानपुर देहात",
        "mr": "कानपूर देहात"
      },
      {
        "id": "kanpur_nagar",
        "nameEn": "Kanpur Nagar",
        "nameHi": "कानपुर नगर",
        "nameMr": "कानपूर शहर",
        "en": "Kanpur Nagar",
        "hi": "कानपुर नगर",
        "mr": "कानपूर शहर"
      },
      {
        "id": "kasganj",
        "nameEn": "Kasganj",
        "nameHi": "कासगंज",
        "nameMr": "कासगंज",
        "en": "Kasganj",
        "hi": "कासगंज",
        "mr": "कासगंज"
      },
      {
        "id": "kaushambi",
        "nameEn": "Kaushambi",
        "nameHi": "कौशांबी",
        "nameMr": "कौशांबी",
        "en": "Kaushambi",
        "hi": "कौशांबी",
        "mr": "कौशांबी"
      },
      {
        "id": "kheri",
        "nameEn": "Lakhimpur Kheri",
        "nameHi": "लखीमपुर खीरी",
        "nameMr": "लखीमपूर खिरी",
        "en": "Lakhimpur Kheri",
        "hi": "लखीमपुर खीरी",
        "mr": "लखीमपूर खिरी"
      },
      {
        "id": "kushinagar",
        "nameEn": "Kushinagar",
        "nameHi": "कुशीनगर",
        "nameMr": "कुशीनगर",
        "en": "Kushinagar",
        "hi": "कुशीनगर",
        "mr": "कुशीनगर"
      },
      {
        "id": "lalitpur",
        "nameEn": "Lalitpur",
        "nameHi": "ललितपुर",
        "nameMr": "ललितपूर",
        "en": "Lalitpur",
        "hi": "ललितपुर",
        "mr": "ललितपूर"
      },
      {
        "id": "lucknow",
        "nameEn": "Lucknow",
        "nameHi": "लखनऊ",
        "nameMr": "लखनऊ",
        "en": "Lucknow",
        "hi": "लखनऊ",
        "mr": "लखनऊ"
      },
      {
        "id": "maharajganj",
        "nameEn": "Maharajganj",
        "nameHi": "महराजगंज",
        "nameMr": "महराजगंज",
        "en": "Maharajganj",
        "hi": "महराजगंज",
        "mr": "महराजगंज"
      },
      {
        "id": "mahoba",
        "nameEn": "Mahoba",
        "nameHi": "महोबा",
        "nameMr": "महोबा",
        "en": "Mahoba",
        "hi": "महोबा",
        "mr": "महोबा"
      },
      {
        "id": "mainpuri",
        "nameEn": "Mainpuri",
        "nameHi": "मैनपुरी",
        "nameMr": "मैनपुरी",
        "en": "Mainpuri",
        "hi": "मैनपुरी",
        "mr": "मैनपुरी"
      },
      {
        "id": "mathura",
        "nameEn": "Mathura",
        "nameHi": "मथुरा",
        "nameMr": "मथुरा",
        "en": "Mathura",
        "hi": "मथुरा",
        "mr": "मथुरा"
      },
      {
        "id": "mau",
        "nameEn": "Mau",
        "nameHi": "मऊ",
        "nameMr": "मऊ",
        "en": "Mau",
        "hi": "मऊ",
        "mr": "मऊ"
      },
      {
        "id": "meerut",
        "nameEn": "Meerut",
        "nameHi": "मेरठ",
        "nameMr": "मेरठ",
        "en": "Meerut",
        "hi": "मेरठ",
        "mr": "मेरठ"
      },
      {
        "id": "mirzapur",
        "nameEn": "Mirzapur",
        "nameHi": "मिर्जापुर",
        "nameMr": "मिर्झापूर",
        "en": "Mirzapur",
        "hi": "मिर्जापुर",
        "mr": "मिर्झापूर"
      },
      {
        "id": "moradabad",
        "nameEn": "Moradabad",
        "nameHi": "मुरादाबाद",
        "nameMr": "मुरादाबाद",
        "en": "Moradabad",
        "hi": "मुरादाबाद",
        "mr": "मुरादाबाद"
      },
      {
        "id": "muzaffarnagar",
        "nameEn": "Muzaffarnagar",
        "nameHi": "मुजफ्फरनगर",
        "nameMr": "मुझफ्फरनगर",
        "en": "Muzaffarnagar",
        "hi": "मुजफ्फरनगर",
        "mr": "मुझफ्फरनगर"
      },
      {
        "id": "pilibhit",
        "nameEn": "Pilibhit",
        "nameHi": "पीलीभीत",
        "nameMr": "पीलीभीत",
        "en": "Pilibhit",
        "hi": "पीलीभीत",
        "mr": "पीलीभीत"
      },
      {
        "id": "pratapgarh_up",
        "nameEn": "Pratapgarh",
        "nameHi": "प्रतापगढ़ (यूपी)",
        "nameMr": "प्रतापगड",
        "en": "Pratapgarh",
        "hi": "प्रतापगढ़ (यूपी)",
        "mr": "प्रतापगड"
      },
      {
        "id": "prayagraj",
        "nameEn": "Prayagraj (Allahabad)",
        "nameHi": "प्रयागराज (इलाहाबाद)",
        "nameMr": "प्रयागराज",
        "en": "Prayagraj (Allahabad)",
        "hi": "प्रयागराज (इलाहाबाद)",
        "mr": "प्रयागराज"
      },
      {
        "id": "raebareli",
        "nameEn": "Raebareli",
        "nameHi": "रायबरेली",
        "nameMr": "रायबरेली",
        "en": "Raebareli",
        "hi": "रायबरेली",
        "mr": "रायबरेली"
      },
      {
        "id": "rampur",
        "nameEn": "Rampur",
        "nameHi": "रामपुर",
        "nameMr": "रामपूर",
        "en": "Rampur",
        "hi": "रामपुर",
        "mr": "रामपूर"
      },
      {
        "id": "saharanpur",
        "nameEn": "Saharanpur",
        "nameHi": "सहारनपुर",
        "nameMr": "सहारनपूर",
        "en": "Saharanpur",
        "hi": "सहारनपुर",
        "mr": "सहारनपूर"
      },
      {
        "id": "sambhal",
        "nameEn": "Sambhal",
        "nameHi": "संभल",
        "nameMr": "संभल",
        "en": "Sambhal",
        "hi": "संभल",
        "mr": "संभल"
      },
      {
        "id": "sant_kabir_nagar",
        "nameEn": "Sant Kabir Nagar",
        "nameHi": "संत कबीर नगर",
        "nameMr": "संत कबीर नगर",
        "en": "Sant Kabir Nagar",
        "hi": "संत कबीर नगर",
        "mr": "संत कबीर नगर"
      },
      {
        "id": "shahjahanpur",
        "nameEn": "Shahjahanpur",
        "nameHi": "शाहजहांपुर",
        "nameMr": "शाहजहानपूर",
        "en": "Shahjahanpur",
        "hi": "शाहजहांपुर",
        "mr": "शाहजहानपूर"
      },
      {
        "id": "shamli",
        "nameEn": "Shamli",
        "nameHi": "शामली",
        "nameMr": "शामली",
        "en": "Shamli",
        "hi": "शामली",
        "mr": "शामली"
      },
      {
        "id": "shravasti",
        "nameEn": "Shravasti",
        "nameHi": "श्रावस्ती",
        "nameMr": "श्रावस्ती",
        "en": "Shravasti",
        "hi": "श्रावस्ती",
        "mr": "श्रावस्ती"
      },
      {
        "id": "siddharthnagar",
        "nameEn": "Siddharthnagar",
        "nameHi": "सिद्धार्थनगर",
        "nameMr": "सिद्धार्थनगर",
        "en": "Siddharthnagar",
        "hi": "सिद्धार्थनगर",
        "mr": "सिद्धार्थनगर"
      },
      {
        "id": "sitapur",
        "nameEn": "Sitapur",
        "nameHi": "सीतापुर",
        "nameMr": "सीतापूर",
        "en": "Sitapur",
        "hi": "सीतापुर",
        "mr": "सीतापूर"
      },
      {
        "id": "sonbhadra",
        "nameEn": "Sonbhadra",
        "nameHi": "सोनभद्र",
        "nameMr": "सोनभद्र",
        "en": "Sonbhadra",
        "hi": "सोनभद्र",
        "mr": "सोनभद्र"
      },
      {
        "id": "sultanpur",
        "nameEn": "Sultanpur",
        "nameHi": "सुल्तानपुर",
        "nameMr": "सुल्तानपूर",
        "en": "Sultanpur",
        "hi": "सुल्तानपुर",
        "mr": "सुल्तानपूर"
      },
      {
        "id": "unnao",
        "nameEn": "Unnao",
        "nameHi": "उन्नाव",
        "nameMr": "उन्नाव",
        "en": "Unnao",
        "hi": "उन्नाव",
        "mr": "उन्नाव"
      },
      {
        "id": "varanasi",
        "nameEn": "Varanasi (Kashi)",
        "nameHi": "वाराणसी (काशी)",
        "nameMr": "वाराणसी",
        "en": "Varanasi (Kashi)",
        "hi": "वाराणसी (काशी)",
        "mr": "वाराणसी"
      }
    ],
    "en": "Uttar Pradesh",
    "hi": "उत्तर प्रदेश",
    "mr": "उत्तर प्रदेश"
  },
  {
    "id": "uttarakhand",
    "nameEn": "Uttarakhand",
    "nameHi": "उत्तराखंड",
    "nameMr": "उत्तराखंड",
    "type": "State",
    "districts": [
      {
        "id": "almora",
        "nameEn": "Almora",
        "nameHi": "अल्मोड़ा",
        "nameMr": "अल्मोडा",
        "en": "Almora",
        "hi": "अल्मोड़ा",
        "mr": "अल्मोडा"
      },
      {
        "id": "bageshwar",
        "nameEn": "Bageshwar",
        "nameHi": "बागेश्वर",
        "nameMr": "बागेश्वर",
        "en": "Bageshwar",
        "hi": "बागेश्वर",
        "mr": "बागेश्वर"
      },
      {
        "id": "chamoli",
        "nameEn": "Chamoli",
        "nameHi": "चमोली",
        "nameMr": "चमोली",
        "en": "Chamoli",
        "hi": "चमोली",
        "mr": "चमोली"
      },
      {
        "id": "champawat",
        "nameEn": "Champawat",
        "nameHi": "चंपावत",
        "nameMr": "चंपावत",
        "en": "Champawat",
        "hi": "चंपावत",
        "mr": "चंपावत"
      },
      {
        "id": "dehradun",
        "nameEn": "Dehradun",
        "nameHi": "देहरादून",
        "nameMr": "डेहराडून",
        "en": "Dehradun",
        "hi": "देहरादून",
        "mr": "डेहराडून"
      },
      {
        "id": "haridwar",
        "nameEn": "Haridwar",
        "nameHi": "हरिद्वार",
        "nameMr": "हरिद्वार",
        "en": "Haridwar",
        "hi": "हरिद्वार",
        "mr": "हरिद्वार"
      },
      {
        "id": "nainital",
        "nameEn": "Nainital",
        "nameHi": "नैनीताल",
        "nameMr": "नैनीताल",
        "en": "Nainital",
        "hi": "नैनीताल",
        "mr": "नैनीताल"
      },
      {
        "id": "pauri_garhwal",
        "nameEn": "Pauri Garhwal",
        "nameHi": "पौड़ी गढ़वाल",
        "nameMr": "पौडी गडवाल",
        "en": "Pauri Garhwal",
        "hi": "पौड़ी गढ़वाल",
        "mr": "पौडी गडवाल"
      },
      {
        "id": "pithoragarh",
        "nameEn": "Pithoragarh",
        "nameHi": "पिथौरागढ़",
        "nameMr": "पिथौरागड",
        "en": "Pithoragarh",
        "hi": "पिथौरागढ़",
        "mr": "पिथौरागड"
      },
      {
        "id": "rudraprayag",
        "nameEn": "Rudraprayag",
        "nameHi": "रुद्रप्रयाग",
        "nameMr": "रुद्रप्रयाग",
        "en": "Rudraprayag",
        "hi": "रुद्रप्रयाग",
        "mr": "रुद्रप्रयाग"
      },
      {
        "id": "tehri_garhwal",
        "nameEn": "Tehri Garhwal",
        "nameHi": "टिहरी गढ़वाल",
        "nameMr": "टिहरी गडवाल",
        "en": "Tehri Garhwal",
        "hi": "टिहरी गढ़वाल",
        "mr": "टिहरी गडवाल"
      },
      {
        "id": "udham_singh_nagar",
        "nameEn": "Udham Singh Nagar",
        "nameHi": "ऊधम सिंह नगर",
        "nameMr": "उधमसिंग नगर",
        "en": "Udham Singh Nagar",
        "hi": "ऊधम सिंह नगर",
        "mr": "उधमसिंग नगर"
      },
      {
        "id": "uttarkashi",
        "nameEn": "Uttarkashi",
        "nameHi": "उत्तरकाशी",
        "nameMr": "उत्तरकाशी",
        "en": "Uttarkashi",
        "hi": "उत्तरकाशी",
        "mr": "उत्तरकाशी"
      }
    ],
    "en": "Uttarakhand",
    "hi": "उत्तराखंड",
    "mr": "उत्तराखंड"
  },
  {
    "id": "west_bengal",
    "nameEn": "West Bengal",
    "nameHi": "पश्चिम बंगाल",
    "nameMr": "पश्चिम बंगाल",
    "type": "State",
    "districts": [
      {
        "id": "alipurduar",
        "nameEn": "Alipurduar",
        "nameHi": "अलीपुरद्वार",
        "nameMr": "अलिपूरद्वार",
        "en": "Alipurduar",
        "hi": "अलीपुरद्वार",
        "mr": "अलिपूरद्वार"
      },
      {
        "id": "bankura",
        "nameEn": "Bankura",
        "nameHi": "बांकुरा",
        "nameMr": "बांकुरा",
        "en": "Bankura",
        "hi": "बांकुरा",
        "mr": "बांकुरा"
      },
      {
        "id": "birbhum",
        "nameEn": "Birbhum",
        "nameHi": "बीरभूम",
        "nameMr": "बीरभूम",
        "en": "Birbhum",
        "hi": "बीरभूम",
        "mr": "बीरभूम"
      },
      {
        "id": "cooch_behar",
        "nameEn": "Cooch Behar",
        "nameHi": "कूचबिहार",
        "nameMr": "कूचबिहार",
        "en": "Cooch Behar",
        "hi": "कूचबिहार",
        "mr": "कूचबिहार"
      },
      {
        "id": "dakshin_dinajpur",
        "nameEn": "Dakshin Dinajpur",
        "nameHi": "दक्षिण दिनाजपुर",
        "nameMr": "दक्षिण दिनाजपूर",
        "en": "Dakshin Dinajpur",
        "hi": "दक्षिण दिनाजपुर",
        "mr": "दक्षिण दिनाजपूर"
      },
      {
        "id": "darjeeling",
        "nameEn": "Darjeeling",
        "nameHi": "दार्जिलिंग",
        "nameMr": "दार्जिलिंग",
        "en": "Darjeeling",
        "hi": "दार्जिलिंग",
        "mr": "दार्जिलिंग"
      },
      {
        "id": "hooghly",
        "nameEn": "Hooghly",
        "nameHi": "हुगली",
        "nameMr": "हुगळी",
        "en": "Hooghly",
        "hi": "हुगली",
        "mr": "हुगळी"
      },
      {
        "id": "howrah",
        "nameEn": "Howrah",
        "nameHi": "हावड़ा",
        "nameMr": "हावडा",
        "en": "Howrah",
        "hi": "हावड़ा",
        "mr": "हावडा"
      },
      {
        "id": "jalpaiguri",
        "nameEn": "Jalpaiguri",
        "nameHi": "जलपाईगुड़ी",
        "nameMr": "जलपाईगुडी",
        "en": "Jalpaiguri",
        "hi": "जलपाईगुड़ी",
        "mr": "जलपाईगुडी"
      },
      {
        "id": "jhargram",
        "nameEn": "Jhargram",
        "nameHi": "झारग्राम",
        "nameMr": "झारग्राम",
        "en": "Jhargram",
        "hi": "झारग्राम",
        "mr": "झारग्राम"
      },
      {
        "id": "kalimpong",
        "nameEn": "Kalimpong",
        "nameHi": "कालिम्पोंग",
        "nameMr": "कालिम्पोंग",
        "en": "Kalimpong",
        "hi": "कालिम्पोंग",
        "mr": "कालिम्पोंग"
      },
      {
        "id": "kolkata",
        "nameEn": "Kolkata",
        "nameHi": "कोलकाता",
        "nameMr": "कोलकाता",
        "en": "Kolkata",
        "hi": "कोलकाता",
        "mr": "कोलकाता"
      },
      {
        "id": "malda",
        "nameEn": "Malda",
        "nameHi": "मालदा",
        "nameMr": "मालदा",
        "en": "Malda",
        "hi": "मालदा",
        "mr": "मालदा"
      },
      {
        "id": "murshidabad",
        "nameEn": "Murshidabad",
        "nameHi": "मूर्शिदाबाद",
        "nameMr": "मुरशिदाबाद",
        "en": "Murshidabad",
        "hi": "मूर्शिदाबाद",
        "mr": "मुरशिदाबाद"
      },
      {
        "id": "nadia",
        "nameEn": "Nadia",
        "nameHi": "नदिया",
        "nameMr": "नदिया",
        "en": "Nadia",
        "hi": "नदिया",
        "mr": "नदिया"
      },
      {
        "id": "north_24_parganas",
        "nameEn": "North 24 Parganas",
        "nameHi": "उत्तर 24 परगना",
        "nameMr": "उत्तर २४ परगना",
        "en": "North 24 Parganas",
        "hi": "उत्तर 24 परगना",
        "mr": "उत्तर २४ परगना"
      },
      {
        "id": "paschim_bardhaman",
        "nameEn": "Paschim Bardhaman (Asansol)",
        "nameHi": "पश्चिम बर्धमान",
        "nameMr": "पश्चिम बर्धमान",
        "en": "Paschim Bardhaman (Asansol)",
        "hi": "पश्चिम बर्धमान",
        "mr": "पश्चिम बर्धमान"
      },
      {
        "id": "paschim_medinipur",
        "nameEn": "Paschim Medinipur",
        "nameHi": "पश्चिम मेदिनीपुर",
        "nameMr": "पश्चिम मेदिनीपूर",
        "en": "Paschim Medinipur",
        "hi": "पश्चिम मेदिनीपुर",
        "mr": "पश्चिम मेदिनीपूर"
      },
      {
        "id": "purba_bardhaman",
        "nameEn": "Purba Bardhaman",
        "nameHi": "पूर्व बर्धमान",
        "nameMr": "पूर्व बर्धमान",
        "en": "Purba Bardhaman",
        "hi": "पूर्व बर्धमान",
        "mr": "पूर्व बर्धमान"
      },
      {
        "id": "purba_medinipur",
        "nameEn": "Purba Medinipur",
        "nameHi": "पूर्व मेदिनीपुर",
        "nameMr": "पूर्व मेदिनीपूर",
        "en": "Purba Medinipur",
        "hi": "पूर्व मेदिनीपुर",
        "mr": "पूर्व मेदिनीपूर"
      },
      {
        "id": "purulia",
        "nameEn": "Purulia",
        "nameHi": "पुरुलिया",
        "nameMr": "पुरुलिया",
        "en": "Purulia",
        "hi": "पुरुलिया",
        "mr": "पुरुलिया"
      },
      {
        "id": "south_24_parganas",
        "nameEn": "South 24 Parganas",
        "nameHi": "दक्षिण 24 परगना",
        "nameMr": "दक्षिण २४ परगना",
        "en": "South 24 Parganas",
        "hi": "दक्षिण 24 परगना",
        "mr": "दक्षिण २४ परगना"
      },
      {
        "id": "uttar_dinajpur",
        "nameEn": "Uttar Dinajpur",
        "nameHi": "उत्तर दिनाजपुर",
        "nameMr": "उत्तर दिनाजपूर",
        "en": "Uttar Dinajpur",
        "hi": "उत्तर दिनाजपुर",
        "mr": "उत्तर दिनाजपूर"
      }
    ],
    "en": "West Bengal",
    "hi": "पश्चिम बंगाल",
    "mr": "पश्चिम बंगाल"
  }
];

export function getStatesList(lang: 'hi' | 'mr' | 'en' = 'hi'): Array<{ id: string; label: string }> {
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
