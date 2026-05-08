// ============================================================
// 자동차 내장재 시험 표준 가이드 - Main App
// ============================================================

const App = {
  state: {
    lang: localStorage.getItem('lang') || 'ko',
    searchOpen: false,
  },

  init() {
    this.bindLangToggle();
    this.bindSearch();
    this.applyLang();
    this.renderPage();
    this.bindLightbox();
  },

  // ─── 언어 처리 ───
  applyLang() {
    document.documentElement.lang = this.state.lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) el.placeholder = text;
    });
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.state.lang);
    });
  },

  t(key) {
    const parts = key.split('.');
    let val = I18N[this.state.lang];
    for (const p of parts) {
      if (val && typeof val === 'object') val = val[p];
      else return key;
    }
    return val || key;
  },

  text(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[this.state.lang] || obj.ko || obj.en || '';
  },

  bindLangToggle() {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.lang = btn.dataset.lang;
        localStorage.setItem('lang', this.state.lang);
        this.applyLang();
        this.renderPage();
      });
    });
  },

  // ─── 검색 ───
  bindSearch() {
    const btns = document.querySelectorAll('.search-btn');
    const modal = document.querySelector('.search-modal');
    const input = document.querySelector('.search-modal__input');
    const close = document.querySelector('.search-modal__close');
    if (!btns.length || !modal) return;

    const open = () => {
      modal.classList.add('active');
      this.state.searchOpen = true;
      setTimeout(() => input?.focus(), 50);
      this.renderSearchResults('');
    };
    const closeFn = () => {
      modal.classList.remove('active');
      this.state.searchOpen = false;
      input.value = '';
    };

    btns.forEach(btn => btn.addEventListener('click', open));
    close?.addEventListener('click', closeFn);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeFn(); });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
      if (e.key === 'Escape' && this.state.searchOpen) closeFn();
    });

    input?.addEventListener('input', (e) => {
      this.renderSearchResults(e.target.value);
    });
  },

  // ─── 이미지 라이트박스 (시험장비 사진 클릭 시 확대) ───
  bindLightbox() {
    // 라이트박스 DOM이 없으면 생성
    if (!document.querySelector('.image-lightbox')) {
      const lb = document.createElement('div');
      lb.className = 'image-lightbox';
      lb.innerHTML = `
        <button class="image-lightbox__close" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <img src="" alt="">
      `;
      document.body.appendChild(lb);
    }
    const lightbox = document.querySelector('.image-lightbox');
    const lbImg = lightbox.querySelector('img');

    // 시험장비 이미지 클릭 → 라이트박스 열기 (이벤트 위임)
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.tagName === 'IMG' && target.closest('.equipment-figure')) {
        lbImg.src = target.src;
        lbImg.alt = target.alt;
        lightbox.classList.add('active');
      } else if (target.closest('.image-lightbox') && !target.closest('img:not(.image-lightbox__close img)')) {
        // 배경 또는 닫기 버튼 클릭 시 닫기 (이미지 자체 클릭은 제외)
        if (target.tagName !== 'IMG' || target.closest('.image-lightbox__close')) {
          lightbox.classList.remove('active');
        }
      }
    });

    // ESC로 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
      }
    });
  },

  getAllTests() {
    const items = [];
    Object.values(TESTS_DATA).forEach(brand => {
      Object.values(brand.categories).forEach(cat => {
        cat.tests.forEach(test => {
          items.push({ brand, cat, test });
        });
      });
    });
    return items;
  },

  renderSearchResults(query) {
    const container = document.querySelector('.search-results');
    if (!container) return;

    const q = query.trim().toLowerCase();
    const all = this.getAllTests();

    let results = all;
    if (q) {
      results = all.filter(({ brand, cat, test }) => {
        const haystack = [
          this.text(brand.name), this.text(brand.fullName),
          this.text(cat.name),
          this.text(test.name), this.text(test.sub),
          this.text(test.overview), test.standard
        ].join(' ').toLowerCase();
        return haystack.includes(q);
      });
    }

    if (results.length === 0) {
      container.innerHTML = `
        <div class="search-empty">
          <div class="search-empty__title">${this.t('search.noResults')}</div>
        </div>`;
      return;
    }

    const highlight = (text, q) => {
      if (!q) return text;
      const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(re, '<mark>$1</mark>');
    };

    container.innerHTML = results.slice(0, 30).map(({ brand, cat, test }) => `
      <a class="search-result" href="test.html?brand=${brand.id}&cat=${cat.id}&test=${test.id}">
        <div class="search-result__top">
          <div class="search-result__title">${highlight(this.text(test.name), q)}</div>
          <div class="search-result__meta">${this.text(brand.name)} · ${this.text(cat.name)}</div>
        </div>
        <div class="search-result__desc">${highlight(this.text(test.overview), q)}</div>
      </a>
    `).join('');
  },

  // ─── 페이지 렌더링 ───
  renderPage() {
    const page = document.body.dataset.page;
    if (page === 'home') this.renderHome();
    else if (page === 'category') this.renderCategory();
    else if (page === 'test') this.renderTest();
  },

  // ─── HOME ───
  renderHome() {
    const grid = document.querySelector('[data-render="brand-grid"]');
    if (!grid) return;

    const brands = Object.values(TESTS_DATA);
    const planned = [
      { id: 'hyundai', name: { ko: '현대·기아', en: 'Hyundai · Kia' }, sub: { ko: '국내 자동차 표준', en: 'Korean automotive standards' } },
      { id: 'toyota',  name: { ko: '토요타',     en: 'Toyota' },        sub: { ko: '일본 자동차 표준', en: 'Japanese automotive standards' } },
      { id: 'vw',      name: { ko: '폭스바겐',   en: 'Volkswagen' },    sub: { ko: '독일 자동차 표준', en: 'German automotive standards' } },
      { id: 'iso',     name: { ko: 'ISO',        en: 'ISO' },           sub: { ko: '국제 표준화 기구', en: 'International Standards' } },
      { id: 'astm',    name: { ko: 'ASTM',       en: 'ASTM' },          sub: { ko: '미국 재료시험학회', en: 'American Society for Testing and Materials' } },
    ];

    const cards = [];
    let idx = 1;
    brands.forEach(brand => {
      const numTests = Object.values(brand.categories).reduce((s, c) => s + c.tests.length, 0);
      const numCats = Object.keys(brand.categories).length;
      cards.push(`
        <a class="brand-card animate-fade-up delay-${Math.min(idx, 4)}" href="brand.html?id=${brand.id}">
          <div class="brand-card__num">No. 0${idx}</div>
          <div class="brand-card__arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 L17 7 M9 7 L17 7 L17 15"/></svg>
          </div>
          <div class="brand-card__name">${this.text(brand.name)}</div>
          <div class="brand-card__sub">${this.text(brand.fullName)}</div>
          <div class="brand-card__meta">
            <div><strong>${numCats}</strong> ${this.t('misc.categories')}</div>
            <div><strong>${numTests}</strong> ${this.t('misc.tests')}</div>
          </div>
        </a>
      `);
      idx++;
    });

    planned.forEach(p => {
      cards.push(`
        <div class="brand-card is-coming animate-fade-up delay-4">
          <div class="brand-card__num">No. 0${idx}</div>
          <div class="brand-card__tag">${this.t('misc.comingSoon')}</div>
          <div class="brand-card__name">${this.text(p.name)}</div>
          <div class="brand-card__sub">${this.text(p.sub)}</div>
          <div class="brand-card__meta">
            <div>—</div>
          </div>
        </div>
      `);
      idx++;
    });

    grid.innerHTML = cards.join('');
  },

  // ─── BRAND / CATEGORY ───
  renderCategory() {
    const params = new URLSearchParams(window.location.search);
    const brandId = params.get('id');
    const brand = TESTS_DATA[brandId];
    if (!brand) {
      document.querySelector('main').innerHTML = `
        <div class="container" style="padding:120px 0;text-align:center">
          <h1 style="font-size:48px;color:var(--fiti-blue);font-family:var(--font-display);font-weight:700;">404</h1>
          <p style="margin-top:20px;color:var(--text-secondary)">Brand not found</p>
          <a href="index.html" class="btn btn--ghost" style="margin-top:32px;">← Home</a>
        </div>`;
      return;
    }

    document.title = `${this.text(brand.fullName)} · 자동차 내장재 시험 표준 가이드`;

    const totalTests = Object.values(brand.categories).reduce((s, c) => s + c.tests.length, 0);

    const hero = document.querySelector('[data-render="brand-hero"]');
    if (hero) {
      hero.innerHTML = `
        <section class="brand-hero">
          <div class="container">
            <div class="breadcrumb">
              <a href="index.html">${this.t('nav.home')}</a>
              <span class="sep">/</span>
              <a href="index.html#brands">${this.t('nav.brands')}</a>
              <span class="sep">/</span>
              <span>${this.text(brand.name)}</span>
            </div>
            <div class="brand-hero__eyebrow">${this.t('misc.brand')} · No. 01 · KOLAS Accredited</div>
            <h1 class="brand-hero__title">${this.text(brand.name)}</h1>
            <p class="brand-hero__subtitle">${this.text(brand.fullName)} — ${totalTests} ${this.t('misc.tests')} across ${Object.keys(brand.categories).length} ${this.t('misc.categories')}</p>
          </div>
        </section>
      `;
    }

    const grid = document.querySelector('[data-render="cat-grid"]');
    if (grid) {
      grid.innerHTML = Object.values(brand.categories).map((cat, i) => `
        <div class="cat-card animate-fade-up delay-${Math.min(i+1, 4)}">
          <div class="cat-card__head">
            <div class="cat-card__roman">${cat.roman}</div>
            <div class="cat-card__count">
              <strong>${cat.tests.length}</strong>
              ${this.t('misc.tests')}
            </div>
          </div>
          <div class="cat-card__title">${this.text(cat.name)}</div>
          <div class="cat-card__title-en">${cat.name.en}</div>
          <div class="cat-card__tests">
            ${cat.tests.map(test => `
              <a class="cat-card__test-link" href="test.html?brand=${brand.id}&cat=${cat.id}&test=${test.id}">
                <span>${this.text(test.name)}</span>
                <span>${test.standard.split(',')[0].trim()}</span>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('');
    }
  },

  // ─── TEST DETAIL ───
  renderTest() {
    const params = new URLSearchParams(window.location.search);
    const brandId = params.get('brand');
    const catId = params.get('cat');
    const testId = params.get('test');
    const brand = TESTS_DATA[brandId];
    const cat = brand?.categories[catId];
    const test = cat?.tests.find(t => t.id === testId);

    if (!test) {
      document.querySelector('main').innerHTML = `
        <div class="container" style="padding:120px 0;text-align:center">
          <h1 style="font-size:48px;color:var(--fiti-blue);font-family:var(--font-display);font-weight:700;">404</h1>
          <p style="margin-top:20px;color:var(--text-secondary)">Test not found</p>
          <a href="index.html" class="btn btn--ghost" style="margin-top:32px;">← Home</a>
        </div>`;
      return;
    }

    document.title = `${this.text(test.name)} · ${this.text(brand.name)}`;

    const container = document.querySelector('[data-render="test-detail"]');
    if (!container) return;

    const fields = [
      { num: '01', label: this.t('detail.overview'),  content: this.text(test.overview),  mono: false },
      { num: '02', label: this.t('detail.sample'),    content: this.text(test.sample),    mono: true  },
      { num: '03', label: this.t('detail.equipment'), content: this.text(test.equipment), mono: false, image: test.image, imageCaption: this.text(test.equipment) },
      { num: '04', label: this.t('detail.method'),    content: this.text(test.method),    mono: false },
      { num: '05', label: this.t('detail.result'),    content: this.text(test.result),    mono: true  },
      { num: '06', label: this.t('detail.standard'),  content: test.standard,             mono: true  },
    ];

    container.innerHTML = `
      <div class="container">
        <div class="detail">
          <div class="breadcrumb">
            <a href="index.html">${this.t('nav.home')}</a>
            <span class="sep">/</span>
            <a href="brand.html?id=${brand.id}">${this.text(brand.name)}</a>
            <span class="sep">/</span>
            <span>${this.text(cat.name)}</span>
          </div>

          <div class="detail__head animate-fade-up">
            <div class="detail__category">${cat.roman} · ${this.text(cat.name)}</div>
            <h1 class="detail__title">${this.text(test.name)}</h1>
            <div class="detail__subtitle">${this.text(test.sub)}</div>
          </div>

          <div class="detail__grid animate-fade-up delay-1">
            ${fields.map(f => `
              <div class="field">
                <div class="field__label">
                  <span class="field__label-num">${f.num} / 06</span>
                  <span class="field__label-text">${f.label}</span>
                </div>
                <div class="field__content${f.mono ? ' field__content--mono' : ''}">
                  ${f.content}
                  ${f.image ? `
                    <figure class="equipment-figure">
                      <img src="${f.image}" alt="${f.imageCaption}" loading="lazy" onerror="this.parentElement.style.display='none'">
                    </figure>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="detail__back">
            <a href="brand.html?id=${brand.id}" class="btn btn--ghost">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="transform:rotate(180deg)"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              ${this.t('detail.backToList')}
            </a>
          </div>

          ${this.renderRelated(brand, cat, test)}
        </div>
      </div>
    `;
  },

  renderRelated(brand, cat, currentTest) {
    const related = cat.tests.filter(t => t.id !== currentTest.id).slice(0, 3);
    if (related.length === 0) return '';
    return `
      <div style="margin-top:80px;padding-top:48px;border-top:1px solid var(--line)">
        <div class="eyebrow" style="margin-bottom:24px;">— ${this.t('detail.relatedTests')}</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:16px;">
          ${related.map(t => `
            <a href="test.html?brand=${brand.id}&cat=${cat.id}&test=${t.id}"
               style="display:block;padding:24px;background:#fff;border:1px solid var(--line);border-radius:var(--radius-lg);transition:all 0.3s ease;"
               onmouseover="this.style.borderColor='var(--fiti-blue-light)';this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shadow-md)';"
               onmouseout="this.style.borderColor='var(--line)';this.style.transform='';this.style.boxShadow='';">
              <div style="font-family:var(--font-mono);font-size:11px;color:var(--fiti-blue);letter-spacing:0.15em;font-weight:600;margin-bottom:8px;">${cat.roman}</div>
              <div style="font-family:var(--font-display);font-size:18px;font-weight:700;color:var(--text-primary);line-height:1.3;margin-bottom:12px;">${this.text(t.name)}</div>
              <div style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted);letter-spacing:0.08em;">${t.standard.split(',')[0]}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
