'use client';

import React, { useState, useRef } from 'react';
import { Mic, MicOff, Upload, AlertCircle, RefreshCw } from 'lucide-react';
import axios from 'axios';
import { useSpeechDictation } from '../hooks/useSpeechDictation';
import { TRANSLATIONS, LanguageCode } from '../data/i18n';

interface VoiceRecorderProps {
  onTranscriptionComplete: (text: string, language: string) => void;
  preferredLanguage?: LanguageCode;
  apiBaseUrl?: string;
}

export const VoiceRecorder: React.FC<VoiceRecorderProps> = ({
  onTranscriptionComplete,
  preferredLanguage = 'hi',
  apiBaseUrl = ''
}) => {
  const t = TRANSLATIONS[preferredLanguage] || TRANSLATIONS['hi'];
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Web Speech API Real-Time Dictation Hook (Google Assistant style)
  const { isListening, hasWebSpeech, startListening, stopListening } = useSpeechDictation({
    language: preferredLanguage,
    onSpeechResult: (text) => {
      onTranscriptionComplete(text, preferredLanguage);
    },
    onError: (err) => {
      console.warn("Speech dictation notice:", err);
    }
  });

  // Fallback MediaRecorder for raw audio upload to Whisper backend
  const handleManualAudioUpload = async (fileOrBlob: File) => {
    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', fileOrBlob, 'voice_recording.webm');
      formData.append('preferred_language', preferredLanguage);

      const res = await axios.post(`${apiBaseUrl}/api/v1/voice/transcribe`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (res.data && res.data.transcription) {
        onTranscriptionComplete(res.data.transcription, res.data.detected_language || preferredLanguage);
      }
    } catch (err: any) {
      console.error("Voice ASR Upload Error:", err);
      setErrorMessage(err.response?.data?.detail || "Voice transcription failed. Try speaking again or upload file.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleManualAudioUpload(e.target.files[0]);
    }
  };

  const toggleRecording = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        {/* Real-time Web Speech Dictation Toggle Button */}
        <button
          type="button"
          onClick={toggleRecording}
          disabled={isProcessing}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-md ${
            isListening
              ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse shadow-rose-600/40 ring-4 ring-rose-500/20'
              : 'bg-nyay-gold/20 hover:bg-nyay-gold text-nyay-gold hover:text-slate-950 border border-nyay-gold/40'
          }`}
        >
          {isListening ? (
            <>
              <MicOff className="w-4 h-4" />
              <span>{t.listeningStateText} ({t.stopVoiceBtn})</span>
            </>
          ) : (
            <>
              <Mic className="w-4 h-4" />
              <span>{t.recordVoiceBtn}</span>
            </>
          )}
        </button>

        {/* Audio File Upload Fallback */}
        <input
          type="file"
          ref={fileInputRef}
          accept="audio/*,.mp3,.wav,.m4a,.webm"
          onChange={handleFileInputChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isProcessing || isListening}
          className="px-3.5 py-2.5 rounded-xl bg-nyay-card hover:bg-nyay-border border border-nyay-border text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-all disabled:opacity-40"
        >
          <Upload className="w-3.5 h-3.5 text-nyay-accent" />
          <span>{t.uploadAudioFileBtn}</span>
        </button>
      </div>

      {/* Active Listening Indicator */}
      {isListening && (
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-xs text-rose-300">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <span className="font-semibold">{t.listeningStateText}</span>
          <div className="flex items-center gap-1 ml-auto">
            <div className="w-1 h-3 bg-rose-400 animate-bounce"></div>
            <div className="w-1 h-5 bg-rose-400 animate-bounce delay-75"></div>
            <div className="w-1 h-3 bg-rose-400 animate-bounce delay-150"></div>
          </div>
        </div>
      )}

      {isProcessing && (
        <div className="p-3 rounded-xl bg-nyay-accent/10 border border-nyay-accent/30 text-xs text-nyay-accent flex items-center gap-2">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span>{t.analyzingContextText}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
