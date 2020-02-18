module.exports = {
  resolve: 'gatsby-plugin-sitemap',
  options: {
    output: '/sitemap.xml',
    query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
    serialize: ({ site, allSitePage }) =>
      allSitePage.edges.map(edge => {
        return {
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: 'daily',
        }
      })
  }
}
