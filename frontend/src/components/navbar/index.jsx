import React from "react";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import profileImage from "../../assets/images/alix-hennion.jpg";
import LanguageSelector from "../LanguageSelector/index";
import translations from "../../initi18n/content/translation.json";

const NavBar = () => {
  const { language } = useLanguage();
  const navbar = translations.navbar;

  return (
    <nav className="navbar">
      <div className="left-side">
        <img src={profileImage} alt={navbar.profileImageAlt[language]} className="ProfileImage" />
        <LanguageSelector />
      </div>
      <h1>{navbar.title[language]}</h1>
      <div className="right-side">
        <a href="/#Banner">{navbar.presentation[language]}</a>
        <a href="/#mainProject">{navbar.projects[language]}</a>
        <a href="/Contact">{navbar.contact[language]}</a>
      </div>
    </nav>
  );
};

export default NavBar;
