import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = ({ portfolios, positions, stocks, onDelete, onUpdate }) => {
  
    const renderPortfolios = portfolios.map((portfolio, index) => <PortfolioCard key={index} portfolio={portfolio} positions={positions} stocks={stocks} onDelete={onDelete} />)

    return (
    <div>{renderPortfolios}</div>
  )
}

export default PortfolioList