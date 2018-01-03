import React from 'react'
import './Card.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'

const Card = ({ coin, dayChange, number, watchList, addCoinToWatch, removeCoinFromWatch}) => {

	const {long, short, price, name, cap24hrChange } = coin;
	const addColor =  cap24hrChange > 0 ? 'positive' : 'negative'

	const handleWatchList = (watchList, coin) => {
		if( watchList && watchList.includes(coin)) {
			removeCoinFromWatch(coin)
		} else {
			addCoinToWatch(coin)
		}
	}

  return(
    <div className='card'>
      <h3 className='coin-name'>
      	<span className='number'>{number}.</span>
      	{long}
      	<span className='short'>({short})</span>
      </h3>
      <span className='price'>USD ${price}</span>
      <span className={`${addColor} dayChange`}>{cap24hrChange}% <span className='hour'>(24H)</span></span>

      <span className='btn-fav' onClick={() => handleWatchList(watchList, coin)}></span>
    </div>
  )
}

export const mapStateToProps = state => {
	watchList: state.watchList || []
}

export const mapDispatchToProps = dispatch => {
	return {
		addCoinToWatch: (coin) => {
			dispatch(actions.addWatch(coin))
		},
		removeCoinFromWatch: (coin) => {
			dispatch(actions.removeWatch(coin))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);