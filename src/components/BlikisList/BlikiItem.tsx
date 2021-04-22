import React, { FC } from 'react'
// import Img from 'gatsby-image'

import { Box } from '@/components/Box'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Spacer } from '@/components/Spacer'
import { Link } from '@/components/Link'
import { Post } from '@/types/Post'

// {post.featuredImage ? (
// <>
// <Img
// style={{ maxHeight: '150px' }}
// fluid={post.featuredImage}
// title={post.featuredImageAlt}
// alt={post.featuredImageAlt}
/// >
// <Spacer mt={2} />
// </>
// ) : null}

export const BlikiItem: FC<{ post: Post }> = ({ post }) => (
  <Link
    data-testid="post-item"
    href={`/posts/${post.id}.html`}
    display="flex"
    width="100%"
  >
    <Box flexDirection="column">
      <Box>
        <Heading color="black" fontSize={[1, 1, 1, 2]} fontWeight="bold">
          {post.title}
        </Heading>
        <Spacer mt={2} />
        <Text
          fontFamily="open_sans"
          fontSize={0}
          fontWeight="normal"
          lineHeight="1.2"
          letterSpacing="tracked"
        >
          {post.description}
        </Text>
        <Spacer mt={2} />
        <Box
          fontSize={0}
          fontWeight="normal"
          color="gray.1"
          fontFamily="open_sans"
        >
          <Text mr={2}>{post.createdAt}</Text>
        </Box>
      </Box>
    </Box>
  </Link>
)
