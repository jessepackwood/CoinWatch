import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './App'

it('should be defined', () => {
	const app = shallow(<App />)
  expect(app).toBeDefined()
});
