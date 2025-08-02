import axios from "../../api/axiosconfig";
import { loadUser } from "../reducers/useSlice";

export const aynclogoutuser = () => async(dispatch,getState)=>{
     try {
          localStorage.removeItem("user");
          console.log("User logged out successfully");
          
          
     } catch (error) {
          console.log(error);
          
     }
}


export const aynccurrentuser = () => async(dispatch,getState)=>{
     try {
         const user= JSON.parse(localStorage.getItem("user"))
         
         if(user) dispatch(loadUser(user))
          else console.log("No user found in localStorage");
     } catch (error) {
          console.log(error);
          
     }
}

export const asyncloginaction = (user) => async (dispatch, getState) => {
     try{
          const {data}= await axios.get(`/users?email=${user.email}&password=${user.password}`)
          console.log(data[0]);
          localStorage.setItem("user",JSON.stringify(data[0]));
          
     }catch (error) {
          console.log(error);
     }
}

export const asyncregisteracton =(user)=>async(dispatch,getState)=>{
     try {
          const res=await axios.post("/users",user)
          console.log("data", res);
          
     } catch (error) {
          console.log(error);
          
     }
}