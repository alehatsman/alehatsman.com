import React, { FC, ComponentType, ComponentProps } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HeaderView } from './HeaderView'

interface Props {
  Presenter: ComponentType<ComponentProps<typeof HeaderView>>
}

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        email
        github
        linkedin
      }
    }
  }
`

export const HeaderContainer: FC<Props> = ({ Presenter }) => {
  const data = useStaticQuery(query)
  return <Presenter data={data} />
}
