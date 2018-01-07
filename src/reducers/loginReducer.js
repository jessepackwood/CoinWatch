import { auth, isAuthenticated } from '../services/firebase'

const loginReducer = (state = { email: '', password: '', loggedIn: false }, action) => {
  switch (action.type) {
    case 'CHECK_USER':
      if (isAuthenticated()) {
        return {...state, loggedIn: true, email: auth.currentUser.email, uid: auth.currentUser.uid}
      } else {
        return state
      }
    case 'LOGIN_EMAIL_CHANGE' :
      return {...state, email: action.value};
    case 'LOGIN_PASSWORD_CHANGE' :
      return {...state, password: action.value};
    case 'LOGIN_SUCCESS' :
      return {...state, loggedIn: true, email: action.user.email, password: null, uid: action.user.uid}
    case 'LOGIN_ERROR' :
      return {...state, error: 'Failed to login'}
    case 'SIGN_OUT_SUCCESS':
      return {...state, loggedIn: false, email: null, password: null, uid: null}
    default:
      return state;
  }
}

export default loginReducer;