import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

interface Props {
  href: string
  children: React.ReactNode
}

const Link = ({ href, children }: Props) => (
  <OutboundLink href={href}>
    { children }
  </OutboundLink>
)

export default Link
