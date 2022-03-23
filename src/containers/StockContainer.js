import React from 'react'
import { useState, useEffect } from 'react'
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
            <div>StockContainer</div>
            <StockList stocks={stocks} />
        </>
  )
}

export default StockContainer