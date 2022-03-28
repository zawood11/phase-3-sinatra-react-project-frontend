import React, { useState, useEffect } from 'react'

const PositionCard = ({ position }) => {
    const [stock, setStock] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/stocks/${position.stock_id}`)
        .then(res => res.json())
        .then(data => setStock(data))
    }, [])

  return (
    <div>{stock.symbol}: {stock.name}</div>
  )
}

export default PositionCard