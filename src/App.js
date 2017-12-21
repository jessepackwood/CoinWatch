import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './containers/Login'
import Home from './components/Home'
import firebase, { auth, db, isAuthenticated } from './services/firebase'

class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <RouteWhenAuthorized path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const RouteWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
      ) : (
      <Redirect to='/home' />
      )
    ) }/>
  )

export default App;
