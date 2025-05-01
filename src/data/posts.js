export const posts = [
  {
    id: 1,
    title: '블로그를 시작하며',
    date: '2025-05-01',
    tags: ['React', '개발', '블로그'],
    excerpt: '첫 번째 블로그 포스트입니다. React로 만든 GitHub Pages 블로그에 오신 것을 환영합니다!',
    content: `
      <p>안녕하세요! React와 GitHub Pages로 만든 블로그에 오신 것을 환영합니다.</p>
      
      <p>이 블로그는 React를 사용하여 만들어졌으며, GitHub Pages를 통해 무료로 호스팅됩니다. 
      React는 Facebook에서 개발한 자바스크립트 라이브러리로, 사용자 인터페이스를 구축하는 데 
      특화되어 있습니다.</p>
      
      <h3>블로그의 특징</h3>
      <ul>
        <li>React 컴포넌트 기반 구조</li>
        <li>React Router를 사용한 SPA(Single Page Application)</li>
        <li>GitHub Pages를 통한 무료 호스팅</li>
        <li>마크다운 지원 (추가 가능)</li>
      </ul>
      
      <p>앞으로 이 블로그를 통해 다양한 주제의 글을 공유할 예정입니다. 많은 관심 부탁드립니다!</p>
    `
  },
  {
    id: 2,
    title: 'React로 블로그 만들기',
    date: '2025-05-02',
    tags: ['React', '튜토리얼'],
    excerpt: 'React를 사용하여 블로그를 만드는 방법에 대해 알아봅니다.',
    content: `
      <p>이번 포스트에서는 React를 사용하여 블로그를 만드는 방법에 대해 알아보겠습니다.</p>
      
      <h3>프로젝트 설정</h3>
      <p>먼저 create-react-app을 사용하여 새 프로젝트를 생성합니다:</p>
      <pre><code>npx create-react-app my-blog
cd my-blog
npm start</code></pre>
      
      <h3>컴포넌트 구조</h3>
      <p>블로그는 다음과 같은 컴포넌트로 구성됩니다:</p>
      <ul>
        <li>Header: 네비게이션 및 로고</li>
        <li>Footer: 저작권 정보 등</li>
        <li>BlogPost: 개별 블로그 포스트 표시</li>
        <li>PostList: 여러 블로그 포스트 목록 표시</li>
      </ul>
      
      <h3>라우팅 설정</h3>
      <p>React Router를 사용하여 다양한 페이지 간의 탐색을 설정합니다:</p>
      <pre><code>npm install react-router-dom</code></pre>
      
      <p>이 튜토리얼을 따라하면 자신만의 React 블로그를 만들 수 있습니다!</p>
    `
  },
  {
    id: 3,
    title: 'GitHub Pages에 React 앱 배포하기',
    date: '2025-05-03',
    tags: ['GitHub', '배포', 'React'],
    excerpt: 'React 애플리케이션을 GitHub Pages에 배포하는 방법을 알아봅니다.',
    content: `
      <p>이 글에서는 React 애플리케이션을 GitHub Pages에 배포하는 방법을 단계별로 알아보겠습니다.</p>
      
      <h3>1. gh-pages 패키지 설치</h3>
      <pre><code>npm install gh-pages --save-dev</code></pre>
      
      <h3>2. package.json 수정</h3>
      <p>package.json 파일에 다음 내용을 추가합니다:</p>
      <pre><code>"homepage": "https://username.github.io/repo-name",
"scripts": {
  // 기존 스크립트...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}</code></pre>
      
      <h3>3. 배포하기</h3>
      <pre><code>npm run deploy</code></pre>
      
      <p>이 명령어는 프로젝트를 빌드하고 gh-pages 브랜치에 배포합니다.</p>
      
      <h3>4. GitHub 레포지토리 설정</h3>
      <p>GitHub 레포지토리의 Settings > Pages에서 Source를 gh-pages 브랜치로 설정합니다.</p>
      
      <p>이제 React 블로그가 GitHub Pages에 성공적으로 배포되었습니다!</p>
    `
  }
];