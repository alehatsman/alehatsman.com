import React, { FC } from 'react'

import { Box } from '@/components/Box'
import { Spacer } from '@/components/Spacer'
import { Post } from '@/types/Post'

import { PostItem } from './PostItem'

export const PostListView: FC<{ posts: Post[] }> = ({ posts }) => (
  <Box>
    {posts.map((post, index) => (
      <React.Fragment key={post.id}>
        {index !== 0 ? <Spacer mt={[4, 3]} /> : null}
        <PostItem post={post} />
      </React.Fragment>
    ))}
  </Box>
)
