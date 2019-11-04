import React from 'react'
import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

import CodeBlock from './CodeBlock'

const resetBox = css`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`

const Wrapper = styled.main`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`

const AWrapper = styled.a`
  color: #0094FF !important; 
`

const a = (props) => (
  <AWrapper {...props} target='_blank' />
)

const Img = styled.img`
  max-width: 100%;
`

const ImgWrapper = styled.p`
  display: flex;
  justify-content: center;
`

const img = (props) => (
  <ImgWrapper>
    <Img {...props} />
  </ImgWrapper>
)

const pre = styled.pre`
  margin-bottom: 1.75rem;
`

const h = css`
  ${resetBox}
  color: ${colors.gray20};
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const h1 = styled.h1`
  ${h}
  margin-top: 3.5rem;
  margin-bottom: 2rem;
  color: ${colors.black};
  font-size: 4rem;
`

const h2 = styled.h2`
  ${h}
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  font-size: 3rem;
`

const h3 = styled.h3`
  ${h}
  font-size: 2.1rem;
`

const p = styled.p`
  ${resetBox}
  margin-bottom: 1.75rem;
`

const list = css`
  margin: 0 10px 10px;
  padding: 0 10px;
  list-style-position: inside;
`

const ul = styled.ul`
  ${list}
`

const ol = styled.ol`
  ${list}
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
  border-left: 4px solid #DDD;
  color: #777;
`

const strong = styled.strong`
  font-weight: 600;
`

export default {
  wrapper: Wrapper,
  a,
  img,
  pre,
  code: CodeBlock,
  inlineCode: inlineCode,
  h1,
  h2,
  h3,
  p,
  ul,
  ol,
  blockquote,
  strong,
}
