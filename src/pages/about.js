import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Intro from '../components/Sections/Intro/Intro'
import Skills from '../components/Sections/Skills/Skills'
import Projects from '../components/Sections/Projects/Projects'
import Clients from '../components/Sections/Clients/Clients'
import Footer from '../components/Footer/Footer'
import './index.scss'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const paragraphs = author.node.fullBio.content;
    console.log('author', author)
    return (
      <div>
        <div className="contentContainer">
          <Helmet title={siteTitle} />
          <div className="section section--intro">
            <div className="wrapper">
                <h1 className="title about">About</h1>
                <div className="intro__container">
                    <div className="intro__image">
                        <img
                            // ref="profileImg"
                            className="profile-picture"
                            src={author.node.image.file.url}
                            alt=""
                        />
                    </div>
                    <div className="intro__content">
                        {/* <h1 className="title">  {author.node.name}</h1> */}
                        {paragraphs.map(paragraph=>(
                            <p>{paragraph.content[0].value}</p>
                        ))}
                    </div>
                </div>
                <div className="social">
                    <ul>
                    <li><a href={`//twiter.com/${author.node.twitter}`} target="_blank">Twitter</a></li>
                    <li><a href={`//github.com/${author.node.github}`} target="_blank">Github</a></li>
                    <li><a href={`//linkedin.com/in/${author.node.linkedIn}`} target="_blank">Linkedin</a></li>
                    <li><a href='mailto:hola@hectorsanchez.mx' target="_blank">Contact</a></li>
                    </ul>
                </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default About

export const pageQuery = graphql`
  query About {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
        edges {
            node {
                name
                fullBio {
                    content {
                        content {
                            value
                        }
                    }
                }
                image {
                    file {
                      url
                      fileName
                      contentType
                    }
                }
            }
        }
    }
  }
`
