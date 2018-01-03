import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'

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
    	{watchedCoins}
    </div>
    )
  }

export const mapStateToProps = state => ({watchList: state.watchList})


export default connect(mapStateToProps, null)(WatchList)