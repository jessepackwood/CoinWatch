import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';

import './Login.css'


export class Login extends Component {

  handleInputChange = (event) => {
    const {name, value} = event.target
    this.props.inputChange(name, value)
  }

  handleLoginSubmit = () => {
    this.props.loginUser(this.props.email, this.props.password)
  }

  handleSignUpSubmit = () => {
    this.props.createUser(this.props.email, this.props.password)
  }

  render() {
    // console.log(showRegister)
    return (
      <div>
        { this.props.loggedIn && 
          <Redirect to='/home' />
        }
        <div className='login-form'>
          <Link to='/home'>
            <h1 className='app-title login-title'>Coin Watch</h1>
          </Link>
          <input 
            type='text'
            name='email'
            className='input-field'
            placeholder='Email'
            value={this.props.email || ''}
            onChange={this.handleInputChange} 
          />
          <input 
            type='password'
            name='password'
            className='input-field'
            placeholder='Password'
            value={this.props.password || ''} 
            onChange={this.handleInputChange} 
          />
          {!!this.props.error && 
            <p className='error-message'>{this.props.error}</p>
          }
          { !this.props.showRegister && 
          <input type='submit' value='Login' className='btn-submit' onClick={this.handleLoginSubmit} />
          }
          { this.props.showRegister &&
          <input type='submit' value='Sign Up' className='btn-submit' onClick={this.handleSignUpSubmit} />
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    email: state.user.email,
    password: state.user.password,
    error: state.user.error,
    loggedIn: state.user.loggedIn
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    inputChange: (name, value) => {
      dispatch(actions.inputChange(name, value));
    },
    loginUser: (email, password) => {
      dispatch(actions.loginUser(email, password));
    },
    createUser: (email, password) => {
      dispatch(actions.createUser(email, password))
    }
  };
};

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  loggedIn: PropTypes.bool,
  inputChange: PropTypes.func,
  loginUser: PropTypes.func,
  createUser: PropTypes.func,
  showRegister: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)




