import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ language, children }) {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;