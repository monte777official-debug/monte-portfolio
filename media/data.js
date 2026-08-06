/**
 * ============================================================
 *  포트폴리오 콘텐츠 데이터
 * ============================================================
 *  새 이미지/영상을 추가하고 싶으면:
 *   1) 이미지 파일은 media/images/ 폴더에, 영상 파일은 media/videos/ 폴더에 복사
 *      (영상은 media/thumbs/ 폴더에 미리보기 썸네일 jpg도 함께 넣어주세요)
 *   2) 아래 SITE_ITEMS 배열 맨 앞이나 뒤에 항목을 하나 복사해서 붙여넣고 값만 수정
 *   3) index.html을 새로고침하면 바로 반영됩니다 (카테고리 필터도 자동 생성됨)
 *
 *  category 값을 새로운 이름으로 적으면 필터 버튼이 자동으로 하나 더 생깁니다.
 * ============================================================
 */

window.SITE_CONFIG = {
  brand: "MONTE",
  logoGlyph: "M",              // logoImage가 없을 때만 사용되는 대체 글자
  logoImage: "media/images/logo-pig.png",  // 로고 이미지 (지우면 다시 글자 로고로 돌아감)
  tagline: "내가 직접 만든 이미지와 숏폼 영상을 모아두는 공간",
  footerText: "© 2026 MONTE Portfolio. Made with AI tools.",
};

window.SITE_ITEMS = [
  // ---------- 게임에셋: Cozy Healing Icons ----------
  {
    id: "heal-cover-main",
    type: "image",
    category: "게임에셋",
    tags: ["힐링게임", "아이콘팩", "커버"],
    title: "Cozy Healing Icons — 커버",
    desc: "itch.io에 올린 힐링게임 아이콘팩의 대표 커버 이미지입니다.",
    tool: "AI 일러스트",
    file: "media/images/cover-main.jpg",
    date: "2026-07-30",
  },
  {
    id: "heal-cover-1",
    type: "image",
    category: "게임에셋",
    tags: ["힐링게임", "아이콘팩", "미리보기"],
    title: "아이콘팩 미리보기 1",
    desc: "20종 힐링 아이콘 구성 미리보기 모음.",
    tool: "AI 일러스트",
    file: "media/images/cover-preview-1.jpg",
    date: "2026-07-30",
  },
  {
    id: "heal-cover-2",
    type: "image",
    category: "게임에셋",
    tags: ["힐링게임", "아이콘팩", "미리보기"],
    title: "아이콘팩 미리보기 2",
    desc: "20종 힐링 아이콘 구성 미리보기 모음.",
    tool: "AI 일러스트",
    file: "media/images/cover-preview-2.jpg",
    date: "2026-07-30",
  },
  {
  id: "cafe-ipad",
  type: "image",
  category: "일상",            // 새 카테고리라 필터 버튼도 자동으로 생겨
  tags: ["데일리", "작업"],
  title: "카페에서 작업 중",
  desc: "야간 카페에서 아이패드로 작업하는 컷",
  tool: "",
  file: "media/images/cafe-ipad.jpg",
  date: "2026-08-06",
},
  // ---------- 댄스숏츠 ----------

  {
    id: "dance-freestyle",
    type: "video",
    category: "댄스숏츠",
    tags: ["씨댄스", "숏폼"],
    title: "프리스타일 댄스 숏츠",
    desc: "실내 공간을 배경으로 한 캐릭터 합성 댄스 숏폼 영상.",
    tool: "Seedance / C Dance",
    file: "media/videos/dance-freestyle.mp4",
    thumb: "media/thumbs/dance-freestyle.jpg",
    date: "2026-07-16",
  },
];
