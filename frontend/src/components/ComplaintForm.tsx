'use client';

import React, { useState } from 'react';
import { Send, Sparkles, ChevronRight, RefreshCw } from 'lucide-react';
import { LocationSelector } from './LocationSelector';
import { VoiceRecorder } from './VoiceRecorder';
import { TRANSLATIONS, LanguageCode } from '../data/i18n';

interface ComplaintFormProps {
  onSubmit: (payload: { query: string; language: LanguageCode; state: string; district: string }) => void;
  isLoading: boolean;
  language: LanguageCode;
  apiBaseUrl?: string;
}

export const ComplaintForm: React.FC<ComplaintFormProps> = ({
  onSubmit,
  isLoading,
  language,
  apiBaseUrl = ''
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS['hi'];
  const [query, setQuery] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit({ query, language, state, district });
  };

  const handleTranscriptionComplete = (transcribedText: string) => {
    setQuery(transcribedText);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden border border-nyay-border/80 shadow-2xl space-y-6">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-extrabold font-serif text-slate-100 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-nyay-gold" />
          <span>{t.describeProblemTitle}</span>
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-2 leading-relaxed">
          {t.describeProblemSub}
        </p>
      </div>

      {/* Localized Preset Query Chips */}
      <div>
        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2 block">
          {t.quickSamplePrefix}
        </span>
        <div className="flex flex-wrap gap-2">
          {t.presets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setQuery(preset.query)}
              className="text-xs px-3 py-1.5 rounded-lg bg-nyay-border/40 hover:bg-nyay-border border border-nyay-border text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <ChevronRight className="w-3 h-3 text-nyay-gold" />
              <span>{preset.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Localized Cascading Location Selector */}
      <LocationSelector
        currentLang={language}
        language={language}
        selectedStateId={state}
        selectedState={state}
        selectedDistrictId={district}
        selectedDistrict={district}
        onStateChange={setState}
        onDistrictChange={setDistrict}
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Real-time Textarea */}
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={4}
          placeholder={t.textareaPlaceholder}
          className="w-full bg-nyay-dark/90 border border-nyay-border rounded-xl p-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-nyay-gold focus:ring-1 focus:ring-nyay-gold text-sm transition-all resize-none shadow-inner"
        />

        {/* Real-Time Voice Recorder & Submission */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <VoiceRecorder
            onTranscriptionComplete={handleTranscriptionComplete}
            preferredLanguage={language}
            apiBaseUrl={apiBaseUrl}
          />

          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50 ml-auto"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{t.analyzingContextText}</span>
              </>
            ) : (
              <>
                <span>{t.navigateGrievanceBtn}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
