import React, { createContext, useContext, useReducer } from 'react';

// Actions
const TOGGLE_THEME = 'TOGGLE_THEME';

// Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, currentTheme: state.currentTheme === 'cyber' ? 'garden' : 'cyber' };
    default:
      return state;
  }
};

// Initial state
const initialState = {
  currentTheme: 'cyber', // Vous pouvez définir le thème initial ici
};

// Créez le contexte
const ThemeContext = createContext();

// Fournisseur de thème
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

// Hook personnalisé pour utiliser le contexte
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
