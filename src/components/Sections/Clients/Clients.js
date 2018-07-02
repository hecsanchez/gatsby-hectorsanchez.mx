import React from 'react'
import Markdown from 'react-markdown'
import './clients.scss'

export default ({ person }) => (
  <div className="section section--clients">
    <div className="wrapper">
      <div className="clients__content">
        <h4>{person.node.clientsTitle}</h4>
      </div>
      <div className="clients__logos">
        {person.node.clientLogos.map((logo) => {
          return (
            <div className="client-logo">
              <img src={logo.file.url}/>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)
