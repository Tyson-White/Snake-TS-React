import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import snakeSlice from "./Slices/snakeSlice.ts";
import {snakeApi} from "../api/api.ts";

export const store = configureStore({
    reducer: {
        snakeSlice,
        [snakeApi.reducerPath]: snakeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(snakeApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)