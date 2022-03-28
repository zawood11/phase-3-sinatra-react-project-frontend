import React from 'react'
import PositionCard from './PositionCard'

const PositionList = ({ portfolio, positions }) => {
    const filteredPositions = positions.filter(position => position.portfolio_id === portfolio.id)

    const renderPositions = filteredPositions.map((position, index) => <PositionCard key={index} position={position}/>)
    //const filteredPositions = renderPositions.filter(position => position.portfolio_ID === portfolio.ID)
  return (
      
    <div>{renderPositions}</div>
  )
}

export default PositionList