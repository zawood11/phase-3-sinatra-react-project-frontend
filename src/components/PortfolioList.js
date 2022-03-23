import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = ({ portfolios, onDelete, onUpdate }) => {
  
    const renderPortfolios = portfolios.map(portfolio => <PortfolioCard key={portfolio.id} portfolio={portfolio} onDelete={onDelete} onUpdate={onUpdate} />)

    return (
    <div>{renderPortfolios}</div>
  )
}

export default PortfolioList