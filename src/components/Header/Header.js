import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className='home-link'>Home</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </nav>
      <h1 className='app-title'>Coin Watch</h1>

    </div>
    )
}

export default Header;