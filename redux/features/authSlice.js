import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../utils/asyncStorage";

const initialState = {
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            storeData("user", action.payload);
        },
    },
});

export default authSlice.reducer;

export const { login } = authSlice.actions;

export const selectUser = state => state.auth.user