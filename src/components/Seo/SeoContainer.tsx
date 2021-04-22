import React, { FC, ComponentType, ComponentProps } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SeoView } from './SeoView'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        author
      }
    }
  }
`

type ViewProps = ComponentProps<typeof SeoView>

interface Props extends ViewProps {
  Presenter: ComponentType<ViewProps>
}

export const SeoContainer: FC<Props> = ({ Presenter, ...rest }) => {
  const { site } = useStaticQuery(query)
  return <Presenter {...site.siteMetadata} {...rest} />
}
