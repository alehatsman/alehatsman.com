import React, { FC } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { globalStyles } from '@/styles/globals'
import { theme } from '@/styles/theme'
import '@/styles/font_faces.css'

export const ThemeWrapper: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
)
