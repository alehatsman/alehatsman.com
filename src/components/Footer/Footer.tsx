import React, { FC } from 'react'
import { FaGithubAlt } from 'react-icons/fa'

import { Flex } from '@/components/Box'
import { Link } from '@/components/Link'
import { Spacer } from '@/components/Spacer'
import { Text } from '@/components/Text'

const formatLink = (id: string) =>
  `https://github.com/atsman/alehatsman.com/blob/master/content/${id}.mdx`

export const Footer: FC<{ id: string }> = ({ id }) => (
  <Flex
    justifyContent="center"
    borderTop={1}
    borderColor="gray.0"
    py={3}
  >
    <Link 
      display="flex"
      href={formatLink(id)} 
      target="_blank"
    >
      <FaGithubAlt />
      <Spacer ml={2} />
      <Text>Contribute on Github</Text>
    </Link>
  </Flex>
)
