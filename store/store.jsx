import { configureStore } from '@reduxjs/toolkit';
import userSilce from './userSlice.jsx'; // Importing the user slice
export const store = configureStore({
     reducer:{
          user:userSilce
     },
})