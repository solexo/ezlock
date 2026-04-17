import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'Fr' | 'En';

interface LanguageContextType {
  selectedLang: Language;
  setSelectedLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState<Language>(() => {
    // Check localStorage or browser language
    const saved = localStorage.getItem('language') as Language;
    if (saved) return saved;
    const browserLang = navigator.language;
    return browserLang.startsWith('en') ? 'En' : 'Fr';
  });

  useEffect(() => {
    localStorage.setItem('language', selectedLang);
    // Update html lang attribute
    document.documentElement.lang = selectedLang === 'Fr' ? 'fr' : 'en';
  }, [selectedLang]);

  return (
    <LanguageContext.Provider value={{ selectedLang, setSelectedLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
