// assets/js/core.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. LocalStorage 데이터 초기화 검증 (데이터가 비어있으면 db.js의 하드코딩 값을 로드)
  if (!localStorage.getItem("posts_data")) {
    localStorage.setItem("posts_data", JSON.stringify(PostsData));
  }
  if (!localStorage.getItem("columns_data")) {
    localStorage.setItem("columns_data", JSON.stringify(ColumnsData));
  }
  
  // 2. 공통 UI 조각 렌더링 호출
  renderCommonHeader();
  renderCommonFooter();
  
  // 3. 페이지별 자체 초기화 로직 분기 실행
  const path = window.location.pathname;
  if (typeof initPage === "function") {
    initPage();
  }
});

// 전역 유틸리티 함수: 데이터 취득
function getStorageData(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setStorageData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
function isAdminLoggedIn() {
  return localStorage.getItem("admin_session") === "active";
}

// 공통 헤더 컴포넌트 주입
function renderCommonHeader() {
  const target = document.getElementById("common-header");
  if (!target) return;
  
  // 정적 경로 깊이 보정을 위한 상대 보정 계산기
  const rootPath = getRootPathModifier();

  target.innerHTML = `
    <div class="header-container">
      <div class="logo-area">
        <a href="${rootPath}index.html"><h1>${SiteConfig.name}</h1></a>
        <p>${SiteConfig.tagline}</p>
      </div>
      <nav>
        <ul>
          <li><a href="${rootPath}about/index.html">소개</a></li>
          <li><a href="${rootPath}author/index.html">운영자 칼럼</a></li>
          <li><a href="${rootPath}sitemap/index.html">사이트맵</a></li>
          <li><a href="${rootPath}contact/index.html">문의</a></li>
          <li><a href="${rootPath}admin/index.html" style="color:#007cba;">⚙ 관리자</a></li>
        </ul>
      </nav>
    </div>
  `;
}

// 공통 푸터 컴포넌트 주입
function renderCommonFooter() {
  const target = document.getElementById("common-footer");
  if (!target) return;

  const rootPath = getRootPathModifier();
  
  target.innerHTML = `
    <div class="footer-container">
      <div>
        <h3>${SiteConfig.name}</h3>
        <p style="font-size:0.85rem; color:#94a3b8; margin-top:0.5rem;">${SiteConfig.topic}</p>
        <p style="margin-top:1rem; font-size:0.85rem;">문의: <a href="mailto:${SiteConfig.contactEmail}" style="color:#fff;">${SiteConfig.contactEmail}</a></p>
      </div>
      <div class="footer-links">
        <h4>콘텐츠 원칙</h4>
        <ul>
          <li><a href="${rootPath}about/index.html">편집 가이드라인</a></li>
          <li><a href="${rootPath}author/index.html">운영자 프로필</a></li>
          <li><a href="${rootPath}sitemap/index.html">전체 글 목록</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>신뢰 및 법적 고지</h4>
        <ul>
          <li><a href="${rootPath}privacy/index.html">개인정보처리방침</a></li>
          <li><a href="${rootPath}terms/index.html">이용약관</a></li>
          <li><a href="${rootPath}disclaimer/index.html">면책고지</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2026 ${SiteConfig.name}. 책임 편집자: <a href="${rootPath}author/index.html" style="color:#cbd5e1; font-weight:bold; text-decoration:underline;">${SiteConfig.ownerName}</a>. All Rights Reserved.
    </div>
  `;
}

// 폴더 깊이에 맞게 동적으로 로컬 상위 도메인 이동 경로 수정기 확보
function getRootPathModifier() {
  const loc = window.location.pathname;
  if (loc.includes("/about/") || loc.includes("/author/") || loc.includes("/contact/") || 
      loc.includes("/privacy/") || loc.includes("/terms/") || loc.includes("/disclaimer/") || 
      loc.includes("/sitemap/") || loc.includes("/admin/")) {
    return "../";
  }
  return "./";
}
