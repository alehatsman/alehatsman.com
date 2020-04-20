import React, { FC } from 'react'
import styled from '@emotion/styled'
import GatsbyImage from 'gatsby-image'
import css from '@styled-system/css'

import { Box } from '@/components/Box'
import { Code } from '@/components/Code'
import { Link } from '@/components/Link'
import { Heading } from '@/components/Heading'
import { Image as DynamicImage } from '@/components/Image'

import { Image } from './Image'

const Wrapper = styled(Box)(
  css({
    fontSize: '2',
    fontFamily: 'robotoslab',
    fontWeight: 'normal',
    lineHeight: 'copy',
    letterSpacing: 'tracked'
  })
)

const a = styled(Link)`
  && {
    ${css({ color: 'blue' })} 
  }
`

const pre = styled('pre')(css({
  mt: 0,
  mb: 4
}))

const h = styled(Heading)(css({
  color: 'black',
  fontWeight: 'bold',
  fontFamily: 'lato',
  marginBottom: 3
}))

const h1 = styled(h)(css({
  fontSize: 3
})).withComponent('h1')

const h2 = styled(h)(css({
  marginTop: 4,
  fontSize: 3
})).withComponent('h2')

const h3 = styled(h)(css({
  fontSize: 2
})).withComponent('h3')

const h4 = styled(h)(css({
  fontSize: 2
})).withComponent('h4')

const p = styled('p')(css({
  m: 0,
  mb: 3
}))

const list = css({
  mx: 2,
  mb: 3,
  pl: 1,
  listStylePosition: 'inside'
})

const ul = styled.ul`
  ${list};
`

const ol = styled.ol`
  ${list};
`

const inlineCode = styled.code(css({
  fontFamily: 'inherit',
  padding: 1,
  color: 'inherit',
  backgroundColor: '#f6f8fa'
}))

const blockquote = styled.blockquote(css({
  m: 0,
  px: 3,
  borderLeft: 3,
  borderColor: 'gray.1',
  color: 'gray.2'
}))

const strong = styled.strong(css({
  fontWeight: 'bold'
}))

const FeaturedImage: FC<any> = (props) => (
  <GatsbyImage fluid={props.featuredImage.childImageSharp.fluid} />
)

export default {
  wrapper: Wrapper,
  a,
  img: Image,
  FeaturedImage,
  DynamicImage,
  pre,
  code: Code,
  inlineCode: inlineCode,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  blockquote,
  strong
}
