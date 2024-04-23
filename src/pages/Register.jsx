import React, { useEffect, useState } from 'react'
import styles from './login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { validationInput } from '../funcs/validationInput';

export default function Register() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState({})
    const navigate=useNavigate()
    
    const submitHandler=(event)=>{
        event.preventDefault()
        if(error.length){
            setError(validationInput(email,password))
        }else{
            navigate('/')
        }
    }


  return (
    <div className={`w-full min-h-screen text-black text-2xl ${styles.container} flex justify-center items-center`}>
        <div className='flex flex-col min-w-[40rem] min-h-[30rem] justify-between border border-spacing-10 text-xl my-10 bg-white'>
            <div className='flex justify-between items-center p-10'>
            <p className=''>اگر در فیلیمو حساب کاربری دارید، ورود کنید:</p>
                <button className=' bg-green-500 px-4 py-3 text-white rounded-md text-xl'><Link to="/ورود">ورود به صفحه لاگین</Link></button>
            </div>
            <hr />
        <form onSubmit={submitHandler}>
            <p className='p-10 '>ایجاد حساب کاربری</p>
           <div className='flex flex-col p-10'>
            <div className='flex gap-8 pb-4'>
            <span className='text-red-700'>{error.email && error.email }</span>
            <span className='text-red-700'>{error.password && error.password }</span>
            </div>
           <div className='flex justify-between items-center'>
            <input className='border border-spacing-2 p-3' type="email" placeholder='ایمیل خود را وارد کنید' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input className='border border-spacing-2 p-3' type="password" placeholder='پسورد خود را وارد کنید' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button type='submit' className='bg-green-500 px-8 py-3 text-white rounded-md text-xl'>ثبت نام</button>
           </div>
           </div>
        </form>
        </div>
    </div>
  )
}
