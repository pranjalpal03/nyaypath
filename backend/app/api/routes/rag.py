from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from app.rag.vectorstore import VectorStoreManager
from app.rag.retriever import LegalRetriever

router = APIRouter()
vectorstore_manager = VectorStoreManager()
legal_retriever = LegalRetriever(vectorstore_manager)

class SearchRequest(BaseModel):
    query: str
    top_k: Optional[int] = 5

@router.post("/rag/search", summary="Search statutory legal database")
async def search_statutes(req: SearchRequest):
    context_str, sources = legal_retriever.retrieve_grounded_context(req.query, top_k=req.top_k or 5)
    return {
        "query": req.query,
        "results_count": len(sources),
        "sources": sources,
        "formatted_context": context_str
    }
