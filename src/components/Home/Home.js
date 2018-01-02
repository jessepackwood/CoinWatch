import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Home.css'

import Card from '../Card/Card'

const Home = ({coins}) => {

  const hundredCoins = coins.slice(0, 100)
  console.log(hundredCoins)

  const coinsToDisplay = hundredCoins.map( (coin, index) => { 
        return <Card 
          key={`Card: ${coin.short}`}
          number={`${index + 1}`}
          name={coin.long}
          short={coin.short}
          dayChange={coin.cap24hrChange}
          price={coin.price}
        />
      })
  // console.log(coins)
  return (
    <div className='home-page'>
      <ul className='home-nav'>
        <Link to='/'>
          <li className='home-nav-link'>Top 100</li>
        </Link>
        <Link to='/portfolio'>
          <li className='home-nav-link'>Portfolio</li>
        </Link>
        <Link to='/watchlist'>
        <li className='home-nav-link'>Watch List</li>
        </Link>
      </ul>
      {coinsToDisplay}
    </div>
  )
}

const mapStateToProps = state => ({coins: state.coins})


export default connect(mapStateToProps, null)(Home)