import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Product from '../pages/Product.jsx'
import Cart from '../pages/Cart.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'

const MainRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default MainRoutes
