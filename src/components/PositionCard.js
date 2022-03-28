import React from 'react'
import PortfolioCard from './PortfolioCard'

const PositionCard = ({ position }) => {
  return (
    <div>ID: {position.id}: Portfolio ID: {position.portfolio_id}</div>
  )
}

export default PositionCard