import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'

function Hamburger() {
    // let [hamState,setham] = useState(false)
    let {hamState,setHam} = useContext(AppContext)
    useEffect(()=>{
        console.log("gg")
    },[])

    if (hamState == false) {
        return(
            <div className='ham' onClick={()=>{
                setHam(!hamState)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>        
        )
    }
  return (
    <div className='ham_true' onClick={()=>{
        setHam(!hamState)
    }}>
        <span></span>
        <span></span>
    </div>
  )
}

export default Hamburger