import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const PositionCard = ({ position }) => {

  return (
    <div><Link to={`/stocks/${position.stock.id}`}>{position.stock.symbol}</Link>: {position.stock.name}</div>
  )
}

export default PositionCard