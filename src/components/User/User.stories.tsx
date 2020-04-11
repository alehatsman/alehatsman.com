import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { UserView } from './UserView'

storiesOf('User', module).add('default', () => (
  <div style={{ width: '960px', margin: '0 auto' }}>
    <UserView
      author="Aleh Atsman"
      email="email@gmail.com"
      github="https://github.com/atsman"
      linkedin="https://linkedin.com/in/alehatsman"
      image="images/me2.jpg"
      telegram="@alehatsman"
    />
  </div>
))
