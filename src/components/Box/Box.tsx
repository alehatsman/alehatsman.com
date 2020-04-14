import styled from '@emotion/styled'
import { space, layout, color, flexbox, border, typography } from 'styled-system'

export const Box = styled.div(
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
