import React, { useState, useEffect } from 'react';

function TableOfContents({ content, isMarkdown }) {
  const [headings, setHeadings] = useState([]);
  
  useEffect(() => {
    if (!content) return;
    
    // 마크다운 콘텐츠에서 제목(#으로 시작하는 줄) 추출
    if (isMarkdown) {
      const mdHeadings = [];
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        const match = line.match(/^(#{1,6})\s+(.+)/);
        if (match) {
          const level = match[1].length;
          const text = match[2].trim();
          const id = `heading-${index}`;
          
          mdHeadings.push({
            id,
            text,
            level
          });
        }
      });
      
      setHeadings(mdHeadings);
    } else {
      // HTML 콘텐츠에서 제목(h1~h6 태그) 추출
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(content, 'text/html');
      const htmlHeadings = Array.from(htmlDoc.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      
      const extractedHeadings = htmlHeadings.map((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        return {
          id: `heading-${index}`,
          text: heading.textContent,
          level
        };
      });
      
      setHeadings(extractedHeadings);
    }
  }, [content, isMarkdown]);
  
  if (headings.length <= 1) {
    return null; // 제목이 1개 이하면 목차를 표시하지 않음
  }
  
  return (
    <div className="table-of-contents">
      <h3>목차</h3>
      <ul className="toc-list">
        {headings.map(heading => (
          <li 
            key={heading.id}
            className={`toc-item toc-level-${heading.level}`}
            style={{ paddingLeft: `${(heading.level - 1) * 1.5}rem` }}
          >
            <a 
              href={`#${heading.id}`}
              className="toc-link"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;