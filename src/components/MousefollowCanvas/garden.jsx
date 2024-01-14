import React, { useState } from "react";
import backgroundImage from "../../assets/images/background-theme-garden.webp";
import { useTheme } from "../theme-switch/ThemeContext";
import "../../sass/main.css";

const GardenCanvas = () => {
  const { state } = useTheme();
  const [ setWatering] = useState(false);
  const handleClick = () => {
    setWatering(true);


    if (state.currentTheme === "garden") {
      document.body.classList.add("rotate");
      setTimeout(() => {
        document.body.classList.remove("rotate");
      }, 300);
    }
  };

  return (
    <div
      className="garden-canvas"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    >
      

      <div  />
    </div>
  );
};

export default GardenCanvas;
