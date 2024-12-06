import {createSlice} from '@reduxjs/toolkit';


// Initial state for the slice
const initialState = {
    userData: {},
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
  
});

export const {updateUserData} = UserSlice.actions;

export default UserSlice;