const toc = require('remark-toc')
const slug = require('remark-slug')
const siteMetadata = require('./gatsby/siteMetadata')
const rssPlugin = require('./gatsby/rss')
const sitemapPlugin = require('./gatsby/sitemap')

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        aliases: {
          '@': './src'
        }
      }
    },
    'gatsby-plugin-typescript',
    // {
    // resolve: "gatsby-source-sanity",
    // options: {
    // projectId: "rfnezq6e",
    // dataset: "draft",
    // },
    // },
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-FRKBVXGDYY'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          }
        ],
        remarkPlugins: [[toc, { tight: true }], slug]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './static/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'alehatsman-com'
      }
    },
    rssPlugin,
    sitemapPlugin
  ]
}
