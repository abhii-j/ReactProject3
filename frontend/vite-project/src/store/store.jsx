import {configureStore} from '@reduxjs/toolkit';
import useSlice from './reducers/useSlice'
import productSlice from './reducers/productSlice';
import cartSlice from './reducers/cartSlice';


const store = configureStore({
     reducer :{
          userReducer:useSlice,
          productReducer:productSlice,
          cartReducer:cartSlice
     }
})

export default store;