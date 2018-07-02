import React  from 'react'
import Markdown from 'react-markdown'
import get from 'lodash/get'
import Button from '../../Button/Button'
import './projects.scss'

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgPosition: 0,
    }
  }

  componentDidMount() {
    const domRect = this.refs.images.getBoundingClientRect();
    this.setState({imgPosition: domRect.top})
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const windowHeight = window.innerHeight * .5;

    if (document.documentElement.scrollTop > (this.state.imgPosition - windowHeight)) {
      this.refs.images.style.transform = 'translate(0)';
      this.refs.images.style.opacity = 1;
    }
  }

  render() {
    const { projects, imageContainer } = this.props;
    const imgUrl = imageContainer.node.file.url;

    return (
      <div className="section section--projects">
        <div className="wrapper projects">
          <div className="projects__content">
            <h2 className="section-headline">Projects</h2>
            <ul className="project-list">
              {projects.map((project, index) => {
                return (
                  <div key={`p-${project.node.name}`}>
                    <h4>{project.node.name}</h4>
                    <p>{project.node.shortDescription}</p>
                  </div>
                )
              })}
            </ul>
          </div>
          <div className="projects__images" ref="images">
            <div className="image-container" style={{background: `url(${imgUrl})`}}>
              {projects.map((project, index) => {
                return (
                  <img className="project__image" src={project.node.mainImage ? project.node.mainImage.file.url : ''}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Projects
