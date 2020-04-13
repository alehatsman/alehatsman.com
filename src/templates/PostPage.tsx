import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Box } from '@/components/Box'
import { Content } from '@/components/Content'
import { Footer } from '@/components/Footer'
import { Link } from '@/components/Link'
import { Post } from '@/types/Post'
import { Seo } from '@/components/Seo'
import { ThemeWrapper } from '@/styles/ThemeWrapper'

const convertDataToPresenterProps = (data: any) => ({
  ...data.mdx.frontmatter,
  body: data.mdx.body,
  timeToRead: data.mdx.timeToRead
})

const PostPage: FC<Props> = ({ data }: any) => {
  const post = convertDataToPresenterProps(data)

  return (
    <ThemeWrapper>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        keywords={data.mdx.frontmatter.tags}
      />
      <Box 
        display="flex" 
        flexDirection="column"
        mt={2}
        mb={4}
      >
        <Box
          my={2}
          mx="auto"
          width={[
            1,
            '644px'
          ]}
        >
          <Link to="/" 
            fontSize={3} 
            p={3} 
            ml={-3}
          >
            {'<-'}
          </Link>
          <Content>
            <MDXRenderer 
              post={post}
              featuredImage={post.featuredImage}
            >
              {post.body}
            </MDXRenderer>
          </Content>
          <Footer id={post.id} />
        </Box>
      </Box>
    </ThemeWrapper>
  )
}

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

export default PostPage
