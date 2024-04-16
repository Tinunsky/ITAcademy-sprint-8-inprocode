import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from '../public/locales/en/translation.json'
import esTranslation from '../public/locales/es/translation.json'
import catTranslation from '../public/locales/cat/translation.json'


const resources = {
    en: {
      translation: enTranslation
    },
    es: {
        translation: esTranslation
    },
    cat: {
        translation: catTranslation
    }
  };


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    debug: true,
    lng: "en",
  });

  export default i18n;