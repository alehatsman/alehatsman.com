import React from 'react'

import User from '@/components/User'
import Head from '@/components/Head'
import PostList from '@/components/PostList'

import {
  SidebarWrapper, MainWrapper, HomeWrapper
} from './HomePage.styled'

import { Post } from '@/content'
import config from '@/config'
import urls from '@/urls'

interface Props {
  posts: Post[]
}

const HomePage = ({ posts }: Props) => (
  <>
    <Head
      title={`${config.author} - Personal Blog`}
      description={`Computer hacker from young childhood. Full-stack software engineer. Freelancer. Solve problems, deliver high-quality software, write about programming.`}
      keywords={['Software', 'Architecture', 'Delivery', 'Freelance', 'Frontend', 'Backend', 'Infrastructure', 'Blog', 'Programming', 'JavaScript', 'TypeScript', 'Golang', 'Clojure', 'Python', 'React', 'Vim', 'Ansible', 'Terraform', 'Cloud']}
      socialImage={urls.externalize('/static/images/me.jpeg')}
      url={config.host}
    />
    <HomeWrapper>
      <SidebarWrapper>
        <User />
      </SidebarWrapper>
      <MainWrapper>
        <PostList posts={posts} />
      </MainWrapper>
    </HomeWrapper>
  </>
)

export default HomePage
