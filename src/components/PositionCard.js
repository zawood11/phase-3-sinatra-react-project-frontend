import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const PositionCard = ({ position, handlePositionDelete }) => {
  
  const deletePosition = () => { 
    fetch(`http://localhost:9292/positions/${position.id}`, {
        method: "DELETE",
    });
    handlePositionDelete(position.id);

 }
  return (
    <div class="positioncard">
      <p style={{fontSize: "24px", textAlign: "left"}}>
        <Link to={`/stocks/${position.stock.id}`}>{position.stock.symbol}</Link>: {position.stock.name}
        <button style={{ marginLeft: "60%", backgroundColor: "grey", fontSize: "14px" }} onClick={deletePosition}>Remove</button>
        </p>
    </div>
  )
}

export default PositionCard