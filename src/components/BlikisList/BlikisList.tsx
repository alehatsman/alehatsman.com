import React, { FC } from 'react'

import { BlikisListContainer } from './BlikisListContainer'
import { BlikisListView } from './BlikisListView'

export const BlikisList: FC = () => (
  <BlikisListContainer Presenter={BlikisListView} />
)
