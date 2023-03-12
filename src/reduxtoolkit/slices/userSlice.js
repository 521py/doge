import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../initialUserState";


const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser(_, action) {
            return action.payload
        },
        removeUser(state) {
            return initialUserState
        },
    }
});

export const { setUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;