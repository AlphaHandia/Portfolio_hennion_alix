import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const GardenCanvas = () => {
  const [isWatering, setWatering] = useState(false);

  // Animation pour le chemin de l'arrosoir
  const arrosoirAnimation = useSpring({
    to: async (next, cancel) => {
      await next({ x: isWatering ? 200 : 0, y: isWatering ? 200 : 0 });
    },
    onRest: () => {
      // Animation terminée, remettez à false
      setWatering(false);
    },
  });

  // Animation de croissance des plantes
  const plantGrowthAnimation = useSpring({
    to: async (next, cancel) => {
      await next({ height: isWatering ? 150 : 100 });
    },
  });

  const handleClick = () => {
    // Démarrez l'animation d'arrosoir
    setWatering(true);
  };

  return (
    <div className="garden-mouse-follow-canvas" onClick={handleClick}>
      {/* Animation de l'arrosoir */}
      <animated.img
        src="arrosoir.png"
        alt="Arrosoir"
        style={{
          position: 'absolute',
          transform: arrosoirAnimation.x
            .to({ range: [0, 200], output: [0, 1] })
            .to((x) => `translateX(${x * 100}px)`),
          top: arrosoirAnimation.y.to((y) => `${y}px`),
        }}
      />

      {/* Animation de croissance des plantes */}
      <animated.div
        className="plante"
        style={{
          height: plantGrowthAnimation.height.to((height) => `${height}px`),
        }}
      />
    </div>
  );
};

export default GardenCanvas;
