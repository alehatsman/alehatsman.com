import React from 'react'
import Link from 'next/link'

import Head from '@/components/Head'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

import urls from '@/urls'

import { Wrapper, HomeLink } from './PostPage.styled'

import { Post } from '@/content'

interface Props {
  post: Post
}

export default function PostPage ({ post }: Props) {
  const Doc = post.doc
  return (
    <>
      <Head
        title={post.title}
        description={post.description}
        socialImage={urls.externalize('/static/images/logo.png')}
        url={urls.postExternalUrl(post.id)}
        keywords={post.tags}
      />
      <Wrapper>
        <Link href='/' passHref>
          <HomeLink>
            { '<-' }
          </HomeLink>
        </Link>
        <Content>
          <Doc />
        </Content>
        <Footer id={post.id}/>
      </Wrapper>
    </>
  )
}
