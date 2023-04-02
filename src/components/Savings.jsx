import React from 'react'
import { CurrencyNaira } from 'tabler-icons-react'
import {Circle} from "rc-progress"
import { useState } from 'react'
function Savings() {
  let [percent,setPercent] = useState(20)
  return (
    <div className='savings'>
      <h2>Savings</h2>
      <div className='savings_progress'>
        <Circle strokeWidth={12} percent={percent} trailWidth={8}/>
        <p>{percent}%</p>
      </div>
      <div className='goal'>
        <p>Goal</p>:
        <p><CurrencyNaira/>100000</p>
      </div>
      {/* <p><CurrencyNaira/>20000</p> */}
    </div>
  )
}

export default Savings