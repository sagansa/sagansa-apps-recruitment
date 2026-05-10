import i18n from 'i18next';
import { initReactI18next } from '../node_modules/react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';

import idTranslation from './locales/id.json';
import enTranslation from './locales/en.json';

const resources = {
  id: {
    translation: idTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
