import React, { useState } from 'react'
import PositionCard from './PositionCard'

const PositionList = ({ finalPortfolio }) => {

  const renderPositions = finalPortfolio.positions.map((position, index) => <PositionCard key={index} position={position} />)
    
  return (
    <>
      <div>{renderPositions}</div>
    </>
  )
}

export default PositionList