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
      <div class="card">
        <h2><Link to={`/portfolios/${finalPortfolio.id}`}>{finalPortfolio.name}</Link></h2>
        <button style={{ backgroundColor: "mediumslateblue", fontSize: "14px"}} onClick={showEditForm}>{showPortfolioEdit ? "Close" : "Rename Portfolio"}</button>
        {showPortfolioEdit ? <PortfolioFormEdit finalPortfolio={finalPortfolio}/> : null}
        <div>
            <button style={{ backgroundColor: "darkslateblue", fontSize: "14px"}} onClick={showPositionForm}>{showNewPositionForm ? "Close" : "Add Position"}</button>
            {showNewPositionForm ? <PositionForm finalPortfolio={finalPortfolio} /> : null}
            <PositionList finalPortfolio={finalPortfolio} />
        </div>
        <button style={{ backgroundColor: "red", fontSize: "14px"}} onClick={deletePortfolio}>Delete Portfolio</button>
    </div>

  )
}

export default PortfolioCard