import React from 'react'
import Markdown from 'react-markdown'
import './intro.scss'

export default ({ person }) => (
  <div className="section section--intro">
    <div className="wrapper">
      <div className="intro__content">
        <h1 className="title">{person.node.title}</h1>
        <Markdown className="description" source={person.node.shortBio.shortBio}/>
      </div>
      <div className="social">
        <ul>
          <li><a href="#subscribe">Subscribe</a></li>
          <li><a href={`//twiter.com/${person.node.twitter}`} target="_blank">Twitter</a></li>
          <li><a href={`//behance.net/${person.node.behance}`} target="_blank">Behance</a></li>
          <li><a href={`//github.com/${person.node.github}`} target="_blank">Github</a></li>
          <li><a href={`//linkedin.com/in/${person.node.linkedIn}`} target="_blank">Linkedin</a></li>
        </ul>
      </div>
    </div>
  </div>
)
