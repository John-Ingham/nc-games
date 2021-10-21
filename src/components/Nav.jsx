import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <h4 id="nav">
        NAV BAR
        <Link to="/">
          {' '}
          <p className="links"> Home </p>{' '}
        </Link>
        <Link to="/reviews">
          {' '}
          <p className="links"> Reviews </p>{' '}
        </Link>
        <Link to="/categories">
          {' '}
          <p className="links"> Categories </p>{' '}
        </Link>
      </h4>
    </div>
  )
}

export default Nav
