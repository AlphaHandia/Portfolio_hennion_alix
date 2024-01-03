import React from "react";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import translations from "../../initi18n/content/translation.json";

const Footer = () => {
  const { language } = useLanguage();
  const footer = translations.footer;

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
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>LinkedIn</h4>
        <a
          href={footer.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin-in"></i>
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
            >
              {footer.requirements[language]}
            </a>
          </li>
          <li>
            <a
              href={footer.recipeLink}
              target="_blank"
              rel="noopener noreferrer"
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
