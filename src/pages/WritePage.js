import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../components/LocalStorageProvider';

function WritePage() {
  const navigate = useNavigate();
  const { addPost } = useLocalStorage();
  const [post, setPost] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 새 포스트 객체 생성
    const newPost = {
      title: post.title,
      content: post.content,
      tags: post.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
      date: new Date().toISOString(),
      excerpt: post.content.substring(0, 150) + '...'
    };
    
    // 포스트 저장
    addPost(newPost);
    
    // 홈페이지로 이동
    navigate('/');
  };

  return (
    <div className="container">
      <div className="write-page">
        <h2>새 글 작성</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="제목을 입력하세요"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              rows="10"
              required
              className="form-control"
              placeholder="내용을 입력하세요"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="tags">태그 (쉼표로 구분)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={post.tags}
              onChange={handleChange}
              className="form-control"
              placeholder="예: React, JavaScript, 웹개발"
            />
          </div>
          
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              저장하기
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/')}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WritePage; 