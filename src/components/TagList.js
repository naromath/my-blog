import React from 'react';
import { Link } from 'react-router-dom';

function TagList({ tags }) {
  // 태그가 없거나 빈 배열이면 렌더링하지 않음
  if (!tags || tags.length === 0) {
    return null;
  }
  
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Link key={index} to={`/tag/${tag}`} className="tag">
          {tag}
        </Link>
      ))}
    </div>
  );
}

export default TagList;