import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Dropdown.css'

export const Dropdown = ({coins, onNameChange}) => {
  const coinNames = coins.map( (coin, index) => {
    return <option key={`Dropdown - ${index}`} > {coin.long} </option>
  })

  return (
    <select 
      className='dropdown' 
      onChange={event => onNameChange(event.target.value)}
    >
      <optgroup>
        {coinNames}
      </optgroup>
    </select>
  )
}

export const mapStateToProps = state => ({
  coins: state.coins
})

Dropdown.propTypes = {
  coins: PropTypes.array,
  onNameChange: PropTypes.func
}

export default connect(mapStateToProps, null)(Dropdown)