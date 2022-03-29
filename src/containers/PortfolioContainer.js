import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortfolioList from '../components/PortfolioList'

const PortfolioContainer = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/portfolios')
        .then(res => res.json())
        .then(data => setPortfolios(data))
    }, [])
    
    const handleDeletePortfolio = (portfolioID) => { 
        const newPortfolioList = portfolios.filter(portfolio => portfolio.id !== portfolioID);
        setPortfolios(newPortfolioList);
     }
    return (
        <>
            <h1>Your Portfolios</h1>
            <Link to="/portfolios/new"><button>Add a portfolio</button></Link>
            <PortfolioList portfolios={portfolios} onDelete={handleDeletePortfolio} />
        </>
  )
}

export default PortfolioContainer