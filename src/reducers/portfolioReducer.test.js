import portfolioReducer from './loginReducer'
import * as actions from '../actions'

describe('portfolioReducer tests', () => {
  let state;
  beforeEach( () => {
    state = [];
  })

  it('should return a default state', () => {
    const expected = state
    expect(portfolioReducer(undefined, actions)).toEqual(expected)
  })

  it('should return a new state with a portfolio', () => {
    const portfolio = [{coin: 'BTC'}]
    const expected = [...portfolio]
    expect(portfolioReducer(state, actions.addPortCoin(user))).toEqual(expected)
  })
})