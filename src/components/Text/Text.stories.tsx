import React from 'react'
import { storiesOf } from '@storybook/react'
import { theme } from '@/styles/theme'

import { Box } from '@/components/Box'
import { Text } from './Text'

const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

storiesOf('Text', module)
  .add('default', () => (
    <Box>
      {
        theme.fontSizes.map((_, index) => (
          <Box color="black">
            <Text fontSize={index}>
              {index} - {lorem}
            </Text>
          </Box>
        ))
      }
    </Box>
  ))
  .add('fontWeights', () => (
    <Box>
      {
        Object.keys(theme.fontWeights).map((key) => (
          <Box color="black">
            <Text fontSize={3} fontWeight={key}>
              {key} - {lorem}
            </Text>
          </Box>
        ))
      }
    </Box>
  ))
