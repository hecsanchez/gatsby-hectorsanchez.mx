import React from 'react'
import Markdown from 'react-markdown'
import Button from '../../Button/Button'
import './intro.scss'

export default ({ person }) => (
  <div className="section section--intro">
    <div className="wrapper">
      <div className="intro__content">
        <h1 className="title">{person.node.title}</h1>
        <Markdown className="description" source={person.node.shortBio.shortBio}/>
        <Button
          type="default"
          size="md"
          url="/about"
          text="Read Full Bio"
        />
      </div>
      <div className="social">
        <ul>
          <li><a href={`//twiter.com/${person.node.twitter}`} target="_blank">Twitter</a></li>
          <li><a href={`//github.com/${person.node.github}`} target="_blank">Github</a></li>
          <li><a href={`//linkedin.com/in/${person.node.linkedIn}`} target="_blank">Linkedin</a></li>
          <li><a href='mailto:hola@hectorsanchez.mx' target="_blank">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
)
