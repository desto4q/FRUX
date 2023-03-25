import React from 'react'

function UserInfo() {
  return (
    <div className='user'>
        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" />
        <span className='user_info'>
            <p className='name'>
                Riyad Mahrez
            </p>
            <p className='id'>
                #1212313
            </p>
        </span>
    </div>
  )
}

export default UserInfo