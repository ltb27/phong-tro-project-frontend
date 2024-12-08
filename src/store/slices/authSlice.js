import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from "@/services/api.js";

const LOGIN_URL = 'api/auth/admin/login';
const LOGOUT_URL = '/api/auth/admin/logout';

// Initial state for the slice
const initialState = {
    isAuthenticated: false,
    token: null,
    refreshToken: null,
    tokenExpiration: null,
};

// thunk actions
export const logout = createAsyncThunk('user/logout', async () => {
    await api.post(LOGOUT_URL);
});

export const login = createAsyncThunk('user/login', async (credentials) => {
    const response = await api.post(LOGIN_URL, credentials);
    return response.data;
});

// Create the slice
const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.userData = action.payload;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.userData = {
                isAuthenticated: false,
                token: null,
                refreshToken: null,
                tokenExpiration: null,
            };
        });
    },
});

export const {} = AuthSlice.actions;
export const blackList = ['auth.isAuthenticated'];

export default AuthSlice