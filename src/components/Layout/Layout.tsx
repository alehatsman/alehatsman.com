import React from 'react'
import { Global } from '@emotion/core'
import { globalStyles } from '@/styles/globals'
import '@/styles/font_faces.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  )
}

export default Layout
