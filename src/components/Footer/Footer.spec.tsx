import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer id='postid'/>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly', () => {
    const { getByText } = render(<Footer id='postid'/>)
    expect(getByText('Contribute on Github').closest('a')).toHaveAttribute('href', 'https://github.com/atsman/alehatsman.com/blob/master/content/postid.mdx')
  })
})
