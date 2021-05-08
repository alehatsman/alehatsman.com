import React, { FC } from 'react'

import { Box } from '@/components/Box'
import { Header } from '@/components/Header'
import { PostList } from '@/components/PostList'
import { Seo } from '@/components/Seo'
import { Spacer } from '@/components/Spacer'
import { ThemeWrapper } from '@/styles/ThemeWrapper'
import { Footer } from '@/components/Footer'
import { Link } from '@/components/Link'
import { BlikisList } from '@/components/BlikisList'
import { Grid, Column } from '@/components/Grid'

const HomePage: FC = () => {
  return (
    <ThemeWrapper>
      <Seo />
      <Box display="flex" flexDirection="column" pt={2} pb={3}>
        <Box my={3} mx="auto" px={[2, 2, 2]} width={[1, 1, 1, '1024px']}>
          <Header />
          <Spacer mt={[4]} />
          <Grid
            flexDirection="column"
            gridTemplateColumns="repeat(12, 1fr)"
            gridGap={4}
          >
            <Column
              gridColumn={['span 12', 'span 12', 'span 9', 'span 9']}
              order={[1, 0]}
            >
              <PostList />
            </Column>
            <Column
              display={['none', 'none', 'unset']}
              gridColumn={['span 12', 'span 3', 'span 3']}
              order={[0, 1]}
              mb={[2, 0]}
            >
              <BlikisList />
            </Column>
          </Grid>
          <Spacer mt={[4]} />
          <Footer>
            <Link display="flex" href="https://futurumlab.io/" target="_blank">
              <Spacer ml={2} />
              Futurumlab.io
            </Link>
          </Footer>
        </Box>
      </Box>
    </ThemeWrapper>
  )
}

export default HomePage
