import React, { useState } from 'react'
import PositionCard from './PositionCard'

const PositionList = ({ finalPortfolio, positions }) => {

  const filteredPositions = positions.filter(position => position.portfolio_id === finalPortfolio.id)

  const renderPositions = filteredPositions.map((position, index) => <PositionCard key={index} position={position} />)
    
  return (
    <>
      <button>Add Position</button>
      <div>{renderPositions}</div>
    </>
  )
}

export default PositionList