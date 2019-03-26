import {
  UserWrapper, Photo, Fullname,
  Description, Highligh, PointsWrapper,
  Point, PointText
} from './User.styled'

import FaIcon from '../FaIcon'

const User = () => (
  <UserWrapper>
    <Photo src='/static/images/me.jpeg' />
    <Fullname>Aleh Atsman</Fullname>

    <Description>
      Passionate Software Engineer at <Highligh><a href='https://www.findhotel.net/' target='_blank'>@FindHotel</a></Highligh>
    </Description>

    <PointsWrapper>
      <Point>
        <FaIcon icon={['fab', 'telegram']} />
        <PointText>
          <a href='https://t.me/alehatsman'
            target='_blank'>
          @alehatsman
          </a>
        </PointText>
      </Point>

      <Point>
        <FaIcon icon={['fab', 'github-alt']} />
        <PointText>
          <a href='https://github.com/atsman'
            target='_blank'>
          github.com/atsman
          </a>
        </PointText>
      </Point>

      <Point>
        <FaIcon icon='at' />
        <PointText>
          <a href='mailto:aleh.atsman@gmail.com'>
          aleh.atsman@gmail.com
          </a>
        </PointText>
      </Point>

      <Point>
        <FaIcon icon='location-arrow' />
        <PointText>Amsterdam</PointText>
      </Point>
    </PointsWrapper>
  </UserWrapper>
)

export default User
