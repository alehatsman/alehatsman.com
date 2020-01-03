const path = require('path')
const fs = require('fs')
const posts = require('./posts')

function generatePathMap (posts) {
  return posts.reduce((acc, post) => {
    acc[`/post/${post.id}.html`] = {
      page: '/post',
      query: { id: post.id }
    }

    return acc
  }, {})
}

async function generatePostsPathMap () {
  return generatePathMap(posts.filter(p => p.public))
}

async function exportPathMap () {
  const postsPathMap = await generatePostsPathMap()
  return {
    '/': {
      page: '/'
    },
    ...postsPathMap
  }
}

module.exports = exportPathMap
