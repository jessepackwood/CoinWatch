import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import './Portfolio.css'

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<h3 className='portfolio-title'>Current Portfolio</h3>
			<input className='user-add-coin' type='number' label='Number of coins' placeholder='Number of coins'/>
			<Dropdown />
			<button>Add coins</button>
		</div>
		)
}

export default Portfolio
