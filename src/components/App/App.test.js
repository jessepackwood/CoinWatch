import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App tests', () => {
  const app = shallow(<App />)

  it('should be defined', () => {
    const app = shallow(<App />)
    expect(app).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(app).toMatchSnapshot()
  })

  
})
