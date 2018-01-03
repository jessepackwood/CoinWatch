import watchListReducer from './watchListReducer'
import * as actions from '../actions'

describe('watchListReducer tests', () => {
	let state;
	beforeEach( () => {
	state = [];
	})

	it('should return an empty array by default', () => {
		const expected = []
		expect(watchListReducer(undefined, actions)).toEqual(expected)
	})

	it('should return a new state with a watched coin', () => {
		const coin = 'IOT'
		const expected = [...coin]
		expect(watchListReducer(undefined, actions.addWatch(coin)))
	})

})