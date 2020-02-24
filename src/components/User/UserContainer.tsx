import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import User, { Props as UserProps } from './User'

export const query = graphql`
  query {
    file(relativePath: {eq: "images/me2.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        email
        github
        image
        linkedin
        telegram
        twitter
      }
    }
  }
`

const dataToUserProps = (data): UserProps => {
  return {
    ...data.site.siteMetadata,
    image: data.file.childImageSharp.fluid
  }
}

const UserContainer = () => {
  const data = useStaticQuery(query)
  return <User {...(dataToUserProps(data))} />
}

export default UserContainer
