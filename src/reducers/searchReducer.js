const searchReducer = (state={value: ''}, action) => {
  switch (action.type) {
  case 'SEARCH_CHANGE':
    return {...state, value: action.searchInput}
  default:
    return state
  }
}

export default searchReducer