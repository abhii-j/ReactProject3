import { nanoid } from 'nanoid'
import React from 'react'
// import {useForm} from 'react-form-hook'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
const Register = () => {
     const {register ,reset,handleSubmit}=useForm()


const RegisterHandler=(user)=>{
     user.id=nanoid()
     console.log("user", user);
     

}
  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className='flex flex-col w-1/2 items-start justify-start ml-15'>

          <input {...register("username")} type="text" placeholder="username" className='text-2xl outline-0 border-b p-3  mb-4' />
          <input {...register("email")} type="email" placeholder="email" className='text-2xl outline-0 border-b p-3 mb-4' />
          <input {...register("password")} type="password" placeholder="password" className='text-2xl outline-0 border-b p-3  mb-4' />

          <button className='bg-white mb-3 text-black px-3 rounded'>Register User</button>

          <p>Already Have Acount <Link to="/login" className='underline text-blue-600'>Login</Link></p>
    </form>

    )
}

export default Register
