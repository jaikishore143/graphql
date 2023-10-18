import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/productSlice';

export const Store=configureStore({
    reducer:{
        "counter":counterSlice
    }
})