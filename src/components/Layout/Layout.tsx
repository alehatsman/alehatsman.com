import React, { FC } from 'react'
import { Global } from '@emotion/core'
import { globalStyles } from '@/styles/globals'
import '@/styles/font_faces.css'

export const Layout: FC = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
)
