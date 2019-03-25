import HomePage from 'components/HomePage'
import { getPosts } from 'content'

export default () => (
  <HomePage posts={getPosts()} />
)
