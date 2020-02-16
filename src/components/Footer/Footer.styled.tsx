import styled from '@emotion/styled'
import FaIcon from '@/components/FaIcon'
import colors from '@/styles/colors'

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;

  padding: 20px;
  border-top: 1px solid ${colors.dimGray};
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`

export const NavItem = styled.a`
  padding: 5px;
  ${FaIcon} {
    margin-right: 10px;
  }
  font-size: 20px;
`

export const NavSep = styled.span`
  display: flex;
  align-items: center;
  margin: 0 20px;
`
