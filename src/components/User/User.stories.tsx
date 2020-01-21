import * as React from 'react'

import { storiesOf } from '@storybook/react'

import User from './User'

storiesOf('User', module).add('default', () => (
  <div style={{ width: '200px' }}>
    <User />
  </div>
))
