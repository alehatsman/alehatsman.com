import React from 'react'
import Head from 'next/head'

import config from '@/config'

interface Props {
  title: string
  description: string
  keywords: string[]
  socialImage: string
  url: string
}

const HeadBlock = (props: Props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.description}/>
    <meta name="keywords" content={props.keywords.join(',')}/>
    <meta name="author" content="{config.author}"/>
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:image" content={props.socialImage} />
    <meta property="og:url" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={config.twitterUsername} />
  </Head>
)

export default HeadBlock
