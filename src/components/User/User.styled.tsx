import styled from 'styled-components'

import colors from '@/styles/colors'

export const Photo = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const Fullname = styled.div`
  margin-top: 30px;
  font-family: Lato;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: ${colors.header};
`

export const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 300;
`

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PointsWrapper = styled.div`
  margin-top: 10px;
`

export const Point = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 5px;
  }
`

export const PointText = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 300;
`
