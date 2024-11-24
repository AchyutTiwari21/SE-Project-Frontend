import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    projectName: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setProjectName: (state, action) => {
            state.typeOfWebsite = action.payload;
        }
    }
});

export const { login, logout, setUserData, setProjectName } = authSlice.actions;

export default authSlice.reducer;