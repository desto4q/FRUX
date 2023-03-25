import React from 'react'
import { Link } from 'react-router-dom'

function Links({to,text,Icon}) {
  return (
        <Link to={to}>
            <Icon/>
            <p>{text}</p>
        </Link>
  )
}

export default Links