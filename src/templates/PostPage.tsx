import React, { FC } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { Box } from '@/components/Box'
import { Spacer } from '@/components/Spacer'
import { Footer } from '@/components/Footer'
import { Link } from '@/components/Link'
import { Seo } from '@/components/Seo'
import { ThemeWrapper } from '@/styles/ThemeWrapper'
import mdxComponets from '@/components/MdxComponents'

const convertDataToPresenterProps = (data: any) => ({
  ...data.mdx.frontmatter,
  body: data.mdx.body,
  timeToRead: data.mdx.timeToRead
})

const PostPage: FC<any> = ({ data }) => {
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
        mb={2}
      >
        <Box
          my={2}
          mx="auto"
          width={[
            1,
            '644px'
          ]}
        >
          <Link href="/"
            fontSize={3}
            p={3}
            ml={-3}
          >
            {'<-'}
          </Link>
          <Spacer mt={2} />
          <MDXProvider components={mdxComponets}>
            <MDXRenderer
              post={post}
              featuredImage={post.featuredImage}
            >
              {post.body}
            </MDXRenderer>
          </MDXProvider>
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
