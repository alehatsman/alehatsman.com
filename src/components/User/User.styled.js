import styled from 'styled-components'
import FaIcon from '../FaIcon'

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
  color: #24292E;
`

export const Highligh = styled.span`
  color: #0094FF;
`

export const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 300;
  color: #6A6A6A;
`

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 218px;
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

  ${FaIcon} {
      }
`

export const PointText = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 300;
`
