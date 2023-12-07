import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: {
    primaryColor: 'defaultPrimaryColor',
    secondaryColor: 'defaultSecondaryColor',
    // ... d'autres propriétés du thème
  },
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light'
        ? { primaryColor: 'darkPrimaryColor', secondaryColor: 'darkSecondaryColor' }
        : { primaryColor: 'lightPrimaryColor', secondaryColor: 'lightSecondaryColor' };
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;