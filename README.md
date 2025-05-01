# React GitHub Pages 블로그

React와 GitHub Pages를 사용하여 만든 개인 블로그 프로젝트입니다.

## 주요 기능

1. **기본 블로그 기능**
   - 포스트 목록 표시
   - 개별 포스트 페이지
   - 반응형 디자인

2. **마크다운 지원**
   - 마크다운 포맷으로 포스트 작성 가능
   - 코드 하이라이팅 지원

3. **블로그 관리 시스템**
   - 새 포스트 작성/편집/삭제
   - 로컬 스토리지 기반 데이터 관리
   - 포스트 내보내기/가져오기

4. **태그 및 검색 기능**
   - 태그별 포스트 분류
   - 전체 포스트 검색 기능

5. **사용자 경험 개선 기능**
   - 다크 모드 지원
   - 포스트 목차 자동 생성
   - 댓글 시스템
   - 소셜 미디어 공유 버튼
   - 관련 포스트 추천

## 시작하는 방법

1. **프로젝트 설정**
```bash
# 저장소 클론
git clone https://github.com/[your-username]/my-blog.git
cd my-blog

# 의존성 설치
npm install
```

2. **개발 서버 실행**
```bash
npm start
```

3. **빌드 및 배포**
```bash
npm run deploy
```

## 사용자 지정 방법

1. `package.json` 파일의 "homepage" 속성을 자신의 GitHub Pages URL로 변경하세요.
2. 블로그 제목, 로고 등을 자신의 정보로 업데이트하세요.
3. `/src/data/` 디렉토리의 샘플 포스트를 자신의 컨텐츠로 교체하세요.

## 기술 스택

- React
- React Router
- GitHub Pages
- React Markdown
- LocalStorage API

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새 브랜치를 만듭니다 (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 제출합니다.

## 라이센스

MIT 라이센스에 따라 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 감사의 말

- Create React App
- React Router
- React Markdown
- GitHub Pages
