import React from 'react';
import BlogPost from './BlogPost';
import MarkdownPost from './MarkdownPost';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        post.content.startsWith('<') ? (
          <BlogPost key={post.id} post={post} excerpt={true} />
        ) : (
          <MarkdownPost key={post.id} post={post} excerpt={true} />
        )
      ))}
    </div>
  );
}

export default PostList;