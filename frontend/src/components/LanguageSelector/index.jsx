import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import frenchflag from '../../assets/images/french-flag.jpg';
import englishflag from '../../assets/images/english-flag.jpg';


const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div className='languageselector'>
      <button onClick={() => handleLanguageChange('en')} className={`english ${selectedLanguage === 'en' ? 'selected' : ''}`}>
        <img src={englishflag} alt='english flag' />
        {language === 'en' ? 'English' : 'Anglais'}
      </button>
      <button onClick={() => handleLanguageChange('fr')} className={`french ${selectedLanguage === 'fr' ? 'selected' : ''}`}>
        <img src={frenchflag} alt='french flag' />
        {language === 'fr' ? 'French' : 'Français'}
      </button>
    </div>
  );
};

export default LanguageSelector;
