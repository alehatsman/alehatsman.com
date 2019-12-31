import styled from 'styled-components'

import { media } from '@/styles/media'

export const SidebarWrapper = styled.section`
  display: flex;
`

export const MainWrapper = styled.section`
  display: flex;
  margin-top: 30px;

  ${media.tablet`
    margin-top: 0;
    margin-left: 50px;
  `}
`

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 10px;

  ${media.tablet`
    flex-direction: row;
    max-width: 960px;
  `}

  ${media.desktop`
    max-width: 960px;
    padding: 50px 40px;
  `}
`
