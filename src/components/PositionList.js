import React, { useState } from 'react'
import PositionCard from './PositionCard'

const PositionList = ({ finalPortfolio }) => {
  const [positions, setPositions] = useState(finalPortfolio.positions)

  const handlePositionDelete = (positionId) => { 
    const newPositionList = positions.filter(position => position.id !== positionId);
    setPositions(newPositionList);
   }

  const renderPositions = positions.map((position, index) => <PositionCard key={index} position={position} handlePositionDelete={handlePositionDelete} />)
    
  return (
    <>
      <div>{renderPositions}</div>
    </>
  )
}

export default PositionList