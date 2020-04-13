import React, { FC } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import GatsbyImage from 'gatsby-image'

import { color, size, fontSizes, weight } from '@/styles/system'
import { CodeBlock } from './CodeBlock'
import { Image } from './Image'
import { Anchor } from './Header'

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

const Wrapper = styled.main`
  font-size: ${fontSizes.text.default};
  font-weight: ${weight.regular};
  line-height: 1.5;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  letter-spacing: 0.01rem;
`

const AWrapper = styled.a`
  color: ${color.blue} !important;
`

const a = (props) => <AWrapper {...props} />

const pre = styled.pre`
  margin-top: 0;
  ${marginBottom};
`

const h = css`
  ${resetBox} font-weight: 700;
  font-family: "Lato", sans-serif;
  letter-spacing: -0.0125rem;
  margin-bottom: 0.5rem;
  overflow: auto;
`

const h1 = styled.h1`
  ${h}
  color: ${color.black};
  font-size: ${fontSizes.h1}; 
  margin-top: 1rem;
  &:not(:fist-child) {
    margin-top: 3.5rem;
  }
`

const h2 = styled.h2`
  ${h}
  margin-top: 2.5rem;
  font-size: ${fontSizes.h2};
`

const h3 = styled.h3`
  ${h}
  font-size: ${fontSizes.h3};
`

const h4 = styled.h4`
  ${h}
  font-size: ${fontSizes.h4};
`

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
