import firebase from 'firebase'
import { 
  auth,
  db, 
  fetchWatchList, 
  isAuthenticated, 
  fetchPortfolio
} from '../services/firebase'
import { fetchCoinFront } from '../services/services'
import { NotificationManager } from 'react-notifications'


export const checkUser = () => (dispatch) => {
  auth.onAuthStateChanged( (user) => {
    if (user) {
      dispatch(loginSuccess(user))
      dispatch(fetchWatchedCoins(user))
      dispatch(listenToWatchLists(user))
    } 
  })
}

//----------------------------- Create User Actions ---------------------//

export const createUser = (email, password) => async (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    dispatch(createUserSuccess(user))
  }).catch((error) => {
    dispatch(createUserError(error))
  })
}

export const createUserSuccess = () => {
  return {
    type: 'SIGN_UP_SUCCESS'
  }
}

export const createUserError = (error) => {
  return {
    type: 'SIGN_UP_ERROR',
    error
  }
}

//----------------------------- Login Actions ------------------------//

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
  NotificationManager.warning('Your username or password is not valid', null, 2500)
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
      }).catch(() => {
        dispatch(loginError())
      })
    })
}

export const signOutUser = (user) => (dispatch) => {
  auth.signOut().then(()=> {
    dispatch(signOutSuccess())
    dispatch(clearWatchList())
    dispatch(clearSearchInput())
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
  db.ref('watchlists/' + user.uid).set(watchList.filter(
    (element) => element.symbol !== coin.symbol))
}

export const listenToWatchLists = (user) => (dispatch) => {
  db.ref('watchlists/' + user.uid).on('value', (snap) => {
    dispatch(setWatchedCoins(snap.val()))
  })
}

export const addWatch = (watchList, coin, user)  => {
  if (!isAuthenticated()) {
    NotificationManager.warning('Login to add coins to your watch list', null, 2500)
    return {
      type: 'FORBIDDEN'
    }
  }
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

export const forbidden = () => {
  return {
    type: 'FORBIDDEN'
  }
}

//----------------------------- Portfolio Actions ------------------------//

export const fetchUserPortfolio = (user) => dispatch => {
  fetchPortfolio(user).then((snap)=> {
    dispatch(setUserPortfolio(snap.val()))
  });
}

export const setUserPortfolio = (portfolio) => {
  return {
    type: 'SET_USER_PORTFOLIO',
    portfolio
  }
}

export const addPortCoin = (
  portfolio, coinName, amountOfCoin, user
) => dispatch => {
  let filteredPortfolio = portfolio.slice(0)

  const matchedCoin = portfolio.find((coin) => {
    return coin.name === coinName
  })
  if (!matchedCoin) {
    filteredPortfolio.push({name: coinName, amount: amountOfCoin})
  } else {
    matchedCoin.amount += amountOfCoin
    filteredPortfolio = 
      portfolio.filter( coin => matchedCoin.name !== coin.name)
    filteredPortfolio.push(matchedCoin)
  }
  NotificationManager.success(`Added ${amountOfCoin} ${coinName} to your portfolio`, null, 2500)  
  postPortfolio(filteredPortfolio, user)
  dispatch(setUserPortfolio(filteredPortfolio))
}

export const postPortfolio = (portfolio, user) => {
  db.ref('portfolios/' + user.uid).set(portfolio)
}

export const removePortCoin = (portfolio, portCoinName, user) => dispatch => {
  let filteredPortfolio = portfolio.slice(0)
  filteredPortfolio = portfolio.filter( coin => coin.name !== portCoinName)
  NotificationManager.success(`Removed ${portCoinName} from your portfolio`, null, 2500)  
  postPortfolio(filteredPortfolio, user)
  dispatch(setUserPortfolio(filteredPortfolio))
}

//----------------------------- Search Actions ------------------------//

export const searchInputChange = (searchInput) => {
  return {
    type: 'SEARCH_CHANGE',
    searchInput
  }
}

export const clearSearchInput = () => {
  return {
    type: 'SEARCH_CLEAR',
    searchInput: ''
  }
}


