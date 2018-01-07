import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import Welcome from '../Welcome/Welcome'
import WatchList from '../../containers/WatchList/WatchList'
import Portfolio from '../../components/Portfolio/Portfolio'
import { isAuthenticated } from '../../services/firebase'


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path ='/home' component={Home} />
        <RouteWhenAuthorized path="/watchlist" component={WatchList} />
        <RouteWhenAuthorized path='/portfolio' component={Portfolio} />
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

export default Routes