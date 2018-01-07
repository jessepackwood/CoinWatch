import Home from './Home'

describe('Home tests', () => {

  it('should be defined', () => {
    expect(Home).toBeDefined()
  })
	
  it('should match the snapshot', () => {
    expect(Home).toMatchSnapshot()
  })
})