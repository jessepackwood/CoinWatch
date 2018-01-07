import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import PropTypes from 'prop-types'
import './Search.css'

const Search = ({coins, searchInput, inputChange}) => {

  return (
    <div className='search-wrapper'>
      <input className='search-bar' type='text' placeholder='Search'  onChange={event => inputChange(event.target.value)} />
    </div>
  )
}

export const mapStateToProps = state => ({
  coins: state.coins,
  searchInput: state.searchInput.value
})

export const mapDispatchToProps = dispatch => {
  return {
    inputChange: (searchInput) => {
    	dispatch(actions.searchInputChange(searchInput))
    }
  }
}

Search.propTypes = {
  coins: PropTypes.array,
  searchInput: PropTypes.string,
  inputChange: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)