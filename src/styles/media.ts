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
  mobile: 414
}

export const media = {
  tablet: mediaQuery`(min-width: ${breakpoints.mobile}px)`
}
