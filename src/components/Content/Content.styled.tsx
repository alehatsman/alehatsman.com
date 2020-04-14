import React, { FC } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import GatsbyImage from 'gatsby-image'
import scss from '@styled-system/css'

import { color, weight } from '@/styles/system'
import { Box } from '@/components/Box'
import { CodeBlock } from './CodeBlock'
import { Image } from './Image'
import { Anchor } from './Header'
import { Link } from '@/components/Link'
import { Heading } from '@/components/Heading'

const resetBox = css`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`

const marginBottom = css`
  margin-bottom: 1.75rem;
`

const Wrapper = styled(Box)(scss({
  fontSize: '2',
  fontFamily: 'robotoslab',
  fontWeight: 'normal',
  lineHeight: 'copy',
  letterSpacing: 'tracked'
}))

const a = styled(Link)(scss({
  color: 'blue'
}))

const pre = styled.pre`
  margin-top: 0;
  ${marginBottom};
`

const h = styled(Heading)(scss({
  color: 'black',
  fontWeight: 'bold',
  fontFamily: 'lato',
  marginBottom: 3
}))

const h1 = styled(h)(scss({
  fontSize: 3
})).withComponent('h1')

const h2 = styled(h)(scss({
  marginTop: 4,
  fontSize: 3
})).withComponent('h2')

const h3 = styled(h)(scss({
  fontSize: 2
})).withComponent('h3')

const h4 = styled(h)(scss({
  fontSize: 2
})).withComponent('h4')

const p = styled.p`
  ${resetBox}
  ${marginBottom}
`

const list = css`
  margin: 0 1rem 1.75rem;
  padding: 0 1rem;
  list-style-position: inside;
`

const ul = styled.ul`
  ${list};
`

const ol = styled.ol`
  ${list};
`

const inlineCode = styled.code`
  font-family: inherit;
  padding: 5px;
  color: rgb(57, 58, 52);
  background-color: rgb(246, 248, 250);
`

const blockquote = styled.blockquote`
  margin: 0;
  padding: 0 15px;
  border-left: 4px solid ${color.lightGray};
  color: ${color.grimmyGray};
`

const strong = styled.strong`
  font-weight: ${weight.bold};
`

const FeaturedImage: FC<any> = (props) => (
  <GatsbyImage fluid={props.featuredImage.childImageSharp.fluid} />
)

export default {
  wrapper: Wrapper,
  a,
  img: Image,
  FeaturedImage,
  pre,
  code: CodeBlock,
  inlineCode: inlineCode,
  h1,
  h2,
  h3,
  h4,
  Anchor,
  p,
  ul,
  ol,
  blockquote,
  strong
}
