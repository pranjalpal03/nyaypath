# NyayPath: A Personalized Legal and Grievance Navigator for Citizen Empowerment

![NyayPath Architecture](https://img.shields.io/badge/Architecture-FastAPI%20%7C%20Next.js%2014%20%7C%20ChromaDB%20%7C%20RAG-amber)
![Python Version](https://img.shields.io/badge/Python-3.10%2B-blue)
![License](https://img.shields.io/badge/License-MIT-green)

NyayPath is a production-ready, AI-driven legal and grievance navigation platform engineered to empower Indian citizens. It bridges the gap between complex legal statutes, fragmented administrative bodies, and citizens (especially in rural/semi-urban areas) by providing instant domain classification, jurisdictional routing, grounded legal summaries, draft complaint letters, and step-by-step escalation timelines in **Hindi (हिन्दी)**, **Marathi (मराठी)**, and **English**.

---

## 🏛️ System Architecture

```text
                               +------------------------------------------+
                               |         Next.js 14 Web Frontend          |
                               | (Voice ASR Mic, Multilingual Dashboard)  |
                               +--------------------+---------------------+
                                                    | HTTP REST / JSON
                                                    v
+----------------------------------------------------------------------------------------------------+
|                                    FastAPI Backend Application                                     |
|                                                                                                    |
|  +------------------------+   +------------------------+   +------------------------------------+  |
|  | Voice / ASR Endpoint   |   | Language Normalizer    |   | Module F: PII Security Service     |  |
|  | (/api/v1/voice/...)    |   | & Colloquial Corrector |   | (Aadhaar, Phone, Email Redaction)  |  |
|  +-----------+------------+   +-----------+------------+   +-----------------+------------------+  |
|              |                            |                                  |                     |
|              v                            v                                  v                     |
|  +------------------------+   +------------------------+   +------------------------------------+  |
|  | Domain Classifier      |   | Named Entity Recogn-   |   | Module D: Jurisdictional Routing   |  |
|  | (6 Primary Domains)    |   | ition (NER) Extractor  |   | & Confidence Gate (<0.70)          |  |
|  +-----------+------------+   +-----------+------------+   +-----------------+------------------+  |
|              |                            |                                  |                     |
|              +----------------------------+----------------------------------+                     |
|                                           |                                                        |
|                                           v                                                        |
|  +----------------------------------------------------------------------------------------------+  |
|  |             Module C: Knowledge Retrieval Layer (ChromaDB Vector Store RAG)                  |  |
|  |  Statutes: Consumer Act 2019, RTI Act 2005, NSAP Scheme Guidelines, CPGRAMS, IT Act 2000      |  |
|  +----------------------------------------+-----------------------------------------------------+  |
|                                           |                                                        |
|                                           v                                                        |
|  +----------------------------------------------------------------------------------------------+  |
|  |            Module E: Response Generator & SQLite Audit Logger                                |  |
|  |  (Plain Summary, Draft Complaint Letter, Escalation Matrix, Session Audit Log)                  |  |
|  +----------------------------------------------------------------------------------------------+  |
+----------------------------------------------------------------------------------------------------+
```

---

## 🚀 Key Features & Modules

1. **Module A: User Interaction & Voice ASR Layer**:
   - Web browser `MediaRecorder` API audio capture with real-time waveform animation.
   - Multilingual text normalization (Hindi, Marathi, English) with legal spelling standardization.
2. **Module B: Multi-Label Classification & NER Layer**:
   - Multi-label classification across 6 primary domains:
     - Pension & Social Welfare (NSAP, PM-Kisan)
     - Land Records & Property Disputes (7/12, Mutation)
     - Consumer Protection & Defective Services
     - Labor Rights & Wage Issues (MGNREGA)
     - RTI (Right to Information)
     - Cyber Grievances & Digital Fraud
   - NER Extraction for `Government Scheme`, `Geographic Location`, `Authority`, and `Incident Dates`.
3. **Module C: Knowledge Retrieval (RAG)**:
   - Chunking of Indian statutes (400-500 tokens with 10% overlap) embedded into ChromaDB via `sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2`.
   - Top-5 cosine similarity search with zero-hallucination legal grounding prompts.
4. **Module D: Jurisdictional Mapping & Confidence Gate**:
   - Computes first point of contact authority (BDO, SDM, Tehsildar, Consumer Forum, Cyber Cell) and secondary venues.
   - **Confidence Gate (< 0.70)**: Automatically triggers structured clarification prompts if routing confidence is below 70%.
5. **Module E: Response Generation & Structured Output**:
   - **Plain Summary**: Citizen-friendly explanation of rights in chosen language.
   - **Draft Complaint Letter**: Formally structured legal letter with place, date, subject, facts, relevant sections, and sign-off placeholders.
   - **Escalation Matrix**: Step-by-step action timeline (Day 0-15 Primary -> Day 16-30 First Appeal -> Day 31-60 RTI -> Day 61+ Tribunal).
6. **Module F: Security, Privacy & Audit Logging**:
   - Redacts PII (Aadhaar, Phone, Email, PAN) prior to vector search or external processing.
   - SQLite audit logs recording session IDs, confidence scores, and retrieved chunk IDs.

---

## 🛠️ Local Development & Setup

### Prerequisites
- Python 3.10+
- Node.js 18+ / 20+
- Docker & Docker Compose (Optional)

### 1. Backend Setup

```bash
cd backend

# Create virtual environment
py -3 -m venv venv
# Activate on Windows:
venv\Scripts\activate
# Activate on Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run backend server
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Backend API Docs will be live at `http://localhost:8000/docs`.

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run Next.js development server
npm run dev
```

Frontend application will be live at `http://localhost:3000`.

---

## 🧪 Running Automated Unit Tests

```bash
cd backend
python -m pytest tests/test_backend.py -v
```

---

## 🐳 Docker Deployment

Spin up both FastAPI backend and Next.js frontend with persistent vector database storage in a single command:

```bash
docker-compose up --build -d
```

Services:
- **Backend API**: `http://localhost:8000`
- **Frontend Dashboard**: `http://localhost:3000`

---

## ☁️ Cloud Deployment Guidelines

### 1. Render / AWS EC2 (Backend)
- Point to `backend/Dockerfile`.
- Set Environment variables:
  - `ENV=production`
  - `CHROMA_PERSIST_DIRECTORY=/app/data/chroma_db`
- Attach persistent storage volume for `/app/data/chroma_db` and `/app/nyaypath_audit.db`.

### 2. Vercel (Frontend)
- Deploy `/frontend` directory as Next.js project.
- Set Environment variable:
  - `NEXT_PUBLIC_BACKEND_URL=https://your-backend-api.onrender.com`

---

## 📜 API Endpoint Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/health` | GET | Health check & system status |
| `/api/v1/voice/transcribe` | POST | Transcribe WAV/WebM voice recording |
| `/api/v1/classify` | POST | Domain classification & jurisdictional routing |
| `/api/v1/rag/search` | POST | Vector search in statutory legal database |
| `/api/v1/navigate` | POST | Full end-to-end NyayPath navigator |
