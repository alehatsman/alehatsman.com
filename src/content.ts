import React from 'react'
import moment from 'moment'

export interface RawPost {
  meta: {
    id: string
    title: string
    createdAt: string
    updatedAt: string
    description: string
    tags: string[]
  }
  default: React.ComponentType
}

export interface Post {
  id: string
  title: string
  createdAt: moment.Moment
  updatedAt: moment.Moment
  description: string
  tags: string[]
  doc: React.ComponentType
}

function requirePosts (): RawPost[] {
  function requireAll (r) { return r.keys().map(r) }
  return requireAll(require.context('../content', true, /\.mdx$/))
}

function parsePosts (posts: RawPost[]): Post[] {
  return posts
    .map(p => ({
      ...p.meta,
      createdAt: moment(p.meta.createdAt),
      updatedAt: moment(p.meta.updatedAt || p.meta.createdAt),
      tags: p.meta.tags || [],
      doc: p.default
    }))
}

function sortPosts (posts) {
  posts.sort((a, b) => a.createdAt.isBefore(b.createdAt) ? 1 : -1)
  return posts
}

function processPosts (posts: RawPost[]): Post[] {
  const parsedPosts = parsePosts(posts)
  const sortedPosts = sortPosts(parsedPosts)
  return sortedPosts
}

export function getPosts (): Post[] {
  return processPosts(requirePosts())
}

export function findPost (id: string): Post {
  return getPosts().find(p => p.id === id)
}
