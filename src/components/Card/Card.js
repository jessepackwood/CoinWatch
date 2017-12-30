import React from 'react'
import './Card.css'

const Card = ({ name, short, dayChange, price }) => {
  return(
    <div className='card'>
      <h3 className='coin-name'>{name}</h3>
      <span>({short})</span>
      <span>{price}</span>
      <span>{dayChange}</span>
    </div>
  )
}

export default Card;