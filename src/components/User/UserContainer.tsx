import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import User, { Props as UserProps } from './User'

export const query = graphql`
  query {
    file(relativePath: {eq: "images/me2.jpg"}) {
      childImageSharp {
        fluid {
          src
          base64
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
    image: data.file.childImageSharp.fluid.src
  }
}

const UserContainer = () => {
  const data = useStaticQuery(query)
  return <User {...(dataToUserProps(data))} />
}

export default UserContainer
