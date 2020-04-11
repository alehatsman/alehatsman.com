import React, {
  FC,
  useState,
  useEffect,
  ComponentType,
  ComponentProps
} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Seo } from '@/components/Seo'
import { Layout } from '@/components/Layout'
import { Post } from '@/components/PostList/types'

import { HomePageView } from './HomePageView'

interface Props {
  Presenter: ComponentType<ComponentProps<typeof HomePageView>>
}

export const HomePageContainer: FC<Props> = ({ Presenter }) => {
  return (
    <Layout>
      <Seo />
      <Presenter />
    </Layout>
  )
}
