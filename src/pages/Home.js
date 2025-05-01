import React from 'react';
import PostList from '../components/PostList';
import { useLocalStorage } from '../components/LocalStorageProvider';

function Home() {
  const { posts } = useLocalStorage();

  return (
    <div className="home-page">
      <h1>Latest Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default Home;