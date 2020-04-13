import React, { FC } from 'react'

import { Box } from '@/components/Box'
import { Header } from '@/components/Header'
import { PostList } from '@/components/PostList'
import { Seo } from '@/components/Seo'
import { Spacer } from '@/components/Spacer'
import { ThemeWrapper } from '@/styles/ThemeWrapper'

const HomePage: FC = () => {
  return (
    <ThemeWrapper>
      <Seo />
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
    </ThemeWrapper>
  )
}

export default HomePage
