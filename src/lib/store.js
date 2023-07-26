import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productReducer from "../slices/productSlice";


//Global Store
export const store = configureStore({
    reducer: {
      cart: cartReducer,
      product: productReducer 
    },
  });
  