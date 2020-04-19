import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import { HeaderView } from './HeaderView'
import { HeaderContainer } from './HeaderContainer'

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

describe('HeaderContainer', () => {
  it('should pass data to Presenter', () => {
    (useStaticQuery as jest.MockedFunction<typeof useStaticQuery>).mockReturnValue(data)
    const presenter = jest.fn(() => (<div></div>))
    render(<HeaderContainer Presenter={presenter} />)
    expect(presenter).toBeCalledWith({ data }, {})
  })
})

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
