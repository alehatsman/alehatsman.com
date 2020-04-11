import styled from '@emotion/styled'
import { color } from '@/styles/system'

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;

  padding: 20px;
  border-top: 1px solid ${color.dimGray};
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`

export const NavItem = styled.a`
  padding: 5px;
  svg {
    margin-right: 10px;
  }
  font-size: 20px;
`

export const NavSep = styled.span`
  display: flex;
  align-items: center;
  margin: 0 20px;
`
