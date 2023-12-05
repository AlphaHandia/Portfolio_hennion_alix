import React, { useContext } from 'react';
import ThemeContext from '../theme-switch/themecontext/index';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;