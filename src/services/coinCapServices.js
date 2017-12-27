export const fetchCoinFront = async () => {
  try {
  const coinFrontResponse = await fetch('http://coincap.io/front')
  const coinFront = await coinFrontResponse.json()
  console.log(coinFront)
  return coinFront
  } catch (error) {
    return error
  }
}