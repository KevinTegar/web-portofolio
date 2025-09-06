// lib/hooks/useTranslation.js
import { useLanguage } from '@/context/language-context';
import enTranslations from '@/lib/locales/en.json';
import idTranslations from '@/lib/locales/id.json';

export function useTranslation() {
  const { language } = useLanguage();
  
  const translations = {
    en: enTranslations,
    id: idTranslations
  };
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key; // Fallback to key if translation not found
      }
    }
    
    return value;
  };
  
  return { t, language }; // Kembalikan juga language
}