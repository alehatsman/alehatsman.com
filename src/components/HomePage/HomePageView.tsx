import React, { FC } from 'react'

import { Box } from '@/components/Box'
import { Header } from '@/components/Header'
import { PostList } from '@/components/PostList'
import { Spacer } from '@/components/Spacer'

export const HomePageView: FC = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column"
      mt={4}
      mb={4}
    >
      <Box
        my={2}
        mx="auto"

        width={[
          1,
          '844px'
        ]}
      >
        <Header />
        <Spacer mt={4} />
        <PostList />
      </Box>
    </Box>
  )
}
