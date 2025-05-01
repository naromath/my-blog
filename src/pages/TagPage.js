import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PostList from '../components/PostList';
import { useLocalStorage } from '../components/LocalStorageProvider';

function TagPage() {
  const { tag } = useParams();
  const { posts } = useLocalStorage();
  
  // 현재 태그와 일치하는 포스트만 필터링
  const filteredPosts = posts.filter(post => 
    post.tags && 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
  
  return (
    <div className="tag-page">
      <h1>태그: {tag}</h1>
      {filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} />
      ) : (
        <div className="no-posts">
          <p>이 태그에 해당하는 포스트가 없습니다.</p>
          <Link to="/" className="btn btn-primary">홈으로 돌아가기</Link>
        </div>
      )}
    </div>
  );
}

export default TagPage;