import React from 'react'
import StockCard from './StockCard'

const StockList = ({ stocks, onDelete }) => {

  const renderStocks = stocks.map(stock => <StockCard key={stock.id} stock={stock} onDelete={onDelete} />)  
  
  return (
    <div>{renderStocks}</div>
  )
}

export default StockList