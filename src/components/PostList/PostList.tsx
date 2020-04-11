import React, { FC } from 'react'

import { PostListContainer } from './PostListContainer'
import { PostListView } from './PostListView'

export const PostList: FC = () => <PostListContainer Presenter={PostListView} />
