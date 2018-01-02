import React from 'react'
import { connect } from 'react-redux'
import './Dropdown.css'

const Dropdown = ({coins}) => {

	const coinNames = coins.map( coin => {
		return <div> {coin.long} </div>
	})

	const expand = () => {

	}

	return (
		<div className='dropdown-container'>
			<div className='dropdown' onClick={expand}>
			{coinNames}
			</div>
			<button className='dropdown-button'>Arrow down</button>
		</div>
		)
	}

const mapStateToProps = state => ({
	coins: state.coins
})


export default connect(mapStateToProps, null)(Dropdown)
