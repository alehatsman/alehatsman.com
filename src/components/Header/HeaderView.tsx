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
  <Box
    display="flex"
    alignItems="center"
    color="gray.2"
    {...props}
  >
    <Link
      href={href}
      css={css({
        display: 'flex',
        alignItems: 'center',
        py: [2, 0],
        fontSize: 1
      })}
    >
      <Icon />
      <Spacer ml={1} />
      {label}
    </Link>
  </Box>
)

export const HeaderView: FC<Props> = ({ data }) => {
  const {
    author,
    email,
    github,
    linkedin
  } = data.site.siteMetadata

  return (
    <Box
      display="flex"
      flexDirection={['column', 'row']}
      justifyContent="space-between"
    >
      <Text
        fontSize={2}
        lineHeight="copy"
        fontWeight="bold"
        color="black"
      >
        {author}
      </Text>
      <Box
        display="flex"
        flexDirection={['column', 'row']}
      >
        <ExternalLink
          Icon={FaGithubAlt}
          href={github}
          label={formatLabel(github)}
        />
        <Spacer ml={[0, 3]} />
        <ExternalLink
          Icon={FaAt}
          href={`mailto:${email}`}
          label={email}
        />
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
