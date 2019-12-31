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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  height: 60px;
  width: 60px;
  margin: -20px;
`
