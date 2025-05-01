import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="블로그 검색..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">검색</button>
    </form>
  );
}

export default SearchBar;