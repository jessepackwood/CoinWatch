const statusReducer = (state={}, action) => {
  switch (action.type) {
  case 'FORBIDDEN':
    return {...state, message: 'Forbidden: Login to do that'}
  default:
    return state
  }
}

export default statusReducer