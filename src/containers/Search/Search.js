import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import PropTypes from 'prop-types'
import './Search.css'

export const Search = ({ inputChange }) => {

  return (
    <div className='search-wrapper'>
      <input 
        className='search-bar' 
        type='text' 
        placeholder='Search by coin name' 
        onChange={event => inputChange(event.target.value)} 
      />
    </div>
  )
}

export const mapStateToProps = state => ({
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
  inputChange: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)