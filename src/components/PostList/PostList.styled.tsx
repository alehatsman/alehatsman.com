import styled from 'styled-components'

import colors from '@/styles/colors'

export const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostWrapper = styled.a`
  &:not(:first-child) {
    margin-top: 30px;
  }
`

export const PostTitle = styled.h1`
  color: ${colors.black};
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  margin: 0;
`

export const PostDescription = styled.div`
  margin-top: 10px;
  font-family: 'Roboto Slab', serif;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.01rem;
`

export const PostDate = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
  color: ${colors.dimGray};
`
