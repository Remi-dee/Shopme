import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchString: "",
  category: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },

    setSelectedCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSearchString, setSelectedCategory } = productSlice.actions;

export const selectSearchString = (state) => state.product.searchString;
export const selectCategory = (state) => state.product.category;

export default productSlice.reducer;
