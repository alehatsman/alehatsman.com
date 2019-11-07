import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import { Post } from '@/content'
import urls from '@/urls'

import { PostListWrapper, PostWrapper, PostTitle, PostDescription, PostDate } from './PostList.styled'


function formatDate (date) {
  return moment(date, 'YYYY-MM-DD')
    .format('MMM D, YYYY')
}

type ShortPost = Pick<Post, 'id' | 'title' | 'description' | 'createdAt'>

const PostItem = ({ post }: { post: ShortPost }) => (
  <Link 
    href={{ pathname: '/post', query: { id: post.id } }} 
    as={urls.postHref(post.id)} 
    passHref
  >
    <PostWrapper>
      <PostTitle>{post.title}</PostTitle>
      <PostDescription>{post.description}</PostDescription>
      <PostDate>{formatDate(post.createdAt)}</PostDate>
    </PostWrapper>
  </Link>
)

const PostList = ({ posts }: { posts: ShortPost[] }) => (
  <PostListWrapper>
    {
      posts.map(post => <PostItem key={post.id} post={post} />)
    }
  </PostListWrapper>
)

export default PostList
