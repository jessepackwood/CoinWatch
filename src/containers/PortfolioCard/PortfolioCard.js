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
    const portfolioTotal = Math.round(portfolioCoin.amount * coin.priceUsd)

    return (
      <div className='card'>
        <div className='coin-name-container'>
          <h3 className='coin-name port-coin-name'>
            {coin.symbol}
          </h3>
          <p className='portfolio-amount'>{portfolioCoin.amount} </p>
        </div>
        <div className='port-price-container'>
          <div className='port-price price'>
            <NumberFormat 
              value={parseFloat(coin.priceUsd).toFixed(3)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'} 
            />
          </div>
          <div className='port-price price'>
            <div>
            
              <NumberFormat 
                value={portfolioTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'} 
              />
            </div>

          </div>
        </div>
        <div>
          <div 
            className={'port-btn btn-fav minus'} 
            onClick={
              () => removeCoinFromPortfolio(portfolio, portfolioCoin.name, user)
            }
          >
          </div>
        </div>
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