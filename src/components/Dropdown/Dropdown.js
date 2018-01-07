import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Dropdown.css'

const Dropdown = ({coins}) => {

  const coinNames = coins.map( (coin, index) => {
    return <option key={`Dropdown - ${index}`}> {coin.long} </option>
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

Dropdown.propTypes = {
  coins: PropTypes.array
}

export default connect(mapStateToProps, null)(Dropdown)
