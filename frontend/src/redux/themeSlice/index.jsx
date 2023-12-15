import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'cyber',
  currentLanguage: 'fr', // Ajout de la gestion de la langue
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'cyber' ? 'garden' : 'cyber';
    },
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { toggleTheme, changeLanguage } = themeSlice.actions;
export default themeSlice.reducer;
