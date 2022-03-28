import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PositionList from '../components/PositionList'

const PositionContainer = () => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9292/positions")
      .then(res => res.json())
      .then(data => setPositions(data))
    }, [])
    
  return (
    <>
        <PositionList positions={positions} />
    </>
  )
}

export default PositionContainer