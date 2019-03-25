function loadPosts () {
  function requireAll (r) { return r.keys().map(r) }
  return requireAll(require.context('../content', true, /\.mdx$/))
}

const posts = loadPosts()
  .map(p => ({ ...p.meta, Doc: p.default }))

export function getPosts () {
  return posts
}

export function findDoc (id) {
  return posts.find(p => p.id === id).Doc
}
