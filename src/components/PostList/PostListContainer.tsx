import React, {
  FC,
  ComponentType,
  ComponentProps,
  useState,
  useEffect
} from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Post } from '@/types/Post'
import { PostListView } from './PostListView'

const queryMdxPosts = graphql`
  {
    allMdx(
      filter: { frontmatter: { public: { eq: true } } }
      sort: { fields: frontmatter___createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          timeToRead
          frontmatter {
            id
            createdAt
            description
            public
            tags
            title
            updatedAt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`

interface Props {
  Presenter: ComponentType<ComponentProps<typeof PostListView>>
}

export const PostListContainer: FC<Props> = ({ Presenter }) => {
  const data = useStaticQuery(queryMdxPosts)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const newPosts = data.allMdx.edges
      .map((e) => e.node)
      .map((n) => ({
        ...n.frontmatter,
        id: n.frontmatter.id,
        timeToRead: n.timeToRead,
        featuredImage: n.frontmatter.featuredImage?.childImageSharp?.fluid
      }))

    setPosts(newPosts)
  }, [data])

  return <Presenter posts={posts} />
}
