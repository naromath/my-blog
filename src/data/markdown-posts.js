export const markdownPosts = [
  {
    id: 4,
    title: '마크다운으로 블로그 작성하기',
    date: '2025-05-04',
    tags: ['Markdown', '블로그'],
    excerpt: '마크다운을 사용하여 블로그 포스트를 작성하는 방법에 대해 알아봅니다.',
    content: `
# 마크다운으로 블로그 작성하기

마크다운(Markdown)은 텍스트 기반의 마크업 언어로, 쉽게 읽고 쓸 수 있으며 HTML로 변환이 가능합니다.

## 마크다운의 장점

1. **간단한 문법** - 배우기 쉽고 사용하기 간편합니다.
2. **빠른 작성** - 서식을 위한 별도의 도구 없이 텍스트 편집기만으로 작성 가능합니다.
3. **가독성** - 마크다운으로 작성된 문서는 그 자체로도 읽기 쉽습니다.
4. **변환 용이성** - HTML뿐만 아니라 다양한 형식으로 변환이 가능합니다.

## 기본 문법

### 제목

\`\`\`
# 제목 1
## 제목 2
### 제목 3
\`\`\`

### 강조

\`\`\`
*이탤릭체* 또는 _이탤릭체_
**굵게** 또는 __굵게__
~~취소선~~
\`\`\`

### 링크

\`\`\`
[링크 텍스트](URL)
\`\`\`

### 이미지

\`\`\`
![대체 텍스트](이미지 URL)
\`\`\`

### 목록

\`\`\`
1. 첫 번째 항목
2. 두 번째 항목
3. 세 번째 항목

- 항목 1
- 항목 2
- 항목 3
\`\`\`

### 인용문

\`\`\`
> 인용문
\`\`\`

### 코드

\`\`\`
인라인 코드는 \`이렇게\` 작성합니다.

\`\`\`
코드 블록은 이렇게 작성합니다.
\`\`\`
\`\`\`

마크다운을 사용하면 블로그 포스트를 더 쉽고 체계적으로 작성할 수 있습니다!
    `
  },
  {
    id: 5,
    title: 'React와 함께 사용하는 CSS 프레임워크',
    date: '2025-05-05',
    tags: ['React', 'CSS', '프론트엔드'],
    excerpt: 'React 프로젝트에서 사용할 수 있는 다양한 CSS 프레임워크에 대해 알아봅니다.',
    content: `
# React와 함께 사용하는 CSS 프레임워크

React 애플리케이션을 개발할 때 스타일링을 위한 다양한 CSS 프레임워크와 라이브러리가 있습니다. 이 글에서는 React와 함께 자주 사용되는 CSS 프레임워크에 대해 알아보겠습니다.

## 1. Tailwind CSS

![Tailwind CSS](https://placeholder.pics/svg/150x50/DEDEDE/555555/Tailwind%20CSS)

Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 미리 정의된 클래스를 조합하여 스타일을 적용합니다.

### 장점
- 빠른 개발 속도
- 높은 커스터마이징 가능성
- 작은 번들 사이즈 (PurgeCSS를 사용할 경우)

### 설치 방법
\`\`\`bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init
\`\`\`

## 2. Material-UI

Material-UI는 Google의 Material Design을 React 컴포넌트로 구현한 라이브러리입니다.

### 장점
- 완성도 높은 컴포넌트
- 일관된 디자인 시스템
- 접근성 지원

### 설치 방법
\`\`\`bash
npm install @mui/material @emotion/react @emotion/styled
\`\`\`

## 3. Styled-components

Styled-components는 CSS-in-JS 라이브러리로, JavaScript 파일 내에서 CSS를 작성할 수 있게 해줍니다.

### 장점
- 컴포넌트 단위의 스타일링
- 동적 스타일링 용이
- 스코프 제한된 스타일

### 설치 방법
\`\`\`bash
npm install styled-components
\`\`\`

## 4. Bootstrap

React Bootstrap은 Bootstrap을 React 컴포넌트로 재구현한 라이브러리입니다.

### 장점
- 익숙한 Bootstrap 컴포넌트
- 반응형 디자인
- 풍부한 문서화

### 설치 방법
\`\`\`bash
npm install react-bootstrap bootstrap
\`\`\`

## 5. Chakra UI

Chakra UI는 접근성과 사용성에 중점을 둔 컴포넌트 라이브러리입니다.

### 장점
- 모듈식 컴포넌트
- 테마 시스템
- 다크 모드 지원

### 설치 방법
\`\`\`bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
\`\`\`

## 결론

각 CSS 프레임워크와 라이브러리는 저마다의 장단점이 있습니다. 프로젝트의 요구사항, 팀의 경험, 개인 선호도에 따라 적합한 도구를 선택하는 것이 중요합니다.
    `
  }
];