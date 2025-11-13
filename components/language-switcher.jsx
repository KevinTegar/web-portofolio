
"use client";

import React from 'react';
import { useLanguage } from '@/context/language-context';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center justify-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 w-14 h-14"
      aria-label="Switch language"
    >
      {language === 'en' ? 'ID' : 'EN'}
    </button>
  );
}