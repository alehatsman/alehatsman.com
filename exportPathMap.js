const path = require('path')
const fs = require('fs').promises

const contentDir = path.join(__dirname, 'content')

function getContentFiles () {
  return fs.readdir(contentDir)
}

function parseFileNames (files) {
  return files.map(f => {
    const parsedFilename = path.parse(f)
    return {
      name: parsedFilename.name,
      ext: parsedFilename.ext
    }
  })
}

function filterFiles (files) {
  return files.filter(f => f.ext === '.mdx')
}

function generatePathMap (files) {
  return files.reduce((acc, f) => {
    acc[`/post/${f.name}.html`] = {
      page: '/post',
      query: { id: f.name }
    }

    return acc
  }, {})
}

async function generatePostsPathMap () {
  const files = await getContentFiles()
  const parsedFiles = parseFileNames(files)
  const filteredFiles = filterFiles(parsedFiles)
  return generatePathMap(filteredFiles)
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
