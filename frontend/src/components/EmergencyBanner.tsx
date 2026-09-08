'use client';

import React from 'react';
import { AlertOctagon, PhoneCall, ShieldAlert, ChevronRight } from 'lucide-react';

interface EmergencySOSData {
  triggered: boolean;
  category: string;
  headline: string;
  helplines: Array<{
    name: string;
    number: string;
    description: string;
  }>;
  urgent_advice: string;
}

interface EmergencyBannerProps {
  sosData: EmergencySOSData;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ sosData }) => {
  if (!sosData || !sosData.triggered) return null;

  return (
    <div className="rounded-2xl bg-gradient-to-r from-rose-950 via-rose-900 to-slate-950 border-2 border-rose-500 shadow-2xl shadow-rose-950/80 p-6 md:p-8 relative overflow-hidden animate-pulse-slow">
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        
        {/* Left SOS Header */}
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-rose-600 text-white shadow-lg shadow-rose-600/40 ring-4 ring-rose-500/30 shrink-0">
            <AlertOctagon className="w-8 h-8 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-extrabold tracking-widest px-2.5 py-0.5 rounded-full bg-rose-500 text-slate-950">
                CRITICAL EMERGENCY ALERT
              </span>
              <span className="text-xs text-rose-300 font-bold">{sosData.category}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white mt-1 font-serif">
              {sosData.headline}
            </h3>
            <p className="text-xs text-rose-200 mt-1 max-w-2xl leading-relaxed">
              {sosData.urgent_advice}
            </p>
          </div>
        </div>

        {/* Right Emergency Helplines Call Buttons */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
          {sosData.helplines.map((helpline, idx) => (
            <a
              key={idx}
              href={`tel:${helpline.number}`}
              className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs flex items-center justify-between sm:justify-center gap-3 shadow-lg shadow-rose-600/30 transition-all border border-rose-400 group"
            >
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 group-hover:animate-wiggle" />
                <div className="text-left">
                  <span className="block text-[10px] text-rose-200 font-normal">{helpline.name}</span>
                  <span className="text-sm font-black tracking-wide">{helpline.number}</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-rose-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
