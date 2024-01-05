import React from "react";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import translations from "../../initi18n/content/translation.json";
import { useTheme } from "../theme-switch/ThemeContext";

const Footer = () => {
  const { language } = useLanguage();
  const { state: themeState } = useTheme();
  const footer = translations.footer;

  const linkStyle = {
    color: themeState.currentTheme === 'garden' ? 'rgba(255, 96, 0)' : '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s ease-out',
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>{footer.personalInfoTitle[language]}</h4>
        <p>
          <i className="fa-solid fa-mobile-screen-button"></i>{" "}
          {footer.phone[language]}
        </p>
        <p>
          <i className="fa-regular fa-envelope"></i>{" "}
          {footer.email[language]}
        </p>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>GitHub</h4>
        <a
          href={footer.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={footer.githubLink && linkStyle}
        >
          <i className="fa-brands fa-github" style={footer.githubLink && linkStyle}></i>
        </a>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>LinkedIn</h4>
        <a
          href={footer.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          style={footer.linkedinLink && linkStyle}
        >
          <i className="fa-brands fa-linkedin-in" style={footer.linkedinLink && linkStyle}></i>
        </a>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>{footer.documentationTitle[language]}</h4>
        <ul>
          <li>
            <a
              href={footer.requirementsLink}
              target="_blank"
              rel="noopener noreferrer"
              style={footer.requirementsLink && linkStyle}
            >
              {footer.requirements[language]}
            </a>
          </li>
          <li>
            <a
              href={footer.recipeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={footer.recipeLink && linkStyle}
            >
              {footer.recipe[language]}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
