import styled, { css } from 'styled-components'

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 30px 0;
  max-width: 700px;

  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5;
`

const a = styled.a`
  color: #0094FF !important; 
`

const img = styled.img`
  max-width: 100%;
`

const pre = styled.pre`
  overflow: scroll;
`

const code = styled.code`
  display: block;
  padding: 10px;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 3px;
`

const h = css`
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-top: 20px;
  margin-bottom: 10px;
`

const h1 = styled.h1`
  ${h}
  font-size: 3rem;
`

const h2 = styled.h2`
  ${h}
  font-size: 2.6rem;
`

const p = styled.p`
  margin: 10px 0;
`

const list = css`
  margin: 0 10px;
  padding: 0 10px;
  list-style-position: inside;
`

const ul = styled.ul`
  ${list}
`

const ol = styled.ol`
  ${list}
`

export default {
  wrapper: Wrapper,
  a,
  img,
  pre,
  code,
  h1,
  h2,
  p,
  ul,
  ol
}
