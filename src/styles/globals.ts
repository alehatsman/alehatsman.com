import { css } from '@emotion/core'
import colors from '@/styles/colors'

import './fontawersome'

export const globalStyles = css`
  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 1.6rem;
    color: ${colors.black};
    margin: 0;
    padding: 0;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:active {
    color: inherit;
  }
`
