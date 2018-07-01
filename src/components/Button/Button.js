import React from 'react'
import './button.scss'

export default ({ size, type, url, text }) => (
  <a href={url} className={`button button--${size} button--${type}`}>
    {text}
    <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 17.579" width="17">
      <path id="right-arrow" d="M16.835,4.938a.886.886,0,0,0-1.26,1.247l6.389,6.389H.882A.878.878,0,0,0,0,13.457a.887.887,0,0,0,.882.895H21.963l-6.389,6.377a.9.9,0,0,0,0,1.26.883.883,0,0,0,1.26,0l7.9-7.9a.868.868,0,0,0,0-1.247Z" transform="translate(0 -4.674)"/>
    </svg>
  </a>
)
