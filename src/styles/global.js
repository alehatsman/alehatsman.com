import { createGlobalStyle } from 'styled-components'
import './fontawersome'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', 'Lato', sans-serif;
    font-size: 1.6rem;
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
