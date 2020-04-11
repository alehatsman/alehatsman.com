import React, { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'

import components from './Content.styled'

export const Content: FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
