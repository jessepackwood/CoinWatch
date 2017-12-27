import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import coinReducer from './coinReducer'


const rootReducer = combineReducers({
  login: loginReducer,
  coin: coinReducer
})

export default rootReducer;
