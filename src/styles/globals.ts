import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

export const globalStyles = css`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Lato", sans-serif;
    text-rendering: optimizeLegibility;
    font-size: 1.6rem;
    color: ${theme.colors.black};
    margin: 0;
    padding: 0;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited,
  a:active {
    color: inherit;
  }
`
