import React from 'react'
import { CurrencyNaira } from 'tabler-icons-react'

function Balance() {
  return (
    <div className='balance'>
        <div className='balance_number'>
            <p>  total balance</p>
            <p>0</p>
        </div>
        <span className='balance_digit'>
            <p><CurrencyNaira/> 120,000</p>
            <div className='box'></div>
        </span>

    </div>
  )
}

export default Balance