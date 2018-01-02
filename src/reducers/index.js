import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import coinReducer from './coinReducer'
import watchListReducer from './watchListReducer'

const rootReducer = combineReducers({
  user: loginReducer,
  coins: coinReducer,
  watchList: watchListReducer
})

export default rootReducer;
