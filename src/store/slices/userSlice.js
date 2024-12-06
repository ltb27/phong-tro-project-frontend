import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from "@/services/api.js";

// thunk actions
export const logout = createAsyncThunk('user/logout', async () => {
    await api.post('http://localhost:5173/api/auth/admin/logout');
});

export const login = createAsyncThunk('user/login', async (userData) => {
    const response = await api.post('http://localhost:5173/api/auth/admin/login', userData);
    return response.data;
});

// Initial state for the slice
const initialState = {
    userData: {
        token: null,
        expiration: null,
        refreshTokenExpiration: null,
        data: null,
    },
};

// Create the slice
const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.userData = action.payload;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.userData = {};
        });
    },
});

export const {updateUserData} = UserSlice.actions;

export default UserSlice;