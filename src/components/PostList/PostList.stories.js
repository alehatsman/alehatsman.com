import * as React from 'react'

import { storiesOf } from '@storybook/react'

import PostList from './PostList'

const posts = [
  {
    id: '0',
    title: 'How This Popular Psychiatrist Uses Instagram to Fight Mental Health Stigma',
    description: 'When a black person is getting treated for a mental illness, it’s usually in an emergency room setting.',
    createdAt: '2019-03-04'
  }, {
    id: '1',
    title: 'The Danger in Fake Positivity and Spiritual Bypassing',
    description: 'Negative emotions and experiences allow us to grow',
    createdAt: '2019-03-04'
  }, {
    id: '2',
    title: 'How to Feed Your Moon Sign',
    description: 'The key to feeding your emotional and physical body may be in your sign',
    createdAt: '2019-03-04'
  }, {
    id: '3',
    title: 'How This Popular Psychiatrist Uses Instagram to Fight Mental Health Stigma',
    description: 'When a black person is getting treated for a mental illness, it’s usually in an emergency room setting.',
    createdAt: '2019-03-04'
  }, {
    id: '4',
    title: 'The Danger in Fake Positivity and Spiritual Bypassing',
    description: 'Negative emotions and experiences allow us to grow',
    createdAt: '2019-03-04'
  }, {
    id: '5',
    title: 'How to Feed Your Moon Sign',
    description: 'The key to feeding your emotional and physical body may be in your sign',
    createdAt: '2019-03-04'
  }
]

storiesOf('PostList', module)
  .add('default', () => (
    <PostList posts={posts} />
  ))
