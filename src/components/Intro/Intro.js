import React from 'react'
import Markdown from 'react-markdown'
import './intro.scss'

export default ({ person }) => (
  <div className="hero">
    <img
      className="heroImage"
      src={`${person.node.image.file.url}?w=1180&h=600&fit=pad&bg=rgb:000000`}
      alt=""
    />
    <div className="heroDetails">
      <h3 className="heroHeadline">{person.node.name}</h3>
      <p className="heroTitle">{person.node.title}</p>
      <Markdown source={person.node.shortBio.shortBio}/>
    </div>
  </div>
)
