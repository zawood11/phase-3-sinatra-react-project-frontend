import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const PositionCard = ({ position, stocks }) => {

  return (
    <div>{position.stock.symbol}: {position.stock.name}</div>
  )
}

export default PositionCard