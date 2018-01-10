import { Home, mapStateToProps } from './Home'
import React from 'react'
import { shallow } from 'enzyme'

describe('Home tests', () => {
  let home
  let mockStore
  let result
  const mockFunc = jest.fn()
  const mockHandleView = jest.fn()
  const mockHandleMarketCap = jest.fn()
  const mockCoins = [{long: 'bit', mktcap: 100, cap24hrChange: 4}, {long: 'iot', mktcap: 200, cap24hrChange: 1} ]

  beforeEach(()=> {
    mockStore = {
        coins: ['bit'],
        searchInput: ''
      };
    result = mapStateToProps(mockStore);

    home = shallow(<Home
                      coins={mockCoins}
                      searchInput={''}
                      store={mockStore}
                    />)
    });

  it('should be defined', () => {
    console.log(home.state())
    expect(home).toBeDefined()
  })
	
  it('should match the snapshot', () => {
    expect(home).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const expectedDefault = {
      coinsToDisplay: [], 
      sortOrder: 'Highest', 
      viewAll: false
    };
    expect(home.state()).toEqual(expectedDefault);
  });

  it('should fire handleview', () => {
    home.instance().handleView()
    expect(home.state('viewAll')).toEqual(true)
  })

  it('should fire handleSortClick', () => {
    home.instance().handleSortClick()
    expect(home.state('sortOrder')).toEqual('Lowest')
  })

  it('should fire setToMarketCap', () => {
    home.instance().setToMarketCap()
    expect(home.state('coinsToDisplay').length).toEqual(2)
  })

})