import React from 'react'
import { Link } from 'react-router-dom'
import { navLink } from '../data/Data'
import Links from './Links'

function Sidebar() {
  return (
    <div className='sidebar'>
      <span><h1>logo</h1></span>
      <span className='links'>
        {navLink.map(({to,name,Icon})=>{
          return (
            <Links to={to} text={name} Icon={Icon}/>
          )
        })}
      </span>
      <span></span>
    </div>
  )
}

export default Sidebar