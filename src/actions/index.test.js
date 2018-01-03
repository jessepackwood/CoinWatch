import * as actions from './index'

describe('All actions', () => {
	describe('User actions', () => {
		it('signUpSuccess returns an object with type of SIGN_UP_SUCCESS')
			const user = {
				email: 'jhun@gmail.com',
				password: 'password'
			}
			const expected = {
				type: 'SIGN_UP_SUCCESS',
			}
			expect(actions.signUpSuccess(user)).toEqual(expected)
	})

	describe('Coin actions', () => {
		it('dispatches a fetchCoins function', () => {

		})

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

	})
})