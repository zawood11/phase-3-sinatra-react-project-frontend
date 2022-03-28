import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PositionContainer from '../containers/PositionContainer';

const PortfolioCard = ({ portfolio, onDelete, onUpdate }) => {
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
        <div>
            <h4>Positions</h4>
            <PositionContainer portfolio={portfolio}/>
        </div>
        <div>
            <button onClick={updatePortfolio}>Edit Portfolio</button>
            <button onClick={deletePortfolio}>Delete Portfolio</button>
        </div>
    </>

  )
}

export default PortfolioCard