import styled from 'styled-components'
import Footer from '@/components/Footer'

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 20px;

  ${Footer} {
    margin-top: 20px;
  }
`

export const HomeLink = styled.a`
  font-size: 2.8rem;
  padding: 20px;
  margin: -20px;
`
