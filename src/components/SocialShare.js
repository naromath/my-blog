import React from 'react';

function SocialShare({ title, url }) {
  // 현재 페이지 URL
  const pageUrl = url || window.location.href;
  // 공유 텍스트
  const shareText = encodeURIComponent(`${title} | My React Blog`);
  const shareUrl = encodeURIComponent(pageUrl);
  
  return (
    <div className="social-share">
      <h4>이 글 공유하기</h4>
      <div className="share-buttons">
        {/* Twitter 공유 */}
        <a 
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button twitter"
          aria-label="Twitter에 공유"
        >
          Twitter
        </a>
        
        {/* Facebook 공유 */}
        <a 
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button facebook"
          aria-label="Facebook에 공유"
        >
          Facebook
        </a>
        
        {/* LinkedIn 공유 */}
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button linkedin"
          aria-label="LinkedIn에 공유"
        >
          LinkedIn
        </a>
        
        {/* 클립보드에 URL 복사 */}
        <button 
          onClick={() => {
            navigator.clipboard.writeText(pageUrl);
            alert('링크가 클립보드에 복사되었습니다!');
          }}
          className="share-button copy"
          aria-label="URL 복사"
        >
          URL 복사
        </button>
      </div>
    </div>
  );
}

export default SocialShare;