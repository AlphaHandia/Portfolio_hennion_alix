import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import CyberCanvas from '../MousefollowCanvas/cyber';
import GardenCanvas from '../MousefollowCanvas/garden';

const ThemedComponent = () => {
  const {toggleTheme } = useTheme();
  const [isCyberTheme, setIsCyberTheme] = useState(true);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsCyberTheme((prev) => !prev);
  };

  return (
    <div>
      {/* Bouton pour basculer le thème */}
      <button onClick={handleToggleTheme}>Toggle Theme</button>

      {/* Affichage du composant de suivi de la souris en fonction du thème actuel */}
      {isCyberTheme ? <CyberCanvas /> : <GardenCanvas />}
    </div>
  );
};

export default ThemedComponent;
