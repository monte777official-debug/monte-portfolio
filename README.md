# 내 포트폴리오 사이트

BLANC 갤러리 사이트 스타일(마소너리 그리드 + 카테고리 필터 + 정렬 + 클릭 시 상세 모달)을 참고해서 만든
개인 이미지/영상 포트폴리오입니다.

## 폴더 구조

```
portfolio/
├── index.html              ← 메인 페이지 (거의 수정할 일 없음)
├── assets/
│   ├── css/style.css        ← 디자인(색상, 레이아웃) 수정은 여기서
│   └── js/app.js             ← 동작 로직 (필터/정렬/모달)
├── media/
│   ├── data.js               ← ★ 콘텐츠 목록 + 브랜드 이름/문구 설정 (제일 자주 만질 파일)
│   ├── images/                ← 이미지 파일
│   ├── videos/                ← 영상 파일 (mp4)
│   └── thumbs/                ← 영상 미리보기용 썸네일 이미지
```

## 콘텐츠 새로 추가하는 법

1. **이미지 추가**
   - `media/images/` 폴더에 이미지 파일(jpg/png)을 넣습니다.
   - `media/data.js` 파일을 열어 `window.SITE_ITEMS = [ ... ]` 배열 맨 위에 아래 형식을 복사해서 붙여넣고 값을 수정합니다.

   ```js
   {
     id: "고유한-영문-아이디",
     type: "image",
     category: "카테고리명",       // 새 이름을 쓰면 필터 버튼이 자동으로 하나 생깁니다
     tags: ["태그1", "태그2"],
     title: "제목",
     desc: "설명 문구",
     tool: "사용한 도구 이름 (선택)",
     file: "media/images/파일명.jpg",
     date: "2026-08-06",
   },
   ```

2. **영상 추가**
   - `media/videos/` 폴더에 mp4 파일을 넣습니다.
   - 썸네일이 필요합니다. 터미널(ffmpeg 설치되어 있으면)에서:
     ```
     ffmpeg -i media/videos/파일명.mp4 -ss 00:00:01 -vframes 1 -vf "scale=720:-2" media/thumbs/파일명.jpg
     ```
   - `media/data.js`에 아래 형식을 추가합니다.

   ```js
   {
     id: "고유한-영문-아이디",
     type: "video",
     category: "카테고리명",
     tags: ["태그1"],
     title: "제목",
     desc: "설명 문구",
     tool: "사용한 도구 이름 (선택)",
     file: "media/videos/파일명.mp4",
     thumb: "media/thumbs/파일명.jpg",
     date: "2026-08-06",
   },
   ```

3. 저장하고 `index.html`을 새로고침하면 바로 반영됩니다. 코드를 더 건드릴 필요 없어요.

## 브랜드 이름 / 문구 바꾸기

`media/data.js` 맨 위 `window.SITE_CONFIG` 부분에서 사이트 이름, 로고 글자, 소개 문구, 하단 문구를 바꿀 수 있습니다.

## 로컬에서 미리보기

폴더를 통째로 다운받은 뒤 `index.html`을 더블클릭해서 바로 열어도 정상적으로 보입니다
(fetch 대신 `<script>` 태그로 데이터를 불러오는 방식이라 파일을 직접 열어도 작동합니다).

## 온라인에 올리는 법 (무료 호스팅 추천)

### 방법 A — Cloudflare Pages (드래그 앤 드롭, 추천)
1. https://pages.cloudflare.com 접속 후 무료 계정 가입/로그인
2. "Create a project" → "Upload assets" (또는 "Direct Upload") 선택
3. 이 `portfolio` 폴더 전체를 드래그해서 업로드
4. 몇 초 후 `xxxxx.pages.dev` 형태의 주소가 발급됩니다 (예시 사이트 BLANC도 이 방식으로 호스팅되어 있어요)
5. 이후 콘텐츠를 추가하면 같은 폴더를 다시 업로드하기만 하면 됩니다

### 방법 B — GitHub Pages
1. GitHub에 새 저장소를 만들고 이 폴더 내용을 그대로 업로드(push)
2. 저장소 Settings → Pages → Branch를 `main`으로 설정 후 저장
3. `https://내아이디.github.io/저장소이름` 주소로 접속 가능

두 방법 다 무료이고, 나중에 media/ 폴더와 data.js만 업데이트해서 재배포하면 계속 콘텐츠를 늘려갈 수 있습니다.
