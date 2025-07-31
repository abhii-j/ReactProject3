import { nanoid } from 'nanoid'
import React from 'react'
// import {useForm} from 'react-form-hook'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
const Login = () => {
     const {register ,reset,handleSubmit}=useForm()


const LoginHandler=(user)=>{
     console.log("user", user);
     

}
  return (
    <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col w-1/2 items-start justify-start ml-15'>

      
          <input {...register("email")} type="email" placeholder="email" className='text-2xl outline-0 border-b p-3 mb-4' />
          <input {...register("password")} type="password" placeholder="password" className='text-2xl outline-0 border-b p-3  mb-4' />

          <button className='bg-white mb-3 text-black px-3 rounded'>Login User</button>

          <p>Don't Have Acount <Link to="/register" className='underline text-blue-600'>Register</Link></p>
    </form>

    )
}

export default Login
