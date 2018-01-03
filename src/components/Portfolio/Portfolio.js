import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { connect } from 'react-redux'
import { amountInputChange } from '../../actions'
import Header from '../Header/Header'
import './Portfolio.css'

const Portfolio = () => {
	//need to map over portfolio array and reuse card component to display coins
	// <button className='portfolio-add-btn'>Add</button>

	 const handleAmountInputChange = (event) => {

    const { amount } = event.target
    this.props.amountInputChange(amount)
  }

	return (
		<div>
			<Header />
			<div className='portfolio'>
				<div className='portfolio-title-wrapper'>
					<h3 className='portfolio-title'>Portfolio Total: $10,000</h3>
					<div className='portfolio-input-wrapper'>
						<input className='portfolio-add-coin' type='number' label='Number of coins' placeholder='Amount' onChange={(event)=>handleAmountInputChange(event.target)}/>
						<Dropdown />
						
						<span className='portfolio-add-btn'></span>
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

export const mapStateToProps = state => {
	return {
		portfolio: state.portfolio,
		amount: state.amount
	}
}

export const mapDispatchToProps = dispatch => {
	return {	
		amountInputChange: (amount) => {
			dispatch(amountInputChange(amount))
		}
	}
}

export default Portfolio
