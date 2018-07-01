import React from 'react'
import './container.scss'

export default ({ children, visible }) => (
  <div className={`container ${visible}`}>{children}</div>
)
