import React from 'react'
import logo from '../images/logo.png'


function SignUp() {
  return (
    <div className='w-full'>
       <div className='flex justify-between items-center w-full px-5 pt-10'>
        <img src={logo} className="object-cover h-10"/>
        <div className='flex'>
            <span className="text-xl text-gray-600 text-center mr-4">Already a user?</span>
            <span className='text-purple-800 text-xl cursor-pointer'>Login</span>
        </div>
       </div>
    </div>
  )
}

export default SignUp