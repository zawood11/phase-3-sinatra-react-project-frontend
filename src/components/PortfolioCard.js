import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import PositionContainer from '../containers/PositionContainer';
import PositionList from './PositionList';

const PortfolioCard = ({ portfolio, positions, stocks, onDelete, onUpdate }) => {
  const {id} = useParams();
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

    const deletePortfolio = () => { 
        fetch(`http://localhost:9292/portfolios/${finalPortfolio.id}`, {
            method: "DELETE",
        });
        onDelete(finalPortfolio.id);
     }
    
    const updatePortfolio = () => { 
        console.log(`${finalPortfolio.id} updated!`)
     }

  return (
      <>
        <h3><Link to={`/portfolios/${finalPortfolio.id}`}>{finalPortfolio.name}</Link></h3>
        <button onClick={updatePortfolio}>Rename Portfolio</button>
        <div>
            <h4>Positions</h4>
            <PositionList finalPortfolio={finalPortfolio} />
        </div>
        <button onClick={deletePortfolio}>Delete Portfolio</button>
    </>

  )
}

export default PortfolioCard