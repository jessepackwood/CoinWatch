import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import * as actions from '../../actions'

export const PortfolioCard = ({ portfolioCoin, coin, portfolio, removeCoinFromPortfolio, user }) => {
  console.log(coin)
  return (
    <div className='card'>
      <h3 className='coin-name'>
        {portfolioCoin.name}
      </h3>
      <p>{portfolioCoin.amount} </p>
      <p>{portfolioCoin.amount * coin.price}</p>
      <span 
        className={'btn-fav minus'} 
        onClick={() => removeCoinFromPortfolio(portfolio, portfolioCoin.name, user)}
      >
      </span>
    </div>
  )
}

export const mapStateToProps = state => ({
  portfolio: state.portfolio,
  user: state.user
})

export const mapDispatchToProps = dispatch => {
  return {
    removeCoinFromPortfolio: (portfolio, portCoinName, user) => {
      console.log('remove coin from portfolio')
      dispatch(actions.removePortCoin(portfolio, portCoinName, user))
    }
  }
}

PortfolioCard.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioCard);