import React from 'react';
import { Link } from 'react-router-dom';
import TagList from './TagList';
import TableOfContents from './TableOfContents';

function BlogPost({ post, excerpt }) {
  return (
    <article className="blog-post">
      <h2 className="post-title">
        {excerpt ? <Link to={`/post/${post.id}`}>{post.title}</Link> : post.title}
      </h2>
      <div className="post-meta">
        <span className="post-date">{post.date}</span>
        {post.tags && <TagList tags={post.tags} />}
      </div>
      
      {!excerpt && <TableOfContents content={post.content} isMarkdown={false} />}
      
      <div className="post-content">
        {excerpt ? (
          <>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="read-more">
              Read More
            </Link>
          </>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </div>
    </article>
  );
}

export default BlogPost;