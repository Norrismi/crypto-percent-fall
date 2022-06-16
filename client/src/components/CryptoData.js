import { useState, useEffect } from 'react'

const CryptoData = () => {

  const [topPrice, setTopPrice] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {

  //   fetch('highPrice')
  //     .then((res) => res.json())
  //     .then((data) => setTopPrice(data))

  //     setIsLoading(false)


  // }, [])

  useEffect(() => {
    (async () => {
      const res = await fetch('/highPrice');
      const data = await res.json();
      setTopPrice(data)
      setIsLoading(false)
    })()
  }, [])


  console.log(topPrice)



  return (
    <div>
      hello from crypto

      {(isLoading) ? <h1>Loading</h1> :
        topPrice && topPrice.highPrice.map((item, i) => (
          <ul key={i}>
            {item}
          </ul>
        ))}

    </div>
  )






}

export default CryptoData