const watchListReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_WATCH' :
    return [...state, ...action.coin]
  case 'REMOVE_WATCH' :
    return state.filter( coin => coin.symbol !== action.coin.symbol)
  case 'SET_WATCHED_COINS':
    return action.watchList || []
  case 'CLEAR_WATCHLIST':
    return []
  default:
    return state
  }
}

export default watchListReducer