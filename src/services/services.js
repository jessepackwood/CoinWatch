export const fetchCoinFront = async () => {
  try {
  const coinFrontResponse = await fetch('http://coincap.io/front')
  const coinFront = await coinFrontResponse.json()
  return coinFront
  } catch (error) {
    return error
  }
}

export const fetchCoinPrice = async (symbol) => {
	try {
		const singleCoinResponse = await fetch(`http://coincap.io/page/${symbol}`)
		const singleCoin = await singleCoinResponse.json()
		return singleCoin.price_usd
	} catch (error) {
		return error
	}
}