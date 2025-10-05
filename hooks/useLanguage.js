'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, defaultLanguage } from '@/lib/i18n';

/**
 * Language Store using Zustand
 * Persists language preference in localStorage
 */
export const useLanguageStore = create(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);

/**
 * Custom hook to get translations for current language
 * @returns {Object} translations - Translations object for current language
 * @returns {string} language - Current language code
 * @returns {Function} setLanguage - Function to change language
 */
export function useTranslation() {
  const { language, setLanguage } = useLanguageStore();
  
  return {
    t: translations[language] || translations[defaultLanguage],
    language,
    setLanguage,
  };
}
