import React from 'react'
import Balance from '../components/Balance'
import Echart from '../components/Echart'
import Expenses from '../components/Expenses'

function Dashboard() {
  return (
    <div className='dashboard'>
      <span className='cont'>
        <div className='container'>
          <Balance/>
          <Expenses/>
        </div>
        <div className='container'>
          
        </div>
      </span>
      <span></span>
    </div>
  )
}

export default Dashboard