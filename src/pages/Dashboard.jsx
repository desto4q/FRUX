import React from 'react'
import Balance from '../components/Balance'
import Echart from '../components/Echart'
import Expenses from '../components/Expenses'
import Last_transactions from '../components/Last_transactions'
import Spending from '../components/Spending'
import Savings from '../components/Savings'
import Card from '../components/Card'
import Budget from '../components/Budget'

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
      <span className='dash_details'>
        <Card/>
        <Budget/>
      </span>
    </div>
  )
}

export default Dashboard