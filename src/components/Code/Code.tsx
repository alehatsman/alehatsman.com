import React, { FC } from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import github from 'prism-react-renderer/themes/github'

import { Box } from '@/components/Box'

interface Props {
  className: string
}

export const Code: FC<Props> = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : ''
  return (
    <Highlight
      {...defaultProps}
      theme={github}
      code={children.toString().trim()}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box padding={3} className={className} style={{ ...style, overflow: 'scroll' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  )
}
