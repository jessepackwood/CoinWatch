import React from 'react'

const PortfolioInput = () => {
  return (
    <div>
      <input 
        className='portfolio-add-coin' 
        type='number' label='Number of coins' 
        placeholder='Amount' value={amount || ''} 
        onChange={(event)=> handleAmountInputChange(event.target)}
      />
    </div>
  )
}

export default PortfolioInput