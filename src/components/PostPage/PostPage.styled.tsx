import styled from '@emotion/styled'
import css from '@emotion/css'
import { FooterWrapper } from '@/components/Footer/Footer.styled'

export const Wrapper = styled.div`
  max-width: 844px;
  margin: 0 auto;
  padding: 20px 20px;

  ${FooterWrapper} {
    margin-top: 20px;
  }
`

export const HomeLink = css`
  font-size: 2.8rem;
  padding: 20px;
  margin: -20px;
`
