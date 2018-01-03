import React, { Component } from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCoins, fetchWatchedCoins } from '../../actions'
import { googleSignIn } from '../../services/firebase'
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
            <li className='login header-link' onClick={googleSignIn}>Login</li>
            <li className='header-link'>Sign Up</li>
          </ul>
        </nav>
        <Link to='/'>
          <h1 className='app-title'>Coin Watch</h1>
        </Link>
        <Link to='/portfolio'>
          <span className='header-link portfolio-link'>Portfolio</span>
        </Link>
        <Link to='/watchlist'>
          <span className='header-link'>WatchList</span>
        </Link>

      </div>
    )   
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleCoinFetch: () => {
      dispatch(fetchCoins())
    },
    handleWatchedCoins: () => {
      dispatch(fetchWatchedCoins())
    }
  }
}


Header.propTypes = {
  handleCoinFetch: propTypes.func
}

export default connect(null, mapDispatchToProps)(Header);

