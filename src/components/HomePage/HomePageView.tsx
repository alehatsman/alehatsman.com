import React, { FC } from 'react'

import { User } from '@/components/User'
import { PostList } from '@/components/PostList'

import { Wrapper, InnerWrapper } from './HomePage.styled'

export const HomePageView: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <User />
        <PostList />
      </InnerWrapper>
    </Wrapper>
  )
}
