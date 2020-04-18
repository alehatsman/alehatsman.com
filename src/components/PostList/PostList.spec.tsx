import React from 'react'
import { render } from '@testing-library/react'
import { PostListView } from './PostListView'
import posts from './__test__/posts'

describe('PostListView', () => {
  it('should match snapshot', () => {
    const fragment = render(<PostListView posts={posts} />).asFragment()
    expect(fragment).toMatchSnapshot()
  })

  it('should render post list', async () => {
    const container = render(<PostListView posts={posts} />)

    const postsItems = await container.findAllByTestId('post-item')
    expect(postsItems).toHaveLength(6)

    for (const post of posts) {
      const title = await container.findByText(post.title)
      expect(title).toBeInTheDocument()

      const link = title.closest('a')
      expect(link).toHaveAttribute('href', `/posts/${post.id}.html`)

      const description = await container.findByText(post.description)
      expect(description).toBeInTheDocument()

      const createdAt = await container.findByText(post.createdAt)
      expect(createdAt).toBeInTheDocument()

      const timeToRead = await container.findByText(`${post.timeToRead} min read`)
      expect(timeToRead).toBeInTheDocument()
    }
  })
})
