import React from 'react'
import { shallow } from 'enzyme';
import { 
  MarketCapCard, 
  mapStateToProps, 
  mapDispatchToProps 
} from './MarketCapCard';

describe('MarketCapCard tests', () => {

  let mockAddWatch
  let mockRemoveWatch
  let card
  let coin

  beforeEach( () => {
    coin = {long: 'Bitcoin'}
    card = shallow(<MarketCapCard coin={coin}/>)
    mockAddWatch = jest.fn()
    mockRemoveWatch = jest.fn()
  });

  it('should be defined', () => {
    expect(card).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      coin: 'bit'
    }

    const result = mapStateToProps(mockStore);

    it.skip('should pull coin from the store', () => {
      expect(result.coin).toEqual(mockStore.coin);
    });

  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    it.skip('should call dispatch when addFav is called', () => {
      result.mockAddWatch();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it.skip('should call dispatch when removeFav is called', () => {
      result.mockRemoveWatch();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
})