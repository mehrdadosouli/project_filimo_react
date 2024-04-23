import React, { useState } from 'react'
import styles from './login.module.css'
import { useNavigate,Link } from 'react-router-dom';

export default function Login() {
    const [email,setEmail]=useState('')
    const [error,setError]=useState({})
    const navigate=useNavigate()
    const regEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const submitHandler=(event)=>{
        event.preventDefault()
        if(!email.length){
            setError({error:'لطفا ایمیل خود را وارد کنید'})
        }else if(!regEmail.test(email)){
            console.log(regEmail.test(email));
            setError({error:'لطفا ایمیل خود را  صحیح وارد کنید'})
            console.log(error);
        }else{
            setError({})
            navigate('/')
        }

    }


  return (
    <div className={`w-full min-h-screen text-black text-2xl ${styles.container} flex justify-center items-center`}>
        <div className='flex flex-col min-w-[40rem] min-h-[30rem] justify-between border border-spacing-10 text-xl my-10 bg-white'>
            <div className='flex justify-between items-center p-10'>
                <p className=''>اگر در فیلیمو حساب کاربری ندارید، ثبت‌نام کنید:</p>
                <button className=' bg-green-500 px-4 py-3 text-white rounded-md text-xl'><Link to="/register">ایجاد حساب کاربری</Link></button>
            </div>
            <hr />
        <form onSubmit={submitHandler} className=''>
            <p className='p-10 '>اگر در فیلیمو حساب کاربری دارید، وارد شوید:</p>
           <div className='flex flex-col p-10'>
            <span className='text-red-700'>{error.error && error.error }</span>
           <div className='flex justify-between items-center'>
            <input className='w-3/4 border border-spacing-2 p-3' type="email" placeholder='ایمیل خود را وارد کنید' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <button type='submit' className='bg-green-500 px-8 py-3 text-white rounded-md text-xl'>ورود</button>
           </div>
           </div>
        </form>
        </div>
    </div>
  )
}
