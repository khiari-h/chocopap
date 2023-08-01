// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart'; // Remplacez le chemin par l'emplacement de votre reducer de panier

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Ajoutez d'autres reducers ici si nécessaire
  },
});

export default store;
