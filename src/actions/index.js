import firebase, { auth } from '../services/firebase'
import fetchCoinFront from '../services/coinCapServices'

export const signUpSuccess = (user) => {
  return {
    type: 'SIGN_UP_SUCCESS'
  }
}

export const signUpError = () => {
  return {
    type: 'SIGN_UP_ERROR'
  }
}

export const signInUser = (email, password) => async (dispatch) => {
  auth.createUserWithEmailandPassword(email, password).then((user) => {
    dispatch(signUpSuccess(user))
  }).catch((error) => {
    dispatch(signUpError())
  })
}


export const inputChange = (name, value) => {
  return {
  type: `LOGIN_${name.toUpperCase()}_CHANGE`,
  value
  }
}

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

export const loginError = () => {
  return {
    type: 'LOGIN_ERROR'
  }
}

export const loginUser = (email, password) => async (dispatch ) => {
  // try {
  //   let user = await auth.signInWithEmailAndPassword(email, password)
    
  // } catch(error) {
  //   console.log('Error:', error)
  // }
  auth.signInWithEmailAndPassword(email, password).then((user) => {
    dispatch(loginSuccess(user))
  }).catch((err) => {
    dispatch(loginError())
  })
}

export const setCoins = (coins) => {
  console.log(coins)
  return {
    type: 'SET_COINS',
    coins
  }
}