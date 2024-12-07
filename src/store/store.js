import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from 'redux-persist';
import userSlice, {blackList as userBlackList} from "@/store/slices/userSlice.js";
import authSlice, {blackList as authBlackList} from "@/store/slices/authSlice.js";
import storage from "redux-persist/lib/storage";
import {getPersistConfig} from "redux-deep-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

// root reducer
const rootReducer = combineReducers({
    user: userSlice.reducer,
    auth: authSlice.reducer,
});

const blacklist = [...userBlackList, ...authBlackList];

const persistConfig = getPersistConfig({
    key: "root",
    version: 1,
    storage,
    blacklist,
    rootReducer,
    stateReconciler: autoMergeLevel2
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

