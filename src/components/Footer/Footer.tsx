import React from 'react'

import { FaGithubAlt } from 'react-icons/fa'

import { FooterWrapper, Nav, NavItem } from './Footer.styled'

const formatLink = (id: string) =>
  `https://github.com/atsman/alehatsman.com/blob/master/content/${id}.mdx`

const Footer = ({ id }: { id: string }) => (
  <FooterWrapper>
    <Nav>
      <NavItem href={formatLink(id)} target='_blank'>
        <FaGithubAlt />
        Contribute on Github
      </NavItem>
    </Nav>
  </FooterWrapper>
)

export default Footer
