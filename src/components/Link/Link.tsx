import React, { FC } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import { Link as GatsbyLink } from 'gatsby'
import {
  typography,
  space,
  layout,
  flexbox,
  LayoutProps,
  TypographyProps,
  SpaceProps
} from 'styled-system'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const isAnchor = (href: string) => {
  return /^#.+/.test(href)
}

const isExternal = (href: string) => {
  return /^https?:\/\//i.test(href) || /^mailto:.+/.test(href)
}

interface Props extends LayoutProps, TypographyProps, SpaceProps {
  href: string
  className?: string
  css?: SerializedStyles
  target?: string
}

export const Link: FC<Props> = styled(({ children, href, ...props }) => {
  return isExternal(href) || isAnchor(href)
    ? (
    <OutboundLink
      href={href}
      target={isAnchor(href) ? '_self' : '_blank'}
      {...props}
    >
      {children}
    </OutboundLink>
      )
    : (
    <GatsbyLink to={href} {...props}>
      {children}
    </GatsbyLink>
      )
})(typography, space, layout, flexbox)
