import React from 'react'
import * as actions from '../../actions'
import './Search.css'

export const Search = () => {

	const handleInputChange = (event) => {
		// let matchingCoins = this.props.coins.filter((coin)=> coin.long.includes(event.target.value))
		this.props.searchInputChange(event.target.value)
	}

	return (
		<div className='search-wrapper'>
			<input className='search-bar' type='text' placeholder='Search' onChange={this.handleInputChange} />
		</div>
	)
}

const mapStateToProps = state => ({
	searchedCoins: state.searchedCoins
})

const mapDispatchToProps = dispatch => {
  return {
    searchInputChange: (searchInput) => {
    	dispatch(actions.searchInputChange(searchInput))
    }
  }
}

export default Search