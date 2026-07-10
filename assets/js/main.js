(function () {
  "use strict";

  /* 다크 모드 토글 */
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* 스크롤 시 요소 fade-in / slide-in */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Pagefind 검색 UI 초기화 */
  var searchEl = document.getElementById("search");
  if (searchEl && typeof window.PagefindUI === "function") {
    new window.PagefindUI({
      element: "#search",
      showSubResults: true,
      resetStyles: false,
      translations: { placeholder: "찾으시는 용어를 입력하세요" }
    });
  }

  /* 방문자 우클릭/복사 제한 (저작권 보호용 UX, 접근성 기능은 유지) */
  var isFormField = function (el) {
    return el && el.closest && el.closest("input, textarea, select, [contenteditable]");
  };
  document.addEventListener("contextmenu", function (e) {
    if (e.target.closest("main, footer") && !isFormField(e.target)) e.preventDefault();
  });
  document.addEventListener("copy", function (e) {
    if (e.target.closest && e.target.closest("main, footer") && !isFormField(e.target)) {
      e.preventDefault();
    }
  });
})();
