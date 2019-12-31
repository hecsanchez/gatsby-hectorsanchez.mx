import React from 'react'
import Link from 'gatsby-link'
import Contentful from '../../../static/contentful.png'
import Gatsby from '../../../static/gatsby.png'
import './footer.scss'

export default () => (
  <div className="footer">
    <div className="wrapper">
      <div className="footer-container">
        <p>Hector Sanchez &copy; 2018 - 2020 </p>
        <div className="credits">
          <p>Build with <img className="gatsby" src={Gatsby} /></p>
          <p>Content delivered via <img className="contentful" src={Contentful} /></p>
        </div>
      </div>
    </div>
  </div>
)
