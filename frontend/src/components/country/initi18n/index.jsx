import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Définir mes traductions pour l'anglais ici
          welcome: 'Welcome!',
        },
      },
      fr: {
        translation: {
          // Définir mes traductions pour le français ici
          welcome: 'Bienvenue !',
        },
      },
  
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en-us', // Langue de secours si la langue actuelle n'a pas de traductions disponibles
    interpolation: {
      escapeValue: false, // Permet d'insérer des éléments HTML dans les traductions
    },
  });

export default i18n;