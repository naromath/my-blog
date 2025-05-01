import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../components/LocalStorageProvider';

function RelatedPosts({ currentPost, maxPosts = 3 }) {
  const { posts } = useLocalStorage();
  
  if (!currentPost || !currentPost.tags || !Array.isArray(currentPost.tags) || currentPost.tags.length === 0) {
    return null;
  }
  
  // 현재 포스트의 태그를 기반으로 관련 포스트 찾기
  const relatedPosts = posts
    .filter(post => post.id !== currentPost.id) // 현재 포스트 제외
    .map(post => {
      // 일치하는 태그 수 계산
      const matchingTags = post.tags && Array.isArray(post.tags)
        ? post.tags.filter(tag => currentPost.tags.includes(tag))
        : [];
      
      return {
        ...post,
        matchingTagsCount: matchingTags.length
      };
    })
    .filter(post => post.matchingTagsCount > 0) // 일치하는 태그가 있는 포스트만 선택
    .sort((a, b) => b.matchingTagsCount - a.matchingTagsCount) // 일치하는 태그 수가 많은 순으로 정렬
    .slice(0, maxPosts); // 최대 표시 수 제한
  
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <div className="related-posts">
      <h3>관련 포스트</h3>
      <div className="related-posts-list">
        {relatedPosts.map(post => (
          <div key={post.id} className="related-post">
            <Link to={`/post/${post.id}`} className="related-post-title">
              {post.title}
            </Link>
            <div className="related-post-meta">
              <span className="related-post-date">{post.date}</span>
              {post.tags && Array.isArray(post.tags) && (
                <div className="related-post-tags">
                  {post.tags
                    .filter(tag => currentPost.tags.includes(tag))
                    .map((tag, index) => (
                      <span key={index} className="tag tag-small">{tag}</span>
                    ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;