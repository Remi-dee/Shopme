import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it is not in cart!`
        );
      }

      state.items = newCart;
    },
  },
});

//Here is how to make actions to the cart in this case add or remove cart
export const { addTocart, removeFromcart } = cartSlice.actions;

// Selectors - Selector helps to pull item from the Global store slice
export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
