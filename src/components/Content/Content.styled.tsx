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

  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`

const AWrapper = styled.a`
  color: #0094FF !important; 
`

const a = (props) => (
  <AWrapper {...props} target='_blank' />
)

const getImageSize = (size: string) => {
 switch (size) {
 case 'small':
 return 'max-width: 50%;'
 case 'medium':
 return 'max-width: 80%;'
 case 'large':
 return 'max-width: 95%;'
 default:
 return 'max-width: 100%;'
 }
}

interface ImgProps {
  size: string
  round: boolean
  shadow: boolean
}

const Img = styled.img`
  ${(props: ImgProps) => getImageSize(props.size)}
  ${(props: ImgProps) => props.round && 'border-radius: 3px;'}
  ${(props: ImgProps) => props.shadow && `
    box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 5px 20px 0px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.3);
  `}
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
  ${marginBottom}
`

const h = css`
  ${resetBox}
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const h1 = styled.h1`
  ${h}
  margin-bottom: 2rem;
  color: ${colors.black};
  font-size: 4rem;

  &:not(:fist-child) {
    margin-top: 3.5rem;
  }
`

const h2 = styled.h2`
  ${h}
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  font-size: 2.4rem;
`

const h3 = styled.h3`
  ${h}
  font-size: 2rem;
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
