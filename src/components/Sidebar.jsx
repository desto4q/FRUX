import React from 'react'
import { Link } from 'react-router-dom'
import { Settings } from 'tabler-icons-react'
import { navLink } from '../data/Data'
import Links from './Links'

function Sidebar() {
  return (
    <div className='sidebar'>
      <span><h1>logo</h1></span>
      <span className='sidebar_links'>
        {navLink.map(({to,name,Icon},key)=>{
          return (
            <Links to={to} key={key} text={name} Icon={Icon}/>
          )
        })}
      </span>
      <span className='sidebar_settings'>
        <button>
          <Settings/>
          settings
        </button>
      </span>
    </div>
  )
}

export default Sidebar