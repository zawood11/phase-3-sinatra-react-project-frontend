import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StockList from '../components/StockList'

const StockContainer = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/stocks')
        .then(res => res.json())
        .then(data => setStocks(data))
    }, [])
    
  
    return (
        <>
            <h1>Stock Database</h1>
            <Link to="/stocks/new"><button>Add stock</button></Link>
            <StockList stocks={stocks} />
        </>
  )
}

export default StockContainer