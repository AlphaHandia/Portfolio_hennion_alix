
import React from 'react';
import WeatherApp from '../weather';



const Banner = () => {
  return (
    <div className="banner-container">
      <WeatherApp/>
     

      
      <div className="right-side">
      <div>
          <p>Short Presentation: je suis devenue intégrateur web suite à une reconversion professionnel.</p>
            <p>Aupars-avant j'ai été responsable opérationnel d'une cinquiantaine d'agent postal et agriculteur.</p>
            <p>
            Soft skills:
              - Communication
              - Analyse de Projet
              - Gestion d'équipe
              - Adaptabilité
            </p>
            <p>
            Hard skills:
            - Developpement Front-End
            - Intégration API
            - Anglais courant
            - Gestion de Projet
            </p>
          <p>Programming Languages: HTML<i class="fa-brands fa-html5"></i>, CSS<i class="fa-brands fa-css3-alt"></i>, JavaScript<i class="fa-brands fa-js"></i>, etc.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
