import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Content from '@/components/Content'
import Footer from '@/components/Footer'

import urls from '@/urls'
import config from '@/config'

import { PostPageContainer, HomeLink } from './PostPage.styled'

interface Props {
  id: string
  title: string
  description: string
  tags: string[]
  doc: any
}

export default function PostPage (props: Props) {
  return (
    <PostPageContainer>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description}/>
        <meta name="keywords" content={props.tags.join(',')}/>
        <meta name="author" content="Aleh Atsman"/>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={urls.externalize('/static/images/logo.png')} />
        <meta property="og:url" content={urls.postExternalUrl(props.id)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={config.twitterUsername} />
      </Head>
      <Link href='/' passHref>
        <HomeLink>
          { '<-' }
        </HomeLink>
      </Link>
      <Content Doc={props.doc} />
      <Footer id={props.id}/>
    </PostPageContainer>
  )
}
