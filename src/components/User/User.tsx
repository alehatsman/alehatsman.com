import FaIcon from '@/components/FaIcon'
import config from '@/config'

import {
  UserWrapper,
  Photo,
  Fullname,
  Description,
  PointsWrapper,
  Point,
  PointText
} from './User.styled'

const User = () => (
  <UserWrapper>
    <Photo src='/static/images/me.jpeg' />

    <Fullname>Aleh Atsman</Fullname>

    <Description>
      Software Engineer
    </Description>

    <PointsWrapper>
      <Point>
        <FaIcon icon={['fab', 'telegram']} />
        <PointText>
          <a href={config.telegram}
            target='_blank'>
          @alehatsman
          </a>
        </PointText>
      </Point>

      <Point>
        <FaIcon icon={['fab', 'github-alt']} />
        <PointText>
          <a href={config.github}
            target='_blank'>
          github.com/atsman
          </a>
        </PointText>
      </Point>

      <Point>
        <FaIcon icon='at' />
        <PointText>
          <a href={`mailto:${config.email}`}>
          aleh.atsman@gmail.com
          </a>
        </PointText>
      </Point>

      <Point>
        <FaIcon icon={['fab', 'linkedin']} />
        <PointText>
          <a href={config.linkedin}
            target='_blank'>
          linkedin.com/in/alehatsman
          </a>
        </PointText>
      </Point>
    </PointsWrapper>
  </UserWrapper>
)

export default User
