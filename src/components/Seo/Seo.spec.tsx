import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { SeoView } from './SeoView'

const getMetaByName = (name: string) => {
  return document.querySelector(`meta[name="${name}"]`)?.getAttribute('content')
}

const getMetaByProperty = (property: string) => {
  return document.querySelector(`meta[property="${property}"]`)?.getAttribute('content')
}

describe('Seo', () => {
  const data = {
    title: 'title',
    titleTemplate: 'title | %s',
    twitterUsername: 'twitterUsername',
    description: 'description',
    lang: 'lang',
    keywords: ['keyword1', 'keyword2'],
    meta: [{ name: '' }]
  }

  it('should add metadata to head', async () => {
    render(<SeoView {...data} />)

    await waitFor(() => {
      expect(document.title).toBe('title | title')
      expect(getMetaByName('description')).toBe(data.description)
      expect(getMetaByName('keywords')).toBe('keyword1,keyword2')
      expect(getMetaByProperty('og:title')).toBe(data.title)
      expect(getMetaByProperty('og:description')).toBe(data.description)
      expect(getMetaByProperty('og:type')).toBe('website')
      expect(getMetaByName('twitter:card')).toBe('summary_large_image')
      expect(getMetaByName('twitter:creator')).toBe('twitterUsername')
      expect(getMetaByName('twitter:title')).toBe(data.title)
      expect(getMetaByName('twitter:description')).toBe(data.description)
    })
  })
})
