import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchString: "",
  setCategory: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.setCategory = [...state.setCategory, action.payload];
    },
  },
});

export const { setSearchString } = productSlice.actions;

export const selectString = (state) => state.product.searchString;
export const selectString = (state) => state.product.searchString;

export default productSlice.reducer;
