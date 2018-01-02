export const fetchCoinFront = async () => {
  try {
  const coinFrontResponse = await fetch('http://coincap.io/front')
  const coinFront = await coinFrontResponse.json()
  return coinFront
  } catch (error) {
    return error
  }
}

export const addToWatchList = (coin) => {
	return Object.assign({}, coin)
}

// export const removeFromWatchList = (coin) => {
// 	return Object.assign({}, coin, { watched: false })
// }