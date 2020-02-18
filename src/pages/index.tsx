import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HomePage from '@/components/HomePage'
import Seo from '@/components/Seo'

const queryMdxPosts = graphql`
{
  allMdx(filter: {
    frontmatter: {public: {eq: true}}}, 
    sort: {fields: frontmatter___createdAt, order: DESC}
  ) {
    edges {
      node {
        id
        fileAbsolutePath
        timeToRead
        frontmatter {
          id
          createdAt
          description
          public
          tags
          title
          updatedAt
        }
      }
    }
  }
}`

const HomePageContainer = () => {
  const data = useStaticQuery(queryMdxPosts)
  const posts = data.allMdx.edges
    .map(e => e.node)
    .map(n => ({
      id: n.id,
      timeToRead: n.timeToRead,
      ...n.frontmatter
    }))
  return <>
    <Seo />
    <HomePage posts={posts} />
  </>
}

export default HomePageContainer
