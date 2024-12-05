// src/sampleSlice.js

import {createSlice} from '@reduxjs/toolkit';

// Initial state for the slice
const initialState = {
    value: 0,
};

// Create the slice
const sampleSlice = createSlice({
    name: 'sample',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Export actions for use in components
export const {increment, decrement, incrementByAmount} = sampleSlice.actions;

// Export reducer to be used in store
export default sampleSlice