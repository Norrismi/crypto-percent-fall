import { useState, useEffect } from 'react'
import { bigNums } from '../utils'

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


  const highNums = [];
  const lowNums = [];
  const dividedBy = [];

  (async () => {

    highNums.push(topPrice.highPrice.map((item, i) => (bigNums(item))))
    

    lowNums.push(currentPrice.currentPrice.map((item, i) => (bigNums(item))))

    for (let i = 0; i <= currentPrice.currentPrice.length-1; i++) {
      dividedBy.push((highNums[0][i] / lowNums[0][i]).toFixed(2))
    }


  })()



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

      <h3>Divided</h3>
      {(isLoadingCurrent) ? <h1>Loading</h1> :
        dividedBy && dividedBy.map((item, i) => (
          <ul key={i}>
            {item}
          </ul>
        ))}



      {/* <h3>Displaying Numbers</h3>
      {(isLoadingHigh) ? <h1>Loading</h1> :
        topPrice &&

        topPrice.highPrice.map((item, i) => (
          <p key={i}>

            {bigNums(item)}
          </p>
        )) */}

      


    </div>
  )






}

export default CryptoData