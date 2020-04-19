import styled from '@emotion/styled'
import {
  space,
  layout,
  color,
  flexbox,
  border,
  typography
} from 'styled-system'

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  border,
  color,
  flexbox,
  layout,
  space,
  typography
)

export const Flex = styled(Box)({
  display: 'flex'
})
