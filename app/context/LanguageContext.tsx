"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import enTranslations from '../translations/en';
import itTranslations from '../translations/it';

type Locale = 'en' | 'it';
type Translations = typeof enTranslations;

interface LanguageContextType {
  locale: Locale;
  translations: Translations;
  changeLanguage: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>('en');
  const [translations, setTranslations] = useState<Translations>(enTranslations);

  useEffect(() => {
    // Get locale from URL path or default to 'en'
    const currentLocale = pathname?.startsWith('/it') ? 'it' : 'en';
    setLocale(currentLocale);
    setTranslations(currentLocale === 'it' ? itTranslations : enTranslations);
  }, [pathname]);

  const changeLanguage = (newLocale: Locale) => {
    // In App Router we need to handle navigation differently
    if (newLocale === 'it' && !pathname?.startsWith('/it')) {
      router.push(`/it${pathname || ''}`);
    } else if (newLocale === 'en' && pathname?.startsWith('/it')) {
      router.push(pathname.replace(/^\/it/, '') || '/');
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 