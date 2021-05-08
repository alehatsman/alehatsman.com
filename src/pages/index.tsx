import React, { FC } from 'react'

import { Box } from '@/components/Box'
import { Header } from '@/components/Header'
import { PostList } from '@/components/PostList'
import { Seo } from '@/components/Seo'
import { Spacer } from '@/components/Spacer'
import { ThemeWrapper } from '@/styles/ThemeWrapper'
// import { Footer } from '@/components/Footer'
// import { Link } from '@/components/Link'

const HomePage: FC = () => {
  return (
    <ThemeWrapper>
      <Seo />
      <Box display="flex" flexDirection="column" mt={2} mb={3}>
        <Box my={3} mx="auto" px={[2, 2, 0]} width={[1, 1, '844px']}>
          <Header />
          <Spacer mt={[4]} />
          <PostList />
          <Spacer mt={[4]} />
          {/*
          <Footer>
            <Link display="flex" href="https://futurumlab.io/">
              <Spacer ml={2} />
              Futurumlab.io
            </Link>
          </Footer>
          */}
        </Box>
      </Box>
    </ThemeWrapper>
  )
}

export default HomePage
