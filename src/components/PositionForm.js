import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const PositionForm = ({ finalPortfolio }) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/stocks')
        .then(res => res.json())
        .then(data => setStocks(data))
    }, [])

    const [position, setPosition] = useState({
        portfolio_id: finalPortfolio.id,
        stock_id: 18
    });

    const history = useHistory();
    
    const handleChange = (e) => { 
        setPosition({
            ...position,
            [e.target.name]: e.target.value
        })
     }

    const handleSubmit = (e) => { 
        e.preventDefault();
        
        const newPosition = {
            portfolio_id: finalPortfolio.id,
            stock_id: position.stock_id
        }

        fetch("http://localhost:9292/positions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPosition)
        })
        .then(() => history.go(0))
     } 

    return (
        <>
            <div>Add a new position to this portfolio</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Select a stock</label>
                <select type="text" name="stock_id" onChange={handleChange}>{stocks.map((stock, index) => <option key={index} value={stock.id}>{stock.symbol}</option>)}</select>
                <input type="submit" value="Create Position"/>
            </form>
        </>
        
  )
}

export default PositionForm