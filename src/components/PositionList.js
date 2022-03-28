import React from 'react'
import PositionCard from './PositionCard'

const PositionList = ({ positions }) => {
    const renderPositions = positions.map((position, index) => <PositionCard key={index} position={position}/>)
  return (
      
    <div>{renderPositions}</div>
  )
}

export default PositionList