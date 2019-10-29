const exportPathMap = require('./exportPathMap')

const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  exportPathMap,
  env: {
    GA_ID: 'UA-99002751-2'
  }
})
