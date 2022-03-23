import React from 'react'
import { useState, useEffect } from 'react'
import PortfolioList from '../components/PortfolioList'
import PortfolioForm from '../components/PortfolioForm'

const PortfolioContainer = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/portfolios')
        .then(res => res.json())
        .then(data => setPortfolios(data))
    }, [])
    
    const handleNewPortfolio = (newPortfolio) => {
        setPortfolios([...portfolios, newPortfolio]);
        console.log(newPortfolio)
     }
    
    const handleDeletePortfolio = (portfolioID) => { 
        const newPortfolioList = portfolios.filter(portfolio => portfolio.id !== portfolioID);
        setPortfolios(newPortfolioList);
     }
    return (
        <>
            <div>PortfolioContainer</div>
            <div><PortfolioForm onPortfolioFormSubmit={handleNewPortfolio} /></div>
            <PortfolioList portfolios={portfolios} onDelete={handleDeletePortfolio} />
        </>
  )
}

export default PortfolioContainer