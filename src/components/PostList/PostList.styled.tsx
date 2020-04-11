import styled from '@emotion/styled'
import Img from 'gatsby-image'

import { color, fontSizes } from '@/styles/system'

import { Grid, Row, Column } from '@/components/Grid'

export const PostListWrapper = styled.div``

export const PostWrapper = styled.div`
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &:not(:first-of-type) {
    margin-top: 30px;
  }
`

export const PostTitle = styled.h1`
  color: ${color.black};
  font-family: "Lato", sans-serif;
  font-size: ${fontSizes.postTitle.default};
  font-weight: 700;
  font-style: normal;
  margin: 0;
`

export const PostDescription = styled.div`
  margin-top: 10px;
  font-family: "Roboto Slab", serif;
  font-size: ${fontSizes.postDescription.default};
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.01rem;
`

export const PostDate = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
  color: ${color.dimGray};
`
