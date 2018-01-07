import React from 'react'
import { shallow } from 'enzyme'
import Welcome from './Welcome'

describe('Welcome tests', () => {
  const welcome = shallow(<Welcome />)

  it('should be defined', () => {
    expect(welcome).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(welcome).toMatchSnapshot()
  })

})