import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../../components/Card/Card.css'
import * as actions from '../../actions'
import NumberFormat from 'react-number-format'

export const PortfolioCard = 
  ({ 
    portfolioCoin, coin, portfolio, removeCoinFromPortfolio, user 
  }) => {

    const portfolioPrice = Math.round(portfolioCoin.amount * coin.price)

    return (
      <div className='card'>
        <h3 className='coin-name port-coin-name'>
          {portfolioCoin.name}
        </h3>
        <p className='amount'>Amount: {portfolioCoin.amount} </p>
        <div className='price'>
          <NumberFormat 
            value={coin.price.toFixed(3)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} 
          />
        </div>
        <div className='port-price price'>
          <span className='usd'>Total</span>
          <NumberFormat 
            value={portfolioPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} 
          />
        </div>
        <span 
          className={'port-btn btn-fav minus'} 
          onClick={
            () => removeCoinFromPortfolio(portfolio, portfolioCoin.name, user)
          }
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
      dispatch(actions.removePortCoin(portfolio, portCoinName, user))
    }
  }
}

PortfolioCard.propTypes = {
  portfolio: PropTypes.array,
  portfolioCoin: PropTypes.object,
  coin: PropTypes.object,
  user: PropTypes.object,
  removeCoinFromPortfolio: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioCard);