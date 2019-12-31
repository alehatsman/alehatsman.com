import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: <>{initialProps.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='icon' href='/static/images/logo.png' />
          <link href='https://fonts.googleapis.com/css?family=Lato:300,700|Roboto+Slab:300,400,500,700&display=swap' rel='stylesheet' />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
