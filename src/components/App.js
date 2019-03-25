import App, { Container } from 'next/app'
import React from 'react'
import { GlobalStyle } from 'styles/global'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
      }
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <React.Fragment>
          <GlobalStyle />
          <Component {...pageProps} />
        </React.Fragment>
      </Container>
    )
  }
}

export default MyApp
