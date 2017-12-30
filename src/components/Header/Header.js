import React, { Component } from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { fetchCoins } from '../../actions'
import propTypes from 'prop-types'


export class Header extends Component {
  async componentDidMount() {
    this.props.handleCoinFetch();
  }

  render() {
    return (
      <div className='header'>
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
}



const mapDispatchToProps = (dispatch) => {
  return {
    handleCoinFetch: () => {
      dispatch(fetchCoins())
    }
  }
}


Header.propTypes = {
  handleCoinFetch: propTypes.func,
  coins: propTypes.array
}

export default connect(null, mapDispatchToProps)(Header);

