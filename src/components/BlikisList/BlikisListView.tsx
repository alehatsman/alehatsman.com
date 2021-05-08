import React, { FC } from 'react'

import { Box } from '@/components/Box'
import { Spacer } from '@/components/Spacer'
import { Post } from '@/types/Post'
import { BlikiItem } from './BlikiItem'
import { Heading } from '@/components/Heading'

export const BlikisListView: FC<{ posts: Post[] }> = ({ posts }) => (
  <Box>
    <Heading color="black" fontSize={[2]} fontWeight="bold">
      Latest Blikis:
    </Heading>
    <Spacer mt={3} />
    {posts.map((post, index) => (
      <React.Fragment key={post.id}>
        {index !== 0 ? <Spacer mt={[5, 4]} /> : null}
        <BlikiItem post={post} />
      </React.Fragment>
    ))}
  </Box>
)
