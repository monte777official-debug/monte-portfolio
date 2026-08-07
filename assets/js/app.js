(function () {
  const CONFIG = window.SITE_CONFIG || {};
  const ITEMS = window.SITE_ITEMS || [];

  // ---- apply brand config ----
  const brandLogoEl = document.getElementById("brandLogo");
  if (CONFIG.logoImage) {
    brandLogoEl.classList.add("has-image");
    brandLogoEl.innerHTML = `<img src="${CONFIG.logoImage}" alt="logo" />`;
  } else {
    brandLogoEl.classList.remove("has-image");
    brandLogoEl.textContent = CONFIG.logoGlyph || "M";
  }
  document.getElementById("brandName").textContent = CONFIG.brand || "PORTFOLIO";
  document.getElementById("tagline").textContent = CONFIG.tagline || "";
  document.getElementById("footerText").textContent = CONFIG.footerText || "";
  document.title = (CONFIG.brand || "Portfolio") + " — Portfolio";

  // ---- state ----
  let state = {
    type: "all", // all | image | video
    category: "all",
    sort: "newest",
  };

  const galleryEl = document.getElementById("gallery");
  const pillsEl = document.getElementById("categoryPills");
  const typeTabs = document.querySelectorAll(".type-tab");
  const sortSelect = document.getElementById("sortSelect");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");

  function categoriesForType(type) {
    const set = new Set();
    ITEMS.forEach((item) => {
      if (type === "all" || item.type === type) set.add(item.category);
    });
    return Array.from(set);
  }

  function renderPills() {
    const cats = categoriesForType(state.type);
    let html = `<button class="pill ${state.category === "all" ? "active" : ""}" data-cat="all">전체</button>`;
    cats.forEach((cat) => {
      html += `<button class="pill ${state.category === cat ? "active" : ""}" data-cat="${escapeHtml(
        cat
      )}">${escapeHtml(cat)}</button>`;
    });
    pillsEl.innerHTML = html;
    pillsEl.querySelectorAll(".pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat;
        render();
      });
    });
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));
  }

  function getFilteredSorted() {
    let list = ITEMS.filter((item) => {
      if (state.type !== "all" && item.type !== state.type) return false;
      if (state.category !== "all" && item.category !== state.category) return false;
      return true;
    });
    list = list.slice();
    if (state.sort === "newest") {
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (state.sort === "oldest") {
      list.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    return list;
  }

  function cardTemplate(item) {
    const posterSrc = item.type === "video" ? item.thumb : item.file;
    const playBadge = item.type === "video" ? `<div class="play-badge">▶</div>` : "";
    return `
      <div class="card" data-id="${item.id}">
        <div class="card-media">
          <img src="${item.file && item.type === 'image' ? item.file : posterSrc}" loading="lazy" alt="${escapeHtml(item.title)}" draggable="false" oncontextmenu="return false" />
          ${playBadge}
          <div class="card-caption">${escapeHtml(item.title)}</div>
        </div>
      </div>
    `;
  }

  function render() {
    renderPills();
    const list = getFilteredSorted();
    if (list.length === 0) {
      galleryEl.innerHTML = `<div class="empty-state">아직 이 카테고리에 콘텐츠가 없어요. media/data.js에 항목을 추가해보세요.</div>`;
      return;
    }
    galleryEl.innerHTML = list.map(cardTemplate).join("");
    galleryEl.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.id));
    });
  }

  function openModal(id) {
    const item = ITEMS.find((i) => i.id === id);
    if (!item) return;

    const mediaHtml =
      item.type === "video"
        ? `<video src="${item.file}" controls autoplay playsinline poster="${item.thumb || ""}" controlsList="nodownload noremoteplayback" disablePictureInPicture oncontextmenu="return false"></video>`
        : `<img src="${item.file}" alt="${escapeHtml(item.title)}" draggable="false" oncontextmenu="return false" />`;

    modalBody.innerHTML = `
      <div class="modal-media">${mediaHtml}</div>
      <div class="modal-meta-row">
        <span class="tag-badge">${escapeHtml(item.category)}</span>
        <span>${escapeHtml(item.tool || "")}</span>
        <span>·</span>
        <span>${escapeHtml(item.date || "")}</span>
      </div>
      <h2 class="modal-title">${escapeHtml(item.title)}</h2>
      <div class="modal-desc-box">${escapeHtml(item.desc || "")}</div>
      <div class="modal-actions">
        <button class="btn-secondary" id="modalCloseBtn2" style="flex:1">닫기</button>
      </div>
    `;
    modalOverlay.classList.add("open");
    document.getElementById("modalCloseBtn2").addEventListener("click", closeModal);
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    modalBody.innerHTML = "";
  }

  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  typeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      typeTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      state.type = tab.dataset.type;
      state.category = "all";
      render();
    });
  });

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });

  // ---- basic download deterrents (not foolproof, but blocks casual save/drag) ----
  document.addEventListener("contextmenu", (e) => {
    if (e.target.closest(".card-media, .modal-media")) e.preventDefault();
  });
  document.addEventListener("dragstart", (e) => {
    if (e.target.tagName === "IMG" || e.target.tagName === "VIDEO") e.preventDefault();
  });

  render();
})();
