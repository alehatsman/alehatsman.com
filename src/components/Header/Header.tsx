import React, { FC } from 'react'

import { HeaderContainer } from './HeaderContainer'
import { HeaderView } from './HeaderView'

export const Header: FC = () => <HeaderContainer Presenter={HeaderView} />
