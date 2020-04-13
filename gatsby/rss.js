const formatPostUrl = require('./formatPostUrl')

module.exports = {
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map((edge) => {
            const imageSrc = edge.node.frontmatter.featuredImage.childImageSharp.fixed.src
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.frontmatter.description,
              date: edge.node.frontmatter.createdAt,
              url:
                site.siteMetadata.siteUrl +
                formatPostUrl(edge.node.frontmatter.id),
              guid:
                site.siteMetadata.siteUrl +
                formatPostUrl(edge.node.frontmatter.id),
              custom_elements: [{ 'content:encoded': edge.node.html }],
              enclosure: imageSrc && {
                url: site.siteMetadata.siteUrl + imageSrc
              }
            })
          })
        },
        query: `
          {
            allMdx(filter: {
              frontmatter: {public: {eq: true}}}, 
              sort: {fields: frontmatter___createdAt, order: DESC}
            ) {
              edges {
                node {
                  html
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
                        fixed {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
            `,
        output: '/rss.xml',
        title: 'Aleh Atsman | Software Engineer Blog'
      }
    ]
  }
}
