import React, { FC, ComponentProps } from 'react'
import { SeoContainer } from './SeoContainer'
import { SeoView } from './SeoView'

type Props = ComponentProps<typeof SeoView>

export const Seo: FC<Props> = (props) => (
  <SeoContainer Presenter={SeoView} {...props} />
)
