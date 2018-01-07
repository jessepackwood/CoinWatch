import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Routes from '../Routes/Routes'
import PropTypes from 'prop-types';
import * as actions from '../../actions'

export class App extends Component {

  componentDidMount() {
    this.props.checkUser()
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    checkUser: () => {
      dispatch(actions.checkUser())
    }
  }
}

App.propTypes = {
  checkUser: PropTypes.func
}

export default withRouter(connect(null, mapDispatchToProps)(App));
