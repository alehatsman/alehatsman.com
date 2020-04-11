import React from 'react'
import renderer from 'react-test-renderer'
import { Footer } from '@/components/Footer'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer id="random-id" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
