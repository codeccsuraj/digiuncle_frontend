import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { toast } from 'react-toastify';

const Login = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        email : "",
        password : "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(loginCredentials).some((value) => value === "")){
            toast.error("fill all fields")
        } else{
            toast.success("login successful")
        }
    }
  return (
    <>
        <div className='w-screen overflow-x-hidden '>
            <div className='mx-32 grid grid-cols-2'>
                <div>
                    <img src="" alt="" className='object-cover'/>
                </div>
                <div className='flex flex-col items-center relative'>
                    <span className='absolute top-4 right-4'><Link to='/' className='flex gap-2 text-green-600'><FaHome className='text-2xl text-green-600' /> Back to home</Link></span>
                    <h2 className='text-3xl py-4 text-center'>Login here</h2>
                    <p>Not a existing User ? <Link to='/signup' className='text-cyan-600 font-bold'>Sign in here</Link></p>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <div className='form-group flex flex-col gap-2 py-3'>
                            <label htmlFor="email" className='text-lg font-bold'>Email</label>
                            <input 
                                type="email" 
                                placeholder='Enter your email' 
                                className='w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl' 
                                value={loginCredentials.email}
                                onChange={(e) => setLoginCredentials({
                                    ...loginCredentials,
                                    email : e.target.value
                                })}
                            />
                        </div>
                        <div className='form-group flex flex-col gap-2 py-3'>
                            <label htmlFor="password" className='text-lg font-bold'>Password</label>
                            <input 
                                type="password" 
                                placeholder='Enter your password' 
                                className='w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl' 
                                value={loginCredentials.password}
                                onChange={(e) => setLoginCredentials({
                                    ...loginCredentials,
                                    password : e.target.value
                                })}
                            />
                        </div>
                        <div className='form-group flex justify-center gap-2 py-3'>
                            <button type='submit' className='bg-orange-700 py-3 text-lg font-bold rounded-2xl w-2/4'>Login</button>
                        </div>  
                    </form>
                    <div className='py-3'>
                        <p>
                            Don't remember password ? <Link className='text-cyan-600 font-bold'>forgot now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login