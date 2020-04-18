import React from 'react'
import { render } from '@testing-library/react'
import { Box, Flex } from './Box'

describe('Box', () => {
  it('should match snapshot', () => {
    expect(render(<Box />).asFragment()).toMatchSnapshot()
  })
})

describe('Flex', () => {
  it('should match snapshot', () => {
    expect(render(<Flex />).asFragment()).toMatchSnapshot()
  })
})
