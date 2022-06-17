import { useState, useEffect } from 'react'

const CryptoData = () => {

  const [topPrice, setTopPrice] = useState([]);
  const [isLoadingHigh, setIsLoadingHigh] = useState(true);

  const [currentPrice, setCurrentPrice] = useState([]);
  const [isLoadingCurrent, setIsLoadingCurrent] = useState(true);


  useEffect(() => {

    (async () => {
      const res = await fetch('/highPrice');
      const data = await res.json();
      setTopPrice(data)
      setIsLoadingHigh(false)
    })()
  }, [])



  useEffect(() => {

    (async () => {
      const res = await fetch('/currentPrice');
      const data = await res.json();
      setCurrentPrice(data)
      setIsLoadingCurrent(false)
    })()
  }, [])



  console.log(topPrice)

  console.log(currentPrice)








  return (
    <div>
      <h3>High Prices</h3>

      {(isLoadingHigh) ? <h1>Loading</h1> :
        topPrice && topPrice.highPrice.map((item, i) => (
          <ul key={i}>
            {item}
          </ul>
        ))}

      <h3>Current Prices</h3>
      {(isLoadingCurrent) ? <h1>Loading</h1> :
        topPrice && currentPrice.currentPrice.map((item, i) => (
          <ul key={i}>
            {item}
          </ul>
        ))}


<h1>

   BTC:{   topPrice.highPrice[0] }
</h1>

    </div>
  )






}

export default CryptoData