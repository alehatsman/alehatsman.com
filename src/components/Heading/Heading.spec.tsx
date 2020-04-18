import React from 'react'
import { render } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading', () => {
  it('should match snapshot', () => {
    expect(
      render(<Heading>This is heading content</Heading>).asFragment()
    ).toMatchSnapshot()
  })

  it('should render content', () => {
    const { getByText } = render(<Heading>Content</Heading>)
    expect(getByText('Content')).toBeInTheDocument()
  })
})
