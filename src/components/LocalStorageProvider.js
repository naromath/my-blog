import React, { useState, useEffect, createContext, useContext } from 'react';
import { posts as initialPosts } from '../data/posts';
import { markdownPosts as initialMarkdownPosts } from '../data/markdown-posts';

const LocalStorageContext = createContext();

export const useLocalStorage = () => useContext(LocalStorageContext);

export const LocalStorageProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    // 로컬 스토리지에서 포스트 불러오기
    const storedPosts = localStorage.getItem('blog-posts');
    
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      // 초기 데이터 설정
      const combinedPosts = [...initialPosts, ...initialMarkdownPosts];
      setPosts(combinedPosts);
      localStorage.setItem('blog-posts', JSON.stringify(combinedPosts));
    }
  }, []);
  
  // 모든 포스트 가져오기
  const getAllPosts = () => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  };
  
  // 특정 ID의 포스트 가져오기
  const getPostById = (id) => {
    return posts.find(post => post.id === parseInt(id));
  };
  
  // 포스트 저장하기
  const savePost = (post) => {
    const updatedPosts = posts.map(p => 
      p.id === post.id ? post : p
    );
    
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
  };
  
  // 새 포스트 추가하기
  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now()
    };
    
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
  };
  
  // 포스트 삭제하기
  const deletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
  };
  
  return (
    <LocalStorageContext.Provider value={{
      posts: getAllPosts(),
      getPostById,
      savePost,
      addPost,
      deletePost
    }}>
      {children}
    </LocalStorageContext.Provider>
  );
};