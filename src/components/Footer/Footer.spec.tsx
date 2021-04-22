import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const { getByText } = render(<Footer>Content</Footer>)
    expect(getByText('Content')).toBeInTheDocument()
  })
})
