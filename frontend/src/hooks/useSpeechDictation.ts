'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { LanguageCode } from '../data/i18n';

interface SpeechDictationOptions {
  language: LanguageCode;
  onSpeechResult: (text: string, isFinal: boolean) => void;
  onError?: (err: string) => void;
}

export function useSpeechDictation({
  language,
  onSpeechResult,
  onError
}: SpeechDictationOptions) {
  const [isListening, setIsListening] = useState(false);
  const [hasWebSpeech, setHasWebSpeech] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Map language code to BCP 47 language tag
  const getLangTag = useCallback((lang: LanguageCode) => {
    switch (lang) {
      case 'hi':
        return 'hi-IN';
      case 'mr':
        return 'mr-IN';
      case 'en':
      default:
        return 'en-IN';
    }
  }, []);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      setHasWebSpeech(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = getLangTag(language);

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        const combinedText = finalTranscript || interimTranscript;
        if (combinedText.trim()) {
          onSpeechResult(combinedText, !!finalTranscript);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('SpeechRecognition error:', event.error);
        if (event.error !== 'no-speech') {
          setIsListening(false);
          if (onError) onError(event.error);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } else {
      setHasWebSpeech(false);
    }
  }, [language, getLangTag, onSpeechResult, onError]);

  const startListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.lang = getLangTag(language);
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err: any) {
        console.warn('SpeechRecognition start failed:', err);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err: any) {
        console.warn('SpeechRecognition stop failed:', err);
      }
      setIsListening(false);
    }
  };

  return {
    isListening,
    hasWebSpeech,
    startListening,
    stopListening
  };
}
