import React from 'react';
import { useTranslation } from 'react-i18next';
import frenchflag from '../../assets/images/french-flag.jpg';
import englishflag from '../../assets/images/english-flag.jpg'


const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')} className='french'><img src={englishflag} alt='english flag' />English</button>
      <button onClick={() => changeLanguage('fr')} className='english'><img src={frenchflag} alt='french flag' />Français</button>
      
    </div>
  );
};

export default LanguageSelector;