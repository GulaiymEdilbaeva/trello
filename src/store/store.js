import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../reducers/todoSlice";
const persistedState = localStorage.getItem("lists");
const initialState = persistedState
  ? { board: { lists: JSON.parse(persistedState) } }
  : {};
export const store = configureStore({
  reducer: {
    board: boardSlice,
  },
  preloadedState: initialState,
});
