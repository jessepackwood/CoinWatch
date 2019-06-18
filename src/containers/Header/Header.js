import React, { Component } from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { fetchCoins, fetchWatchedCoins, signOutUser} from '../../actions'
import PropTypes from 'prop-types'

export class Header extends Component {
  async componentDidMount() {
    this.props.handleCoinFetch();
  }

  render() {
    return (
      <div className='header'>
        <nav>
          { !this.props.user.loggedIn && 
            <ul className='header-nav'>
              <Link to='/login'>
                <li className='login-btn header-link'>Login</li>
              </Link>
              <Link to='/Signup'>
                <li className='sign-up header-link'>Sign Up</li>
              </Link>
            </ul>
          }
          { !!this.props.user.loggedIn && 
            <ul className='header-nav'>
              <NavLink to='/home'>
                <li className='header-link home-link'>Home</li>
              </NavLink>
              <span className='pipe'>|</span>
              <NavLink to='/portfolio'>
                <li className='header-link portfolio-link'>Portfolio</li>
              </NavLink>
              <span className='pipe'>|</span>
              <NavLink to='/watchlist'>
                <li className='header-link'>WatchList</li>
              </NavLink>
              <span className='pipe'>|</span>
              <li className='login-btn email'>
                {this.props.user.email}
              </li>
              <li className='mobile-sign-out'> </li>
              <li 
                className='sign-out header-link'
                onClick={()=> this.props.signOut(this.props.user)}
              >
              </li>
            </ul>
          }
        </nav>

        <Link to='/home'>
          <h1 className='app-title'><span className='coin-in-title'>Coin</span> Watch</h1>
        </Link>

      </div>
    )   
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleCoinFetch: () => {
      dispatch(fetchCoins())
    },
    handleWatchedCoins: () => {
      dispatch(fetchWatchedCoins())
    },
    signOut: (user) => {
      dispatch(signOutUser(user))
    }
  }
}


Header.propTypes = {
  handleCoinFetch: PropTypes.func,
  handleWatchedCoins: PropTypes.func,
  user: PropTypes.object,
  signOut: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

