import { createSlice } from "@reduxjs/toolkit";
const initialState={
                                                        
}

const userSlice=createSlice({                                       //  crateslice return action and reducer
     name: "user",
     initialState,
     reducers:{
          loaduser:(state,action)=>{
               state.data=action.payload
          
          }  //this nothing but synchronous action
     }, //inside this reducers we will define our sychronouse action 
})

export const { loaduser } = userSlice.actions; 
export default userSlice.reducer;                                   // passing the reducer to the store



//slice is used to store data

//only reducer can be passed to the initial state

//loaduser is bridge its take data fron ui pass to api then this function will change the state