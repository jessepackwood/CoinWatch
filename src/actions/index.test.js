import * as actions from './index'

describe('All actions', () => {
  describe('User actions', () => {
    let user;

    beforeEach( () => {
      user = {
        email: 'jhun@gmail.com',
        password: 'password'
      }
    })


    it('signUpSuccess returns an object with type of SIGN_UP_SUCCESS', () => {
      const expected = {
        type: 'SIGN_UP_SUCCESS'
      }
      expect(actions.createUserSuccess(user)).toEqual(expected)
    })

    it('createUserError returns an object with type of SIGN_UP_ERROR', () => {
      const user = {
        email: 'jhun',
        password: 'password',
        error: 'nah bro'
      }
      const expected = {
        type: 'SIGN_UP_ERROR',
        error: user
      }
      expect(actions.createUserError(user)).toEqual(expected)
    })

    it('loginSuccess returns an object with a logged in user', () => {
      const expected = {
        type: 'LOGIN_SUCCESS',
        user
      }
      expect(actions.loginSuccess(user)).toEqual(expected)
    })

    it('signOutSuccess returns an object with a type of SIGN_OUT_SUCCESS', () => {
      const expected = {
        type: 'SIGN_OUT_SUCCESS'
      }
      expect(actions.signOutSuccess()).toEqual(expected)
    })
  })

  describe('Coin actions', () => {

    it('setCoins returns an object with the type of setCoins', () => {
      const coins = ['BIT', 'ETH', 'IOT']
      const expected = {
        type: 'SET_COINS',
        coins: coins
      }
      expect(actions.setCoins(coins)).toEqual(expected)
    })
  })

  describe('WatchList actions', () => {
    it('should set watched coins', () => {
      const watchList =[{coin: 'iot'}]
      const expected = {
        type: 'SET_WATCHED_COINS',
        watchList: watchList
      }
      expect(actions.setWatchedCoins(watchList)).toEqual(expected)
    })

    it.skip('addWatch should return an object with the type of ADD_WATCH', () => {
      const coin = {coin:'IOT'}
      const watchList = []
      const user = {uid: 'id'}
      const expected = {
        type: 'ADD_WATCH',
        coin
      }
      expect(actions.addWatch(watchList, coin, user)).toEqual(expected)

    })    

    it('removeWatch should return an object with the type of REMOVE_WATCH', () => {
      const coin = {coin:'IOT'}
      const watchList = [coin]
      const user = {uid: 'id'}
      const expected = {
        type: 'REMOVE_WATCH',
        coin
      }
      expect(actions.removeWatch(watchList, coin, user)).toEqual(expected)
    })

    it('clearWatchList should return an object with the type of CLEAR_WATCHLIST', () => {
      const expected = {
        type: 'CLEAR_WATCHLIST'
      }
      expect(actions.clearWatchList()).toEqual(expected)
    })
  })

  describe('Portfolio actions', () => {

    it('setUserPortfolio returns an object with the type of setCoins', () => {
      const portfolio = ['BIT', 'ETH', 'IOT']
      const expected = {
        type: 'SET_USER_PORTFOLIO',
        portfolio: portfolio
      }
      expect(actions.setUserPortfolio(portfolio)).toEqual(expected)
    })
  })
  
  describe('Search actions', () => {
    it('should set the saerch input', () => {
      const searchInput = 'iot'
      const expected = {
        type: 'SEARCH_CHANGE',
        searchInput
      }
      expect(actions.searchInputChange(searchInput)).toEqual(expected)
    })
  })
})





