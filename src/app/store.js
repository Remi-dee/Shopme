import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";


//Global Store
export const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  