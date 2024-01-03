import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/themeSlice/index";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
