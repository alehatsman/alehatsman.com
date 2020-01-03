import React from 'react'
import moment from 'moment'
import posts from '../posts'

export interface PostMeta {
  id: string
  title: string
  createdAt: string
  updatedAt?: string 
  description: string
  tags: string[]
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

function requirePost (id: string) {
  return require(`../content/${id}.mdx`).default
}

function parsePosts (posts: PostMeta[]): Post[] {
  return posts
    .map(p => ({
      ...p,
      createdAt: moment(p.createdAt),
      updatedAt: moment(p.updatedAt || p.createdAt),
      tags: p.tags || [],
      doc: requirePost(p.id) 
    }))
}

function filterPublic (posts) {
  return posts.filter(p => p.public)
}

function sortPosts (posts) {
  posts.sort((a, b) => a.createdAt.isBefore(b.createdAt) ? 1 : -1)
  return posts
}

function processPosts (posts: PostMeta[]): Post[] {
  const parsedPosts = parsePosts(posts)
  const filterPosts = filterPublic(parsedPosts)
  const sortedPosts = sortPosts(filterPosts)
  return sortedPosts
}

export function getPosts (): Post[] {
  return processPosts(posts)
}

export function findPost (id: string): Post {
  return getPosts().find(p => p.id === id)
}
