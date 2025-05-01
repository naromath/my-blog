import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import MarkdownPost from '../components/MarkdownPost';
import Comments from '../components/Comments';
import SocialShare from '../components/SocialShare';
import RelatedPosts from '../components/RelatedPosts';
import { useLocalStorage } from '../components/LocalStorageProvider';

function PostPage() {
  const { id } = useParams();
  const { getPostById } = useLocalStorage();
  const post = getPostById(parseInt(id));

  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <div className="post-page">
      {post.content.startsWith('<') ? (
        <BlogPost post={post} excerpt={false} />
      ) : (
        <MarkdownPost post={post} excerpt={false} />
      )}
      
      <RelatedPosts currentPost={post} />
      <SocialShare title={post.title} />
      <Comments postId={post.id} postTitle={post.title} />
    </div>
  );
}

export default PostPage;