const toc = require('remark-toc')
const slug = require('remark-slug')
const sectionize = require('remark-sectionize')

const exportPathMap = require('./exportPathMap')

const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    remarkPlugins: [[toc, { tight: true }], slug, sectionize]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  exportPathMap,
  env: {
    GA_ID: 'UA-99002751-2'
  }
})
