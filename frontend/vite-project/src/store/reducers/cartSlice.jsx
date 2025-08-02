import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const carts = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export default carts.reducer;
export const  {loadCart}=carts.actions
