import React, { FC } from 'react'
import { FaGithubAlt, FaAt, FaLinkedin } from 'react-icons/fa'

import { Link } from '@/components/Link'
import { Box } from '@/components/Box'
import { Text } from '@/components/Text'
import { Spacer } from '@/components/Spacer'

export interface Props {
  author: string
  email: string
  github: string
  image: string
  linkedin: string
}

const formatUrl = (url: string) => {
  const { host, pathname } = new URL(url)
  return `${host}${pathname}`
}

const ExternalLink = ({ Icon, href, label }: any) => (
  <Box
    display="flex"
    alignItems="center"
    color="gray.2"
  >
    <Icon />
    <Spacer ml={1} />
    <Link
      to={href}
      fontSize={1}
    >
      {label}
    </Link>
  </Box>
)

export const HeaderView: FC<Props> = ({
  author,
  email,
  github,
  image,
  linkedin
}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
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
        flexDirection="row"
      >
        <ExternalLink
          Icon={FaGithubAlt}
          href={github}
          label={formatUrl(github)}
        />
        <Spacer ml={3} />
        <ExternalLink
          Icon={FaAt}
          href={`mailto:${email}`}
          label={email}
        />
        <Spacer ml={3} />
        <ExternalLink
          Icon={FaLinkedin}
          href={linkedin}
          label={formatUrl(linkedin)}
        />
      </Box>
    </Box>
  )
}
