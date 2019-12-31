import { css } from 'styled-components'

function mediaQuery (...queryFeatures) {
  // @ts-ignore
  return (...rules) => css`
    // @ts-ignore
    @media ${css(...queryFeatures)} { 
      // @ts-ignore
      ${css(...rules)}
    }
  `
}

const breakpoints = {
  tablet: 576,
  desktop: 768
}

export const media = {
  tablet: mediaQuery`(min-width: ${breakpoints.tablet}px)`,
  desktop: mediaQuery`(min-width: ${breakpoints.desktop}px)`
}
