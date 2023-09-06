import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    lists: [],
    isModalOpen: false,
    selectedCard: null,
  },
  reducers: {
    addList: (state, action) => {
      state.lists.push({ title: action.payload, cards: [] });
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
    addCard: (state, action) => {
      const { listIndex, text } = action.payload;
      state.lists[listIndex].cards.push(text);
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
    editListTitle: (state, action) => {
      const { listIndex, newTitle } = action.payload;
      state.lists[listIndex].title = newTitle;
    },
    editCardText: (state, action) => {
      const { listIndex, cardIndex, newText } = action.payload;
      state.lists[listIndex].cards[cardIndex] = newText;
    },
    deleteList: (state, action) => {
      const { listIndex } = action.payload;
      state.lists.splice(listIndex, 1);
    },
    deleteCard: (state, action) => {
      const { listIndex, cardIndex } = action.payload;
      state.lists[listIndex].cards.splice(cardIndex, 1);
    },
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedCard = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedCard = null;
    },
  },
});

export const {
  addList,
  addCard,
  editListTitle,
  editCardText,
  deleteList,
  deleteCard,
  openModal,
  closeModal,
} = boardSlice.actions;

export default boardSlice.reducer;
