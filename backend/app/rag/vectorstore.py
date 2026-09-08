import os
import re
from typing import List, Dict, Any
from app.core.config import settings
from app.rag.embeddings import EmbeddingService

class VectorStoreManager:
    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.client = None
        self.collection = None
        self._init_chroma()

    def _init_chroma(self):
        try:
            import chromadb
            os.makedirs(settings.CHROMA_PERSIST_DIRECTORY, exist_ok=True)
            self.client = chromadb.PersistentClient(path=settings.CHROMA_PERSIST_DIRECTORY)
            self.collection = self.client.get_or_create_collection(
                name="indian_statutes",
                metadata={"hnsw:space": "cosine"}
            )
            print(f"[VectorStoreManager] ChromaDB initialized at {settings.CHROMA_PERSIST_DIRECTORY}")
        except Exception as e:
            print(f"[VectorStoreManager] ChromaDB initialization failed: {e}")

    @staticmethod
    def chunk_text(text: str, chunk_size: int = 450, overlap: int = 45) -> List[str]:
        """
        Chunks statutory documents into 400-500 words with ~10% overlap.
        """
        words = text.split()
        if len(words) <= chunk_size:
            return [text]

        chunks = []
        step = chunk_size - overlap
        for i in range(0, len(words), step):
            chunk_words = words[i:i + chunk_size]
            chunks.append(" ".join(chunk_words))
            if i + chunk_size >= len(words):
                break
        return chunks

    def add_documents(self, docs: List[Dict[str, str]]):
        """
        Adds statutory documents to ChromaDB.
        docs format: [{"id": "doc1", "title": "Consumer Protection Act 2019", "text": "...", "category": "..."}]
        """
        if not self.collection:
            return

        all_ids = []
        all_embeddings = []
        all_metadatas = []
        all_documents = []

        chunk_counter = 0
        for doc in docs:
            doc_id = doc.get("id", f"doc_{chunk_counter}")
            title = doc.get("title", "Statute")
            category = doc.get("category", "General")
            content = doc.get("text", "")

            chunks = self.chunk_text(content)
            for idx, chunk in enumerate(chunks):
                cid = f"{doc_id}_chunk_{idx}"
                all_ids.append(cid)
                all_documents.append(chunk)
                all_metadatas.append({"title": title, "category": category, "chunk_index": idx})
                chunk_counter += 1

        if all_documents:
            all_embeddings = self.embedding_service.embed_documents(all_documents)
            self.collection.add(
                ids=all_ids,
                embeddings=all_embeddings,
                metadatas=all_metadatas,
                documents=all_documents
            )
            print(f"[VectorStoreManager] Added {len(all_ids)} document chunks into ChromaDB.")

    def search(self, query: str, top_k: int = 5) -> List[Dict[str, Any]]:
        """
        Searches vector store using cosine similarity query.
        Returns top_k most relevant chunks.
        """
        if not self.collection:
            return []

        try:
            query_embedding = self.embedding_service.embed_query(query)
            results = self.collection.query(
                query_embeddings=[query_embedding],
                n_results=top_k
            )

            retrieved = []
            if results and "documents" in results and results["documents"]:
                docs = results["documents"][0]
                metas = results["metadatas"][0] if "metadatas" in results else [{}] * len(docs)
                ids = results["ids"][0] if "ids" in results else [f"chunk_{i}" for i in range(len(docs))]
                distances = results["distances"][0] if "distances" in results and results["distances"] else [0.0] * len(docs)

                for doc, meta, cid, dist in zip(docs, metas, ids, distances):
                    similarity = max(0.0, 1.0 - float(dist)) if dist is not None else 0.85
                    retrieved.append({
                        "id": cid,
                        "text": doc,
                        "title": meta.get("title", "Statute Provision"),
                        "category": meta.get("category", "Legal"),
                        "similarity_score": round(similarity, 3)
                    })
            return retrieved
        except Exception as e:
            print(f"[VectorStoreManager] Search query failed: {e}")
            return []
