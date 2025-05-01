import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../components/LocalStorageProvider';

function TagsPage() {
  const { posts } = useLocalStorage();
  
  // 모든 태그를 수집하고 중복 제거
  const allTags = posts.reduce((tags, post) => {
    if (post.tags && Array.isArray(post.tags)) {
      return [...tags, ...post.tags];
    }
    return tags;
  }, []);
  
  // 태그 이름으로 정렬하고 중복 제거
  const uniqueTags = [...new Set(allTags)].sort();
  
  // 각 태그별 포스트 수 계산
  const tagCounts = uniqueTags.reduce((counts, tag) => {
    counts[tag] = posts.filter(post => 
      post.tags && post.tags.includes(tag)
    ).length;
    return counts;
  }, {});
  
  return (
    <div className="tags-page">
      <h1>모든 태그</h1>
      
      {uniqueTags.length > 0 ? (
        <div className="tags-container">
          {uniqueTags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`} className="tag-item">
              <span className="tag-name">{tag}</span>
              <span className="tag-count">{tagCounts[tag]}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p>등록된 태그가 없습니다.</p>
      )}
    </div>
  );
}

export default TagsPage;