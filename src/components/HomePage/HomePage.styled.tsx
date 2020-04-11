import styled from '@emotion/styled'

import { PostListWrapper } from '@/components/PostList/PostList.styled'

import { media } from '@/styles/media'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const InnerWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  ${media.tablet`
    flex-direction: column;
    max-width: 844px;
  `}

  ${PostListWrapper} {
    margin-top: 30px;
  }
`
