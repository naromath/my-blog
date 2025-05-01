import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PostList from '../components/PostList';
import { useLocalStorage } from '../components/LocalStorageProvider';

function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const { posts } = useLocalStorage();
  
  // 검색어가 있을 경우 포스트 필터링
  const searchResults = query
    ? posts.filter(post => {
        const searchableContent = [
          post.title,
          post.excerpt,
          post.content,
          ...(post.tags || [])
        ].join(' ').toLowerCase();
        
        return searchableContent.includes(query.toLowerCase());
      })
    : [];
  
  return (
    <div className="search-page">
      <h1>'{query}' 검색 결과</h1>
      
      {searchResults.length > 0 ? (
        <PostList posts={searchResults} />
      ) : (
        <div className="no-results">
          <p>검색 결과가 없습니다.</p>
          <p>다른 검색어를 시도하거나 <Link to="/">홈으로</Link> 돌아가세요.</p>
        </div>
      )}
    </div>
  );
}

export default SearchPage;