import * as apiCalls from './services'

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