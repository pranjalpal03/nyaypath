'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scale, Lock, User as UserIcon, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { TRANSLATIONS, LanguageCode } from '../../data/i18n';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [language, setLanguage] = useState<LanguageCode>('hi');
  const [fullName, setFullName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = TRANSLATIONS[language] || TRANSLATIONS['hi'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setError(language === 'hi' ? 'कृपया अपना फोन नंबर या ईमेल दर्ज करें।' : 'Please enter your phone number or email.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await register(identifier.trim(), password || 'otp_simulated_password_2026', fullName, language);
      router.push('/dashboard');
    } catch (err: any) {
      const msg = err?.response?.data?.detail || 'Registration failed. Please try again.';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-nyay-dark text-slate-100 flex flex-col justify-between font-sans">
      <header className="border-b border-nyay-border/60 bg-nyay-dark/90 backdrop-blur-md px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-600/30 to-amber-400/10 border border-amber-500/30 text-nyay-gold">
              <Scale className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-serif text-slate-100">न्यायपथ</span>
          </Link>

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
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md glass-panel p-8 rounded-2xl border border-nyay-border shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-nyay-gold mb-2">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-slate-100">{t.registerTitle}</h2>
            <p className="text-xs text-slate-400">{t.registerSubtitle}</p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs text-center font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <UserIcon className="w-3.5 h-3.5 text-nyay-gold" />
                <span>{t.fullNameLabel}</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full bg-nyay-dark/90 border border-nyay-border rounded-xl px-4 py-3 text-slate-100 text-sm outline-none focus:border-nyay-gold transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-nyay-gold" />
                <span>{t.phoneOrEmailLabel}</span>
              </label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="e.g. +91 98765 43210 or email"
                className="w-full bg-nyay-dark/90 border border-nyay-border rounded-xl px-4 py-3 text-slate-100 text-sm outline-none focus:border-nyay-gold transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-nyay-gold" />
                <span>{t.passwordLabel}</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-nyay-dark/90 border border-nyay-border rounded-xl px-4 py-3 text-slate-100 text-sm outline-none focus:border-nyay-gold transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50"
            >
              <span>{isLoading ? 'Wait...' : t.registerBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center pt-2 border-t border-nyay-border/60">
            <span className="text-xs text-slate-400 mr-2">{t.alreadyAccountText}</span>
            <Link href="/login" className="text-xs font-bold text-nyay-gold hover:underline">
              {t.loginBtn}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
