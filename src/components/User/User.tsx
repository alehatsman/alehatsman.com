import React, { FC } from 'react'

import { UserContainer } from './UserContainer'
import { UserView } from './UserView'

export const User: FC = () => <UserContainer Presenter={UserView} />
