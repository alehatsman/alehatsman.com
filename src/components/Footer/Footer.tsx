import React, { FC } from 'react'

import { Flex } from '@/components/Box'

export const Footer: FC = ({ children }) => (
  <Flex justifyContent="center" borderTop={1} borderColor="gray.0" py={3}>
    {children}
  </Flex>
)
