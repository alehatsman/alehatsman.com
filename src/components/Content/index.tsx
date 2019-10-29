import components from './Content.styled'
import { MDXProvider } from '@mdx-js/react'

export default ({ Doc }) => (
  <MDXProvider components={components}>
    <Doc />
  </MDXProvider>
)
