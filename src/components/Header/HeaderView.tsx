import React, { FC } from 'react'
import { FaGithubAlt, FaAt, FaLinkedin } from 'react-icons/fa'
import css from '@styled-system/css'

import { Link } from '@/components/Link'
import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import { Spacer } from '@/components/Spacer'

export interface Props {
  data: {
    site: {
      siteMetadata: {
        author: string
        email: string
        github: string
        linkedin: string
      }
    }
  }
}

const formatLabel = (url: string) => {
  const { host, pathname } = new URL(url)
  return `${host}${pathname}`
}

interface LinkProps {
  Icon: any
  href: string
  label: string
}

const ExternalLink: FC<LinkProps> = ({ Icon, href, label, ...props }) => (
  <Box display="flex" alignItems="center" color="gray.2" {...props}>
    <Link
      href={href}
      css={css({
        display: 'flex',
        alignItems: 'center',
        fontSize: 1,
        p: 3,
        pr: 0
      })}
    >
      <Icon />
      <Spacer ml={1} />
      <Text display={['none', 'none', 'inline', 'inline']}>{label}</Text>
    </Link>
  </Box>
)

export const HeaderView: FC<Props> = ({ data }) => {
  const { author, email, github, linkedin } = data.site.siteMetadata

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #DEDEDE"
    >
      <Text fontSize={2} lineHeight="copy" fontWeight="bold" color="black">
        {author}
      </Text>
      <Box display="flex" flexDirection="row">
        <ExternalLink
          Icon={FaGithubAlt}
          href={github}
          label={formatLabel(github)}
        />
        <Spacer ml={[0, 3]} />
        <ExternalLink Icon={FaAt} href={`mailto:${email}`} label={email} />
        <Spacer ml={[0, 3]} />
        <ExternalLink
          Icon={FaLinkedin}
          href={linkedin}
          label={formatLabel(linkedin)}
        />
      </Box>
    </Box>
  )
}
