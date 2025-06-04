import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  variant?: 'header' | 'dropdown' | 'settings';
  className?: string;
}

export default function LanguageSelector({ variant = 'dropdown', className = '' }: LanguageSelectorProps) {
  const { currentLanguage, changeLanguage, getCurrentLanguageConfig, supportedLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentConfig = getCurrentLanguageConfig();

  if (variant === 'header') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors rounded-lg"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm">{currentConfig.flag}</span>
          <span className="hidden md:inline text-sm">{currentConfig.code.toUpperCase()}</span>
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full right-0 mt-2 w-64 bg-slate-800 rounded-xl shadow-2xl border border-white/10 z-50 overflow-hidden">
              <div className="p-2">
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wide px-3 py-2">
                  Select Language
                </div>
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  currentLanguage === lang.code
                    ? 'bg-blue-500/20 text-blue-300'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{lang.nativeName}</div>
                  <div className="text-xs text-gray-400">{lang.name}</div>
                </div>
                {currentLanguage === lang.code && (
                  <Check className="h-4 w-4 text-blue-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      </>
    )}
  </div>
);
}

if (variant === 'settings') {
return (
<div className={`space-y-3 ${className}`}>
<label className="block text-sm font-medium text-gray-700">
Language / Idioma / Langue
</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
{supportedLanguages.map((lang) => (
<button
key={lang.code}
onClick={() => changeLanguage(lang.code)}
className={`flex items-center space-x-3 p-3 rounded-lg border-2 transition-all ${
  currentLanguage === lang.code
    ? 'border-blue-500 bg-blue-50 text-blue-900'
    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
}`}
>
<span className="text-xl">{lang.flag}</span>
<div className="flex-1 text-left">
<div className="font-medium">{lang.nativeName}</div>
<div className="text-xs text-gray-500">{lang.name}</div>
</div>
{currentLanguage === lang.code && (
<Check className="h-4 w-4 text-blue-500" />
)}
</button>
))}
</div>
</div>
);
}

// Default dropdown variant
return (
<div className={`relative ${className}`}>
<button
onClick={() => setIsOpen(!isOpen)}
className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all"
>
<Globe className="h-4 w-4" />
<span>{currentConfig.flag}</span>
<span className="text-sm">{currentConfig.nativeName}</span>
</button>
  {isOpen && (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute top-full left-0 mt-2 w-full min-w-64 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 z-50 overflow-hidden">
        {supportedLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              changeLanguage(lang.code);
              setIsOpen(false);
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors ${
              currentLanguage === lang.code
                ? 'bg-white/20 text-white'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <div className="flex-1 text-left">
              <div className="font-medium">{lang.nativeName}</div>
              <div className="text-xs text-gray-400">{lang.name}</div>
            </div>
            {currentLanguage === lang.code && (
              <Check className="h-4 w-4 text-white" />
            )}
          </button>
        ))}
      </div>
    </>
  )}
</div>
);
}
