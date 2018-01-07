import firebase from 'firebase'
import { auth, db, fetchWatchList } from '../services/firebase'
import { fetchCoinFront } from '../services/services'


export const checkUser = () => (dispatch) => {
  auth.onAuthStateChanged( (user) => {
    if (user) {
      console.log('user loggedIn')
      dispatch(loginSuccess(user))
      dispatch(fetchWatchedCoins(user))
      // dispatch(listenToWatchLists(user))
    } 
  })
}

//----------------------------- Login Actions ------------------------//

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

export const signUpUser = (email, password) => async (dispatch) => {
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

export const searchInputChange = (searchInput) => {
  console.log(searchInput)
  return {
    type: 'SEARCH_CHANGE',
    searchInput
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
    type: 'LOGIN_SUCCESS',
    user
  }
}

export const loginError = () => {
  return {
    type: 'LOGIN_ERROR'
  }
}

export const loginUser = (email, password) => (dispatch ) => {
  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    auth.signInWithEmailAndPassword(email, password).then((user) => {
      dispatch(loginSuccess(user))
      dispatch(fetchWatchedCoins(user))
      // dispatch(listenToWatchLists(user))
    }).catch((err) => {
      dispatch(loginError())
    })
  })
}

export const signOutUser = (user) => (dispatch) => {
  auth.signOut().then(()=> {
    dispatch(signOutSuccess())
    dispatch(clearWatchList())
    removeWatchListListener(user)
  })
}

export const signOutSuccess = () => {
  return {
    type: 'SIGN_OUT_SUCCESS'
  }
}


//----------------------------- Coin Actions ------------------------//



export const fetchCoins = () => async (dispatch) => {
  const coins = await fetchCoinFront();
  dispatch(setCoins(coins))
}

export const setCoins = (coins) => {
  return {
    type: 'SET_COINS',
    coins
  }
}


//----------------------------- WatchList Actions ------------------------//

export const fetchWatchedCoins = (user) => async (dispatch) => {
  fetchWatchList(user).then((snap)=> {
    dispatch(setWatchedCoins(snap.val()))
  });
}

export const setWatchedCoins = (watchList) => {
  return {
    type: 'SET_WATCHED_COINS',
    watchList
  }
}

export const postWatchedCoin = (watchList, coin, user) => {
  db.ref('watchlists/' + user.uid).set([...watchList, coin])
}

export const removeWatchedCoin = (watchList, coin, user) => {
  db.ref('watchlists/' + user.uid).set(watchList.filter((element) => element.short !== coin.short))
}

// export const listenToWatchLists = (user) => (dispatch) => {
//   db.ref('watchlists/' + user.uid).on('value', (snap) => {
//     dispatch(setWatchedCoins(snap.val()))
//   })
// }

export const addWatch = (watchList, coin, user) => {
  console.log('addWatch')
  postWatchedCoin(watchList, coin, user)
  return {
    type: 'ADD_WATCH',
    coin
  }
}

export const removeWatch = (watchList, coin, user) => {
  removeWatchedCoin(watchList, coin, user)
  return {
    type: 'REMOVE_WATCH',
    coin
  }
}

export const clearWatchList = () => {
  return {
    type: 'CLEAR_WATCHLIST'
  }
}

export const removeWatchListListener = (user) => {
  db.ref('watchlists/' + user.uid).off()
}

//----------------------------- Portfolio Actions ------------------------//

export const addPortCoin = (portfolio, coin, amountOfCoin, user) => {
  postPortCoin()
  return {
    type: 'ADD_PORT_COIN',
    addedPortCoin: Object.assign({}, coin, {amount: amountOfCoin})
  }
}

export const postPortCoin = (portfolio, addedPortCoin, user) => {
  db.ref('portfolios/' + user.uid).set([...portfolio, addedPortCoin])
}

export const removePortCoin = (portfolio, addedPortCoin, user) => {
  postRemovePortCoin(portfolio, addedPortCoin, user)
  return {
    type: 'REMOVE_PORT_COIN',
    removePortCoin: addedPortCoin
  }
}

export const postRemovePortCoin = (portfolio, addedPortCoin, user) => {
  db.ref('portfolio/' + user.uid).set(portfolio.filter((element) => element.short !== addedPortCoin.short))
}




