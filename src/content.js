import moment from 'moment'

const posts = processPosts(requirePosts())

export function getPosts () {
  return posts
}

export function findPost (id) {
  return posts.find(p => p.id === id)
}

function requirePosts () {
  function requireAll (r) { return r.keys().map(r) }
  return requireAll(require.context('../content', true, /\.mdx$/))
}

function processPosts (posts) {
  const parsedPosts = parsePosts(posts)
  const filterPosts = filterPublic(parsedPosts)
  const sortedPosts = sortPosts(filterPosts)
  return sortedPosts
}

function parsePosts (posts) {
  return posts
    .map(p => ({
      ...p.meta,
      createdAt: moment(p.meta.createdAt),
      Doc: p.default
    }))
}

function filterPublic (posts) {
  return posts
    .filter(p => p.public)
}

function sortPosts (posts) {
  posts.sort((a, b) => a.createdAt.isBefore(b.createdAt) ? 1 : -1)
  return posts
}
