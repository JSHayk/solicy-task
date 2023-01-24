import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCards(state, { payload }) {
      state.data = payload;
    },
    addCard(state, { payload }) {
      state.data = [...state.data, payload];
    },
    sortCards(state) {
      state.data = state.data.sort((a, b) => a.number - b.number);
    },
    deleteCard(state, { payload }) {
      console.log(payload, "payload");
      state.data = state.data.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addCard, addCards, sortCards, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;
