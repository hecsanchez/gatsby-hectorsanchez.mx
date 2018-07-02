import React  from 'react'
import Markdown from 'react-markdown'
import Button from '../../Button/Button'
import './skills.scss'

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgPosition: 0,
    }
  }

  componentDidMount() {
    const domRect = this.refs.profileImg.getBoundingClientRect();
    this.setState({imgPosition: domRect.top})
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const top = ((document.documentElement.scrollTop - (this.state.imgPosition / 2)) * .01)
    if (document.documentElement.scrollTop < this.state.imgPosition) {
      this.refs.profileImg.style.top = -top + 'em';
    }
  }

  render() {
    const { person } = this.props

    return (
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
                ref="profileImg"
                className="profile-picture"
                src={person.node.image.file.url}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills
