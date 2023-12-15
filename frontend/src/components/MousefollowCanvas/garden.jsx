import React, { useRef, useState } from 'react';
import backgroundImage from '../../assets/images/background-theme-garden.png';
import gsap from 'gsap';
import { useTheme } from '../theme-switch/ThemeContext';

import '../../sass/main.css'; // Assurez-vous d'importer votre fichier CSS

const GardenCanvas = () => {
  const { state } = useTheme();
  const [isWatering, setWatering] = useState(false);
  const arrosoirRef = useRef(null);
  const planteRef = useRef(null);

  const handleClick = () => {
    setWatering(true);

    // Animation de l'arrosoir
    gsap.to(arrosoirRef.current, {
      x: isWatering ? 200 : 0,
      y: isWatering ? 200 : 0,
      ease: 'power2.inOut',
      onComplete: () => {
        setWatering(false);
      },
    });

    // Animation de croissance des plantes
    gsap.to(planteRef.current, {
      height: isWatering ? 150 : 100,
      ease: 'power2.inOut',
    });

    // Ajoutez la classe rotate au curseur lors de l'arrosage
    if (state.currentTheme === 'garden') {
      document.body.classList.add('rotate');
      setTimeout(() => {
        document.body.classList.remove('rotate');
      }, 300); // Supprimez la classe après la fin de l'animation
    }
  };

  return (
    <div
      className="garden-canvas"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    >
      {/* Animation de l'arrosoir */}
      <img
        ref={arrosoirRef}
        src="arrosoir.png"
        alt="Arrosoir"
        className="arrosoir"
      />

      {/* Animation de croissance des plantes */}
      <div ref={planteRef} className="plante" />
    </div>
  );
};

export default GardenCanvas;
