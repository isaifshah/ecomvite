import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      existingItem ? existingItem.quantity++ : state.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => state.filter(item => item.id !== action.payload),
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;