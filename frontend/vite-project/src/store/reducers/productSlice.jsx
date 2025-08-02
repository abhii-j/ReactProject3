import { createSlice } from "@reduxjs/toolkit";
// import { create } from "json-server";

const initialState ={
     products:[],
}

const productSlice = createSlice({
     name: "product",
     initialState,
     reducers:{
          loadProduct:(state,action)=>{                // i dont call api here
               store.products = action.payload;
          }
     }
})

export default productSlice.reducer;
export const { loadUser } = productSlice.actions;