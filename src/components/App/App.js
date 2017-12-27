import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header'
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import WatchList from '../../containers/WatchList/WatchList'
import { auth, db, isAuthenticated } from '../../services/firebase'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <RouteWhenAuthorized path="/watchlist" component={WatchList} />
          </Switch>
        </BrowserRouter>
      </div>
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
