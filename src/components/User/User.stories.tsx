import * as React from 'react'

import { storiesOf } from '@storybook/react'

import User from './User'

storiesOf('User', module).add('default', () => (
  <div style={{ width: '200px' }}>
    <User
      email="email@gmail.com"
      github="https://github.com/user"
      linkedin="https://linkedin.com/user"
      image="images/me2.jpg"
      telegram="@user"
    />
  </div>
))
