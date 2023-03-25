import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Transform } from 'tabler-icons-react'
import { AppContext } from '../../App'
import { navLink } from '../../data/Data'

function M_sidebar() {
  let {hamState,setHam} = useContext(AppContext)

  if (hamState == true) {
    return (
      <div className='m_sidebar' style={{transform: "translateX(0)"}}>
        <div className="container">
          {navLink.map(({Icon,name,to},key)=>{
            return (
              <div onClick={()=>{
                setHam(!hamState)
              }}>
                <Link key={key} to={to} >
                  <Icon/> <p>{name}</p>
                </Link>
              </div>
            )
  
          })}
        </div>
      </div>
    )
  } 
  return (
    <div className='m_sidebar' style={{transform: "translateX(-120%)"}}>
      <div className="container">
        {navLink.map(({Icon,name,to},key)=>{
          return (
            <Link key={key} to={to}>
              <Icon/> <p>{name}</p>
            </Link>
          )

        })}
      </div>
    </div>
  )
}

export default M_sidebar