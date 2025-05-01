import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import { useLocalStorage } from '../components/LocalStorageProvider';

function Home() {
  const { posts } = useLocalStorage();

  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Latest Posts</h1>
        <Link to="/write" className="write-button">
          글쓰기
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
}

export default Home;