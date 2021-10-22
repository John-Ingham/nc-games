import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1 id="header">
        <Link to="/">
          <p id="titleHeaderText">NC GAMES LOOKUP</p>
        </Link>
      </h1>
    </div>
  )
}

export default Header
