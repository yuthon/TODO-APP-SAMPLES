import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import languageSlice from "./languageSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    language: languageSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
