import React, { useState, useEffect } from 'react';  // N'oubliez pas d'importer useEffect
import { useTheme } from './ThemeContext';
import CustomCursor from './CustomCursor';
import GardenCanvas from '../MousefollowCanvas/garden';

const ThemedComponent = () => {
  const { toggleTheme, state } = useTheme();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setButtonClicked(true);
    // Ajouter une classe au body en fonction du thème actuel
    document.body.classList.add('garden-theme', state.currentTheme === 'garden');
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Mettez à jour la position du curseur avec la position de la souris
      // Vous devrez ajuster les coordonnées en fonction de la position de votre page
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Bouton pour basculer le thème */}
      <button onClick={handleToggleTheme}>Toggle Theme</button>

      {/* Affichage du composant de suivi de la souris en fonction du thème actuel */}
      {state.currentTheme === 'garden' && buttonClicked && <GardenCanvas />}
      
      {/* Curseur personnalisé */}
      <CustomCursor />
    </div>
  );
};

export default ThemedComponent;
