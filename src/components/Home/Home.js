import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import Search from '../Search/Search'
import PropTypes from 'prop-types';
import './Home.css'

import Card from '../Card/Card'

const Home = ({coins, searchInput}) => {
  console.log(searchInput)
  const hundredCoins = coins.slice(0, 100)

  const coinsToDisplay = hundredCoins.map( (coin, index) => { 
    return <Card 
      coin={coin}
      key={`Card: ${coin.short}`}
      number={`${index + 1}`}
    />
  })

  const searchedCoinsToDisplay = (coins, searchInput) => {
    console.log(coins)
    if (searchInput) {
      return coins.filter( coin => coin.long.includes(searchInput))
    }
  }
  // console.log(searchedCoinsToDisplay())

  return (
    <div>
      <Header />
      <Search />
      { searchedCoinsToDisplay.length && 
      <div className='home-page'>
        <h3>Top 100 Currencies by market cap</h3>
        {coinsToDisplay}
      </div>
    }
    </div>
  )
}

const mapStateToProps = state => ({
  coins: state.coins,
  searchInput: state.searchInput.value
})

Home.propTypes = {
  coins: PropTypes.array
}

export default connect(mapStateToProps, null)(Home)