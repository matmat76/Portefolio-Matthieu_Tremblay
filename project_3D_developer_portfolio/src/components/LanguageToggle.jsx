import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-tertiary border border-secondary text-white px-3 py-2 rounded-lg hover:bg-secondary transition-colors duration-200 flex items-center gap-2"
      aria-label="Toggle language"
    >
      <span className="text-sm font-medium">
        {language === 'fr' ? '🇫🇷 FR' : '🇺🇸 EN'}
      </span>
      <span className="text-xs opacity-75">
        {language === 'fr' ? '→ EN' : '→ FR'}
      </span>
    </button>
  );
};

export default LanguageToggle;