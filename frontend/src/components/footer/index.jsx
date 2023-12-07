
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Informations personnelles</h4>
        <p><i class="fa-regular fa-mobile"></i> 06-04-05-83-70</p>
        <p><i class="fa-regular fa-envelope"></i> henion.pierre.alix@hotmail.fr</p>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>GitHub</h4>
        <a href="[Votre lien GitHub]" target="_blank" rel="noopener noreferrer">
          {/* Utilisez une icône GitHub, par exemple */}
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>LinkedIn</h4>
        <a href="[Votre lien LinkedIn]" target="_blank" rel="noopener noreferrer">
          {/* Utilisez une icône LinkedIn, par exemple */}
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <div className="separator"></div>
      <div className="footer-section">
        <h4>Cahier des charges et Recettes</h4>
        <ul>
          <li>
            <a href="[Lien vers votre cahier des charges]" target="_blank" rel="noopener noreferrer">
              Cahier des charges
            </a>
          </li>
          <li>
            <a href="[Lien vers votre cahier de recettes]" target="_blank" rel="noopener noreferrer">
              Cahier de recettes
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
