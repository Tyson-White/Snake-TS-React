import { configureStore } from '@reduxjs/toolkit'
import snakeSlice from "./Slices/snakeSlice.ts";

export const store = configureStore({
    reducer: {
        snakeSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch