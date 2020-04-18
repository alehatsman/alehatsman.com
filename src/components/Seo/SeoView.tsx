import React, { FC } from 'react'
import Helmet from 'react-helmet'

interface Props {
  description?: string
  keywords?: string[]
  lang?: string
  meta?: any[]
  title?: string
  titleTemplate?: string
  twitterUsername?: string
}

export const SeoView: FC<Props> = ({
  description = '',
  keywords,
  lang = 'en',
  meta = [],
  title,
  titleTemplate,
  twitterUsername
}) => (
  <Helmet
    htmlAttributes={{
      lang
    }}
    title={title}
    titleTemplate={titleTemplate}
    meta={[
      {
        name: 'description',
        content: description
      },
      {
        name: 'keywords',
        content: (keywords || []).join(',')
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:creator',
        content: twitterUsername
      },
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      }
    ].concat(meta)}
  />
)
