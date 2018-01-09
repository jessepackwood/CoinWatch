import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'

describe('App tests', () => {
  let checkUser
  let app 

  beforeEach( () => {
    checkUser = jest.fn()
    app = shallow(<App checkUser={checkUser}/>)
  });

  it('should be defined', () => {
    expect(app).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(app).toMatchSnapshot()
  })

  it('should dispatch checkUser', async () => {
    await app.instance().componentDidMount()
    expect(checkUser).toHaveBeenCalled()
  })

})
