import App, { Container } from 'next/app'
import React from 'react'
import { GlobalStyle } from 'styles/global'
import Router from 'next/router'
import withGA from 'next-ga'

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

export default withGA('UA-99002751-2', Router)(MyApp)
