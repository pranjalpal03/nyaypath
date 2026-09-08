'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { 
  ShieldCheck, AlertCircle, BookOpen, MapPin, ChevronRight, 
  FileText, Copy, Download, Clock, PhoneCall, BookmarkCheck, ArrowLeft, Check 
} from 'lucide-react';
import { EmergencyBanner } from './EmergencyBanner';
import { UrgentHelpModal } from './UrgentHelpModal';
import { TRANSLATIONS, LanguageCode } from '../data/i18n';

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://nyaypath-backend-wmnm.onrender.com';

interface OutputDisplayProps {
  result: any;
  language?: LanguageCode;
}

export const OutputDisplay: React.FC<OutputDisplayProps> = ({ result, language = 'hi' }) => {
  const router = useRouter();
  const t = TRANSLATIONS[language] || TRANSLATIONS['hi'];
  const [copySuccess, setCopySuccess] = useState(false);
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!result) return null;

  const handleNoteItClick = async () => {
    setIsSaving(true);
    try {
      const d = result.draft_complaint_letter;
      const draftFormatted = d ? `TO: ${d.to_authority}\nSUBJECT: ${d.subject}\n\nSTATEMENT OF FACTS:\n${d.statement_of_facts}` : '';
      
      await axios.post(`${API_BASE}/api/v1/grievance/note`, {
        query_text: result.sanitized_query || 'Grievance Query',
        domain: result.detected_domains ? result.detected_domains[0] : 'General Legal',
        state: result.entities?.geographic_location?.state || 'National',
        district: result.entities?.geographic_location?.district || 'General',
        summary: result.plain_summary || '',
        draft_letter: draftFormatted,
        jurisdiction: result.jurisdictional_routing || {},
        action_plan: result.escalation_matrix || []
      });

      setToastMessage(t.notedSuccessToast);
      setTimeout(() => {
        router.push('/dashboard');
      }, 1200);
    } catch (err) {
      console.error('Failed to note grievance', err);
      router.push('/dashboard');
    } finally {
      setIsSaving(false);
    }
  };

  const handleBackClick = async () => {
    setIsSaving(true);
    try {
      await axios.post(`${API_BASE}/api/v1/grievance/discard-back`, {
        query_text: result.sanitized_query || 'Grievance Query',
        domain: result.detected_domains ? result.detected_domains[0] : 'General Legal'
      });
    } catch (err) {
      console.error('Failed to save search history on back', err);
    } finally {
      setIsSaving(false);
      router.push('/dashboard');
    }
  };

  const handleCopyDraft = () => {
    if (!result.draft_complaint_letter) return;
    const d = result.draft_complaint_letter;
    const fullText = `TO: ${d.to_authority}\nSUBJECT: ${d.subject}\nDATE & PLACE: ${d.date_place}\n\nSTATEMENT OF FACTS:\n${d.statement_of_facts}\n\nAPPLICABLE PROVISIONS:\n${d.applicable_provisions.join('\n')}\n\nRELIEF SOUGHT:\n${d.prayers_relief_sought.join('\n')}\n\nSIGN-OFF:\n${d.signature_placeholder}`;

    navigator.clipboard.writeText(fullText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const handleDownloadDraft = () => {
    if (!result.draft_complaint_letter) return;
    const d = result.draft_complaint_letter;
    const fullText = `TO: ${d.to_authority}\nSUBJECT: ${d.subject}\nDATE & PLACE: ${d.date_place}\n\nSTATEMENT OF FACTS:\n${d.statement_of_facts}\n\nAPPLICABLE PROVISIONS:\n${d.applicable_provisions.join('\n')}\n\nRELIEF SOUGHT:\n${d.prayers_relief_sought.join('\n')}\n\nSIGN-OFF:\n${d.signature_placeholder}`;

    const element = document.createElement("a");
    const file = new Blob([fullText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `NyayPath_Complaint_Draft_${result.session_id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. SOS Emergency Safeguard Banner */}
      {result.emergency_sos && <EmergencyBanner sosData={result.emergency_sos} />}

      {/* 2. Security & Confidence Header */}
      <div className="glass-panel rounded-2xl p-5 border border-nyay-border flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">{t.privacyHeaderTitle}</h4>
            <p className="text-xs text-slate-400">
              Session ID: <span className="font-mono text-nyay-gold">{result.session_id}</span> | {result.pii_redacted_count > 0 ? `${result.pii_redacted_count} ${t.piiMaskedText}` : t.noPiiText}
            </p>
          </div>
        </div>

        {/* Confidence Gauge */}
        <div className="flex items-center gap-3 bg-nyay-dark/80 px-4 py-2 rounded-xl border border-nyay-border">
          <div className="text-right">
            <span className="text-xs text-slate-400 block">{t.routingConfidenceLabel}</span>
            <span className={`text-base font-bold ${result.confidence_score >= 0.70 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {(result.confidence_score * 100).toFixed(0)}%
            </span>
          </div>
          <div className="w-10 h-10 relative flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="3" className="text-slate-800" fill="transparent" />
              <circle 
                cx="20" 
                cy="20" 
                r="15" 
                stroke="currentColor" 
                strokeWidth="3" 
                className={result.confidence_score >= 0.70 ? 'text-emerald-400' : 'text-amber-400'} 
                fill="transparent"
                strokeDasharray={94}
                strokeDashoffset={94 - (94 * result.confidence_score)}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 3. Confidence Gate Clarification Alert (< 0.70) */}
      {result.needs_clarification && (
        <div className="glass-panel-gold rounded-2xl p-6 border border-amber-500/40 space-y-3">
          <div className="flex items-center gap-3 text-amber-400">
            <AlertCircle className="w-6 h-6 shrink-0" />
            <h3 className="text-base font-bold">{t.confidenceGateTitle}</h3>
          </div>
          <p className="text-xs text-slate-300">
            {t.confidenceGateSub}
          </p>
          <ul className="list-disc list-inside text-xs text-amber-200 space-y-1 pl-2">
            {result.clarification_questions.map((q: string, idx: number) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 4. Plain Legal Summary & Jurisdictional Routing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Plain Legal Summary */}
        <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-nyay-border space-y-4">
          <div className="flex items-center gap-2 text-nyay-gold border-b border-nyay-border/60 pb-3">
            <BookOpen className="w-5 h-5" />
            <h3 className="text-lg font-bold font-serif">{t.plainSummaryTitle}</h3>
          </div>

          <p className="text-sm leading-relaxed text-slate-200 bg-nyay-dark/50 p-4 rounded-xl border border-nyay-border/40">
            {result.plain_summary}
          </p>

          {/* Classified Domains */}
          <div className="pt-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">{t.classifiedDomainsLabel}</span>
            <div className="flex flex-wrap gap-2">
              {result.detected_domains.map((domain: string, idx: number) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-nyay-accent/10 text-nyay-accent border border-nyay-accent/30 font-medium">
                  {domain}
                </span>
              ))}
            </div>
          </div>

          {/* Extracted Entities */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-nyay-dark/40 p-3 rounded-xl border border-nyay-border/30">
              <span className="text-slate-400 font-semibold block">{t.detectedSchemesLabel}</span>
              <span className="text-slate-200 font-medium">{result.entities.government_schemes.length > 0 ? result.entities.government_schemes.join(', ') : 'Statutory Redressal Norms'}</span>
            </div>
            <div className="bg-nyay-dark/40 p-3 rounded-xl border border-nyay-border/30">
              <span className="text-slate-400 font-semibold block">{t.targetLocationLabel}</span>
              <span className="text-slate-200 font-medium">
                {result.entities.geographic_location.district ? `District ${result.entities.geographic_location.district}` : 'District Headquarters'}
                {result.entities.geographic_location.state ? `, ${result.entities.geographic_location.state}` : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Jurisdictional Routing */}
        <div className="glass-panel rounded-2xl p-6 border border-nyay-border space-y-4">
          <div className="flex items-center gap-2 text-nyay-accent border-b border-nyay-border/60 pb-3">
            <MapPin className="w-5 h-5" />
            <h3 className="text-lg font-bold font-serif">{t.jurisdictionTitle}</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-nyay-accent/10 border border-nyay-accent/30">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-nyay-accent block">{t.primaryAuthorityLabel}</span>
              <h4 className="text-sm md:text-base font-bold text-slate-100 mt-1">
                {result.jurisdictional_routing.primary_authority}
              </h4>
              <span className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-md bg-nyay-accent/20 text-slate-200 border border-nyay-accent/40 font-medium">
                {t.venueLevelLabel} {result.jurisdictional_routing.primary_venue_level}
              </span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-2">{t.secondaryVenuesLabel}</span>
              <ul className="space-y-2 text-xs">
                {result.jurisdictional_routing.secondary_venues.map((venue: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 bg-nyay-dark/50 p-2.5 rounded-lg border border-nyay-border/40 text-slate-300">
                    <ChevronRight className="w-4 h-4 text-nyay-gold shrink-0 mt-0.5" />
                    <span>{venue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Draft Complaint Letter */}
      {result.draft_complaint_letter && (
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-nyay-border space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-nyay-border/60 pb-4">
            <div className="flex items-center gap-2 text-nyay-gold">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold font-serif">{t.draftLetterTitle}</h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyDraft}
                className="px-3.5 py-2 rounded-xl bg-nyay-card hover:bg-nyay-border border border-nyay-border text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Copy className="w-4 h-4 text-nyay-gold" />
                <span>{copySuccess ? t.copiedSuccessBtn : t.copyLetterBtn}</span>
              </button>

              <button
                onClick={handleDownloadDraft}
                className="px-3.5 py-2 rounded-xl bg-nyay-gold hover:bg-nyay-goldHover text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadTxtBtn}</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-950 border border-nyay-border rounded-xl p-6 md:p-8 font-mono text-xs text-slate-200 leading-relaxed space-y-4 shadow-inner">
            <div>
              <span className="text-slate-500 font-bold block mb-1">TO:</span>
              <p className="text-nyay-gold font-bold text-sm">{result.draft_complaint_letter.to_authority}</p>
            </div>

            <div>
              <span className="text-slate-500 font-bold block mb-1">SUBJECT:</span>
              <p className="text-slate-100 font-bold">{result.draft_complaint_letter.subject}</p>
            </div>

            <div className="text-right text-slate-400">
              {result.draft_complaint_letter.date_place}
            </div>

            <hr className="border-slate-800" />

            <div>
              <span className="text-slate-500 font-bold block mb-1">STATEMENT OF FACTS:</span>
              <p className="text-slate-300 font-sans text-xs leading-relaxed whitespace-pre-wrap">{result.draft_complaint_letter.statement_of_facts}</p>
            </div>

            <div>
              <span className="text-slate-500 font-bold block mb-1">APPLICABLE STATUTORY PROVISIONS:</span>
              <ul className="list-disc list-inside text-slate-300 font-sans space-y-1">
                {result.draft_complaint_letter.applicable_provisions.map((prov: string, idx: number) => (
                  <li key={idx}>{prov}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-slate-500 font-bold block mb-1">RELIEF SOUGHT:</span>
              <ul className="space-y-1 text-slate-300 font-sans">
                {result.draft_complaint_letter.prayers_relief_sought.map((prayer: string, idx: number) => (
                  <li key={idx}>{prayer}</li>
                ))}
              </ul>
            </div>

            <hr className="border-slate-800" />

            <div className="pt-2 text-right">
              <span className="text-slate-400 italic block">{result.draft_complaint_letter.signature_placeholder}</span>
            </div>
          </div>
        </div>
      )}

      {/* 6. Escalation Matrix Timeline */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 border border-nyay-border space-y-6">
        <div className="flex items-center gap-2 text-emerald-400 border-b border-nyay-border/60 pb-4">
          <Clock className="w-6 h-6" />
          <h3 className="text-xl font-bold font-serif">{t.escalationMatrixTitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {result.escalation_matrix.map((step: any) => (
            <div key={step.step_number} className="bg-nyay-dark/70 border border-nyay-border rounded-xl p-5 space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center border border-emerald-500/30">
                  #{step.step_number}
                </span>
                <span className="text-[10px] font-bold text-nyay-gold px-2 py-0.5 rounded bg-nyay-gold/10 border border-nyay-gold/20">
                  {step.timeline_days}
                </span>
              </div>

              <h4 className="text-xs font-bold text-slate-100 line-clamp-1">{step.authority_name}</h4>
              <p className="text-xs text-slate-300 leading-normal">{step.action_required}</p>

              <div className="pt-2 border-t border-nyay-border/40 text-[10px] text-slate-400 italic">
                Basis: {step.legal_basis}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Grounded Statutory References (RAG) */}
      {result.retrieved_sources && result.retrieved_sources.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 border border-nyay-border space-y-4">
          <div className="flex items-center gap-2 text-slate-300 border-b border-nyay-border/60 pb-3">
            <BookOpen className="w-5 h-5 text-nyay-gold" />
            <h3 className="text-lg font-bold font-serif">{t.groundedReferencesTitle}</h3>
          </div>

          <div className="space-y-3">
            {result.retrieved_sources.map((src: any, idx: number) => (
              <div key={idx} className="bg-nyay-dark/60 p-4 rounded-xl border border-nyay-border/50 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-nyay-gold">{src.title}</span>
                  <span className="text-slate-400">{t.similarityLabel}: {(src.similarity_score * 100).toFixed(0)}%</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{src.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Urgent Escalation Support Banner */}
      <div className="glass-panel rounded-2xl p-6 border border-rose-500/30 bg-gradient-to-r from-rose-950/40 via-nyay-dark to-nyay-dark flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3.5 max-w-2xl">
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
            <PhoneCall className="w-6 h-6 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-100">{t.contactTeamBtn}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{t.urgentEscalationText}</p>
          </div>
        </div>

        <button
          onClick={() => setIsUrgentModalOpen(true)}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-bold text-xs md:text-sm shadow-lg shadow-rose-500/20 flex items-center gap-2 transition-all"
        >
          <PhoneCall className="w-4 h-4" />
          <span>{t.contactTeamBtn}</span>
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Persistent Footer Action Buttons: "Note It" vs "Back" */}
      <div className="sticky bottom-4 z-40 max-w-7xl mx-auto px-4 md:px-8">
        <div className="glass-panel p-4 rounded-2xl border border-nyay-gold/40 bg-nyay-dark/95 backdrop-blur-xl shadow-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-300">
            <span className="font-bold text-nyay-gold">Save or Return:</span> Record this grievance to your Citizen Dashboard or go back.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleBackClick}
              disabled={isSaving}
              className="px-6 py-3 rounded-xl bg-nyay-card hover:bg-nyay-border border border-nyay-border text-slate-200 hover:text-white font-bold text-xs md:text-sm flex items-center gap-2 transition-all disabled:opacity-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backBtn}</span>
            </button>

            <button
              onClick={handleNoteItClick}
              disabled={isSaving}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50"
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : t.noteItBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Urgent Contact Support Popup Modal */}
      <UrgentHelpModal
        isOpen={isUrgentModalOpen}
        onClose={() => setIsUrgentModalOpen(false)}
        language={language}
      />
    </div>
  );
};
