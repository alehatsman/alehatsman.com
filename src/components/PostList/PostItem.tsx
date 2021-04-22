import React, { FC } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Grid, Column } from '@/components/Grid'
import { Box } from '@/components/Box'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Spacer } from '@/components/Spacer'
import { Link } from '@/components/Link'
import { Post } from '@/types/Post'

export const PostItem: FC<{ post: Post }> = ({ post }) => (
  <Link
    data-testid="post-item"
    href={`/posts/${post.id}.html`}
    display="flex"
    width="100%"
  >
    <Grid
      flexDirection="column"
      gridTemplateColumns="repeat(12, 1fr)"
      gridGap={3}
      width="100%"
    >
      <Column gridColumn={['span 12', 'span 8']} order={[1, 0]}>
        <Heading color="black" fontSize={[2, 2, 3, 3]} fontWeight="bold">
          {post.title}
        </Heading>
        <Spacer mt={2} />
        <Text
          fontFamily="open_sans"
          fontSize={[0, 0, 0, 1]}
          fontWeight="normal"
          lineHeight="copy"
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
      </Column>
      <Column gridColumn={['span 12', 'span 4']} order={[0, 1]} mb={[2, 0]}>
        {post.featuredImage
          ? (
          <GatsbyImage
            style={{ maxHeight: '150px' }}
            image={getImage(post.featuredImage)}
            title={post.featuredImageAlt}
            alt={post.featuredImageAlt}
          />
            )
          : null}
      </Column>
    </Grid>
  </Link>
)
