import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h4 id="nav">
        NAV BAR
        <Link to="/"> Home </Link>
        <Link to="/reviews"> Reviews</Link>
        <Link to="/categories"> Categories</Link>
      </h4>
    </div>
  )
}

export default Nav
