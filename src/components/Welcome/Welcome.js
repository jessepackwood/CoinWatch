import React from 'react'
import { Link } from 'react-router-dom'
import lineGraph from '../../assets/thin-line.svg'
import Footer from '../Footer/Footer'
import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='welcome-text'>
        <div>
          <h1 className='welcome-title'>Coin Watch</h1>
          <p className='welcome-subtitle'>Track your profits and only watch the coins you care about.</p>
        </div>
        <div>
          <Link to='/home'>
            <button className='start-button'>Get started</button>
          </Link>
        </div>
      </div>
      <img src={lineGraph} className='line-graph' alt='line graph' />
      <Footer />
    </div>
  )
}

export default Welcome 