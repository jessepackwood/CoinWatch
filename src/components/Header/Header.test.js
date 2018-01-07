import Header from './Header'

describe('Header tests', () => {

  it('should be defined', () => {
    expect(Header).toBeDefined()
  })

  it('should match the snapshot', () => {
    expect(Header).toMatchSnapshot()
  })
	
})