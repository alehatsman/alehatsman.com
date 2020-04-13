import React, { FC } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Content } from '@/components/Content'
import { Footer } from '@/components/Footer'
import { Link } from '@/components/Link'
import { Post } from '@/types/Post'
import { Box } from '@/components/Box'

export const PostPageView: FC<{ post: Post }> = ({ post }) => (
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
)
