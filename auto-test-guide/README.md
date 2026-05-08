# 자동차 내장재 시험 표준 가이드

> **FITI Testing & Research Institute** · Automotive Interior Testing Standards Guide

[FITI시험연구원](https://www.fiti.re.kr) — KOLAS 제1호 국제공인시험기관 — 의 자동차 내장재 시험 가이드를 정리한 정적 웹사이트입니다. 글로벌 자동차 제조사 및 국제 표준 기구의 시험 방법을 한 곳에서 확인할 수 있습니다. HTML5 + Vanilla JavaScript로 만들어졌으며, GitHub Pages 또는 Firebase Hosting에 바로 배포할 수 있습니다.

## 🎨 디자인

FITI시험연구원 브랜드 아이덴티티(신뢰와 믿음의 블루 컬러)를 반영했습니다.

- **Primary Blue**: `#0058b8` (FITI 시그니처 블루)
- **Deep Navy**: `#003a7a` (FITI 메인 딥 블루)
- **Sky Blue**: `#e8f1fb` (얕은 블루 배경)
- **Typography**: Inter (영문 디스플레이) + Noto Sans KR (한글 본문) + JetBrains Mono (코드/모노)

## ✨ 주요 기능

- 🌐 **다국어 지원** (한국어 / English) — 우측 상단 토글로 즉시 전환
- 🔍 **전체 검색** — 시험명, 표준명, 키워드로 검색 (단축키 `⌘/Ctrl + K`)
- 📱 **반응형 디자인** — 데스크탑 / 태블릿 / 모바일 대응
- 🎨 **프리미엄 다크 테마** — Fraunces 세리프 + 골드 액센트
- ⚡ **빌드 도구 없음** — 순수 정적 파일, 즉시 배포 가능

## 📁 프로젝트 구조

```
.
├── index.html              # 메인 페이지 (브랜드/표준 목록)
├── brand.html              # 브랜드별 카테고리 페이지
├── test.html               # 시험 항목 상세 페이지
├── firebase.json           # Firebase Hosting 설정
├── .firebaserc             # Firebase 프로젝트 ID (수정 필요)
├── assets/
│   ├── css/
│   │   └── main.css        # 전체 스타일
│   ├── js/
│   │   ├── layout.js       # 공통 헤더/푸터
│   │   └── app.js          # 라우팅 / 검색 / 다국어 로직
│   └── data/
│       ├── tests-data.js   # 모든 시험 데이터 (르노)
│       └── i18n.js         # UI 번역
└── README.md
```

## 🚀 로컬 실행

별도의 빌드 도구가 필요 없습니다. 어떤 정적 서버라도 사용 가능:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve .

# VS Code Live Server 확장도 가능
```

브라우저에서 `http://localhost:8000` 접속.

## 🔥 Firebase Hosting 배포

### 1. Firebase CLI 설치

```bash
npm install -g firebase-tools
firebase login
```

### 2. 프로젝트 ID 설정

`.firebaserc` 파일에서 `your-firebase-project-id` 부분을 본인의 Firebase 프로젝트 ID로 변경:

```json
{
  "projects": {
    "default": "내-프로젝트-아이디"
  }
}
```

### 3. 배포

```bash
firebase deploy --only hosting
```

배포 후 `https://your-project-id.web.app` 형태의 URL로 접속 가능합니다.

## 📦 GitHub Pages 배포

1. 이 저장소를 GitHub에 푸시
2. **Settings → Pages → Source**: `Deploy from a branch` 선택
3. **Branch**: `main` / `(root)` 선택 후 저장
4. 1-2분 후 `https://[username].github.io/[repo-name]/` 에서 접속 가능

## ➕ 새 브랜드/표준 추가하기

`assets/data/tests-data.js`의 `TESTS_DATA` 객체에 새 항목을 추가하면 됩니다.

```javascript
const TESTS_DATA = {
  renault: { /* 기존 */ },

  // 신규 추가 예시
  hyundai: {
    id: "hyundai",
    name: { ko: "현대·기아", en: "Hyundai · Kia" },
    fullName: { ko: "현대·기아 자동차 시험 가이드", en: "Hyundai-Kia Testing Guide" },
    type: "brand",  // "brand" 또는 "standard"
    categories: {
      surface: {
        id: "surface",
        name: { ko: "표면검사", en: "Surface Inspection" },
        roman: "Ⅰ",
        tests: [
          {
            id: "test-id-슬러그",
            name: { ko: "시험명 한글", en: "Test Name English" },
            sub: { ko: "부제 한글", en: "Subtitle English" },
            overview: { ko: "시험 개요...", en: "Overview..." },
            sample: { ko: "표준 시료량", en: "Sample size" },
            equipment: { ko: "장비명", en: "Equipment name" },
            method: { ko: "시험 방법 설명", en: "Test method description" },
            result: { ko: "결과 단위", en: "Result unit" },
            standard: "관련 표준 코드"
          },
          // ... 더 많은 시험
        ]
      },
      // ... 더 많은 카테고리
    }
  },

  iso: {
    id: "iso",
    name: { ko: "ISO", en: "ISO" },
    type: "standard",
    // ...
  }
};
```

추가 후 페이지를 새로고침하면 메인 화면에 새 브랜드 카드가 나타납니다.

## 🎨 디자인 커스터마이징

`assets/css/main.css` 상단의 `:root` CSS 변수에서 색상/폰트를 조정할 수 있습니다:

```css
:root {
  /* FITI Brand Blue Palette */
  --fiti-primary:    #003a7a;   /* FITI 메인 딥 블루 */
  --fiti-blue:       #0058b8;   /* FITI 시그니처 블루 */
  --fiti-blue-light: #2a7fd6;   /* 밝은 블루 */
  --fiti-sky:        #e8f1fb;   /* 얕은 블루 배경 */

  /* 본문 */
  --bg-base:         #ffffff;
  --text-primary:    #1a2540;

  /* Typography */
  --font-display: 'Inter', 'Noto Sans KR', sans-serif;
  --font-body:    'Noto Sans KR', 'Inter', sans-serif;
}
```

## 🛠 기술 스택

- **HTML5** + **CSS3** (CSS Variables, Grid, Flexbox)
- **Vanilla JavaScript** (ES6+, 빌드 없음)
- **Google Fonts**: Inter, Noto Sans KR, JetBrains Mono
- **Firebase Hosting** (선택)

## 📝 라이센스

이 프로젝트의 시험 가이드 내용은 [FITI시험연구원](https://www.fiti.re.kr)의 `Renault Audit 시험가이드` 문서를 기반으로 정리되었습니다.

© 2025 FITI Testing & Research Institute. All rights reserved.
