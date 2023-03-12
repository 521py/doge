import { configureStore, createReducer } from "@reduxjs/toolkit";
import { initialUserState } from "./initialUserState";
import userReduser, { userReducer } from "./slices/userSlice";
import cartReduser, { cartReducer } from "./slices/cartSlice";

const getInitState = () => {
    const state = localStorage.getItem("reduxState")
    return state ? JSON.parse(state) : { user: initialUserState, cart: [] }
}

export const store = configureStore({
    preloadedState: getInitState(),
    reducer: {
        user: userReducer,
        cart: cartReducer,
        // filter: filterReducer
    }
});

store.subscribe(() => localStorage.setItem('reduxState', JSON.stringify(store.getState())))