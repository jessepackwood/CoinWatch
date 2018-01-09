const coinReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_COINS' :
    return action.coins
  default: 
    return state
  }
}

export default coinReducer