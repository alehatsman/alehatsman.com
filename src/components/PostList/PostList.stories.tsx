import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { PostListView } from './PostListView'
import posts from './__test__/posts'

storiesOf('PostList', module).add('default', () => (
  <PostListView posts={posts} />
))
