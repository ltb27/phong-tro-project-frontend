import storage from 'redux-persist/lib/storage';
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist';

import sampleSlice from "./slices/sampleSlice.js";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['yourSlice'], // You can specify reducers or slices to persist
};

const rootReducer = combineReducers({
    sample: sampleSlice.reducer,
    // yourSlice: yourSlice.reducer, // Add your slices here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

