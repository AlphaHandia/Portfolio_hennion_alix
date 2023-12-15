import React from 'react';
import { useLanguage } from './LanguageContext';
import frenchflag from '../../assets/images/french-flag.jpg';
import englishflag from '../../assets/images/english-flag.jpg';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage('en')} className='english'>
        <img src={englishflag} alt='english flag' />
        {language === 'en' ? 'English' : 'Anglais'}
      </button>
      <button onClick={() => changeLanguage('fr')} className='french'>
        <img src={frenchflag} alt='french flag' />
        {language === 'fr' ? 'French' : 'Français'}
      </button>
    </div>
  );
};

export default LanguageSelector;
