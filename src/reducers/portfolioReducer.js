const portfolioReducer = (state=[], action) => {
	switch(action.type) {
		case 'ADD_PORT_COIN':
			return [...state, action.addPortCoin]
		case 'REMOVE_PORT_COIN':
			return [...state, action.removePortCoin]
		default:
			return state
	}
}

export default portfolioReducer