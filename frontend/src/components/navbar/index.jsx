// NavBar.jsx
import React, { useState } from "react";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import profileImage from "../../assets/images/alix-hennion.jpg";
import LanguageSelector from "../LanguageSelector/index";
import translations from "../../initi18n/content/translation.json";
import PageLoader from "../loading/index"; // Assurez-vous que le chemin d'importation est correct

const NavBar = () => {
  const { language } = useLanguage();
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
      <nav className="navbar">
        <div className="left-side">
          <img
            src={profileImage}
            alt={navbar.profileImageAlt[language]}
            className="ProfileImage"
          />
          <LanguageSelector />
        </div>
        <h1>{navbar.title[language]}</h1>
        <div className="right-side">
          <a href="/#Banner">{navbar.presentation[language]}</a>
          <a href="/#mainProject">{navbar.projects[language]}</a>
          <a href="/Contact" onClick={handleContactClick}>
            {navbar.contact[language]}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
