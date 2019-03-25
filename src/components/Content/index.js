import components from './Content.styled'
import { MDXProvider } from '@mdx-js/tag'

export default ({ Doc }) => (
  <MDXProvider components={components}>
    <Doc />
  </MDXProvider>
)
