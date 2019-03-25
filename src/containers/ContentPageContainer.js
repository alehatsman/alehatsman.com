import React from 'react'
import Content from 'components/Content'
import { findDoc } from 'content'

class ContentContainer extends React.Component {
  static async getInitialProps (props) {
    return {
      id: props.query.id
    }
  }

  render () {
    const Doc = findDoc(this.props.id)
    return <Content Doc={Doc} />
  }
}

export default ContentContainer
