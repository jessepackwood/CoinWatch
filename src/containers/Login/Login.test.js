import React from 'react'
import Login from './Login'
import { shallow } from 'enzyme'
import mapStateToProps from './Login'

describe('Login tests', () => {
	it('should exist', () => {
		const login = shallow(<Login />)
		expect(login).toBeDefined()
	})

	it('should receive state from props', () => {
		
	})

	it('should call handleInputChange', () => {

	})


})