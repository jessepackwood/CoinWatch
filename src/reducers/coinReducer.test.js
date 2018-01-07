import coinReducer from './coinReducer'
import * as actions from '../actions'

describe('coinReducer tests', () => {
  let state;

  beforeEach( () => {
    state = [];
  })
	
  it('should return null by default', () => {
    const expected = [];
    expect(coinReducer(undefined, actions)).toEqual(expected)
  })

  it('should return a new state with coins', () => {
    const coins = ['BIT', 'IOT', 'ETH']
    const expected = [...coins]
    expect(coinReducer(undefined, actions.setCoins(coins))).toEqual(expected)
  })
})