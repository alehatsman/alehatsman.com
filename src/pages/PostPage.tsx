import React from 'react'
import { graphql } from 'gatsby'

import PostPage from '@/components/PostPage'
import Seo from '@/components/seo'

export const query = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      exports {
        metadata {
          title
          updatedAt
          tags
          public
          id
          description
          createdAt
        }
      }
    }
  }
`

const PostPageContainer = (props: any) => {
  return <>
    <Seo
      title={props.data.mdx.exports.metadata.title}
      description={props.data.mdx.exports.metadata.description}
      keywords={props.data.mdx.exports.metadata.tags}
    />
    <PostPage post={props.data.mdx} />
  </>
}

export default PostPageContainer
