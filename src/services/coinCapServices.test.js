import React from 'react'
import * as apiCalls from './coinCapServices'

describe('API Calls tests', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
         ['array', 'of', 'coins']
      )
    }));
  });

  it('should fetch the coinFront', async () => {
  	const coinFront = await apiCalls.fetchCoinFront();
  	expect(coinFront).toEqual(['array', 'of', 'coins'])
  })


})