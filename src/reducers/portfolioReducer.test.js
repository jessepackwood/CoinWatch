import portfolioReducer from './portfolioReducer'
import * as actions from '../actions'

describe('portfolioReducer tests', () => {

  it('should return a default state', () => {
    const expected = []
    expect(portfolioReducer(undefined, actions)).toEqual(expected)
  })

  it('should return a new state with a portfolio', () => {
    const portfolio = []
    const coinName = 'IOTA'
    const amount = '3'
    const user ={email: 'email'}
    const expected = [...portfolio]
    expect(portfolioReducer(
      undefined, actions.addPortCoin(portfolio, coinName, amount, user))
    ).toEqual(expected)
  })

  it('should remove a coin from the portfolio', () => {
    const portfolio = [{coinName: 'IOTA'}]
    const coinName = 'IOTA'
    const amount = '3'
    const user ={email: 'email'}
    const expected = []
    expect(portfolioReducer(
      undefined, actions.removePortCoin(portfolio, coinName, amount, user))
    ).toEqual(expected)
  })
})