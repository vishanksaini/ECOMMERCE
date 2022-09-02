import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //this is cart quatity where cart icon get pop up in nav bar
      state.quantity += 1;
      state.products.push(action.payload);
      //this is product quantity that we add
      state.total += action.payload.price * action.payload.quantity;
    },

    deleteProductSuccess: (state, action) => {
      // state.products.splice(
      //   state.products.findIndex((item) => item._id === action.payload._id),
      //   1
      // );
      // console.log(action.payload.price);
      const nextcartitems = state.products.filter(
        (cartitem) => cartitem._id !== action.payload
      );
      state.products = nextcartitems;
      state.quantity = nextcartitems.length;
      let tots = 0;
      let amount = 0;
      nextcartitems.forEach((item) => {
        amount += item.quantity;
        tots = item.quantity * item.price;
        console.log("total", tots);
        console.log("amount", amount);
      });
      state.total = tots;
    },
  },
});

export const {
  addProduct,
  deleteProductStart,
  deleteProductFailure,
  deleteProductSuccess,
} = cartSlice.actions;
export default cartSlice.reducer;
