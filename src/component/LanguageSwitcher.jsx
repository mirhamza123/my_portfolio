import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'de', name: 'DE', flag: '🇩🇪' },
    { code: 'ar', name: 'AR', flag: '🇸🇦' }
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    
    // Update document direction for RTL languages
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
    
    // Store in localStorage
    localStorage.setItem('language', langCode);
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-2">
      <div className="flex items-center space-x-1 p-1 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`
              relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
              ${i18n.language === lang.code 
                ? 'bg-white/30 text-white shadow-md scale-110' 
                : 'text-white/70 hover:text-white hover:bg-white/20'
              }
            `}
            title={lang.name}
            aria-label={`Switch to ${lang.name}`}
          >
            <span className="text-lg">{lang.flag}</span>
            {i18n.language === lang.code && (
              <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
