import React from 'react'
import Markdown from 'react-markdown'
import Button from '../Button/Button'
import './skills.scss'

export default ({ person }) => (
  <div className="section section--skills">
    <div className="wrapper">
      <div className="skills__container">
        <div className="skills__text">
          <div className="skills__content">
            <div className="skills__sign">&amp;</div>
            {person.node.skills.map(skill => {
              return (
                <h3>{ skill }</h3>
              )
            })}
            <Markdown className="skills__description" source={person.node.skillsDescription.skillsDescription}/>
            <Button
              type="default"
              size="md"
              url=""
              text="Read Full Bio"
              />
          </div>
        </div>
        <div className="skills__image">
          <img
            className="profile-picture"
            src={person.node.image.file.url}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
)
