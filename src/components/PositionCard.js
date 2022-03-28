import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const PositionCard = ({ position, stocks }) => {
  const {id} = useParams();
  const [positionObj, setPositionObj] = useState(null);
  const [positionStock, setPositionStock] = useState({})

  useEffect(() => {   
    if (!position) {
        fetch(`http://localhost:9292/positions/${id}`)
        .then(res => res.json())
        .then(position => setPositionObj(position))
        }
        fetch(`http://localhost:9292/stocks/${position.stock_id}`)
        .then(res => res.json())
        .then(data => setPositionStock(data))
    }, [position, id]);
  
  const finalPosition = position ? position : positionObj
  if (!finalPosition) return <h1>Loading...</h1>
  
//   useEffect(() => {
//     fetch(`http://localhost:9292/stocks/${position.stock_id}`)
//     .then(res => res.json())
//     .then(data => setPositionStock(data))
// }, [])
  
  //const positionStock = stocks.find(stock => stock.id === finalPosition.stock_id)

  return (
    <div>{positionStock.symbol}: {positionStock.name}</div>
    //<div>Position</div>
  )
}

export default PositionCard