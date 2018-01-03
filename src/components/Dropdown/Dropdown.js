import React from 'react'
import { connect } from 'react-redux'
import './Dropdown.css'

const Dropdown = ({coins}) => {

	const coinNames = coins.map( coin => {
		return <option> {coin.long} </option>
	})

	return (
			<select className='dropdown' >
			{coinNames}
			</select>
		)
	}

const mapStateToProps = state => ({
	coins: state.coins
})


export default connect(mapStateToProps, null)(Dropdown)
