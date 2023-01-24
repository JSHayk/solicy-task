import { configureStore } from "@reduxjs/toolkit";
// Slices
import cardsReducer from "./slices/cards.slice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
