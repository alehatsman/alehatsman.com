import React from "react";
import styled from "styled-components";

import Highlight, { defaultProps, Language } from "prism-react-renderer";
import github from "prism-react-renderer/themes/github";

interface Props {
  children: string;
  className: string;
}

const Pre = styled.pre`
  padding: 20px;
  overflow: scroll;
`;

const CodeBlock = ({ children, className }: Props) => {
  const language = className ? className.replace(/language-/, "") : "";
  return (
    <Highlight
      {...defaultProps}
      theme={github}
      code={children.trim()}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
