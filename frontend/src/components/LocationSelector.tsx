'use client';

import React, { useMemo } from 'react';
import { INDIA_GEO_DATA, StateOption, DistrictOption } from '../data/indiaGeoData';

interface LocationSelectorProps {
  currentLang?: 'en' | 'hi' | 'mr';
  language?: 'en' | 'hi' | 'mr';
  selectedStateId?: string;
  selectedState?: string;
  selectedDistrictId?: string;
  selectedDistrict?: string;
  onStateChange: (stateId: string) => void;
  onDistrictChange: (districtId: string) => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  currentLang,
  language = 'hi',
  selectedStateId,
  selectedState,
  selectedDistrictId,
  selectedDistrict,
  onStateChange,
  onDistrictChange,
}) => {
  const activeLang = currentLang || language || 'hi';
  const activeStateId = selectedStateId !== undefined ? selectedStateId : (selectedState || '');
  const activeDistrictId = selectedDistrictId !== undefined ? selectedDistrictId : (selectedDistrict || '');

  // Helper to extract localized label
  const getLocalizedName = (item: { nameEn: string; nameHi: string; nameMr: string; id: string }) => {
    if (activeLang === 'hi') return item.nameHi;
    if (activeLang === 'mr') return item.nameMr;
    return item.nameEn;
  };

  // Find selected state object
  const currentState = useMemo(() => {
    return INDIA_GEO_DATA.find((s) => s.id === activeStateId || s.nameEn === activeStateId || s.nameHi === activeStateId || s.nameMr === activeStateId);
  }, [activeStateId]);

  // Derive districts dynamically
  const availableDistricts = useMemo(() => {
    return currentState ? currentState.districts : [];
  }, [currentState]);

  const handleStateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStateId = e.target.value;
    onStateChange(newStateId);
    // Reset district selection when state changes
    onDistrictChange('');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-3">
      {/* State Dropdown */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <span>🏛️</span>
          {activeLang === 'hi' ? 'राज्य / केंद्र शासित प्रदेश चुनें:' : activeLang === 'mr' ? 'राज्य / केंद्रशासित प्रदेश निवडा:' : 'Select State / UT:'}
        </label>
        <select
          value={activeStateId}
          onChange={handleStateSelect}
          className="w-full bg-[#131b2e] border border-slate-700 text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-amber-500 text-xs transition-colors cursor-pointer"
        >
          <option value="">
            {activeLang === 'hi' ? '-- राज्य चुनें --' : activeLang === 'mr' ? '-- राज्य निवडा --' : '-- Choose State --'}
          </option>
          {INDIA_GEO_DATA.map((state) => (
            <option key={state.id} value={state.id} className="bg-[#131b2e] text-slate-200">
              {getLocalizedName(state)}
            </option>
          ))}
        </select>
      </div>

      {/* District Dropdown */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <span>📍</span>
          {activeLang === 'hi' ? 'जिला चुनें:' : activeLang === 'mr' ? 'जिल्हा निवडा:' : 'Select District:'}
        </label>
        <select
          value={activeDistrictId}
          onChange={(e) => onDistrictChange(e.target.value)}
          disabled={!activeStateId || availableDistricts.length === 0}
          className="w-full bg-[#131b2e] border border-slate-700 text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-amber-500 text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <option value="">
            {!activeStateId
              ? (activeLang === 'hi' ? '-- पहले राज्य चुनें --' : activeLang === 'mr' ? '-- आधी राज्य निवडा --' : '-- First Select State --')
              : (activeLang === 'hi' ? '-- जिला चुनें --' : activeLang === 'mr' ? '-- जिल्हा निवडा --' : '-- Choose District --')}
          </option>
          {availableDistricts.map((dist) => (
            <option key={dist.id} value={dist.id} className="bg-[#131b2e] text-slate-200">
              {getLocalizedName(dist)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
