import React from 'react'
import {
  SidebarWrapper, MainWrapper, HomeWrapper
} from './HomePage.styled'
import User from 'components/User'
import PostList from 'components/PostList'

export default ({ posts }) => (
  <HomeWrapper>
    <SidebarWrapper>
      <User />
    </SidebarWrapper>
    <MainWrapper>
      <PostList posts={posts} />
    </MainWrapper>
  </HomeWrapper>
)
