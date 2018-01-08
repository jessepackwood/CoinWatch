import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import * as actions from '../../actions'

export const PortfolioCard = ({ portfolioCoin, coin, portfolio, removeCoinFromPortfolio, user }) => {
  console.log(coin)
  return (
    <Card>
      <h3 className='coin-name port-coin-name'>
        {portfolioCoin.name}
      </h3>
      <p className='amount'>Amount: {portfolioCoin.amount} </p>
      <p className='port-price price'>${Math.round(portfolioCoin.amount * coin.price)}</p>
      <span 
        className={'port-btn btn-fav minus'} 
        onClick={() => removeCoinFromPortfolio(portfolio, portfolioCoin.name, user)}
      >
      </span>
    </Card>
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
  portfolio: PropTypes.array,
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioCard);