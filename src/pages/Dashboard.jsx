import React from 'react'
import Balance from '../components/Balance'
import Echart from '../components/Echart'
import Expenses from '../components/Expenses'
import Last_transactions from '../components/Last_transactions'
import Spending from '../components/Spending'

function Dashboard() {
  return (
    <div className='dashboard'>
      <span className='cont'>
        <div className='container'>
          <Balance/>
          <Expenses/>
          <Spending/>
          <Last_transactions/>
        </div>

        <div className='container'>
          
        </div>
      </span>
      <span></span>
    </div>
  )
}

export default Dashboard