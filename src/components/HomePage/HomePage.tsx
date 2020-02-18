import React from 'react'

import User from '@/components/User/UserContainer'
import PostList from '@/components/PostList'
import Layout from '@/components/Layout'

import { SidebarWrapper, MainWrapper, HomeWrapper } from './HomePage.styled'

const HomePage = ({ posts }: any) => {
  return (
    <Layout>
      <HomeWrapper>
        <SidebarWrapper>
          <User />
        </SidebarWrapper>
        <MainWrapper>
          <PostList posts={posts} />
        </MainWrapper>
      </HomeWrapper>
    </Layout>
  )
}

export default HomePage
