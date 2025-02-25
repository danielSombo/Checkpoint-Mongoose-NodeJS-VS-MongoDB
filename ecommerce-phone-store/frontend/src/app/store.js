import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/card/cardSlice';

const preloadedState = {
    cart: [
        {
        id: 1,
        name: "Ordinateur portable",
        price: 899.99,
        quantity: 1,
        },
        {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        quantity: 2,
        },
    ],
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState, // Ajoutez l'état initial ici
});