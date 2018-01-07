import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Search from '../Search/Search'
import './Home.css'

import Card from '../Card/Card'

const Home = ({coins}) => {

  const hundredCoins = coins.slice(0, 100)

  const coinsToDisplay = hundredCoins.map( (coin, index) => { 
        return <Card 
          coin={coin}
          key={`Card: ${coin.short}`}
          number={`${index + 1}`}
        />
      })

  return (
    <div>
      <Header />
      <Search coins={coins} />
      <div className='home-page'>
        <h3>Top 100 Currencies by market cap</h3>
        {coinsToDisplay}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({coins: state.coins})

export default connect(mapStateToProps, null)(Home)