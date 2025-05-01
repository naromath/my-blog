import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const navigate = useNavigate();

  // 관리자 비밀번호 - 실제 애플리케이션에서는 더 안전한 인증 방식을 사용해야 합니다
  const ADMIN_PASSWORD = 'admin123'; // 실제 사용 시 변경 필요

  // 로컬 스토리지에서 포스트 불러오기
  useEffect(() => {
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // 로그인 처리
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  // 로그아웃 처리
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  // 새 포스트 작성 폼 초기화
  const handleNewPost = () => {
    setEditingPost({
      id: Date.now(), // 임시 ID
      title: '',
      date: new Date().toISOString().split('T')[0],
      tags: [],
      excerpt: '',
      content: '',
    });
  };

  // 포스트 편집
  const handleEditPost = (post) => {
    setEditingPost({ ...post });
  };

  // 포스트 삭제
  const handleDeletePost = (postId) => {
    if (window.confirm('정말로 이 포스트를 삭제하시겠습니까?')) {
      const updatedPosts = posts.filter(post => post.id !== postId);
      setPosts(updatedPosts);
      localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
    }
  };

  // 포스트 저장
  const handleSavePost = (e) => {
    e.preventDefault();
    
    if (!editingPost.title.trim() || !editingPost.content.trim()) {
      alert('제목과 내용은 필수입니다.');
      return;
    }

    // 태그 처리
    const processedTags = editingPost.tags instanceof Array 
      ? editingPost.tags 
      : editingPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    const updatedPost = {
      ...editingPost,
      tags: processedTags
    };

    let updatedPosts;
    const existingPostIndex = posts.findIndex(post => post.id === updatedPost.id);
    
    if (existingPostIndex >= 0) {
      // 기존 포스트 업데이트
      updatedPosts = [...posts];
      updatedPosts[existingPostIndex] = updatedPost;
    } else {
      // 새 포스트 추가
      updatedPosts = [...posts, updatedPost];
    }

    setPosts(updatedPosts);
    localStorage.setItem('blog-posts', JSON.stringify(updatedPosts));
    setEditingPost(null);
  };

  // 포스트 내보내기 (JSON 파일로)
  const handleExportPosts = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(posts, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "blog-posts.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // 포스트 가져오기
  const handleImportPosts = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedPosts = JSON.parse(e.target.result);
          if (Array.isArray(importedPosts)) {
            setPosts(importedPosts);
            localStorage.setItem('blog-posts', JSON.stringify(importedPosts));
            alert('포스트를 성공적으로 가져왔습니다.');
          } else {
            alert('올바른 형식의 포스트 데이터가 아닙니다.');
          }
        } catch (error) {
          alert('파일을 읽는 중 오류가 발생했습니다: ' + error.message);
        }
      };
      reader.readAsText(file);
    }
  };

  // 로그인 폼
  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <h1>관리자 로그인</h1>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="password">비밀번호:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">로그인</button>
        </form>
      </div>
    );
  }

  // 포스트 편집 폼
  if (editingPost) {
    return (
      <div className="admin-edit-post">
        <h1>{editingPost.id ? '포스트 편집' : '새 포스트 작성'}</h1>
        <form onSubmit={handleSavePost}>
          <div className="form-group">
            <label htmlFor="title">제목:</label>
            <input
              type="text"
              id="title"
              value={editingPost.title}
              onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="date">날짜:</label>
            <input
              type="date"
              id="date"
              value={editingPost.date}
              onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="tags">태그 (쉼표로 구분):</label>
            <input
              type="text"
              id="tags"
              value={Array.isArray(editingPost.tags) ? editingPost.tags.join(', ') : editingPost.tags}
              onChange={(e) => setEditingPost({ ...editingPost, tags: e.target.value })}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="excerpt">요약:</label>
            <textarea
              id="excerpt"
              value={editingPost.excerpt}
              onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
              rows="3"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="content">내용 (마크다운 지원):</label>
            <textarea
              id="content"
              value={editingPost.content}
              onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
              rows="15"
              required
            />
          </div>
          
          <div className="button-group">
            <button type="submit" className="btn btn-primary">저장</button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setEditingPost(null)}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    );
  }

  // 관리자 대시보드
  return (
    <div className="admin-dashboard">
      <h1>블로그 관리</h1>
      
      <div className="admin-actions">
        <button onClick={handleNewPost} className="btn btn-primary">새 포스트 작성</button>
        <button onClick={handleExportPosts} className="btn btn-secondary">포스트 내보내기</button>
        <label className="btn btn-secondary import-btn">
          포스트 가져오기
          <input 
            type="file" 
            accept=".json" 
            onChange={handleImportPosts} 
            style={{ display: 'none' }} 
          />
        </label>
        <button onClick={handleLogout} className="btn btn-danger">로그아웃</button>
      </div>
      
      <h2>포스트 관리</h2>
      {posts.length === 0 ? (
        <p>등록된 포스트가 없습니다.</p>
      ) : (
        <div className="post-list-admin">
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <div className="post-info">
                <h3>{post.title}</h3>
                <p className="post-date">{post.date}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="post-tags">
                    {Array.isArray(post.tags) && post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="post-actions">
                <button 
                  onClick={() => handleEditPost(post)} 
                  className="btn btn-sm btn-primary"
                >
                  편집
                </button>
                <button 
                  onClick={() => handleDeletePost(post.id)} 
                  className="btn btn-sm btn-danger"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;