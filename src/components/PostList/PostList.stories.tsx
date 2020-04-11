import * as React from 'react'
import moment from 'moment'

import { storiesOf } from '@storybook/react'

import { PostListView } from './PostListView'

const posts = [
  {
    id: '0',
    title:
      'How This Popular Psychiatrist Uses Instagram to Fight Mental Health Stigma',
    description:
      'When a black person is getting treated for a mental illness, it’s usually in an emergency room setting.',
    createdAt: moment('2019-03-04'),
    timeToRead: 12
  },
  {
    id: '1',
    title: 'The Danger in Fake Positivity and Spiritual Bypassing',
    description: 'Negative emotions and experiences allow us to grow',
    createdAt: moment('2019-03-04'),
    timeToRead: 8
  },
  {
    id: '2',
    title: 'How to Feed Your Moon Sign',
    description:
      'The key to feeding your emotional and physical body may be in your sign',
    createdAt: moment('2019-03-04'),
    timeToRead: 24
  },
  {
    id: '3',
    title:
      'How This Popular Psychiatrist Uses Instagram to Fight Mental Health Stigma',
    description:
      'When a black person is getting treated for a mental illness, it’s usually in an emergency room setting.',
    createdAt: moment('2019-03-04'),
    timeToRead: 18
  },
  {
    id: '4',
    title: 'The Danger in Fake Positivity and Spiritual Bypassing',
    description: 'Negative emotions and experiences allow us to grow',
    createdAt: moment('2019-03-04'),
    timeToRead: 16
  },
  {
    id: '5',
    title: 'How to Feed Your Moon Sign',
    description:
      'The key to feeding your emotional and physical body may be in your sign',
    createdAt: moment('2019-03-04'),
    timeToRead: 12
  }
]

storiesOf('PostList', module).add('default', () => (
  <PostListView posts={posts} />
))
