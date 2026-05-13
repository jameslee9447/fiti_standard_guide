// 공통 헤더/푸터 컴포넌트 — FITI 스타일

const Layout = {
  header() {
    return `
      <header class="header">
        <div class="container">
          <div class="header__inner">
            <a class="brand" href="index.html">
              <div class="brand__mark"></div>
              <div class="brand__text">
                <span class="brand__name" data-i18n="siteTitle">자동차 내장재 시험 표준 가이드</span>
                <span class="brand__sub">FITI Testing & Research Institute</span>
              </div>
            </a>

            <div class="header__actions">
              <div class="lang-toggle">
                <button data-lang="ko">KO</button>
                <button data-lang="en">EN</button>
              </div>
              <button class="search-btn" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
                </svg>
              </button>
              <button class="menu-btn" aria-label="Menu">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M3 12h18M3 18h18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    `;
  },

  footer() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer__top">
            <div class="footer__col">
              <div class="footer__brand-mark">
                <div class="mark"></div>
                <div class="name">FITI</div>
              </div>
              <p class="footer__lead">
                안전하고 지속가능한 세상을 만들어 가는 KOLAS 제1호 국제공인시험기관
              </p>
              <p style="font-size:13px;color:rgba(255,255,255,0.55);line-height:1.6;">
                서울특별시 강서구 마곡중앙8로3길 79 (마곡동)<br>
                TEL 02-3299-8000 · FAX 02-3299-8161
              </p>
            </div>
            <div class="footer__col">
              <h4 data-i18n="nav.guides">시험 가이드</h4>
              <ul>
                <li><a href="brand.html?id=renault">Renault · 르노</a></li>
                <li><a href="#" style="opacity:0.5;cursor:not-allowed">Hyundai · Kia <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.15em;">SOON</span></a></li>
                <li><a href="#" style="opacity:0.5;cursor:not-allowed">Toyota <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.15em;">SOON</span></a></li>
                <li><a href="#" style="opacity:0.5;cursor:not-allowed">Volkswagen <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.15em;">SOON</span></a></li>
                <li><a href="#" style="opacity:0.5;cursor:not-allowed">ISO <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.15em;">SOON</span></a></li>
                <li><a href="#" style="opacity:0.5;cursor:not-allowed">ASTM <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.15em;">SOON</span></a></li>
              </ul>
            </div>
            <div class="footer__col">
              <h4 data-i18n="nav.related">관련 링크</h4>
              <ul>
                <li><a href="https://www.fiti.re.kr" target="_blank" rel="noopener" style="color:#fff;font-weight:500;">FITI 홈페이지 →</a></li>
              </ul>
            </div>
          </div>
          <div class="footer__bottom">
            <div>© 2025 FITI Testing & Research Institute. All rights reserved.</div>
            <div>KOLAS NO.1 · Accredited Testing Body</div>
          </div>
        </div>
      </footer>
    `;
  },

  searchModal() {
    return `
      <div class="search-modal" role="dialog">
        <div class="search-modal__panel">
          <div class="search-modal__head">
            <div class="search-modal__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
              </svg>
            </div>
            <input type="text" class="search-modal__input" data-i18n-placeholder="search.placeholder" placeholder="시험명, 표준명, 키워드 검색...">
            <button class="search-modal__close">ESC</button>
          </div>
          <div class="search-results"></div>
        </div>
      </div>
    `;
  },

  inject() {
    const headerSlot = document.querySelector('[data-slot="header"]');
    const footerSlot = document.querySelector('[data-slot="footer"]');
    const modalSlot  = document.querySelector('[data-slot="search-modal"]');
    if (headerSlot) headerSlot.outerHTML = this.header();
    if (footerSlot) footerSlot.outerHTML = this.footer();
    if (modalSlot)  modalSlot.outerHTML  = this.searchModal();
  }
};

Layout.inject();
