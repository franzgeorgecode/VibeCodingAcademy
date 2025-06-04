import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    debug: true, // Enable debug mode for development
    fallbackLng: 'en', // Fallback language if detected language is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
  });

export default i18n;
