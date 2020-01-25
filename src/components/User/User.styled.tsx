import styled from 'styled-components'

import colors from '@/styles/colors'
import { media } from '@/styles/media'

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Photo = styled.img`
  display: none;
  width: 100%;
  border-radius: 5px;

  ${media.tablet`
    display: block;
  `}
`

export const Fullname = styled.div`
  ${media.tablet`
    margin-top: 30px;
  `}
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: ${colors.black};
`

export const Description = styled.div`
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 300;
  color: ${colors.dimGray};
`

export const PointsWrapper = styled.div`
  margin-top: 1.5rem;
`

export const Point = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 1rem;
  }

  path {
    fill: ${colors.grimmyGray};
  }
`

export const PointText = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 300;
`
