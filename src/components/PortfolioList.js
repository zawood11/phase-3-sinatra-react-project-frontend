import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = ({ portfolios }) => {
  
    const renderPortfolios = portfolios.map(portfolio => <PortfolioCard key={portfolio.id} portfolio={portfolio} />)

    return (
    <div>{renderPortfolios}</div>
  )
}

export default PortfolioList