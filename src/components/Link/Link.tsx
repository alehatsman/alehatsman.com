import React, { FC } from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

interface Props {
  href: string
}

export const Link: FC<Props> = ({ href, children }) => (
  <OutboundLink href={href}>{children}</OutboundLink>
)
