import React from 'react'
import Markdown from 'react-markdown'
import './intro.scss'

export default ({ person }) => (
  <div className="section section--intro">
    <div className="wrapper">
      <div className="intro__content">
        <p className="title">{person.node.title}</p>
        <Markdown className="description" source={person.node.shortBio.shortBio}/>
      </div>
    </div>
  </div>
)
