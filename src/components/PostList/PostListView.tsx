import React, { FC } from 'react'
import moment from 'moment'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

import { Grid, Row, Column } from '@/components/Grid'
import { Box } from '@/components/Box'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Spacer } from '@/components/Spacer'
import { Link } from '@/components/Link'
import { Post } from '@/types/Post'

const formatDate = (date: moment.Moment) => {
  return date.format('MMM D, YYYY')
}

const PostItem: FC<{ post: Post }> = ({ post }) => (
  <Link 
    to={`/posts/${post.id}.html`}
    display="flex"
    width="100%"
  >
    <Grid>
      <Row>
        <Column width={8}>
          <Heading 
            color="black" 
            fontSize={3}
            fontWeight="bold"
          >
            {post.title}
          </Heading>
          <Spacer mt={2} />
          <Text
            fontFamily="robotoslab"
            fontSize={2}
            fontWeight="normal"
            lineHeight="copy"
            letterSpacing="tracked"
          >
            {post.description}
          </Text>
          <Spacer mt={2} />
          <Text
            fontSize={0}
            fontWeight="normal"
            color="gray.1"
          >
            {formatDate(post.createdAt)} | {post.timeToRead} min read
          </Text>
        </Column>
        <Column width={4} left={1}>
          {post.featuredImage ? (
            <Img
              style={{ maxHeight: '150px' }}
              fluid={post.featuredImage}
              alt={post.featuredImageAlt}
            />
          ) : null}
        </Column>
      </Row>
    </Grid>
  </Link>
)

export const PostListView: FC<{ posts: Post[] }> = ({ posts }) => (
  <Box>
    {posts.map((post, index) => (
      <React.Fragment key={post.id}>
        {
          index !== 0 ? (
            <Spacer 
              mt={3}
            />
          ) : null
        } 
        <PostItem 
          post={post} 
        />
      </React.Fragment>
    ))}
  </Box>
)
