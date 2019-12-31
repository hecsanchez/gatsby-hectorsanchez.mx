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

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const [imageContainer] = get(this, 'props.data.allContentfulAsset.edges')
    const images = get(this, 'props.data.allContentfulAsset.edges')
    console.log('images', images);

    return (
      <div>
        <div className="contentContainer">
          <Helmet title={siteTitle} />
          <Intro person={author} />
          {/* <Skills person={author} /> */}
          {/* <Projects projects={projects} imageContainer={imageContainer} /> */}
          <Clients person={author} />
          <Footer />
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
          clientsTitle
          clientLogos {
            file {
              url
            }
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
    allContentfulAsset(filter: { id: { eq: "c2nfEs1uISoSaGu8OguMQ4o" } }) {
      edges{
        node {
          file {
            url
          }
        }
      }
    }
  }
`
