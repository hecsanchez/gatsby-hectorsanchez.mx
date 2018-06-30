import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import get from 'lodash/get'
import Container from '../components/container'
import Header from '../components/Header/Header'

class Template extends React.Component {
  render() {
    const [logo] = get(this, 'props.data.allContentfulAsset.edges')
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Header logo={logo.node.file.url}/>
        {children()}
      </Container>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query LayoutQuery {
    allContentfulAsset(filter: { id: { eq: "c1RIeCiMW8UuM0cQwmMmKwM" } }) {
      edges{
        node {
          id
          title
          file {
            url
          }
        }
      }
    }
  }
`
