import React, { FC } from 'react'
import moment from 'moment'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Grid, Row, Column } from '@/components/Grid'
import { Post } from '@/types/Post'

import {
  PostListWrapper,
  PostWrapper,
  PostTitle,
  PostDescription,
  PostDate
} from './PostList.styled'

function formatDate (date) {
  return moment(date, 'YYYY-MM-DD').format('MMM D, YYYY')
}

const PostItem: FC<{ post: Post }> = ({ post }) => (
  <PostWrapper>
    <Link style={{ width: '100%' }} to={`/posts/${post.id}.html`}>
      <Grid>
        <Row>
          <Column width={8}>
            <PostTitle>{post.title}</PostTitle>
            <PostDescription>{post.description}</PostDescription>
            <PostDate>{formatDate(post.createdAt)}</PostDate>
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
  </PostWrapper>
)

export const PostListView: FC<{ posts: Post[] }> = ({ posts }) => (
  <PostListWrapper>
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </PostListWrapper>
)
