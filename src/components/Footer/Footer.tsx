import styled from 'styled-components'

import urls from '@/urls'
import config from '@/config'
import FaIcon from '@/components/FaIcon'

import { FooterWrapper, Nav, NavSep, NavItem } from './Footer.styled'

const Footer = (props) => (
  <FooterWrapper {...props}>
    <Nav>
      <NavItem href={config.twitter} target="_blank">
        <FaIcon icon={['fab', 'twitter']} />
        Discuss on Twitter 
      </NavItem>
      <NavSep>-</NavSep>
      <NavItem href={urls.postGithubUrl(props.id)} target="_blank">
        <FaIcon icon={['fab', 'github-alt']} />
        Contribute on Github
      </NavItem>
    </Nav>
  </FooterWrapper>
)

export default styled(Footer)``
