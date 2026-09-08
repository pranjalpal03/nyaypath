'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Scale, LogOut, FileText, History, Clock, MapPin, Check, Copy, Download, X, ArrowLeft, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { TRANSLATIONS, LanguageCode } from '../../data/i18n';

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://nyaypath-backend-wmnm.onrender.com';

interface GrievanceItem {
  id: string;
  original_text: string;
  state_id: string;
  district_id: string;
  detected_domain: string;
  summary: string;
  draft_letter: string;
  jurisdiction_routing: any;
  escalation_matrix: any[];
  status: string;
  created_at: string;
}

interface SearchItem {
  id: string;
  query_text: string;
  matched_domain: string;
  created_at: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading: isAuthLoading, logout } = useAuth();
  const [language, setLanguage] = useState<LanguageCode>('hi');
  const [activeTab, setActiveTab] = useState<'complaints' | 'searches'>('complaints');
  const [grievances, setGrievances] = useState<GrievanceItem[]>([]);
  const [searches, setSearches] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGrievance, setSelectedGrievance] = useState<GrievanceItem | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS['hi'];

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.push('/login');
      return;
    }

    if (isAuthenticated) {
      fetchHistory();
    }
  }, [isAuthenticated, isAuthLoading, router]);

  const fetchHistory = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/api/v1/user/dashboard-data`);
      setGrievances(res.data.filed_grievances || []);
      setSearches(res.data.recent_searches || []);
    } catch (err) {
      try {
        const fallbackRes = await axios.get(`${API_BASE}/api/v1/user/history`);
        setGrievances(fallbackRes.data.grievances || []);
        setSearches(fallbackRes.data.search_history || []);
      } catch (e) {
        console.error('Failed to fetch user history', e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyDraft = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleDownloadDraft = (text: string, id: string) => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `NyayPath_Complaint_${id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return isoStr;
    }
  };

  if (isAuthLoading || (!isAuthenticated && isLoading)) {
    return (
      <div className="min-h-screen bg-nyay-dark flex items-center justify-center text-slate-100 font-sans">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-nyay-gold border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-semibold">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-nyay-dark text-slate-100 flex flex-col font-sans pb-16">
      {/* Top Navbar */}
      <header className="border-b border-nyay-border/60 bg-nyay-dark/90 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-semibold mr-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Navigator</span>
            </Link>
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-600/30 to-amber-400/10 border border-amber-500/30 text-nyay-gold">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-serif flex items-center gap-2">
                <span>{t.dashboardTitle}</span>
              </h1>
              <p className="text-xs text-slate-400">
                Logged in as: <span className="text-nyay-gold font-semibold">{user?.full_name || user?.phone_or_email}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-nyay-card border border-nyay-border rounded-xl p-1 text-xs">
              <button
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${language === 'hi' ? 'bg-nyay-gold text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLanguage('mr')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${language === 'mr' ? 'bg-nyay-gold text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
              >
                मराठी
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${language === 'en' ? 'bg-nyay-gold text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
              >
                English
              </button>
            </div>

            <button
              onClick={() => { logout(); router.push('/'); }}
              className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t.logoutBtn}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8 flex-1 w-full space-y-6">
        {/* Primary Action Card: Search Your Problem */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-amber-500/30 bg-gradient-to-r from-amber-950/30 via-nyay-dark to-nyay-dark flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 max-w-2xl">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-slate-100 flex items-center gap-2">
              <Scale className="w-6 h-6 text-nyay-gold" />
              <span>{t.describeProblemTitle}</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400">
              {t.describeProblemSub}
            </p>
          </div>

          <Link
            href="/"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all transform hover:scale-[1.02]"
          >
            <Scale className="w-5 h-5" />
            <span>{t.searchProblemBtn}</span>
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-nyay-border">
          <button
            onClick={() => setActiveTab('complaints')}
            className={`px-6 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition-all ${activeTab === 'complaints' ? 'border-nyay-gold text-nyay-gold font-bold' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            <FileText className="w-4 h-4" />
            <span>{t.filedComplaintsTab} ({grievances.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('searches')}
            className={`px-6 py-3 font-semibold text-sm flex items-center gap-2 border-b-2 transition-all ${activeTab === 'searches' ? 'border-nyay-gold text-nyay-gold font-bold' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            <History className="w-4 h-4" />
            <span>{t.recentSearchesTab} ({searches.length})</span>
          </button>
        </div>

        {/* Tab 1: Grievance History */}
        {activeTab === 'complaints' && (
          <div>
            {grievances.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-2xl border border-nyay-border/80 space-y-4">
                <div className="w-12 h-12 rounded-full bg-nyay-card border border-nyay-border flex items-center justify-center mx-auto text-slate-400">
                  <FileText className="w-6 h-6" />
                </div>
                <p className="text-sm text-slate-400 font-medium">No saved grievances found yet.</p>
                <Link href="/" className="inline-flex px-4 py-2 rounded-xl bg-nyay-gold text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all">
                  Create First Complaint
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {grievances.map((item) => (
                  <div key={item.id} className="glass-panel rounded-2xl p-6 border border-nyay-border/80 shadow-lg space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-nyay-gold border border-amber-500/30">
                          {item.detected_domain}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {formatDate(item.created_at)}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 line-clamp-3 italic bg-nyay-dark/50 p-3 rounded-xl border border-nyay-border/40">
                        "{item.original_text}"
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-nyay-gold" />
                          {item.district_id}, {item.state_id}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
                          ✓ {t.statusDrafted}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedGrievance(item)}
                      className="w-full py-2.5 rounded-xl bg-nyay-card hover:bg-nyay-border border border-nyay-border text-nyay-gold text-xs font-bold flex items-center justify-center gap-2 transition-all mt-4"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.viewDraftBtn}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Search Query History */}
        {activeTab === 'searches' && (
          <div>
            {searches.length === 0 ? (
              <div className="glass-panel p-12 text-center rounded-2xl border border-nyay-border/80 space-y-4">
                <div className="w-12 h-12 rounded-full bg-nyay-card border border-nyay-border flex items-center justify-center mx-auto text-slate-400">
                  <History className="w-6 h-6" />
                </div>
                <p className="text-sm text-slate-400 font-medium">No recent search keywords found.</p>
              </div>
            ) : (
              <div className="glass-panel rounded-2xl border border-nyay-border/80 overflow-hidden divide-y divide-nyay-border/60">
                {searches.map((item) => (
                  <div key={item.id} className="p-4 flex flex-wrap items-center justify-between gap-4 hover:bg-nyay-card/50 transition-colors">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-slate-100">{item.query_text}</p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400">
                        <span className="text-nyay-gold font-medium">{item.matched_domain || 'General Legal'}</span>
                        <span>•</span>
                        <span>{formatDate(item.created_at)}</span>
                      </div>
                    </div>

                    <Link
                      href={`/?query=${encodeURIComponent(item.query_text)}`}
                      className="px-3 py-1.5 rounded-lg bg-nyay-border/40 hover:bg-nyay-border border border-nyay-border text-slate-300 text-xs font-semibold transition-all"
                    >
                      Re-run Query
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modal for Viewing Saved Draft Complaint */}
      {selectedGrievance && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-panel max-w-2xl w-full max-h-[85vh] rounded-2xl border border-nyay-border shadow-2xl flex flex-col overflow-hidden">
            <div className="p-4 border-b border-nyay-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-nyay-gold" />
                <h3 className="font-bold text-sm text-slate-100">
                  {selectedGrievance.detected_domain} ({selectedGrievance.district_id})
                </h3>
              </div>
              <button
                onClick={() => setSelectedGrievance(null)}
                className="p-1 rounded-lg hover:bg-nyay-card text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs text-slate-200 bg-nyay-dark/90 leading-relaxed whitespace-pre-wrap">
              {selectedGrievance.draft_letter}
            </div>

            <div className="p-4 border-t border-nyay-border flex flex-wrap items-center justify-between gap-3 bg-nyay-card/50">
              <div className="text-[11px] text-slate-400">
                Created: {formatDate(selectedGrievance.created_at)}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyDraft(selectedGrievance.draft_letter)}
                  className="px-3.5 py-2 rounded-xl bg-nyay-card hover:bg-nyay-border border border-nyay-border text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? t.copiedSuccessBtn : t.copyLetterBtn}</span>
                </button>
                <button
                  onClick={() => handleDownloadDraft(selectedGrievance.draft_letter, selectedGrievance.id)}
                  className="px-3.5 py-2 rounded-xl bg-nyay-gold hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadTxtBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
