import React from 'react'
import Navigation from './Navigation/Navigation'
import './header.scss'

export default ({logo}) => (
  <header className="header">
    <div className="logo">
      <img src={logo}></img>
    </div>
  </header>
)
