import React from 'react'

import { findPost } from '@/content'
import PostPage from '@/components/PostPage'

interface Props {
  id: string
}

class ContentContainer extends React.Component<Props> {
  static async getInitialProps (props) {
    return {
      id: props.query.id
    }
  }

  render () {
    const { Doc, title } = findPost(this.props.id)
    return <PostPage title={title} doc={Doc} />
  }
}

export default ContentContainer
