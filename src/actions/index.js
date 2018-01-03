import { auth, db } from '../services/firebase'
import { fetchCoinFront, fetchCoinHistory, fetchWatchList } from '../services/services'

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

export const amountInputChange = (amount) => {
  console.log('amountInputChange')
  return {
    type: 'AMOUNT_CHANGE',
    amount
  }
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

// export const postWatchedCoin = (coin, user) => {
//   db.ref('users/' + userID).push(coin)
// }

export const removeWatchedCoin = (coin) => {
  
}

export const fetchCoins = () => async (dispatch) => {
  const coins = await fetchCoinFront();
  dispatch(setCoins(coins))
}

export const setCoins = (coins) => {
  console.log(coins)
  return {
    type: 'SET_COINS',
    coins
  }
}

export const fetchWatchedCoins = () => async (dispatch) => {
  const watchList = await fetchWatchList();
  dispatch(setWatchedCoins(watchList))
}

export const setWatchedCoins = (watchList) => {
  return {
    type: 'SET_WATCHED_COINS',
    watchList
  }
}

export const fetchHistory = () => async (dispatch) => {
  const coinHistory = await fetchCoinHistory();
  dispatch(setCoinHistory(coinHistory))
}

export const setCoinHistory = (coinHistory) => {
  return {
    type: 'SET_COIN_HISTORY',
    coinHistory
  }
}

//add to watch
export const addWatch = (coin) => {
  console.log('addWatch')
  return {
    type: 'ADD_WATCH',
    coin
  }
}

//remove from watch
export const removeWatch = (coin) => {
  return {
    type: 'REMOVE_WATCH',
  }
}




