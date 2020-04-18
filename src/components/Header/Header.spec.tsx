import React from 'react'
import { render } from '@testing-library/react'
import { HeaderView } from './HeaderView'

const data = {
  site: {
    siteMetadata: {
      author: 'Aleh Atsman',
      email: 'aleh.atsman@gmail.com',
      github: 'https://github.com/atsman',
      linkedin: 'https://linkedin.com/in/alehatsman'
    }
  }
}

describe('HeaderView', () => {
  it('should match snapshot', () => {
    expect(render(<HeaderView data={data} />).asFragment()).toMatchSnapshot()
  })

  it('should render all information', async () => {
    const container = render(<HeaderView data={data} />)

    const author = await container.findByText('Aleh Atsman')
    const github = await container.findByText('github.com/atsman')
    const email = await container.findByText('aleh.atsman@gmail.com')
    const linkedin = await container.findByText('linkedin.com/in/alehatsman')

    expect(author).toBeInTheDocument()
    expect(github).toHaveAttribute('href', 'https://github.com/atsman')
    expect(email).toHaveAttribute('href', 'mailto:aleh.atsman@gmail.com')
    expect(linkedin).toHaveAttribute(
      'href',
      'https://linkedin.com/in/alehatsman'
    )
  })
})
