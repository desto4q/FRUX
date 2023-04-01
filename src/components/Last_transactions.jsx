import React from 'react'
import Beneficiaries from './Beneficiaries'

function Last_transactions() {
  return (
    <div className='transactions'>
        <span>
            <h2>Last Transactions</h2>
            <button>View all</button>
        </span>
        <span className='transactions_list'>
          <Beneficiaries/>
          <Beneficiaries/>
        </span>
        <div className='option'>
            <select name="" id="" >
                <option value="Daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="Monthly">Montly</option>
            </select>
        </div>
    </div>
  )
}

export default Last_transactions