import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/themeSlice/index';


const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const handleToggle = () => {
    dispatch(toggleTheme());
    console.log('ok toggle')
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Theme</button>
      <div className={currentTheme === 'cyber' ? 'cyber' : 'garden'}>
       
      </div>
    </div>
  );
};

export default ThemeToggle;
