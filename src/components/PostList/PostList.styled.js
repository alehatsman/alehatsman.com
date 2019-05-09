import styled from 'styled-components'

import colors from 'styles/colors'

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
  color: ${colors.header};
  font-family: Lato;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  margin: 0;
`

export const PostDescription = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: calc(16px * 0.01);
`

export const PostDate = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
`
