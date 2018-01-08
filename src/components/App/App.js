import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Routes from '../Routes/Routes'
import PropTypes from 'prop-types';
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import * as actions from '../../actions'


export class App extends Component {

  componentDidMount() {
    this.props.checkUser()
  }

  render() {
    return (
      <div>
        <NotificationContainer />
        <Routes />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  status: state.status
})

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
