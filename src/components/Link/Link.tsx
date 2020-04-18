import React from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/serialize'
import { Link as GatsbyLink } from 'gatsby'
import { typography, space, layout } from 'styled-system'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const isAnchor = (href: string) => {
  return /^#.+/.test(href)
}

const isExternal = (href: string) => {
  return /^https?:\/\//i.test(href) || /^mailto:.+/.test(href)
}

interface Props {
  href: string
  className?: string
  css?: SerializedStyles
}

export const Link = styled(({ children, href, ...props }) => {
  return isExternal(href) || isAnchor(href) ? (
    <OutboundLink
      href={href}
      target={isAnchor(href) ? '_self' : '_blank'}
      {...props}
    >
      {children}
    </OutboundLink>
  ) : (
    <GatsbyLink to={href} {...props}>
      {children}
    </GatsbyLink>
  )
})(typography, space, layout)
