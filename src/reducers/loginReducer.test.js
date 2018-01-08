import loginReducer from './loginReducer'
import * as actions from '../actions'

describe('loginReducer tests', () => {
  let state;
  beforeEach( () => {
    state = { email: '', password: '', loggedIn: false };
  })

  it('should return a default state', () => {
    const expected = state
    expect(loginReducer(undefined, actions)).toEqual(expected)
  })

  it('should return a new state with a user', () => {
    const user = {email: 'email', password: null, loggedIn: true, uid: 'uid' }
    const expected = {...user}
    expect(loginReducer(state, actions.loginSuccess(user))).toEqual(expected)
  })

  it('should reset state when a user signs out', () => {
    const expected = {
      "email": null, "loggedIn": false, "password": null, "uid": null
    }
    expect(loginReducer(state, actions.signOutSuccess())).toEqual(expected)
  })
})