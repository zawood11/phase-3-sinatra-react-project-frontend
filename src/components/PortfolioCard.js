import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import PortfolioFormEdit from './PortfolioFormEdit';
import PositionList from './PositionList';
import PositionForm from './PositionForm';

const PortfolioCard = ({ portfolio, onDelete, onUpdate }) => {
  const {id} = useParams();
  const [portfolioObj, setPortfolioObj] = useState(null);
  const [showPortfolioEdit, setShowPortfolioEdit] = useState(false)
  const [showNewPositionForm, setShowNewPositionForm] = useState(false)

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
    
    const showEditForm = () => { 
        setShowPortfolioEdit(!showPortfolioEdit)
     }
    
    const showPositionForm = () => { 
      setShowNewPositionForm(!showNewPositionForm)
     }
  return (
      <>
        <h3><Link to={`/portfolios/${finalPortfolio.id}`}>{finalPortfolio.name}</Link></h3>
        <button onClick={showEditForm}>{showPortfolioEdit ? "Close" : "Rename Portfolio"}</button>
        {showPortfolioEdit ? <PortfolioFormEdit finalPortfolio={finalPortfolio}/> : null}
        <div>
            <h4>Positions</h4>
            <button onClick={showPositionForm}>{showNewPositionForm ? "Close" : "Add Position"}</button>
            {showNewPositionForm ? <PositionForm finalPortfolio={finalPortfolio} /> : null}
            <PositionList finalPortfolio={finalPortfolio} />
        </div>
        <button onClick={deletePortfolio}>Delete Portfolio</button>
    </>

  )
}

export default PortfolioCard