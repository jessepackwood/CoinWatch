import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
// import Header from '../Header/Header'
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import Welcome from '../Welcome/Welcome'
import WatchList from '../../containers/WatchList/WatchList'
import Portfolio from '../../components/Portfolio/Portfolio'
import { auth, db, isAuthenticated } from '../../services/firebase'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path ='/home' component={Home} />
            <RouteWhenAuthorized path="/watchlist" component={WatchList} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
      </div>
    );
  }
}

const RouteWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
      ) : (
      <Redirect to='/' />
      )
    ) }/>
  )

export default App;
