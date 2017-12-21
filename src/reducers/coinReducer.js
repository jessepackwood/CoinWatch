const coinReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_COINS' :
      return [...state, action.coins]
  }
}