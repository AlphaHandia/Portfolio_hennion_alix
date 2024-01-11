import React, { useState } from "react";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import translations from "../../initi18n/content/translation.json";
import { useTheme } from "../theme-switch/ThemeContext";
import { Document, Page } from "react-pdf";
import { saveAs } from "file-saver";

const Footer = () => {
  const { language } = useLanguage();
  const { state: themeState } = useTheme();
  const footer = translations.footer;
  const [pdfSrc, setPdfSrc] = useState(null);

  const linkStyle = {
    color: themeState.currentTheme === 'garden' ? 'rgba(255, 96, 0)' : '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s ease-out',
  };

  const handleDownload = (pdfName) => {
    const pdfPath = `./${pdfName}`;
    setPdfSrc(pdfPath);

    // Save the file using file-saver
    saveAs(pdfPath, pdfName);
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
          href="https://github.com/AlphaHandia?tab=repositories"
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
          href="https://www.linkedin.com/in/alix-hennion-1389081b8/"
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
              href="/"
              style={footer.requirementsLink && linkStyle}
              onClick={() => handleDownload("Spécifications techniques Portfolio ALix Hennion.pdf")}
            >
              {footer.requirements[language]}
            </a>
          </li>
          <li>
            <a
              href="/"
              style={footer.recipeLink && linkStyle}
              onClick={() =>
                handleDownload("Alix+Hennion+Cahier+de+recette+du+Portfolio+complété.pdf")
              }
            >
              {footer.recipe[language]}
            </a>
          </li>
        </ul>
      </div>
      {pdfSrc && (
        <Document file={pdfSrc}>
          <Page pageNumber={1} />
        </Document>
      )}
    </footer>
  );
};

export default Footer;
