import App from 'next/app'
import React from 'react'
import Router from 'next/router'
import withGA from 'next-ga'

import { GlobalStyle } from '@/styles/global'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}

let myApp
if (process.env.NODE_ENV !== 'development') {
  myApp = withGA(process.env.GA_ID, Router)(MyApp)
} else {
  myApp = MyApp
}

export default myApp
