import React from 'react'
import { shallow } from 'enzyme';
import { MarketCapCard, mapStateToProps, mapDispatchToProps } from './MarketCapCard';

describe('MarketCapCard tests', () => {

  const mockAddWatch = jest.fn()
  const mockRemoveWatch = jest.fn()

  let card;
  let coin;

  beforeEach( () => {
    coin = {long: 'Bitcoin'}
    card = shallow(<MarketCapCard coin={coin}/>)
  });

  it('should be defined', () => {
    expect(card).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(card).toMatchSnapshot();
  });
})