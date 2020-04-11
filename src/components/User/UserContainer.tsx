import React, { FC, ComponentType, ComponentProps } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { UserView } from './UserView'

type UserProps = ComponentProps<typeof UserView>

interface Props {
  Presenter: ComponentType<UserProps>
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
        telegram
        twitter
      }
    }
  }
`

const formatUrl = (url: string) => {
  const { host, pathname } = new URL(url)
  return `${host}${pathname}`
}

const dataToUserProps = (data): UserProps => {
  return {
    ...data.site.siteMetadata,
    github: formatUrl(data.site.siteMetadata.github),
    linkedin: formatUrl(data.site.siteMetadata.linkedin)
  }
}

export const UserContainer: FC<Props> = ({ Presenter }) => {
  const data = useStaticQuery(query)
  return <Presenter {...dataToUserProps(data)} />
}
