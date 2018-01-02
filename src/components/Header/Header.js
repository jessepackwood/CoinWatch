import React, { Component } from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
            <li className='header-link'>Login</li>
            <li className='header-link'>Sign Up</li>
          </ul>
        </nav>
        <Link to='/'>
        <h1 className='app-title'>Coin Watch</h1>
        </Link>
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
  handleCoinFetch: propTypes.func
}

export default connect(null, mapDispatchToProps)(Header);

