import React from 'react'
import MarketCapCard from '../../containers/MarketCapCard/MarketCapCard'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import plus  from '../../assets/rounded-add-button.svg'
import PropTypes from 'prop-types';
import './WatchList.css'

const WatchList = ({watchList, coins}) => {
  
  const watchedCoins = watchList && watchList.map( (coin, index) => {
    return <MarketCapCard 
      coin={coins.find(watchedCoin => coin.name === watchedCoin.name)}
      key={`Card: ${coin.symbol}`}
      number={`${index + 1}`}
    />
  })

  return (
    <div>
      <Header />

      { !!watchedCoins.length && 
      <div className='watch-list'>
        <h3 className='watchlist-subtitle'>Watch List</h3>
        {watchedCoins}
      </div>
      }
      {!watchedCoins.length && 
        <div className='empty-watch'>
          <h3 className='empty-watch-title'>
          Your watch list is empty. Click the
            <img src={plus} alt='plus sign' className='watch-list-add'/> 
          on the coin you&apos;d like to add to your list.
          </h3>
        </div>
      }
    </div>
  )
}

export const mapStateToProps = state => {
  return {
    watchList: state.watchList,
    coins: state.coins
  }
}

WatchList.propTypes = {
  coins: PropTypes.array,
  watchList: PropTypes.array
}

export default connect(mapStateToProps, null)(WatchList)