import React from 'react'
import FaIcon from '@/components/FaIcon'

import {
  UserWrapper,
  Photo,
  Fullname,
  Description,
  PointsWrapper,
  Point,
  PointText
} from './User.styled'

export interface Props {
  author: string
  email: string
  github: string
  linkedin: string
  image: string
  telegram: string
}

const formatUrl = (url: string) => {
  const { host, pathname } = new URL(url)
  return `${host}${pathname}`
}

const User = ({ author, email, github, linkedin, image, telegram }: Props) => {
  return (
    <UserWrapper>
      <Photo src={image} />

      <Fullname>{author}</Fullname>

      <Description>Software Engineer</Description>

      <PointsWrapper>
        <Point>
          <FaIcon icon={['fab', 'telegram']} />
          <PointText>
            <a href={telegram}>
              @alehatsman
            </a>
          </PointText>
        </Point>

        <Point>
          <FaIcon icon={['fab', 'github-alt']} />
          <PointText>
            <a href={github}>
              {formatUrl(github)}
            </a>
          </PointText>
        </Point>

        <Point>
          <FaIcon icon='at' />
          <PointText>
            <a href={`mailto:${email}`}>{email}</a>
          </PointText>
        </Point>

        <Point>
          <FaIcon icon={['fab', 'linkedin']} />
          <PointText>
            <a href={linkedin}>
              {formatUrl(linkedin)}
            </a>
          </PointText>
        </Point>
      </PointsWrapper>
    </UserWrapper>
  )
}

export default User
