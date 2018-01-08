import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import coinReducer from './coinReducer'
import watchListReducer from './watchListReducer'
import portfolioReducer from './portfolioReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
  user: loginReducer,
  coins: coinReducer,
  watchList: watchListReducer,
  portfolio: portfolioReducer,
  searchInput: searchReducer
})

export default rootReducer;
