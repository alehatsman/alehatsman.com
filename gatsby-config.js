const toc = require('remark-toc')
const slug = require('remark-slug')

const siteMetadata = {
  author: 'Aleh Atsman',
  description:
    'Computer hacker from young childhood. Full-stack software engineer. Freelancer. Solve problems, deliver high-quality software, write about programming.',
  email: 'aleh.atsman@gmail.com',
  github: 'https://github.com/atsman',
  image: 'images/me2.jpg',
  linkedin: 'https://linkedin.com/in/alehatsman',
  telegram: 'https://t.me/alehatsman',
  title: 'Software Engineer Blog',
  titleTemplate: 'Aleh Atsman | %s',
  twitter: 'https://twitter.com/alehatsman',
  twitterUsername: '@alehatsman',
  url: 'https://alehatsman.com'
}

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
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/images/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato:300,700', 'Roboto Slab:300,700']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-images',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          },
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 590
            }
          }
        ],
        remarkPlugins: [[toc, { tight: true }], slug]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-99002751-2',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Any additional optional fields
        cookieDomain: 'alehatsman.com'
      }
    }
  ]
}
