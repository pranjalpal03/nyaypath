from typing import List, Dict, Any, Tuple
from app.rag.vectorstore import VectorStoreManager

class LegalRetriever:
    def __init__(self, vectorstore: VectorStoreManager):
        self.vectorstore = vectorstore

    def retrieve_grounded_context(self, query: str, top_k: int = 5) -> Tuple[str, List[Dict[str, Any]]]:
        """
        Retrieves top_k context chunks and formats strict legal context string.
        """
        results = self.vectorstore.search(query, top_k=top_k)
        
        if not results:
            formatted_context = "No specific statutory text found in vector database."
            return formatted_context, []

        context_blocks = []
        for idx, item in enumerate(results, 1):
            context_blocks.append(
                f"[Source {idx}: {item['title']} - Chunk ID: {item['id']}]\n"
                f"{item['text']}\n"
            )

        formatted_context = "\n---\n".join(context_blocks)
        return formatted_context, results
