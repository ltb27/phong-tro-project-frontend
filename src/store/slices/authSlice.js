import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from "@/services/api.js";

// Initial state for the slice
const initialState = {
    isAuthenticated: false,
    token: null,
    refreshToken: null,
    tokenExpiration: null,
};

// thunk actions
export const logout = createAsyncThunk('user/logout', async () => {
    await api.post('/api/auth/admin/logout');
});

export const login = createAsyncThunk('user/login', async (userData) => {
    const response = await api.post('api/auth/admin/login', userData);
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
            state.userData = {};
        });
    },
});

export const {} = AuthSlice.actions;
export const blackList = ['auth.isAuthenticated'];

export default AuthSlice