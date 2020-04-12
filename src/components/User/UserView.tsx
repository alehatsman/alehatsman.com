import React, { FC } from 'react'
import { FaTelegram, FaGithubAlt, FaAt, FaLinkedin } from 'react-icons/fa'

import {
  UserWrapper,
  Fullname,
  PointsWrapper,
  Point,
  PointText
} from './User.styled'

export interface Props {
  author: string
  email: string
  github: string
  image: string
  linkedin: string
}

export const UserView: FC<Props> = ({
  author,
  email,
  github,
  image,
  linkedin
}) => {
  return (
    <UserWrapper>
      <Fullname>{author}</Fullname>
      <PointsWrapper>
        <Point>
          <FaGithubAlt />
          <PointText>
            <a href={github}>{github}</a>
          </PointText>
        </Point>

        <Point>
          <FaAt />
          <PointText>
            <a href={`mailto:${email}`}>{email}</a>
          </PointText>
        </Point>

        <Point>
          <FaLinkedin />
          <PointText>
            <a href={linkedin}>{linkedin}</a>
          </PointText>
        </Point>
      </PointsWrapper>
    </UserWrapper>
  )
}