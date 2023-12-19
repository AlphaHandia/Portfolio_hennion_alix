import React, { useState, useEffect } from 'react'; 
import { useTheme } from './ThemeContext';
import CustomCursor from './CustomCursor';
import GardenCanvas from '../MousefollowCanvas/garden';

const ThemedComponent = () => {
  const { toggleTheme, state } = useTheme();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setButtonClicked(true);
    
    document.body.classList.add('garden-theme', state.currentTheme === 'garden');
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
     
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
    
      <button onClick={handleToggleTheme}>Toggle Theme</button>

      {state.currentTheme === 'garden' && buttonClicked && <GardenCanvas />}

      <CustomCursor />
    </div>
  );
};

export default ThemedComponent;
