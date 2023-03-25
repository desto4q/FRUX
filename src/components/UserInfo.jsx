import React, { useContext } from 'react'
import { AppContext } from '../App'

function UserInfo() {
  let {userState} = useContext(AppContext)
  return (
    <div className='user'>
        <img src={userState.img} alt="" />
        <span className='user_info'>
            <p className='name'>
                {userState.name}
            </p>
            <p className='id'>
                {userState.id}
            </p>
        </span>
    </div>
  )
}

export default UserInfo