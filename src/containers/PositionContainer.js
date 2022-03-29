import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PositionList from '../components/PositionList'

const PositionContainer = ({ finalPortfolio }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/positions")
    .then(res => res.json())
    .then(data => setPositions(data))
  }, [])

  return (
    <>
        <PositionList finalPortfolio={finalPortfolio} positions={positions} />
    </>
  )
}

export default PositionContainer