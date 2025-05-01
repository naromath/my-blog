import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Comments({ postId, postTitle }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  
  // GitHub 리포지토리 정보
  const repoOwner = 'your-github-username'; // 수정 필요
  const repoName = 'my-blog'; // 수정 필요
  
  // 댓글 불러오기 (실제 GitHub API를 사용하지 않고 로컬 스토리지에 저장)
  useEffect(() => {
    // 로컬 스토리지에서 댓글 불러오기
    try {
      setLoading(true);
      const savedComments = localStorage.getItem(`comments-${postId}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      } else {
        setComments([]);
      }
    } catch (err) {
      setError('댓글을 불러오는 중 오류가 발생했습니다.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [postId]);
  
  // 댓글 작성 처리
  const handleSubmitComment = (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !username.trim()) {
      alert('이름과 댓글 내용을 모두 입력해주세요.');
      return;
    }
    
    const newCommentObj = {
      id: Date.now(),
      author: username,
      content: newComment,
      date: new Date().toISOString(),
      postId
    };
    
    const updatedComments = [...comments, newCommentObj];
    setComments(updatedComments);
    
    // 로컬 스토리지에 저장
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));
    
    // 폼 초기화
    setNewComment('');
  };
  
  if (loading) {
    return <div className="comments-loading">댓글을 불러오는 중...</div>;
  }
  
  if (error) {
    return <div className="comments-error">{error}</div>;
  }
  
  return (
    <div className="comments-section">
      <h3>댓글 {comments.length}개</h3>
      
      {comments.length > 0 ? (
        <div className="comments-list">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">
                  {new Date(comment.date).toLocaleDateString()}
                </span>
              </div>
              <div className="comment-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {comment.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-comments">
          아직 댓글이 없습니다. 첫 댓글을 작성해보세요!
        </div>
      )}
      
      <div className="comment-form-container">
        <h4>댓글 작성</h4>
        <form onSubmit={handleSubmitComment} className="comment-form">
          <div className="form-group">
            <label htmlFor="username">이름</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="이름을 입력하세요"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="comment">댓글 (마크다운 지원)</label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요..."
              rows="4"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">댓글 작성</button>
        </form>
      </div>
      
      <div className="github-issue-link">
        <p>
          댓글을 GitHub Issues에서 관리하고 싶으신가요?{' '}
          <a 
            href={`https://github.com/${repoOwner}/${repoName}/issues/new?title=Comment on: ${postTitle}&body=Commenting on: ${postId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            새 이슈 생성
          </a>
        </p>
      </div>
    </div>
  );
}

export default Comments;