import React from 'react'
import './Card.css'
import { connect } from 'react-redux'
// import { addToWatchList } from '../../services/coinCapServices.js'
import * as actions from '../../actions'

const Card = ({ name, short, dayChange, price, number, addCoinToWatch, removeCoinFromWatch, coin }) => {

	const addColor =  dayChange > 0 ? 'positive' : 'negative'

  return(
    <div className={`${addColor} card`}>
    	
      <h3 className='coin-name'>
      	<span className='number'>{number}.</span>
      {name}
      	<span className='short'>({short})</span>
      </h3>
      <span className='price'>${price}</span>
      <span className={`${addColor} dayChange`}>{dayChange}%</span>
      <button className='btn-fav' onClick={() => addCoinToWatch(coin)}>Watch</button>
    </div>
  )
}

export const mapStateToProps = state => ({
	coin: state.coins[0]
})

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