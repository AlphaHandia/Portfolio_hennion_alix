import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import CustomCursor from "./CustomCursor";
import GardenCanvas from "../MousefollowCanvas/garden";
import PageLoader from '../loading/index'; // Assurez-vous de fournir le chemin correct

const ThemedComponent = () => {
  const { toggleTheme, state } = useTheme();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggleTheme = async () => {
    setLoading(true);

    // Effectuez les opérations asynchrones, par exemple, le changement de thème
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
        <p className="ToggleNameOne">Cyber</p>
        <div className={`toggle ${buttonClicked ? "active" : ""}`}>
          <button onClick={handleToggleTheme}></button>

          {state.currentTheme === "garden" && buttonClicked && <GardenCanvas />}
          <CustomCursor />
        </div>
        <p className="ToggleNameTWo">Garden</p>
      </div>
    </>
  );
};

export default ThemedComponent;
