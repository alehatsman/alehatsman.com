import React from 'react'
import Head from 'next/head'
import Content from 'components/Content'
import { findPost } from 'content'

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
