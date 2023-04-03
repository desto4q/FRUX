import React from 'react'
import { useState } from 'react'
import { BrandMastercard, Eye, EyeOff } from 'tabler-icons-react'

function Card() {
  let [card,setCard] = useState(true)
  let number = "4904 3946 3728 9862"
  return (
    <div className='card'>
        <span></span>
        <span></span>
        <span>
            <div className='container'>
                {card == true?<div className=''>{number}<BrandMastercard/></div>:
                <div className='hidden'><BrandMastercard/></div>}
                <p>{card == true? <>"Mastercard"</> : null}</p>
                    <button className='btn' onClick={()=>{
                      setCard(!card)
                    }}>
                      {card  == true ?
                      <EyeOff/>:
                      <Eye/>}
                    </button>
            </div>
        </span>
    </div>
  )
}

export default Card