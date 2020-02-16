import css from '@emotion/css'

const minWidth = (width: number) => (rules: TemplateStringsArray) => {
  return css`
    @media (min-width: ${width}px) {
      ${css(...rules)}
    }
  `
}

const breakpoints = {
  tablet: 576,
  desktop: 768
}

export const media = {
  tablet: minWidth(breakpoints.tablet),
  desktop: minWidth(breakpoints.desktop)
}
