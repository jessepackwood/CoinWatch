import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'
// import { googleSignIn } from '../../services/firebase'
import Form from '../../components/Form/Form'
import PropTypes from 'prop-types'
import './Login.css'


class Login extends Component {

  handleInputChange = (event) => {
    const {name, value} = event.target
    this.props.inputChange(name, value)
  }

  handleSubmit = () => {
    this.props.loginUser(this.props.email, this.props.password)
    // googleSignIn().then( (data)=> {
    //   console.log(data)
    // })
  }

  render() {
    return (
      <div>
        { this.props.loggedIn && 
          <Redirect to='/home' />
        }
        <Form 
          email={this.props.email}
          password={this.props.password}
          inputChange={this.handleInputChange}
          submit={this.handleSubmit}
          error={this.props.error}
        />
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
  loggedIn: PropTypes.string,
  inputChange: PropTypes.func,
  loginUser: PropTypes.func,
  createUser: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)