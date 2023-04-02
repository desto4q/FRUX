import React from 'react'
import Balance from '../components/Balance'
import Echart from '../components/Echart'
import Expenses from '../components/Expenses'
import Last_transactions from '../components/Last_transactions'
import Spending from '../components/Spending'
import Savings from '../components/Savings'

function Dashboard() {
  return (
    <div className='dashboard'>
      <span className='cont'>
        <div className='container'>
          <Balance/>
          <Expenses/>
          <Savings/>
          <Last_transactions/>
        </div>
        <div className='spend_cont'>
          <Spending/>   
        </div>
      </span>
      <span></span>
    </div>
  )
}

export default Dashboard