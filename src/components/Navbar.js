import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display: "block", padding: "8px", backgroundColor: "#dddddd"}}>
        <NavLink style={{display: "inline", padding: "8px"}} to="/">Home</NavLink>
        <NavLink style={{display: "inline", padding: "8px"}} to="/portfolios">Portfolios</NavLink>
        <NavLink style={{display: "inline", padding: "8px"}} to="/stocks">Stocks</NavLink>
    </div>
  )
}

export default Navbar