import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./content/English.json";
import frTranslation from "./content/Français.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en-us",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;