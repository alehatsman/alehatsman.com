import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'

import Layout from '@/components/layout'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

import { Wrapper, HomeLink } from './PostPage.styled'

export default function PostPage ({ post }: any) {
  return (
    <Layout>
      <Wrapper>
        <Link to="/" css={HomeLink}>
          {'<-'}
        </Link>
        <Content>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Content>
        <Footer id={post.exports.metadata.id} />
      </Wrapper>
    </Layout>
  )
}
