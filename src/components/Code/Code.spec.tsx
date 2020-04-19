import React from 'react'
import { render } from '@testing-library/react'
import { Code } from './Code'

describe('Code', () => {
  it('should match snapshot', () => {
    const fragment = render(
      <Code className="language-javascript">
        {'console.log(\'hello world\')'}
      </Code>
    ).asFragment()

    expect(fragment).toMatchSnapshot()
  })
})
