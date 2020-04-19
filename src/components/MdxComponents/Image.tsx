import React, { FC } from 'react'
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { space, layout, border, shadow, variant } from 'styled-system'

import { Box } from '@/components/Box'

const ImageStyled = styled.img(
  space,
  layout,
  border,
  shadow,
  variant({
    prop: 'size',
    variants: {
      small: {
        maxWidth: '50%'
      },
      medium: {
        maxWidth: '80%'
      },
      large: {
        maxWidth: '95%'
      }
    }
  }),
  variant({
    prop: ''
  })
)

interface Props {
  size: string
  caption: string
}

const ImageWrapper = styled(Box)(css({
  display: 'flex',
  justifyContent: 'center',
  mb: 4
})).withComponent('figure')

export const Image: FC<Props> = (props) => (
  <ImageWrapper>
    <ImageStyled {...props} />
    {props.caption && <figcaption>{props.caption}</figcaption>}
  </ImageWrapper>
)
