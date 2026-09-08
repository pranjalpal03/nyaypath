import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.audit import init_db
from app.api.routes import health, voice, classify, rag, generate
from app.rag.vectorstore import VectorStoreManager
from app.rag.ingest_seed_data import seed_expanded_statutes

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION,
    description="A Personalized Legal and Grievance Navigator for Citizen Empowerment",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(health.router, tags=["Health Check"])
app.include_router(voice.router, prefix=settings.API_V1_STR, tags=["Voice ASR Layer"])
app.include_router(classify.router, prefix=settings.API_V1_STR, tags=["Domain Classifier & NER"])
app.include_router(rag.router, prefix=settings.API_V1_STR, tags=["Knowledge Retrieval (RAG)"])
app.include_router(generate.router, prefix=settings.API_V1_STR, tags=["Navigation & Generation"])

@app.on_event("startup")
async def startup_event():
    print(f"[NyayPath Backend] Starting {settings.APP_NAME} v{settings.VERSION}...")
    init_db()
    
    # Initialize ChromaDB & seed statutory data
    try:
        vs = VectorStoreManager()
        print("[Startup] Seeding 11 statutory legal domains into ChromaDB...")
        seed_expanded_statutes(vs)
    except Exception as e:
        print(f"[Startup Notice] Document seeding result: {e}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
