import React from 'react'
import { render } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
  describe('should render OutboundLink for external links', () => {
    it('should match snapshot', () => {
      const fragment = render(<Link href="https://google.com">Google</Link>).asFragment()
      expect(fragment).toMatchSnapshot()
    })

    it('external link', async () => {
      const { findByText } = render(<Link href="https://google.com">google</Link>)
      const link = await findByText('google')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://google.com')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('email', async () => {
      const { findByText } = render(<Link href="mailto:google@google.com">email</Link>)
      const link = await findByText('email')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'mailto:google@google.com')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('anchor', async () => {
      const { findByText } = render(<Link href="#section">google</Link>)
      const link = await findByText('google')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '#section')
      expect(link).toHaveAttribute('target', '_self')
    })
  })

  describe('should render GatsbyLink for relative links', () => {
    it('should match snapshot', () => {
      const fragment = render(<Link href="/about.html">About</Link>).asFragment()
      expect(fragment).toMatchSnapshot()
    })

    const testCases = [
      '/post/article.html'
    ]
    testCases.forEach(href => {
      it(`${href}`, async () => {
        const { findByText } = render(<Link href={href}>internal</Link>)
        const link = await findByText('internal')
        expect(link).toHaveAttribute('href', href)
      })
    })
  })
})
