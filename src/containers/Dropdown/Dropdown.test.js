import React from 'react'
import { shallow } from 'enzyme'
import { Dropdown, mapStateToProps} from './Dropdown'

describe('Dropdown tests', () => {

  let mockCoins; 
  let dropdown; 

  beforeEach( () => {
    mockCoins = ['array', 'of', 'coins']
    dropdown = shallow(<Dropdown coins={mockCoins} />)
  })

  it('should be defined', () => {
    expect(dropdown).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(dropdown).toMatchSnapshot()
  })

  it('should receive coins from state', () => {
    const mockStore = {coins: ['array', 'of', 'coins']}
    const result = mapStateToProps(mockStore);
    expect(result.coins).toEqual(mockCoins)
  })

})