import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import { Link as GatsbyLink } from 'gatsby'
import { typography, space, layout } from 'styled-system'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const isAbsolute = (href: string) => {
  return /^https?:\/\//i.test(href)
}

interface Props {
  to: string
  className?: string
  css?: SerializedStyles
}

export const Link = styled(({ children, to, ...props }) => {
  return isAbsolute(to) ? (
    <OutboundLink href={to} {...props}>
      { children }
    </OutboundLink>
  ) : (
    <GatsbyLink to={to} {...props}>
      { children }
    </GatsbyLink>
  )
})(
  typography,
  space,
  layout
)
