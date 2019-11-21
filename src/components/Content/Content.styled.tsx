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

const marginBottom = css`
  margin-bottom: 1.75rem;
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

const img = styled.img`
  ${marginBottom}
  display: block;
  max-width: 100%;
`

const pre = styled.pre`
  ${marginBottom}
`

const h = css`
  ${resetBox}
  color: ${colors.gray20};
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-bottom: 1rem;
`

const h1 = styled.h1`
  ${h}
  &:not(:first-child) {
    margin-top: 3.5rem;
  }
  margin-bottom: 2rem;
  color: ${colors.black};
  font-size: 3.2rem;
  border-bottom: 1px solid #eaecef;
`

const h2 = styled.h2`
  ${h}
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  border-bottom: 1px solid #eaecef;
`

const h3 = styled.h3`
  ${h}
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2.1rem;
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

const strong = styled.strong`
  font-weight: 600;
`

const BlockquoteWrapper = styled.blockquote`
  margin: 1.5rem 0;
  padding: 0 1.5rem;

  border-left: 0.4rem solid #DDD;
  color: #777;

  p {
    margin: 15px 0;
  }
`

const Blockquote = ({ children }: { children: string }) => (
  <BlockquoteWrapper>
    { children }
  </BlockquoteWrapper>
)

export default {
  wrapper: Wrapper,
  a,
  img,
  pre,
  code: CodeBlock,
  inlineCode: inlineCode,
  blockquote: Blockquote,
  h1,
  h2,
  h3,
  p,
  ul,
  ol,
  strong,
}
