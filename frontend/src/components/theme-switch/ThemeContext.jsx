import React, { createContext, useContext, useReducer } from 'react';

const TOGGLE_THEME = 'TOGGLE_THEME';

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, currentTheme: state.currentTheme === 'cyber' ? 'garden' : 'cyber' };
    default:
      return state;
  }
};

const initialState = {
  currentTheme: 'cyber',
  themeStyles: {
    'cyber': {
      backgroundImage: 'url(../../assets/images/background-theme-cybersecurity.png)',
      backgroundSize: 'cover',
      
     
    },
    'garden': {
      backgroundImage: 'url(../../assets/images/background-theme-garden.png)',
      backgroundSize: 'cover',
      
    
    },
  },
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  return (
    <ThemeContext.Provider value={{ state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
