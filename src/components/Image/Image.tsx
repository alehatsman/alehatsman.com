import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface Props {
  alt: string
  src: string
}

export const Image: FC<Props> = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(props.src)
      })
      if (!image) {
        return null
      }

      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)
