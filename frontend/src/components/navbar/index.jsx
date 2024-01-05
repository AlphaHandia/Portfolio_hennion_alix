// NavBar.jsx
import React, { useState } from "react";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import profileImage from "../../assets/images/alix-hennion.jpg";
import LanguageSelector from "../LanguageSelector/index";
import translations from "../../initi18n/content/translation.json";
import PageLoader from "../loading/index"; 
import { useTheme } from "../theme-switch/ThemeContext";
const NavBar = () => {
  const { language } = useLanguage();
  const { state: themeState } = useTheme();  // Assurez-vous d'avoir l'état du thème

  const navbar = translations.navbar;
  const [loading, setLoading] = useState(false);

  const handleContactClick = () => {
    setLoading(true);

    // Simulez un chargement en différé (remplacez cela par votre logique de chargement réelle)
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <PageLoader loading={loading} />
      <nav className={`navbar ${themeState.currentTheme === 'garden' ? 'garden-theme' : ''}`}>
        <div className="left-side">
          <img
            src={profileImage}
            alt={navbar.profileImageAlt[language]}
            className="ProfileImage"
          />
          <LanguageSelector />
        </div>
        <h1 style={{
          color: themeState.currentTheme === 'garden' ? '#20a338' : 'antiquewhite',
          textShadow: themeState.currentTheme === 'garden' ? '1px 1px 1px #bb8a00' : '1px 1px 1px #fac123',
        }}>{navbar.title[language]}</h1>
        <div className="right-side">
          <a href="/#Banner" style={{
            color: themeState.currentTheme === 'garden' ? '#ff6000' : 'aqua',
            textShadow: themeState.currentTheme === 'garden' ? 'none' : '1px 1px 1px #fac123',
          }}>{navbar.presentation[language]}</a>
          <a href="/#mainProject" style={{
            color: themeState.currentTheme === 'garden' ? '#ff6000' : 'aqua',
            textShadow: themeState.currentTheme === 'garden' ? 'none' : '1px 1px 1px #fac123',
          }}>{navbar.projects[language]}</a>
          <a href="/Contact" onClick={handleContactClick} style={{
            color: themeState.currentTheme === 'garden' ? '#ff6000' : 'aqua',
            textShadow: themeState.currentTheme === 'garden' ? 'none' : '1px 1px 1px #fac123',
          }}>{navbar.contact[language]}</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;