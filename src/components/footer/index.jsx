import React from "react";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import translations from "../../initi18n/content/translation.json";
import { useTheme } from "../theme-switch/ThemeContext";

const Footer = () => {
  const { language } = useLanguage();
  const { state: themeState } = useTheme();
  const footer = translations.footer;

  const buttonStyle = {
    color:
      themeState.currentTheme === "garden" ? "rgba(255, 96, 0)" : "#ffffff",
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    transition: "color 0.3s ease-out",
  };
  const downloadPDF = (nomPDF, cheminComplet) => {
    const lien = document.createElement("a");
    lien.href = cheminComplet;
    lien.download = nomPDF;
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
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
          <i className="fa-regular fa-envelope"></i> {footer.email[language]}
        </p>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>GitHub</h4>
        <a
          href="https://github.com/AlphaHandia?tab=repositories"
          target="_blank"
          aria-label="link to GitHub"
          rel="noopener noreferrer"
          style={footer.githubLink && buttonStyle}
        >
          <i
            className="fa-brands fa-github"
            style={footer.githubLink && buttonStyle}
          ></i>
        </a>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>LinkedIn</h4>
        <a
          href="https://www.linkedin.com/in/alix-hennion-1389081b8/"
          target="_blank"
          aria-label="link to linkedin"
          rel="noopener noreferrer"
          style={footer.linkedinLink && buttonStyle}
        >
          <i
            className="fa-brands fa-linkedin-in"
            style={footer.linkedinLink && buttonStyle}
          ></i>
        </a>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>{footer.documentationTitle[language]}</h4>
        <ul>
          <li>
            <button
              style={footer.requirementsLink && buttonStyle}
              onClick={() =>
                downloadPDF(
                  "Spécifications techniques Portfolio ALix Hennion.pdf",
                  "Spécifications techniques Portfolio ALix Hennion.pdf"
                )
              }
            >
              {footer.requirements[language]}
            </button>
          </li>
          <li>
            <button
              style={footer.recipeLink && buttonStyle}
              onClick={() =>
                downloadPDF(
                  "Alix+Hennion+Cahier+de+recette+du+Portfolio+complété.pdf",
                  "Alix+Hennion+Cahier+de+recette+du+Portfolio+complété.pdf"
                )
              }
            >
              {footer.recipe[language]}
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;