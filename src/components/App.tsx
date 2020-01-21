import App from 'next/app'
import React from 'react'
import Router from 'next/router'
import withGA from 'next-ga'
import env from '@/config/env'

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

const myApp = env.isProd() ? withGA(process.env.GA_ID, Router)(MyApp) : MyApp

export default myApp
