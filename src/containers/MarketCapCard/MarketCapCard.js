import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../../components/Card/Card.css'
import * as actions from '../../actions'
import NumberFormat from 'react-number-format'

export const MarketCapCard = ({ 
  coin, number, watchList, addCoinToWatch, removeCoinFromWatch, user
}) => {

  const {long, short, cap24hrChange } = coin
  let { price } = coin
  const addColor =  cap24hrChange > 0 ? 'positive' : 'negative'
  const changeSign = watchList && 
    watchList.some( element => element.short === coin.short) ? 'minus' : ''

  const handleWatchList = (watchList, coin) => {
    if ( watchList.length && 
      watchList.find((element) => element.short === coin.short)) {
      removeCoinFromWatch(watchList, coin, user)
    } else {
      addCoinToWatch(watchList, coin, user)
    }
  }

  const formatPrice = (price) => {
    return price > 50 ? Math.round(price) : price.toFixed(4);
  }

  return (
    <div className='card'>
      <div className='card-block-name'>
        <h3 className='coin-name'>
          <span className='number'>{number}.</span>
          {long}
          <span className='short'>({short})</span>
        </h3>

        <div className='price'>
          <span className='dollar-sign'>$</span><NumberFormat value={ formatPrice(price) } displayType={'text'} thousandSeparator={true} />
        </div>
      </div>

      <div className='card-block-btn'>
        <div className={`${addColor} dayChange`}>
          <div className='hour-change'>{cap24hrChange}% </div>
          <div className='hour'>(24H)</div>
        </div>

        <div 
          className={`${changeSign} btn-fav`} 
          onClick={() => handleWatchList(watchList, coin)}
        >
        </div>
      </div>

    </div>
  )
}

export const mapStateToProps = state => ({
  watchList: state.watchList,
  user: state.user
})

export const mapDispatchToProps = dispatch => {
  return {
    addCoinToWatch: (watchList, coin, user) => {
      dispatch(actions.addWatch(watchList, coin, user))
    },
    removeCoinFromWatch: (watchList, coin, user) => {
      dispatch(actions.removeWatch(watchList, coin, user))
    }
  }
}

MarketCapCard.propTypes = {
  coin: PropTypes.object,
  number: PropTypes.string, 
  watchList: PropTypes.array,
  user: PropTypes.object,
  addCoinToWatch: PropTypes.func,
  removeCoinFromWatch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketCapCard);