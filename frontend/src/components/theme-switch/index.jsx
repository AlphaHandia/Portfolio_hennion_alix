import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import { useLanguage } from "../LanguageSelector/LanguageContext";
import translations from "../../initi18n/content/translation.json";
import CustomCursor from "./CustomCursor";
import GardenCanvas from "../MousefollowCanvas/garden";
import PageLoader from "../loading/index";

const ThemedComponent = () => {
  const { toggleTheme, state } = useTheme();
  const { language } = useLanguage();
  const themedComponent = translations.themedComponent;
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleTheme = async () => {
    setLoading(true);

    await toggleTheme();

    setButtonClicked(!buttonClicked);
    document.body.classList.toggle(
      "garden-theme",
      state.currentTheme === "garden"
    );

    setLoading(false);
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="PositionToggle">
        <p className="ToggleNameOne">{themedComponent.cyber[language]}</p>
        <div className={`toggle ${buttonClicked ? "active" : ""}`}>
          <button onClick={handleToggleTheme}></button>

          {state.currentTheme === "garden" && buttonClicked && (
            <GardenCanvas />
          )}
          <CustomCursor />
        </div>
        <p className="ToggleNameTwo">{themedComponent.garden[language]}</p>
      </div>
    </>
  );
};

export default ThemedComponent;
