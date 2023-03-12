import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../initialUserState";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            // if (state.some(product => product.id === action.payload)) {
            //     state
            // }
            state.push({
                id: action.payload,
                isPurchase: false,
                count: 1
            })
        },
        removeFromCart(state, action) {
            // return initialUserState
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;