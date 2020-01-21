import React from 'react'
import { NextPageContext } from 'next'

import { findPost } from '@/content'
import PostPage from '@/components/PostPage'

interface Props {
  id: string;
}

function ContentContainer ({ id }: Props) {
  return <PostPage post={findPost(id)} />
}

ContentContainer.getInitialProps = async ({ query }: NextPageContext) => {
  return {
    id: query.id
  }
}

export default ContentContainer
