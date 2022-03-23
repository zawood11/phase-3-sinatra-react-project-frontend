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
        const newPortfolioList = [...portfolios, newPortfolio];
        setPortfolios(newPortfolioList);
     }

    const deletePortfolio = (portfolio) => { 
        console.log("deleted")
    }

    const updatePortfolio = (portfolio) => { 
        console.log("updated")
     }
    return (
        <>
            <div>PortfolioContainer</div>
            <div><PortfolioForm onPortfolioFormSubmit={handleNewPortfolio} /></div>
            <PortfolioList portfolios={portfolios} onDelete={deletePortfolio} onUpdate={updatePortfolio}/>
        </>
  )
}

export default PortfolioContainer