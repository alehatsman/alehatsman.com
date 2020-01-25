import './fontawersome'

import { createGlobalStyle } from 'styled-components'

import colors from '@/styles/colors'

export const GlobalStyle = createGlobalStyle`
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

  #__next {
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
