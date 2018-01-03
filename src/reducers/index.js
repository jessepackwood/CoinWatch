import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import coinReducer from './coinReducer'
import watchListReducer from './watchListReducer'
import portfolioReducer from './portfolioReducer'

const rootReducer = combineReducers({
  user: loginReducer,
  coins: coinReducer,
  watchList: watchListReducer,
  portfolio: portfolioReducer
})

export default rootReducer;
