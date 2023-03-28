import React from 'react'

function Expenses() {
  return (
    <div className='expense'>
        <div>
            <h2>Expenses details</h2>
            <select name="" id="">
                <option value="">October</option>
            </select>
        </div>
        <div className='expense_flow'>
            <span>
                <p>Balance</p>
                <p className='expense_balance'>8000</p>
            </span>
            <span className='income'>
                <p>Income</p>
                <p className='expense_balance'>8000</p>
            </span>
            <span className='outgoing'>
                <p>Expense</p>
                <p className='expense_balance'>8000</p>
            </span>
        </div>
    </div>
  )
}

export default Expenses