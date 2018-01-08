import React from 'react';
import { shallow } from 'enzyme';
import { Search, mapStateToProps, mapDispatchToProps } from './Search';

describe('Search tests', () => {
  let mockCoins
  let mockSearchInput
  let renderedSearch
  let inputChange

  beforeEach(() => {
    mockCoins = [{long:'Bitcoin'}]
    mockSearchInput = 'bit'
    inputChange = jest.fn()
    renderedSearch = shallow(
      <Search searchInput={mockSearchInput} coins={mockCoins} inputchange={inputChange}/>
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedSearch).toMatchSnapshot();
  });

  describe('mapStateToProps tests', () => {
    it('Should pull coins from the store', () => {
      const mockSearchInput = {value: 'bit'}
      const mockStore = {
        coins: mockCoins,
        searchInput: mockSearchInput.value
      };
      const result = mapStateToProps(mockStore);

      expect(result.coins).toEqual(mockStore.coins);
    });
  });

  describe('mapDispatchToProps tests', () => {
    it('Should call dispatch when inputChange is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.inputChange('bit');
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})