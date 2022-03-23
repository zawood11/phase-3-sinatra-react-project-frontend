import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const PortfolioForm = ({ onPortfolioFormSubmit }) => {
  
    const [portfolio, setPortfolio] = useState({
        name: ""
    });

    const history = useHistory();
    
    const handleChange = (e) => { 
        setPortfolio({
            ...portfolio,
            [e.target.name]: e.target.value
        })
        
     }
    const handleSubmit = (e) => { 
        e.preventDefault();
        
        const newPortfolio = {
            name: portfolio.name
        }

        fetch("http://localhost:9292/portfolios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPortfolio)
        })
        .then(() => history.push("/portfolios"))
        
        onPortfolioFormSubmit(newPortfolio);
        setPortfolio({
            name:""
        });
     } 
    return (
        <>
            <div>Create a new portfolio</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Portfolio Name</label>
                <input onChange={handleChange} type="text" name="name" value={portfolio.name} required></input>
            </form>
        </>
        
  )
}

export default PortfolioForm