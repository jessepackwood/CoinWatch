import React, { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { connect } from 'react-redux'
import { fetchUserPortfolio, addPortCoin } from '../../actions'
import Header from '../Header/Header'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import PropTypes from 'prop-types'
import './Portfolio.css'
import NumberFormat from 'react-number-format'

class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      amount: null,
      coinName: 'Bitcoin'
    }
  }

  componentDidMount() {
    this.props.fetchPortfolio(this.props.user)
    this.amountInput.focus();
  }

  handleAmountChange = (value) => {
    this.setState({amount: parseFloat(value)})
  }

  handleCoinNameChange = (coinName) => {
    this.setState({coinName})
  }

  handleSubmit = () => {
    this.props.createPortfolioCoin(
      this.props.portfolio, 
      this.state.coinName, 
      this.state.amount, 
      this.props.user
    )
  }

  render() {
    const portfolioTotal = this.props.portfolio.reduce((total, portCoin) => {
      return total += portCoin.amount *
      this.props.coins.find((coin) => coin.long === portCoin.name).price
    }, 0)

    const portfolioItems = this.props.portfolio.map((portfolioCoin, index) => {
      return <PortfolioCard
        key={index}
        portfolioCoin={portfolioCoin}
        coin={this.props.coins.find( coin => coin.long === portfolioCoin.name )}
      />
    })
    return (
      <div>
        <Header />
        <div className='portfolio'>
          <div className='portfolio-title-wrapper'>
            <h3 className='portfolio-title'>
              Portfolio Total: 
              <span className='grand-total'>
                <NumberFormat 
                  value={Math.round(portfolioTotal)}
                  displayType={'text'}
                  thousandSeparator={true} prefix={'$'} 
                />
              </span>
            </h3>
            <div className='portfolio-input-wrapper'>
              <input 
                className='portfolio-add-coin' 
                type='number' 
                label='Number of coins'
                placeholder='Amount'
                ref={(input) => { this.amountInput = input; }} 
                onChange={event => this.handleAmountChange(event.target.value)}
              />
              <Dropdown onNameChange={this.handleCoinNameChange}/>
              <span 
                className='portfolio-add-btn' 
                onClick={this.handleSubmit} 
              >
              </span>
            </div>
          </div>
          { !!this.props.portfolio.length && 
          <div className='portfolio-list-wrapper'>
            <h3 className='coin-title'></h3>
            <div className='portfolio-list'>
              {portfolioItems}
            </div>
          </div>
          }
          {!this.props.portfolio.length &&
            <div>
              <h4 className='empty-portfolio-title'>
              Choose a coin and an amount to add coins to your portfolio.
              </h4>
            </div>
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    coins: state.coins,
    amount: state.amount,
    user: state.user
  }
}

export const mapDispatchToProps = dispatch => {
  return {	
    fetchPortfolio: (user) => {
      dispatch(fetchUserPortfolio(user))
    },
    createPortfolioCoin: (portfolio, coinName, amount, user) => {
      dispatch(addPortCoin(portfolio, coinName, amount, user))
    }
  }
}

Portfolio.propTypes = {
  portfolio: PropTypes.array,
  coins: PropTypes.array,
  amount: PropTypes.string,
  user: PropTypes.object,
  fetchPortfolio: PropTypes.func,
  createPortfolioCoin: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
