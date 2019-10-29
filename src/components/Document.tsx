import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript, DocumentProps } from 'next/document'
import React from 'react'

interface Props extends DocumentProps {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
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
          <link rel='stylesheet' type='text/css' href='/static/css/typography.css' />
          <link rel='icon' href='/static/images/logo.png' />
          <title>Aleh Atsman - Personal Blog</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
