import numpy as np
from typing import List
from app.core.config import settings

class EmbeddingService:
    def __init__(self):
        self._model = None
        self._is_hf_available = False
        try:
            from sentence_transformers import SentenceTransformer
            self._model = SentenceTransformer(settings.EMBEDDING_MODEL)
            self._is_hf_available = True
            print(f"[EmbeddingService] Loaded HuggingFace model: {settings.EMBEDDING_MODEL}")
        except Exception as e:
            print(f"[EmbeddingService] Could not load SentenceTransformer ({e}). Falling back to TF-IDF vectorizer.")

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        if not texts:
            return []
        if self._is_hf_available and self._model:
            embeddings = self._model.encode(texts, convert_to_numpy=True)
            return embeddings.tolist()
        
        # Fallback deterministic pseudo-embedding (for offline / lightweight operation)
        return [self._pseudo_embed(t) for t in texts]

    def embed_query(self, text: str) -> List[float]:
        if not text:
            return [0.0] * 384
        if self._is_hf_available and self._model:
            embedding = self._model.encode(text, convert_to_numpy=True)
            return embedding.tolist()
        return self._pseudo_embed(text)

    def _pseudo_embed(self, text: str, dim: int = 384) -> List[float]:
        """Generates normalized vector based on character frequencies for fallback."""
        vec = np.zeros(dim)
        for i, char in enumerate(text.encode('utf-8')):
            vec[i % dim] += (char * (i + 1)) % 100
        norm = np.linalg.norm(vec)
        if norm > 0:
            vec = vec / norm
        return vec.tolist()
