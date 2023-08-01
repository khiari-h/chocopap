// cart.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Ajoutez l'article au panier
      // Vous pouvez gérer les doublons, les quantités, etc., selon vos besoins
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // Retirez l'article du panier en fonction de l'ID ou d'une autre propriété unique
      const itemIdToRemove = action.payload;
      return state.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
