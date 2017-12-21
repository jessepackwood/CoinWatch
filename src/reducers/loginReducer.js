const loginReducer = (state = { email: '', password: '', loggedIn: false }, action) => {
  switch (action.type) {
    case 'LOGIN_EMAIL_CHANGE' :
      return {...state, email: action.value};
    case 'LOGIN_PASSWORD_CHANGE' :
      return {...state, password: action.value};
    case 'LOGIN_SUCCESS' :
      return {...state, loggedIn: true }
    case 'LOGIN_ERROR' :
      return {...state, error: 'Failed to login'}
    default:
      return state;
  }
}

export default loginReducer;