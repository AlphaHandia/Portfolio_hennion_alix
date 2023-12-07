import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice/index';
import ThemeContext from './ThemeContext';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { toggleTheme } = useContext(ThemeContext);
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
