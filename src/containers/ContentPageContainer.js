import Head from 'next/head'
import React from 'react'

import { findPost } from 'content'
import Content from 'components/Content'

class ContentContainer extends React.Component {
  static async getInitialProps (props) {
    return {
      id: props.query.id
    }
  }

  render () {
    const { Doc, title } = findPost(this.props.id)
    return (
      <React.Fragment>
        <Head>
          <title>{title || ''}</title>
        </Head>
        <Content Doc={Doc} />
      </React.Fragment>
    )
  }
}

export default ContentContainer
