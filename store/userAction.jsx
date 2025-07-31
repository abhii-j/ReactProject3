//it used to get the user data from the backend
import axios from "../frontend/vite-project/src/api/axiosconfig"
import { loaduser } from "./userSlice";

export const asyncgetusers = () => async (dispatch,getState) => {
     try {       
          const res =await axios.get("/users");                                   // Fetching user data from the backend
          dispatch(loaduser(res.data)) //this is not fuction this is action and action always dispatch
          
        }
     catch (error) {
          console.error("Error fetching products:", error);
     }
}


