import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const StockCard = ({ stock, onDelete }) => {
    const {id} = useParams();
    const [stockObj, setStockObj] = useState(null);

    useEffect(() => {   
        if (!stock) {
            fetch(`http://localhost:9292/stocks/${id}`)
            .then(res => res.json())
            .then(stock => setStockObj(stock))
            }
        }, [stock, id]);
    
    const finalStock = stock ? stock : stockObj
    if (!finalStock) return <h1>Loading...</h1>
    
    const deleteStock = () => { 
        fetch(`http://localhost:9292/stocks/${stock.id}`, {
            method: "DELETE",
        });
        onDelete(finalStock.id)
     }

  return (
    <div>
        <div style={{ display: "flex"}}>
            <h3><Link to={`/stocks/${finalStock.id}`}>{finalStock.symbol}</Link>: {finalStock.name}</h3>
            <button style={{ justifyContent: "flex-end" }} onClick={deleteStock}>Delete</button>
        </div>
        <div>
            <p>{finalStock.description}</p>
        </div>
    </div>
  )
}

export default StockCard