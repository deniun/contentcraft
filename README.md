# CONTENT CRAFT - 콘텐츠크래프트

**E-commerce Content Production**

> 이커머스 브랜드를 위한 전문 콘텐츠 제작 서비스 - 쇼핑몰 상세페이지 디자인 & 제품 홍보 숏폼 영상 제작

---

## 📌 프로젝트 개요

콘텐츠크래프트의 공식 원페이지 랜딩 웹사이트입니다. 블랙 미니멀 디자인을 기반으로 한 현대적이고 세련된 인터페이스로, 이커머스 콘텐츠 제작 서비스를 효과적으로 소개합니다.

### 🎯 주요 목적
- 서비스 소개 및 브랜드 정체성 전달
- 상세페이지 디자인 & 숏폼 영상 제작 서비스 홍보
- 잠재 고객 문의 유도 (CTA 중심 설계)

---

## 🚀 주요 기능

### ✅ 완성된 기능

#### 1. **블랙 미니멀 디자인**
- 다크 배경 (#0B0B0C) 기반 고급스러운 UI/UX
- 화이트/라이트 그레이 텍스트로 가독성 최적화
- 포인트 컬러(민트 #61E7D5) 최소 사용으로 세련미 강조

#### 2. **반응형 레이아웃**
- 데스크톱, 태블릿, 모바일 완벽 대응
- 모바일 우선 설계(Mobile-first approach)
- 유연한 그리드 시스템 (CSS Grid + Flexbox)

#### 3. **인터랙티브 요소**
- 스크롤 페이드인 애니메이션
- Navbar 스크롤 시 고정 및 스타일 변화
- 통계 숫자 카운트업 애니메이션
- 버튼 호버 이펙트 및 트랜지션

#### 4. **서비스 섹션**
- 상세페이지 디자인 서비스 소개
- 숏폼 영상 제작 서비스 소개
- 각 서비스별 특장점 리스트업

#### 5. **포트폴리오 섹션**
- 실제 작업물 예시 6개 (상세페이지 3개 + 숏폼 영상 3개)
- 호버 시 카테고리 표시
- 반응형 그리드 레이아웃

#### 6. **연락처 & CTA**
- 전화/이메일 즉시 연결 링크
- 대표, 전화, 이메일, 주소 정보 표시
- 문의 유도 CTA 버튼 (전화/이메일)

#### 6. **타이포그래피**
- 영문: Space Grotesk (Google Fonts)
- 한글: Noto Sans KR (Google Fonts)
- 계층적 폰트 크기 및 자간 설정

---

## 📂 프로젝트 구조

```
content-craft/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 전체 스타일시트
├── js/
│   └── main.js         # 인터랙션 스크립트
└── README.md           # 프로젝트 문서
```

---

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - 모던 스타일링 (Grid, Flexbox, Custom Properties)
- **JavaScript (Vanilla)** - 인터랙션 및 애니메이션

### 외부 라이브러리
- **Google Fonts** - Space Grotesk, Noto Sans KR
- **Font Awesome 6.4.0** - 아이콘 시스템

### 디자인 시스템
- **컬러 팔레트**
  - Background: `#0B0B0C`
  - Primary Text: `#F5F5F5`
  - Secondary Text: `#BFC3C7`
  - Line/Border: `#2A2D31`
  - Accent: `#61E7D5`

---

## 🎨 디자인 특징

### 블랙 미니멀 무드
- 불필요한 장식 제거
- 넉넉한 여백(White space) 활용
- 타이포그래피 중심 레이아웃
- 깔끔한 라인과 그리드 시스템

### 타이포그래피 계층
- Hero Title: 42px ~ 72px (반응형)
- Section Title: 36px ~ 56px
- Body Text: 14px ~ 20px
- 자간(Letter-spacing) 세밀 조정

### 애니메이션
- Fade-in 효과 (Intersection Observer)
- Smooth scroll behavior
- 카운터 애니메이션
- 버튼 호버 트랜지션

---

## 📱 반응형 브레이크포인트

```css
/* 데스크톱 (기본) */
Default: 1200px+

/* 태블릿 */
@media (max-width: 768px)

/* 모바일 */
@media (max-width: 480px)
```

---

## 🔧 커스터마이징 가이드

### 1. 색상 변경
`css/style.css` 파일 상단의 CSS 변수를 수정하세요:

```css
:root {
    --color-bg: #0B0B0C;           /* 배경색 */
    --color-text-primary: #F5F5F5; /* 주요 텍스트 */
    --color-text-secondary: #BFC3C7; /* 보조 텍스트 */
    --color-line: #2A2D31;         /* 구분선 */
    --color-accent: #61E7D5;       /* 포인트 컬러 */
}
```

### 2. 연락처 정보 수정
`index.html` 파일에서 다음 부분을 수정하세요:

```html
<!-- Navbar 전화번호 -->
<a href="tel:010-8941-2403" class="nav-phone">

<!-- Contact Section -->
<a href="tel:010-8941-2403">010-8941-2403</a>
<a href="mailto:contentcraft.korea@gmail.com">contentcraft.korea@gmail.com</a>
```

### 3. 서비스 내용 수정
`index.html`의 Services Section에서 카드 내용 수정:

```html
<div class="service-card fade-in">
    <h3 class="service-title">YOUR SERVICE NAME</h3>
    <p class="service-description">YOUR DESCRIPTION</p>
    <ul class="service-features">
        <li><i class="fas fa-check"></i>특징 1</li>
        <li><i class="fas fa-check"></i>특징 2</li>
    </ul>
</div>
```

### 4. 통계 숫자 변경
`index.html`의 About Section에서 `data-target` 속성 수정:

```html
<div class="stat-number" data-target="100">0</div>
```

---

## 🌐 배포 방법

### GitHub Pages
1. GitHub 저장소 생성
2. 프로젝트 파일 업로드
3. Settings > Pages 에서 배포 설정

### Netlify
1. Netlify 계정 생성
2. "Add new site" > "Deploy manually"
3. 프로젝트 폴더 드래그 앤 드롭

### Vercel
1. Vercel 계정 생성
2. "Import Project" 선택
3. GitHub 저장소 연결 후 배포

---

## 📞 실제 연락처 정보

- **회사명**: 콘텐츠크래프트 (CONTENT CRAFT)
- **대표**: 김대연 | CEO
- **전화**: 010-8941-2403
- **이메일**: contentcraft.korea@gmail.com
- **주소**: 인천시 서구 파랑로 495, 청라에이스하이테크시티 2동 823호

---

## 🚧 향후 개선 사항

### 추가 예정 기능
- [ ] 포트폴리오 갤러리 섹션
- [ ] 고객 후기/리뷰 섹션
- [ ] 문의 폼 (Form submission)
- [ ] FAQ 아코디언
- [ ] 블로그/케이스 스터디 링크
- [ ] 다국어 지원 (KR/EN 전환)
- [ ] SEO 최적화 강화
- [ ] 애널리틱스 연동 (GA4)

### 성능 최적화
- [ ] 이미지 최적화 (WebP 포맷)
- [ ] CSS/JS 압축(Minify)
- [ ] 폰트 로딩 최적화
- [ ] Lazy loading 적용

---

## 📄 라이선스

이 프로젝트는 콘텐츠크래프트의 공식 웹사이트로, 모든 디자인 및 콘텐츠의 저작권은 콘텐츠크래프트에 있습니다.

---

## 🙏 크레디트

- **디자인 & 개발**: AI-powered Web Development
- **폰트**: Google Fonts (Space Grotesk, Noto Sans KR)
- **아이콘**: Font Awesome

---

## 📮 문의

프로젝트 관련 문의사항은 아래로 연락해 주세요:

- **이메일**: contentcraft.korea@gmail.com
- **전화**: 010-8941-2403

---

**© 2024 CONTENT CRAFT. All rights reserved.**
