import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = ({ portfolios, onDelete, onUpdate }) => {
  
    const renderPortfolios = portfolios.map((portfolio, index) => <PortfolioCard key={index} portfolio={portfolio} onDelete={onDelete} />)

    return (
    <div>{renderPortfolios}</div>
  )
}

export default PortfolioList