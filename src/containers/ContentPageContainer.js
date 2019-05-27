import React from 'react'

import { findPost } from 'content'
import PostPage from 'components/PostPage'

class ContentContainer extends React.Component {
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
