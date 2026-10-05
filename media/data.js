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
  brand: "이현우",
  logoGlyph: "H",              // logoImage가 없을 때만 사용되는 대체 글자
  logoImage: "media/images/logo-pig.png",  // 로고 이미지 (지우면 다시 글자 로고로 돌아감)
  tagline: "내가 직접 만든 이미지와 숏폼 영상을 모아두는 공간",
  footerText: "© 2026 MONTE Portfolio. Made with AI tools.",
};

window.SITE_ITEMS = [

  // ---------- 공포 ----------
  {
    id: "alley-creature",
    type: "video",
    category: "공포",
    tags: ["공포", "골목", "크리처"],
    title: "골목",
    desc: "밤골목에서 실루엣 인물이 거미형 크리처로 변이하는 공포 숏폼.",
    tool: "",
    file: "media/videos/alley-creature.mp4",
    thumb: "media/thumbs/alley-creature.jpg",
    date: "2026-10-06",
  },
  {
    id: "afterschool-guest",
    type: "video",
    category: "공포",
    tags: ["공포", "교실", "숏폼"],
    title: "교실",
    desc: "방과 후 교실 일상에서 복도 괴물로 급전하는 학교 공포 숏폼.",
    tool: "",
    file: "media/videos/afterschool-guest.mp4",
    thumb: "media/thumbs/afterschool-guest.jpg",
    date: "2026-10-06",
  },
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
  // ---------- 일상 ----------
  {
    id: "rooftop-daily",
    type: "image",
    category: "일상",
    tags: ["데일리"],
    title: "루프탑에서",
    desc: "루프탑에서 찍은 데일리 컷.",
    tool: "",
    file: "media/images/사람2.jpg",
    date: "2026-08-06",
  },
  {
    id: "after-workout",
    type: "image",
    category: "일상",
    tags: ["데일리", "셀카"],
    title: "운동후",
    desc: "운동 후 찍은 캐주얼 셀카 컷.",
    tool: "",
    file: "media/images/운동후.jpg",
    date: "2026-08-06",
  },
  {
    id: "person-1",
    type: "image",
    category: "일상",
    tags: ["데일리"],
    title: "일상1",
    desc: "도심에서 찍은 데일리 컷.",
    tool: "",
    file: "media/images/사람1.jpg",
    date: "2026-08-06",
  },
  {
    id: "pasta-daily",
    type: "video",
    category: "일상",
    tags: ["데일리", "숏폼"],
    title: "파스타 만들기 — 냉장고 앞",
    desc: "냉장고 앞에서의 소소한 일상을 담은 짧은 영상.",
    tool: "",
    file: "media/videos/파스타.mp4",
    thumb: "media/thumbs/파스타.jpg",
    date: "2026-08-06",
  },

  // ---------- 캐릭터 ----------
  {
    id: "frog-sticker-1",
    type: "image",
    category: "캐릭터",
    tags: ["캐릭터", "스티커"],
    title: "개구리 스티커 1",
    desc: "귀여운 개구리 캐릭터 스티커 일러스트.",
    tool: "AI 일러스트",
    file: "media/images/캐릭터.jpg",
    date: "2026-08-06",
  },
  {
    id: "frog-sticker-2",
    type: "image",
    category: "캐릭터",
    tags: ["캐릭터", "스티커"],
    title: "개구리 스티커 2",
    desc: "귀여운 개구리 캐릭터 스티커 일러스트.",
    tool: "AI 일러스트",
    file: "media/images/캐릭터2.jpg",
    date: "2026-08-06",
  },
  {
    id: "frog-sticker-3",
    type: "image",
    category: "캐릭터",
    tags: ["캐릭터", "스티커"],
    title: "개구리 스티커 3",
    desc: "귀여운 개구리 캐릭터 스티커 일러스트.",
    tool: "AI 일러스트",
    file: "media/images/캐릭터3.jpg",
    date: "2026-08-06",
  },
  {
    id: "yeoso-character",
    type: "video",
    category: "캐릭터",
    tags: ["AI캐릭터", "KlingAI"],
    title: "어서오세요 — 캐릭터 연기",
    desc: "KlingAI로 제작한 개성있는 캐릭터 연기 숏폼 영상.",
    tool: "KlingAI 3.0",
    file: "media/videos/어서오세요.mp4",
    thumb: "media/thumbs/어서오세요.jpg",
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

  // ---------- 광고 ----------
  {
    id: "candle-ad",
    type: "video",
    category: "광고",
    tags: ["광고영상", "제품컷"],
    title: "코지 캔들 광고 — 인물 없는 제품 컷",
    desc: "아로마 캔들 제품 광고 숏폼. 2026년 해외 트렌드(세로형, 매크로 클로즈업, ASMR 텍스처)를 참고해 MONTE만의 피치 코랄 톤으로 제작.",
    tool: "Seedance 2.0",
    file: "media/videos/candle-ad.mp4",
    thumb: "media/thumbs/candle-ad.jpg",
    date: "2026-08-06",
  },
];
