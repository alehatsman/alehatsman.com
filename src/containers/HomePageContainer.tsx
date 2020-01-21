import React from 'react'
import HomePage from '@/components/HomePage'
import { getPosts } from '@/content'

const HomePageContainer = () => <HomePage posts={getPosts()} />

export default HomePageContainer
