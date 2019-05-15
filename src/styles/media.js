import { css } from 'styled-components'

function mediaQuery (...queryFeatures) {
  return (...rules) => css`
    @media ${css(...queryFeatures)} {
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
