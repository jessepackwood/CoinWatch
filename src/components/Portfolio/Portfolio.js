import React, { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { connect } from 'react-redux'
import { amountInputChange, setUserPortfolio, addPortCoin } from '../../actions'
import Header from '../Header/Header'
import Card from '../Card/Card'
import './Portfolio.css'

class Portfolio extends Component {
  //need to map over portfolio array and reuse card component to display coins
  // <button className='portfolio-add-btn'>Add</button>
  constructor() {
  	super()
  	this.state = {
  		amount: null,
  		coinName: 'Bitcoin'
  	}
  }

  componentDidMount() {
  	this.props.fetchPortfolio(this.props.user)
  }

  handleAmountChange = (value) => {
  	console.log(value)
  	this.setState({amount: parseFloat(value)})
  }

  handleCoinNameChange = (coinName) => {
  	console.log(coinName)
  	this.setState({coinName})
  }

  handleSubmit = () => {
  	this.props.createPortfolioCoin(this.props.portfolio, this.state.coinName, this.state.amount, this.props.user)
  }

  render() {
	  return (
	    <div>
	      <Header />
	      <div className='portfolio'>
	        <div className='portfolio-title-wrapper'>
	          <h3 className='portfolio-title'>Portfolio Total: $10,000</h3>
	          <div className='portfolio-input-wrapper'>
	            <input 
	            	className='portfolio-add-coin' 
	            	type='number' 
	            	label='Number of coins'
	            	placeholder='Amount'
	            	onChange={event => this.handleAmountChange(event.target.value)}
	            />
	            <Dropdown onNameChange={this.handleCoinNameChange}/>
	            <span className='portfolio-add-btn' onClick={this.handleSubmit} ></span>
	          </div>
	        </div>
	        <div className='portfolio-list-wrapper'>
	          <h4 className='coin-title'>Holdings</h4>
	          <div className='portfolio-list'>
	            <div className='portfolio-coin'>
	              <h4 className='portfolio-coin-title'>Bitcoin</h4>
	              <span>Amount</span>
	              <span>$ worth</span>
	            </div>
	            <div className='portfolio-coin'>Ethereum: $2000</div>
	            <div className='portfolio-coin'>IOTA: $6000</div>
	          </div>
	        </div>
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
    	dispatch(setUserPortfolio(user))
    },
    createPortfolioCoin: (portfolio, coinName, amount, user) => {
    	dispatch(addPortCoin(portfolio, coinName, amount, user))
    },
    removePortfolioCoin: (coin) => {

    }
  }
}

// store coins under (portfolio/ + user.uid/ + coin.short)
// 

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
