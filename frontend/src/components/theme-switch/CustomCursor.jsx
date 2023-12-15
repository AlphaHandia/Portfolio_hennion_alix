import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaucet } from '@fortawesome/free-solid-svg-icons';

const CustomCursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {cursorVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 10000,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <FontAwesomeIcon icon={faFaucet} size="2x" color="red" />
        </div>
      )}
    </>
  );
};

export default CustomCursor;
