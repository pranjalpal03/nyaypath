'use client';

import React, { useState } from 'react';
import { Scale, Globe2 } from 'lucide-react';
import axios from 'axios';
import { ComplaintForm } from '../components/ComplaintForm';
import { OutputDisplay } from '../components/OutputDisplay';
import { TRANSLATIONS, LanguageCode } from '../data/i18n';

export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>('hi');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  const t = TRANSLATIONS[language] || TRANSLATIONS['hi'];
  const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://nyaypath-backend-wmnm.onrender.com';

  const handleFormSubmit = async (payload: { query: string; language: LanguageCode; state: string; district: string }) => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await axios.post(`${API_BASE}/api/v1/navigate`, {
        query: payload.query,
        language: payload.language,
        district: payload.district || undefined,
        state: payload.state || undefined,
      });

      setResult(response.data);
    } catch (err: any) {
      console.error('NyayPath API Error:', err);
      setErrorMsg(err.response?.data?.detail || 'Failed to connect to NyayPath legal engine.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-nyay-dark text-slate-100 flex flex-col font-sans pb-16">
      {/* Top Navigation Header */}
      <header className="border-b border-nyay-border/60 bg-nyay-dark/90 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-600/30 to-amber-400/10 border border-amber-500/30 text-nyay-gold shadow-lg shadow-amber-500/10">
              <Scale className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-serif tracking-tight flex items-center gap-2">
                <span>{t.appTitle}</span>
                <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-nyay-gold/10 text-nyay-gold border border-nyay-gold/30 font-sans font-bold">
                  v3.0 Live Dictation
                </span>
              </h1>
              <p className="text-xs text-slate-400">{t.appSubtitle}</p>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-nyay-card border border-nyay-border rounded-xl p-1 text-sm">
              <Globe2 className="w-4 h-4 text-slate-400 ml-2" />
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  language === 'hi'
                    ? 'bg-nyay-gold text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLanguage('mr')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  language === 'mr'
                    ? 'bg-nyay-gold text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-nyay-gold text-slate-950 shadow-md font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.readyBadge}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8 flex-1 w-full space-y-8">
        {/* Complaint Input Form Container */}
        <ComplaintForm
          onSubmit={handleFormSubmit}
          isLoading={isLoading}
          language={language}
          apiBaseUrl={API_BASE}
        />

        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3">
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Results Render Container */}
        <OutputDisplay result={result} language={language} />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-nyay-border/60 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 NyayPath Architecture | Legal Tech & Citizen Empowerment Platform</p>
          <p className="text-slate-400">Grounded RAG • Real-Time Speech Dictation • Devanagari Geo-Data</p>
        </div>
      </footer>
    </div>
  );
}
