import React from 'react'
import Navigation from './Navigation/Navigation'
import Link from 'gatsby-link'

import './header.scss'

export default ({logo}) => (
  <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo}></img>
        </Link>
      </div>
      {/* <Navigation/> */}
  </header>
)
