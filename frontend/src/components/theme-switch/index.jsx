import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import CustomCursor from './CustomCursor';
import GardenCanvas from '../MousefollowCanvas/garden';


const ThemedComponent = () => {
  const { toggleTheme, state } = useTheme();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setButtonClicked(!buttonClicked);
    document.body.classList.toggle('garden-theme', state.currentTheme === 'garden');
  };

  return (
    <div className={`toggle ${buttonClicked ? 'active' : ''}`}>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      {state.currentTheme === 'garden' && buttonClicked && <GardenCanvas />}
      <CustomCursor />
    </div>
  );
};

export default ThemedComponent;
