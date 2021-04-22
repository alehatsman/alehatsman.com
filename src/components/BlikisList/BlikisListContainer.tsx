import React, {
  FC,
  ComponentType,
  ComponentProps,
  useState,
  useEffect
} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Post } from '@/types/Post'
import { BlikisListView } from './BlikisListView'

const queryMdxBlikis = graphql`
  {
    allMdx(
      filter: { frontmatter: { public: { eq: true }, tags: { in: "bliki" } } }
      sort: { fields: frontmatter___createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          timeToRead
          frontmatter {
            id
            createdAt(formatString: "MMM D, YYYY")
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
  Presenter: ComponentType<ComponentProps<typeof BlikisListView>>
}

export const BlikisListContainer: FC<Props> = ({ Presenter }) => {
  const data = useStaticQuery(queryMdxBlikis)
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
