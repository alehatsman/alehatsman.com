import styled from '@emotion/styled'

import { color, fontSizes } from '@/styles/system'

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Fullname = styled.div`
  font-family: "Lato", sans-serif;
  font-size: ${fontSizes.headerTitle.default};
  font-weight: 700;
  line-height: 1.5;
  color: ${color.black};
`

export const Description = styled.div`
  font-weight: 300;
  color: ${color.dimGray};
`

export const PointsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const Point = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-child) {
    margin-left: 15px;
  }

  path {
    fill: ${color.grimmyGray};
  }
`

export const PointText = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 300;
`
