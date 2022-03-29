import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const PortfolioFormEdit = ({ finalPortfolio }) => {

    const [portfolio, setPortfolio] = useState({
        name: finalPortfolio.name
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

        fetch(`http://localhost:9292/portfolios/${finalPortfolio.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPortfolio)
        })
        .then(() => history.push("/portfolios"))
     } 
    return (
        <>
            <div>Edit Portfolio Name</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Portfolio Name</label>
                <input onChange={handleChange} type="text" name="name" value={portfolio.name} required></input>
                <input type="submit" value="Save Portfolio Name"/>
            </form>
        </>
        
  )
}

export default PortfolioFormEdit