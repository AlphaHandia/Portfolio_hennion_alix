import React, { useEffect, useState } from 'react';
import backgroundImage from '../../assets/images/background-theme-cybersecurity.png';

const NetworkCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [nodes] = useState(() => {
    const newNodes = [];
    for (let i = 0; i < 30; i++) {
      const node = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      newNodes.push(node);
    }
    return newNodes;
  });

  useEffect(() => {
    const canvas = document.getElementById('background');
    const context = canvas.getContext('2d');

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const updateCanvas = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Dessiner des lignes entre les nœuds et la position de la souris
      context.lineWidth = 1;

      nodes.forEach((node) => {
        const distance = Math.hypot(node.x - mousePosition.x, node.y - mousePosition.y);
        const opacity = 1 - Math.min(1, distance / 400); // Ajustez le nombre 200 pour changer la distance à laquelle la ligne devient foncée

        context.beginPath();
        context.moveTo(node.x, node.y);
        context.lineTo(mousePosition.x, mousePosition.y);
        // D'abord, la ligne colorée avec l'opacité basée sur la distance
context.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
context.stroke();



      });

      // Dessiner les nœuds (points)
      context.fillStyle = '#FFFFFF';
      nodes.forEach((node) => {
        context.beginPath();
        context.arc(node.x, node.y, 3, 0, 2 * Math.PI);
        context.fill();
      });
    };

    // Lancer la première mise à jour du canvas
    updateCanvas();

    const handleWindowResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [mousePosition, nodes]);
  return (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    display: 'block',
    width: '100%',
    height: '100%',
    background: `url(${backgroundImage})`, // Remplacez le chemin par votre image
  }}>
    <canvas id="background" style={{ width: '100%', height: '100%' }} />
  </div>
);
};

export default NetworkCanvas;
