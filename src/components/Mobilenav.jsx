import React from 'react'
import Hamburger from './M_components/Hamburger'
import UserInfo from './UserInfo'

function Mobilenav() {
  return (
    <div className='mobile_nav'>
        <span>
            <UserInfo/>
        </span>
        <Hamburger/>
    </div>
  )
}

export default Mobilenav