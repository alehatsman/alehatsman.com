import * as React from 'react'

import { storiesOf } from '@storybook/react'

import { HeaderView } from './HeaderView'

storiesOf('Header', module).add('default', () => (
  <div style={{ width: '960px', margin: '0 auto' }}>
    <HeaderView
      data={{
        site: {
          siteMetadata: {
            author: 'Aleh Atsman',
            email: 'email@gmail.com',
            github: 'https://github.com/atsman',
            linkedin: 'https://linkedin.com/in/alehatsman'
          }
        }
      }}
    />
  </div>
))
