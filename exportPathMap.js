const feed = require('./feed')

function generatePathMap (feed) {
  return feed.reduce((acc, post) => {
    acc[`/post/${post.id}.html`] = {
      page: '/post',
      query: { id: post.id }
    }

    return acc
  }, {})
}

async function generatePostsPathMap () {
  return generatePathMap(feed.filter(p => p.public))
}

async function exportPathMap () {
  const feedPathMap = await generatePostsPathMap()
  return {
    '/': {
      page: '/'
    },
    ...feedPathMap
  }
}

module.exports = exportPathMap
