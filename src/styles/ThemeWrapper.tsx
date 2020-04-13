import React, { FC } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { globalStyles } from '@/styles/globals'
import { theme } from '@/styles/theme'
import '@/styles/font_faces.css'

export const ThemeWrapper: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
)
