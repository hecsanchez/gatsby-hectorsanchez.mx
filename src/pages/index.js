import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Intro from '../components/Intro/Intro'
import Skills from '../components/Skills/Skills'
// import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    console.log('projects', projects);
    return (
      <div style={{ background: '#000' }}>
        <Helmet title={siteTitle} />
        <Intro person={author} />
        <Skills person={author} />
        <div className="wrapper">
          <h2 className="section-headline">Projects</h2>
          <ul className="article-list">
            {projects.map((project, index) => {
              return (
                <div key={`p-${project.node.name}`}>
                  {project.node.name}
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          twitter
          behance
          linkedIn
          github
          title
          image {
            file {
              url
              fileName
              contentType
            }
          }
          skills
          skillsDescription {
            skillsDescription
          }
        }
      }
    }
    allContentfulProject {
      edges {
        node {
          name
          shortDescription
          publishDate(formatString: "MMMM Do, YYYY")
          mainImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
