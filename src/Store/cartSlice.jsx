import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // state.push(action.payload);
      const newItem = action.payload;
      const existingItem = state.find((state) => state.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity; // Update quantity
      } else {
        state.push(newItem); // Add new item
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    removeAll(state) {
      return (state = []);
    },
  },
});

export const { add, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
