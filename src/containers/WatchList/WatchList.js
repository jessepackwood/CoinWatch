import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import './WatchList.css'

const WatchList = ({watchList}) => {

	const watchedCoins = watchList.map( (coin, index) => {
		return <Card 
			coin={coin}
			key={`Card: ${coin.short}`}
    	number={`${index + 1}`}
			/>
	})

  return (
    <div>
    <Header />
    <div className='watch-list'>
    <h3>Watch List</h3>
    	{watchedCoins}
    </div>
    </div>
    )
  }

export const mapStateToProps = state => ({watchList: state.watchList})


export default connect(mapStateToProps, null)(WatchList)