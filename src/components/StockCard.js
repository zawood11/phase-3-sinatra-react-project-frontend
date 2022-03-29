import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const StockCard = ({ stock, onDelete }) => {
    const {id} = useParams();
    const [stockObj, setStockObj] = useState(null);
    const [showPriceData, setShowPriceData] = useState(false)

    useEffect(() => {   
        if (!stock) {
            fetch(`http://localhost:9292/stocks/${id}`)
            .then(res => res.json())
            .then(stock => setStockObj(stock))
            }
        }, [stock, id]);
    
    const finalStock = stock ? stock : stockObj
    if (!finalStock) return <h1>Loading...</h1>
    
    const togglePriceData = () => { 
        setShowPriceData(!showPriceData)
     }

    const deleteStock = () => { 
        fetch(`http://localhost:9292/stocks/${stock.id}`, {
            method: "DELETE",
        });
        onDelete(finalStock.id)
     }
    const PriceTable = () => {
        return(
        <table width="100%">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {finalStock.prices.map(price => (
                        <tr key={price.id}>
                            <td>{price.date}</td>
                            <td>{price.open}</td>
                            <td>{price.high}</td>
                            <td>{price.low}</td>
                            <td>{price.close}</td>
                            <td>{price.volume}</td>
                        </tr>
                    ))}
                </tbody>
            </table>)
    }
  return (
    <>
        <div style={{ display: "flex" }}>
            <h3><Link to={`/stocks/${finalStock.id}`}>{finalStock.symbol}</Link>: {finalStock.name}</h3>
            <button onClick={togglePriceData}>{showPriceData ? "Hide Price Data" : "Show Price Data"}</button>
            <button style={{ justifyContent: "flex-end" }} onClick={deleteStock}>Delete</button>
        </div>
            <p>{finalStock.description}</p>
            {showPriceData ? <PriceTable /> : null}
            
    </>
  )
}

export default StockCard