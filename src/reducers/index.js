import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import coinReducer from './coinReducer'


const rootReducer = combineReducers({
  login: loginReducer,
  coins: coinReducer
})

export default rootReducer;
