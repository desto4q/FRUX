import React from 'react'
import Balance from '../components/Balance'
import Expenses from '../components/Expenses'

function Dashboard() {
  return (
    <div className='dashboard'>
      <span>
        <Balance/>
        <Expenses/>
      </span>
      <span></span>
    </div>
  )
}

export default Dashboard