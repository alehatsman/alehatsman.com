import React from 'react'
import { graphql } from 'gatsby'

import PostPage from '@/components/PostPage'
import Seo from '@/components/seo'

export const query = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        createdAt
        description
        id
        public
        tags
        title
        updatedAt
      }
    }
  }
`

const PostPageContainer = (props: any) => {
  return <>
    <Seo
      title={props.data.mdx.frontmatter.title}
      description={props.data.mdx.frontmatter.description}
      keywords={props.data.mdx.frontmatter.tags}
    />
    <PostPage post={props.data.mdx} />
  </>
}

export default PostPageContainer
