import React from "react"
import { Global } from "@emotion/core"
import { globalStyles } from "../src/styles/globals"
import "../src/styles/font_faces.css"

export const GlobalDecorator = (storyFn) => (
  <>
    <Global styles={globalStyles} />
    {storyFn()}
  </>
)
