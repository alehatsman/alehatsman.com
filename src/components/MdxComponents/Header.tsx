import React, { FC } from 'react'

export const generateId = (text: string = '') => {
  return text
    .trim()
    .split(/\s/g)
    .map(s => s.replace(/[^\w\s]/g, ''))
    .join('-')
    .toLowerCase()
}

interface Props {
  id: string
}

export const Anchor: FC<Props> = ({ id, children }) => (
  <a href={`#${generateId(id)}`}>
    {id || children}
  </a>
)

const Header = Component => ({ children }) => (
  <Component id={generateId(children)}>
    {children}
  </Component>
)

export default Header
