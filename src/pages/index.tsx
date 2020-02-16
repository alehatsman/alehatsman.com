import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HomePage from '@/components/HomePage'
import Seo from '@/components/seo'

const queryMdxPosts = graphql`
  {
    allMdx(
      filter: {
        exports: {
          metadata: {
            public: {
              eq: true
            }
          }
        }
      } 
      sort: {
        fields: exports___metadata___createdAt, 
        order: DESC
      }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          exports {
            metadata {
              createdAt
              description
              id
              public
              tags
              title
            }
          }
        }
      }
    }
  }
`

const HomePageContainer = () => {
  const data = useStaticQuery(queryMdxPosts)
  const posts = data.allMdx.edges
    .map(e => e.node)
    .map(n => ({
      id: n.id,
      ...n.exports.metadata
    }))
  return <>
    <Seo />
    <HomePage posts={posts} />
  </>
}

export default HomePageContainer
