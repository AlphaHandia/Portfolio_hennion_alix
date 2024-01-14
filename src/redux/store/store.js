import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../themeSlice/index";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;