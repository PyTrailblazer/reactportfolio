import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from "./locales/ru.json";
import en from "./locales/en.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Язык по умолчанию
    lng: localStorage.getItem('i18nextLng') || 'en', // берём язык из localStorage или устанавливаем английский по умолчанию
    resources: {
      ru: {
        translation: ru,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: 'en', // язык по умолчанию, если выбранный язык не доступен
    detection: {
      // Детектирует язык и сохраняет его в localStorage
      order: ['localStorage', 'navigator'], // порядок проверки
      caches: ['localStorage'], // сохраняем язык в localStorage
    },
    // debug: true, // можно раскомментировать для отладки
  });

export default i18n;