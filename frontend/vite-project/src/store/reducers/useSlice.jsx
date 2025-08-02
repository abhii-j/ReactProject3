import { createSlice } from "@reduxjs/toolkit";
// import { create } from "json-server";

const initialState ={
     users:null
}

const userSlice = createSlice({
     name: "user",
     initialState,
     reducers:{
          loadUser:(state,action)=>{
               state.users = action.payload;
          }
     }
})

export default userSlice.reducer;
export const { loadUser } = userSlice.actions;