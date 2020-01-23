import { useState, useEffect } from 'react'
import CodeBlock from './CodeBlock'

const GithubCode = ({url, codeType}) => {
  const [code, setCode] = useState('')
  useEffect(() => {
    fetch(url)
    .then(res => res.text())
    .then(text => setCode(text))
  })
  return (
    <CodeBlock className={codeType}>
      { code }
    </CodeBlock>
  )
}

export default GithubCode
