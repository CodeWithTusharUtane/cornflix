import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const SignUp = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {signUp} = UserAuth()
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await signUp(email, password)
      navigate('/signin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className='w-full h-screen'>
      <div className="max-w-[320px] mx-auto py-16">
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
          <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded ' type="email" placeholder='Email'/>
          <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded ' type="password" placeholder='Password' />
          <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
          <div>
            <p className='py-8'>
            <span className='text-gray-600'>Already subscribed Cornflix? </span>
              <Link to='/signin' className='text-white font-bold'>
                Sign In 
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp