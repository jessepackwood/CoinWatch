const watchListReducer = (state =[], action) => {
	switch(action.type) {
		case 'ADD_WATCH' :
			return [...state, action.coin]
		case 'REMOVE_WATCH' :
			return [...state, action.removeWatch]
		default:
			return state
	}
}

export default watchListReducer