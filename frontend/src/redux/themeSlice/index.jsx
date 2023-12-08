import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'cyber',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'cyber' ? 'garden' : 'cyber';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;