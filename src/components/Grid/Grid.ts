import styled from '@emotion/styled'
import { grid, flexbox, layout, space } from 'styled-system'

export const Grid = styled.div(
  {
    display: 'grid'
  },
  grid,
  flexbox,
  layout,
  space
)

export const Column = styled.div(
  grid,
  flexbox,
  layout,
  space
)
