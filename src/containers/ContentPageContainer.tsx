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
    const { doc, title, description, tags } = findPost(this.props.id)
    return <PostPage 
      title={title}
      description={description}
      tags={tags}
      doc={doc}
    />
  }
}

export default ContentContainer
