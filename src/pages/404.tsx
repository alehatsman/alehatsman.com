import React, { FC } from 'react'

import { Seo } from '@/components/Seo'
import { ThemeWrapper } from '@/styles/ThemeWrapper'

const NotFoundPage: FC = () => (
  <ThemeWrapper>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ThemeWrapper>
)

export default NotFoundPage
