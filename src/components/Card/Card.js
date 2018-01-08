import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

export const Card = (props) => {
  return (
    <div className='card'>
      {props.children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.object
}


export default Card