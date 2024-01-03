import React from "react";
import WeatherApp from "../weather";

const Banner = () => {
  return (
    <div className="banner-container" id="Banner">
      <WeatherApp />

      <div className="midle-side">
        <p>Programming Languages:</p>
        <div className="midle-side-icon">
          <p>
            <i class="fa-brands fa-html5"></i>
          </p>
          <p>
            <i class="fa-brands fa-css3-alt"></i>
          </p>
          <p>
            <i class="fa-brands fa-sass"></i>
          </p>
          <p>
            <i class="fa-brands fa-js"></i>
          </p>
          <p>
            <i class="fa-brands fa-react"></i>
          </p>
        </div>
      </div>

      <div className="right-side">
        <div>
          <p>
            Short Presentation: je suis devenue intégrateur web suite à une
            reconversion professionnel.
          </p>
          <p>
            Aupars-avant j'ai été responsable opérationnel d'une cinquantaine
            d'agent postal et encore avant agriculteur.
          </p>
          <p>
            Soft skills: - Communication - Analyse de Projet - Gestion d'équipe
            - Adaptabilité
          </p>
          <p>
            Hard skills: - Developpement Front-End - Intégration API - Anglais
            courant - Gestion de Projet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
