import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom';

const StockForm = () => {
  
  const [stock, setStock] = useState({
    symbol: ""
  });

  const history = useHistory();

  const handleChange = (e) => { 
    setStock({
      ...stock,
      [e.target.name]: e.target.value
    })
   }

  const handleSubmit = (e) => { 
    e.preventDefault();

    const newStock = {
      symbol: stock.symbol
    }

    fetch("http://localhost:9292/stocks", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(newStock)
  })
  .then(res => res.json())
  .then(data => 
    fetch(`http://localhost:9292/stocks/${data.id}`, {
      method: "PATCH",
    })
    )
  .then(() => history.push("/stocks"))

    setStock({
      symbol: ""
    });
   }

  return (
    <>
      <div>Add a new stock to database</div>
      <form onSubmit={handleSubmit}>
          <label htmlFor='symbol'>Stock Ticker</label>
          <input onChange={handleChange} type="text" name="symbol" value={stock.symbol} required></input>
          <input type="submit" value="Create Stock"/>
      </form>
    </>
  )
}

export default StockForm