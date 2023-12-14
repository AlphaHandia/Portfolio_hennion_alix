import React from 'react';
import { useTranslation } from 'react-i18next';
import frenchflag from '../../assets/images/french-flag.jpg';
import englishflag from '../../assets/images/english-flag.jpg';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation(); // Utilisez la fonction t pour traduire les textes

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')} className='french'>
        <img src={englishflag} alt='english flag' />
        {t('projects.english')} {/* Utilisez t pour traduire le texte */}
      </button>
      <button onClick={() => changeLanguage('fr')} className='english'>
        <img src={frenchflag} alt='french flag' />
        {t('projects.french')} {/* Utilisez t pour traduire le texte */}
      </button>
    </div>
  );
};

export default LanguageSelector;
