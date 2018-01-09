import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Login from '../../containers/Login/Login'
import Home from '../../containers/Home/Home'
import Welcome from '../Welcome/Welcome'
import WatchList from '../../containers/WatchList/WatchList'
import Portfolio from '../../containers/Portfolio/Portfolio'
import PropTypes from 'prop-types'
import { isAuthenticated } from '../../services/firebase'


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route 
          exact path='/' component={Welcome} 
        />
        <Route 
          exact path='/login' render={props => <Login {...props} />} 
        />
        <Route 
          exact path='/Signup' 
          render={props => <Login {...props} showRegister /> } 
        />
        <Route 
          exact path ='/home' 
          component={Home} 
        />
        <RouteWhenAuthorized 
          path="/watchlist" 
          component={WatchList} 
        />
        <RouteWhenAuthorized 
          path='/portfolio' 
          component={Portfolio} 
        />
      </Switch>
    </div>
  )
}

const RouteWhenAuthorized = ({component: Component, ...rest}) => (
  <Route {...rest} render={renderProps => (
    isAuthenticated() ? (
      <Component {...renderProps} />
    ) : (
      <Redirect to='/login' />
    )
  ) }/>
)

Route.propTypes = {
  component: PropTypes.func
}

export default Routes