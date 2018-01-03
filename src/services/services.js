export const fetchCoinFront = async () => {
  try {
  const coinFrontResponse = await fetch('http://coincap.io/front')
  const coinFront = await coinFrontResponse.json()
  return coinFront
  } catch (error) {
    return error
  }
}

export const fetchCoinHistory = async () => {
	try {
		const coinHistoryResponse = await fetch('http://coincap.io/')
		const history = await coinHistoryResponse.json()
		return history
	} catch (error) {
		return error
	}
}

export const fetchWatchList = async () => {
	try {
	} catch (error) {
		return error
	}
}