import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
	return (
		<div className='welcome'>
			<div className='welcome-text'>
				<div>
					<h1 className='welcome-title'>Coin Watch</h1>
					<p>Track your returns and only watch the coins you care about.</p>
				</div>
				<div>
					<Link to='/home'>
						<button className='start-button'>Get started</button>
					</Link>
				</div>
			</div>
			<img src={require('../../assets/thin-line.svg')} className='line-graph' />
		</div>
		)
}

export default Welcome 