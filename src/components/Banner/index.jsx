import React from "react";
import WeatherApp from "../weather";

import { useLanguage } from "../LanguageSelector/LanguageContext";
import translations from "../../initi18n/content/translation.json";

const Banner = () => {
  const { language } = useLanguage();
  const banner = translations.banner;

  return (
    <div className="banner-container" id={banner.bannerId[language]}>
      <WeatherApp />

      <div className="midle-side">
        <p>{banner.programmingLanguages[language]}:</p>
        <div className="midle-side-icon">
          <p>
            <i className="fa-brands fa-html5"></i>
          </p>
          <p>
            <i className="fa-brands fa-css3-alt"></i>
          </p>
          <p>
            <i className="fa-brands fa-sass"></i>
          </p>
          <p>
            <i className="fa-brands fa-js"></i>
          </p>
          <p>
            <i className="fa-brands fa-react"></i>
          </p>
        </div>
      </div>

      <div className="right-side">
        <div>
          <p>{banner.shortPresentation[language]}</p>
          <p>{banner.previousRoles[language]}</p>
          <p>{banner.softSkills[language]}</p>
          <p>{banner.hardSkills[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;