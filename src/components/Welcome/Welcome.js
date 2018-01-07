import React from 'react'
import { Link } from 'react-router-dom'
import lineGraph from '../../assets/thin-line.svg'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='welcome-text'>
        <div>
          <h1 className='welcome-title'>Coin Watch</h1>
          <p>Track your profits and only watch the coins you care about.</p>
        </div>
        <div>
          <Link to='/login'>
            <button className='start-button'>Get started</button>
          </Link>
        </div>
      </div>
      <img src={lineGraph} className='line-graph' alt='line graph' />
    </div>
  )
}

export default Welcome 