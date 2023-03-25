import React from 'react'
import { Link } from 'react-router-dom'
import { Settings } from 'tabler-icons-react'
import { navLink } from '../data/Data'
import Links from './Links'

function Sidebar() {
  return (
    <div className='sidebar'>
      <span className='logo'><h1>FRUX .</h1></span>
      <span className='logo tablet'><h1>FRUX.</h1></span>
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
          <p>settings</p>
        </button>
      </span>
    </div>
  )
}

export default Sidebar