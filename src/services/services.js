export const fetchCoinFront = async () => {
  try {
    const coinFrontResponse = await fetch('https://api.coincap.io/v2/assets')
    const coinFront = await coinFrontResponse.json()
    return coinFront.data
  } catch (error) {
    return error
  }
}
