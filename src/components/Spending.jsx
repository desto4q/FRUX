import React from 'react'

function Spending() {
  return (
    <div className='spending'>
      <div className='chart'></div>
      <div>
        <h4>total spending</h4>
        <div className='flow'>
          <span>income</span>
          <span className='flow_spend'>spending</span>
        </div>
      </div>
    </div>
  )
}

export default Spending