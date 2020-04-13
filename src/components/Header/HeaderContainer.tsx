import React, { FC, ComponentType, ComponentProps } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HeaderView } from './HeaderView'

type HeaderProps = ComponentProps<typeof HeaderView>

interface Props {
  Presenter: ComponentType<HeaderProps>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        email
        github
        image
        linkedin
        twitter
      }
    }
  }
`

const dataToHeaderProps = (data): HeaderProps => {
  return {
    ...data.site.siteMetadata,
  }
}

export const HeaderContainer: FC<Props> = ({ Presenter }) => {
  const data = useStaticQuery(query)
  return <Presenter {...dataToHeaderProps(data)} />
}
