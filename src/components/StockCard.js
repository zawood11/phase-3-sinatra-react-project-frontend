import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

const StockCard = ({ stock, onDelete }) => {
    const {id} = useParams();
    const [stockObj, setStockObj] = useState(null);
    const [showPriceData, setShowPriceData] = useState(false)

    const history = useHistory();

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
    
    const loadPriceData = () => { 
        fetch(`http://localhost:9292/prices_by_stock_id/${finalStock.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: ""
        })
        .then(() => history.go(0))
     }
    const deleteStock = () => { 
        fetch(`http://localhost:9292/stocks/${finalStock.id}`, {
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
                    {finalStock.prices.sort((a,b) => b.date > a.date ? 1:-1).map(price => (
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
    <div class="card">
        <div style={{ display: "flex" }}>
            <h3><Link to={`/stocks/${finalStock.id}`}>{finalStock.symbol}</Link>: {finalStock.name}</h3>
        </div>
        <div style={{ display: "inline-flex", flexFlow: "row wrap" }}>
            <button style={{ display: "inline-block", backgroundColor: "mediumslateblue" }} onClick={loadPriceData}>Load Price Data</button>
            <button style={{ display: "inline-block", backgroundColor: "darkslateblue" }} onClick={togglePriceData}>{showPriceData ? "Hide Price Data" : "Show Price Data"}</button>
            <button style={{ display: "inline-block", backgroundColor: "black" }} onClick={deleteStock}>Delete</button>
        </div>
            <p>{finalStock.description}</p>
            {showPriceData ? <PriceTable /> : null}
    </div>
  )
}

export default StockCard