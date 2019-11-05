import styled from 'styled-components'
import Footer from '@/components/Footer'

export const PostPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 20px;

  ${Footer} {
    margin-top: 20px;
  }
`

export const HomeLink = styled.a`
  font-size: 28px;
  padding: 20px;
  margin: -20px;
`
