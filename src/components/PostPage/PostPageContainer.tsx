import React, { FC } from 'react'
import { graphql } from 'gatsby'

import { Seo } from '@/components/Seo'
import { PostPageView } from './PostPageView'

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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

interface Props {
  data: any
}

const convertDataToPresenterProps = (data: any) => ({
  ...data.mdx.frontmatter,
  body: data.mdx.body,
  timeToRead: data.mdx.timeToRead
})

const PostPageContainer: FC<Props> = ({ data }) => {
  return (
    <>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        keywords={data.mdx.frontmatter.tags}
      />
      <PostPageView post={convertDataToPresenterProps(data)} />
    </>
  )
}

export default PostPageContainer
