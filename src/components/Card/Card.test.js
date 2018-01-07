import React from 'react'
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';

describe('Card tests', () => {

  const mockAddWatch = jest.fn()
  const mockRemoveWatch = jest.fn()

  let card;
  let coin;

  beforeEach( () => {
    coin = {long: 'Bitcoin'}
    card = shallow(<Card coin={coin}/>)
  });

  it('should be defined', () => {
    expect(card).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(card).toMatchSnapshot();
  });

  it('should call addWatch on click', () => {
    card.find('.btn-fav').first().simulate('click');
    expect(mockAddWatch).toHaveBeenCalled();
  });

  it('should call removeWatch on click', () => {

    card.find('.btn-fav').first().simulate('click');
    expect(mockRemoveWatch).toHaveBeenCalled();
  });
})