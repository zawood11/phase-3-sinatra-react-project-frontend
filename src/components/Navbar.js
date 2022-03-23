import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolios">Portfolios</NavLink>
        <NavLink to="/stocks">Stocks</NavLink>
    </div>
  )
}

export default Navbar