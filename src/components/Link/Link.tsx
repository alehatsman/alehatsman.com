import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import { Link as GatsbyLink } from 'gatsby'
import { typography, space, layout } from 'styled-system'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const isAbsolute = (href: string) => {
  return /^https?:\/\//i.test(href) || /^#.+/.test(href) || /^mailto:.+/.test(href)
}

interface Props {
  href: string
  className?: string
  css?: SerializedStyles
}

export const Link = styled(({ children, href, ...props }) => {
  return isAbsolute(href) ? (
    <OutboundLink href={href} target="_blank" {...props}>
      { children }
    </OutboundLink>
  ) : (
    <GatsbyLink to={href} {...props}>
      { children }
    </GatsbyLink>
  )
})(
  typography,
  space,
  layout
)
