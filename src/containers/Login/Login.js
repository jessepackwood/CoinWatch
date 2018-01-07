import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { googleSignIn } from '../../services/firebase'
import './Login.css'
import Form from '../../components/Form/Form'

class Login extends Component {
  constructor() {
    super()
  }

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)