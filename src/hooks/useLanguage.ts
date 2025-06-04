import { useState, useEffect } from 'react';

export type SupportedLanguage = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it' | 'zh' | 'ja' | 'ko' | 'ru';

interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' }
];

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [isLoading, setIsLoading] = useState(true);

  // Detectar idioma del dispositivo
  const detectDeviceLanguage = (): SupportedLanguage => {
    // Obtener idioma del navegador
    const browserLang = navigator.language || navigator.languages[0];
    const langCode = browserLang.split('-')[0].toLowerCase() as SupportedLanguage;

    // Verificar si está soportado
    const isSupported = SUPPORTED_LANGUAGES.some(lang => lang.code === langCode);

    return isSupported ? langCode : 'en'; // Fallback a inglés
  };

  // Inicializar idioma
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred_language') as SupportedLanguage;

    if (savedLanguage && SUPPORTED_LANGUAGES.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      const deviceLanguage = detectDeviceLanguage();
      setCurrentLanguage(deviceLanguage);
      localStorage.setItem('preferred_language', deviceLanguage);
    }

    setIsLoading(false);
  }, []);

  // Cambiar idioma manualmente
  const changeLanguage = (langCode: SupportedLanguage) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('preferred_language', langCode);

    // Actualizar el atributo lang del documento
    document.documentElement.lang = langCode;

    // Actualizar dirección de texto para idiomas RTL
    const config = SUPPORTED_LANGUAGES.find(lang => lang.code === langCode);
    document.documentElement.dir = config?.rtl ? 'rtl' : 'ltr';
  };

  // Obtener configuración del idioma actual
  const getCurrentLanguageConfig = () => {
    return SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage) || SUPPORTED_LANGUAGES[0];
  };

  return {
    currentLanguage,
    changeLanguage,
    getCurrentLanguageConfig,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isLoading
  };
}
