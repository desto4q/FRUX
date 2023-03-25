import React from 'react'
import { Bell, Search } from 'tabler-icons-react'
import UserInfo from './UserInfo'

function Header() {
  return (
    <div className='header'>
        <h4>Overview</h4>
        <div className="header_search">
            <input type="text" name="" id="" placeholder='Search here'/>
            <button>
                <Search/>
            </button>
        </div>
        <span></span>
        <span className='header_userInfo'>
            <UserInfo/>
        </span>
        <span className='header_notification'>
            <span className='bell'>
                <Bell/>
            </span>
        </span>
    </div>
  )
}

export default Header