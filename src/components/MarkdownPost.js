import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Link } from 'react-router-dom';
import CodeBlock from './CodeBlock';
import TagList from './TagList';
import TableOfContents from './TableOfContents';

function MarkdownPost({ post, excerpt }) {
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <CodeBlock language={match[1]} {...props}>
          {String(children).replace(/\n$/, '')}
        </CodeBlock>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    h1: ({ children, ...props }) => <h1 id={`heading-${props.node.position.start.line}`} {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 id={`heading-${props.node.position.start.line}`} {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 id={`heading-${props.node.position.start.line}`} {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 id={`heading-${props.node.position.start.line}`} {...props}>{children}</h4>,
    h5: ({ children, ...props }) => <h5 id={`heading-${props.node.position.start.line}`} {...props}>{children}</h5>,
    h6: ({ children, ...props }) => <h6 id={`heading-${props.node.position.start.line}`} {...props}>{children}</h6>,
  };
  
  return (
    <article className="blog-post">
      <h2 className="post-title">
        {excerpt ? <Link to={`/post/${post.id}`}>{post.title}</Link> : post.title}
      </h2>
      <div className="post-meta">
        <span className="post-date">{post.date}</span>
        {post.tags && <TagList tags={post.tags} />}
      </div>
      
      {!excerpt && <TableOfContents content={post.content} isMarkdown={true} />}
      
      <div className="post-content">
        {excerpt ? (
          <>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {post.excerpt}
            </ReactMarkdown>
            <Link to={`/post/${post.id}`} className="read-more">
              Read More
            </Link>
          </>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {post.content}
          </ReactMarkdown>
        )}
      </div>
    </article>
  );
}

export default MarkdownPost;