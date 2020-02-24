import React from 'react'
import { FaTelegram, FaGithubAlt, FaAt, FaLinkedin } from 'react-icons/fa'

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
      <Photo fluid={image} />

      <Fullname>{author}</Fullname>

      <Description>Software Engineer</Description>

      <PointsWrapper>
        <Point>
          <FaTelegram />
          <PointText>
            <a href={telegram}>
              @alehatsman
            </a>
          </PointText>
        </Point>

        <Point>
          <FaGithubAlt />
          <PointText>
            <a href={github}>
              {formatUrl(github)}
            </a>
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
