import React from 'react'
import './Card.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as actions from '../../actions'

export const Card = ({ 
  coin, number, watchList, addCoinToWatch, removeCoinFromWatch, user
}) => {

  const {long, short, price, cap24hrChange } = coin
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

  return (
    <div className='card'>
      <h3 className='coin-name'>
        <span className='number'>{number}.</span>
        {long}
        <span className='short'>({short})</span>
      </h3>
      <span className='price'>USD ${price}</span>
      <span className={`${addColor} dayChange`}>{cap24hrChange}% 
        <span className='hour'>(24H)</span>
      </span>
      <span 
        className={`${changeSign} btn-fav`} 
        onClick={() => handleWatchList(watchList, coin)}
      >
      </span>
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

Card.propTypes = {
  coin: PropTypes.object,
  number: PropTypes.string, 
  watchList: PropTypes.array,
  user: PropTypes.object,
  addCoinToWatch: PropTypes.func,
  removeCoinFromWatch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);