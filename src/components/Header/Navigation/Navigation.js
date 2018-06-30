import React from 'react'
import Link from 'gatsby-link'
import './navigation.scss'

export default () => (
  <nav role="navigation">
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/">Home</Link>
      </li>
      <li className="navigation__item">
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
