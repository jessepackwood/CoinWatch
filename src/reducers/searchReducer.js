const searchReducer = (state={}, action) => {
	switch (action.type) {
		case 'SEARCH_CHANGE':
			return {...state, searchValue: action.searchInput}
		default:
		return state
	}
}

export default searchReducer