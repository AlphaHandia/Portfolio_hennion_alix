// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Informations personnelles</h4>
        <p>Téléphone: [Votre numéro de téléphone]</p>
        <p>Email: [Votre email professionnel]</p>
      </div>

      <div className="footer-section">
        <h4>GitHub</h4>
        <a href="[Votre lien GitHub]" target="_blank" rel="noopener noreferrer">
          {/* Utilisez une icône GitHub, par exemple */}
          <img src="chemin-vers-votre-icone-github.png" alt="GitHub" />
        </a>
      </div>

      <div className="footer-section">
        <h4>LinkedIn</h4>
        <a href="[Votre lien LinkedIn]" target="_blank" rel="noopener noreferrer">
          {/* Utilisez une icône LinkedIn, par exemple */}
          <img src="chemin-vers-votre-icone-linkedin.png" alt="LinkedIn" />
        </a>
      </div>

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
