import React, { FC } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import { Layout } from '@/components/Layout'
import { Content } from '@/components/Content'
import { Footer } from '@/components/Footer'

import { Wrapper, HomeLink } from './PostPage.styled'

export const PostPage: FC<{ post: any }> = ({ post }) => (
  <Layout>
    <Wrapper>
      <Link to="/" css={HomeLink}>
        {'<-'}
      </Link>
      <Content>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Content>
      <Footer id={post.frontmatter.id} />
    </Wrapper>
  </Layout>
)
