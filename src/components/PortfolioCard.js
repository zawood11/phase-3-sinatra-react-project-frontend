import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const PortfolioCard = ({ portfolio }) => {
  const {id} = useParams()
  const [portfolioObj, setPortfolioObj] = useState(null);

  useEffect(() => {   
    if (!portfolio) {
        fetch(`http://localhost:9292/portfolios/${id}`)
        .then(res => res.json())
        .then(portfolio => setPortfolioObj(portfolio))
        }
    }, [portfolio, id]);

    const finalPortfolio = portfolio ? portfolio : portfolioObj
    if (!finalPortfolio) return <h1>Loading...</h1>
  return (
    <div>
        <h3><Link to={`/portfolios/${finalPortfolio.id}`}>{finalPortfolio.name}</Link></h3>
    </div>
  )
}

export default PortfolioCard