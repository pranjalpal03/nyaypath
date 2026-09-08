'use client';

import React from 'react';
import { Phone, Mail, X, ShieldAlert, ExternalLink } from 'lucide-react';
import { TRANSLATIONS, LanguageCode } from '../data/i18n';

interface UrgentHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: LanguageCode;
}

export const UrgentHelpModal: React.FC<UrgentHelpModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[language] || TRANSLATIONS['hi'];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full rounded-2xl border border-nyay-border shadow-2xl overflow-hidden space-y-6 p-6 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl bg-nyay-card hover:bg-nyay-border text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="inline-flex p-3 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 mb-1">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-serif text-slate-100">
            {t.urgentModalTitle}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed px-2">
            {t.urgentEscalationText}
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="space-y-3 bg-nyay-dark/90 p-4 rounded-xl border border-nyay-border/80">
          <div className="flex items-center justify-between p-3 rounded-lg bg-nyay-card/50 border border-nyay-border/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">24x7 Helpline</p>
                <p className="text-sm font-bold text-slate-100">+91 95559 32691</p>
              </div>
            </div>
            <a
              href="tel:95559326912"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs flex items-center gap-1 shadow transition-all"
            >
              <span>{t.callNowBtn}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg bg-nyay-card/50 border border-nyay-border/40">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Support Email</p>
                <p className="text-sm font-bold text-slate-100">wehelpyou@gmail.com</p>
              </div>
            </div>
            <a
              href="mailto:wehelpyou@gmail.com"
              className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold text-xs flex items-center gap-1 shadow transition-all"
            >
              <span>{t.sendEmailBtn}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href="tel:95559326912"
            className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>{t.callNowBtn}</span>
          </a>
          <a
            href="mailto:wehelpyou@gmail.com"
            className="flex-1 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>{t.sendEmailBtn}</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-3 rounded-xl bg-nyay-card hover:bg-nyay-border border border-nyay-border text-slate-300 text-xs font-semibold transition-all"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
