import watchListReducer from './watchListReducer'
import * as actions from '../actions'

describe('watchListReducer tests', () => {
  let state;
  let mockList;
  let coin;
  let mockUser;

  beforeEach( () => {
    state = []
    mockList = [{coin: 'bit'}, {coin:'iot'}]
    coin = {coin: 'iot'}
    mockUser = {email:'email'}
  })

  it('should return an empty array by default', () => {
    const expected = []
    expect(watchListReducer(undefined, actions)).toEqual(expected)
  })

  it('should return a new state with a watched coin', () => {
    let mockList = []
    const expected = [coin]
    expect(watchListReducer(undefined, actions.addWatch(mockList, coin, mockUser)))
      .toEqual(expected)
  })

  it('should remove a coin from the watch list', () => {
    const expected = []
    expect(watchListReducer(undefined, actions.removeWatch(mockList, coin, mockUser ))).toEqual(expected)
  })
  
})