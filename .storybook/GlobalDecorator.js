import React from "react"
import { ThemeWrapper } from '../src/styles/ThemeWrapper'

export const GlobalDecorator = (storyFn) => (
  <ThemeWrapper>
    {storyFn()}
  </ThemeWrapper>
)
