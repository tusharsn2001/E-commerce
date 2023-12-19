import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLoginRequest: (state) => {
            state.loading = true;
        },
        userLoginSuccess: (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
            state.error = null;
        },
        userLoginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        userLogout: (state) => {
            state.logout = {}
        }
    },
});

export const {
    userLoginRequest,
    userLoginSuccess,
    userLoginFail,
    userLogout
} = userSlice.actions;

export default userSlice.reducer;
