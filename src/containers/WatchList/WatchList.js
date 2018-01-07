import React from 'react'
import Card from '../../components/Card/Card'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import plus  from '../../assets/rounded-add-blue.svg'
import './WatchList.css'

const WatchList = ({watchList}) => {

	const watchedCoins = watchList && watchList.map( (coin, index) => {
		return <Card 
			coin={coin}
			key={`Card: ${coin.short}`}
    	number={`${index + 1}`}
			/>
	})

  return (
    <div>
      <Header />

      { !!watchedCoins.length && 
      <div className='watch-list'>
        <h3>Watch List</h3>
    	   {watchedCoins}
      </div>
      }
      {!watchedCoins.length && 
        <div className='empty-watch'>
        <h3 className='empty-watch-title'>
          Your watch list is empty. Click the
        <img src={plus} alt='plus sign' className='watch-list-add'/> 
          on the coin you'd like to add to your list.
        </h3>
        </div>
      }
    </div>
    )
  }

export const mapStateToProps = state => ({watchList: state.watchList})


export default connect(mapStateToProps, null)(WatchList)