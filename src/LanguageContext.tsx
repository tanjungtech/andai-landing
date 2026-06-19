import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'en' || saved === 'id') return saved;
    return 'id'; // default is Indonesian language
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    // If language is already saved in localStorage, don't auto-override
    const saved = localStorage.getItem('language');
    if (saved) return;

    // 1. Quick check timezone and navigator language
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isIndonesianTZ = tz.includes('Jakarta') || tz.includes('Makassar') || tz.includes('Jayapura') || tz.includes('Pontianak');
    const isIndonesianLang = navigator.language.startsWith('id') || navigator.languages.some(l => l.startsWith('id'));

    if (isIndonesianTZ || isIndonesianLang) {
      setLanguage('id');
      return;
    }

    // 2. Location-based detection via API (asynchronous)
    // We try to fetch country from a fast, secure, free geolocation API
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          if (data && data.country_code) {
            if (data.country_code === 'ID') {
              setLanguage('id');
            } else {
              setLanguage('en');
            }
            return;
          }
        }
      } catch (err) {
        console.warn('Geolocation lookup failed:', err);
      }

      try {
        const response = await fetch('https://freeipapi.com/api/json');
        if (response.ok) {
          const data = await response.json();
          if (data && data.countryCode) {
            if (data.countryCode === 'ID') {
              setLanguage('id');
            } else {
              setLanguage('en');
            }
            return;
          }
        }
      } catch (err) {
        console.warn('Backup geolocation lookup failed:', err);
      }

      // Default fallback
      setLanguage('id');
    };

    detectLocation();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
