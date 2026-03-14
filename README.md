# CONTENT CRAFT - 콘텐츠크래프트

**E-commerce Content Production**

> 강렬하고 화려한 비주얼로 고객을 사로잡는 이커머스 콘텐츠 제작 전문 회사

---

## 🎬 프로젝트 개요

콘텐츠크래프트의 공식 웹사이트입니다. **화려한 애니메이션 배경**, **풀스크린 섹션**, **고화질 한국 포트폴리오**로 콘텐츠 제작 회사의 전문성을 표현했습니다.

### 🎯 핵심 디자인 컨셉
- **화려한 애니메이션 배경** - 움직이는 Gradient Orb와 Floating Shapes
- **고화질 한국 콘텐츠** - 네이버 스마트스토어 및 한국 이커머스 이미지
- **대형 비주얼** - 포트폴리오를 크게 크게
- **화려한 그라데이션** - 핑크, 퍼플, 골드 조합
- **풍부한 애니메이션** - 스크롤마다 역동적인 효과
- **향상된 텍스트 가독성** - Text Shadow와 Backdrop Blur 적용

---

## 🚀 주요 기능

### ✅ 완성된 기능 (2026-03-14 업데이트)

#### 1. **풀스크린 히어로 섹션 (강화됨!)**
- ✨ **화려한 애니메이션 배경**
  - 3개의 움직이는 Gradient Orb (핑크, 퍼플, 골드)
  - 4개의 Floating Shapes (다양한 모양과 색상)
  - 20초~30초 주기로 자연스럽게 움직이는 애니메이션
  - Radial gradient 배경 (#1a0033 → #0a0a0a)
- 🎨 **향상된 텍스트 가독성**
  - 타이틀에 강력한 text-shadow 적용
  - 설명 텍스트에 backdrop-blur와 반투명 배경
  - Gradient 텍스트에 glow 효과
  - 배지에 backdrop-blur와 border 강화
- 대형 타이틀 (최대 140px)
- 플로팅 배지 애니메이션
- 스크롤 힌트 (마우스 아이콘)

#### 2. **쇼케이스 섹션 - 한국 쇼핑몰 (업데이트됨!)**
- ✨ **고화질 네이버 스마트스토어 이미지**
  - 실제 한국 쇼핑몰 상세페이지 디자인
  - 2560px 고해상도 이미지
- 좌우 분할 레이아웃
- 호버 시 줌 효과
- 서비스 설명 + 특장점

#### 3. **쇼케이스 섹션 - 한국 숏폼 영상 (업데이트됨!)**
- ✨ **고화질 한국 숏폼 콘텐츠 이미지**
  - 실제 한국 숏폼 영상 썸네일
  - Pulse 애니메이션 효과 (살짝 움직이는 효과)
  - 3초 주기로 부드럽게 스케일 변화
- Play 아이콘 오버레이
- 역순 배치 레이아웃

#### 4. **포트폴리오 갤러리 - 한국 관련 (업데이트됨!)**
- ✨ **고화질 한국 이커머스 & 웹 포트폴리오**
  - 한국 웹사이트 제작 포트폴리오
  - 한국 이커머스 디자인 사례
  - 실제 한국 프로젝트 이미지
- 2열 그리드 (각 600px 높이)
- 호버 시 오버레이 + 정보 표시
- 실적 통계 표시

#### 5. **통계 섹션**
- 4개 통계 카드
- 카운터 애니메이션 (0부터 숫자 증가)
- 이모지 아이콘
- 그라데이션 숫자

#### 6. **연락처 섹션 (Bold)**
- 대형 타이틀
- 3개 연락 정보 카드
- 대형 CTA 버튼 (전화/이메일)
- 호버 효과

---

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--color-dark: #0A0A0A          (다크 배경)
--color-light: #FFFFFF         (화이트 텍스트)
--color-accent: #FF3366        (핑크)
--color-accent-2: #6366F1      (퍼플)
--color-accent-3: #F59E0B      (골드)
```

### 애니메이션 배경 (NEW!)
- **Gradient Orb 1**: 500px, 핑크 계열, 25초 주기
- **Gradient Orb 2**: 600px, 퍼플 계열, 30초 주기
- **Gradient Orb 3**: 450px, 골드 계열, 28초 주기
- **Floating Shapes**: 4개, 다양한 크기와 모양, 15초~25초 주기
- **Blur 효과**: 80px blur for orbs
- **Opacity**: 0.6 for orbs, 0.1 for shapes

### 그라데이션
- **Primary**: 핑크 → 라이트 핑크
- **Secondary**: 퍼플 → 바이올렛
- **Gold**: 오렌지 → 옐로우
- **Multi**: 핑크 → 퍼플 → 골드

### 타이포그래피
- **영문**: Space Grotesk (900 Black) - 로고 및 부가 요소
- **한글**: Noto Sans KR (900 Black) - 메인 타이틀 및 본문
- **Hero Title**: 56px ~ 110px (반응형) - "콘텐츠로 매출을 만듭니다"
- **Section Title**: 48px ~ 96px

---

## 📂 프로젝트 구조

```
content-craft/
├── index.html          # 메인 HTML (풀스크린 레이아웃)
├── css/
│   └── style.css       # 강렬한 스타일 (애니메이션 배경 추가)
├── js/
│   └── main.js         # 애니메이션 + 인터랙션
└── README.md           # 프로젝트 문서
```

---

## 🛠️ 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - Grid, Flexbox, Gradients, Keyframe Animations
- **JavaScript (Vanilla)** - Scroll Effects, Counters, AOS

### 외부 라이브러리
- **Google Fonts** - Space Grotesk, Noto Sans KR
- **Font Awesome 6.4.0** - 아이콘

### 애니메이션 기법
- CSS Keyframes (float-orb, float-shape, pulse)
- Intersection Observer (AOS)
- RequestAnimationFrame (카운터)
- Transform & Transition
- Backdrop Filter & Text Shadow

---

## 🎬 애니메이션 상세

### 히어로 배경 애니메이션 (NEW!)
```css
- Float Orb - 25s ~ 30s infinite (3개의 gradient orbs)
- Float Shape - 18s ~ 25s infinite (4개의 floating shapes)
- 각 요소마다 다른 애니메이션 딜레이
- Translate + Rotate + Scale 조합
```

### 숏폼 이미지 애니메이션 (NEW!)
```css
- Pulse - 3s infinite
- Scale 1 → 1.02 → 1
- Brightness 1 → 1.1 → 1
```

### Hero 텍스트 애니메이션 (강화됨!)
```css
- Slide Up (타이틀) - 각 줄 0.2s 딜레이
- Float (배지) - 3s infinite, backdrop-blur 강화
- Fade In (설명) - 0.8s, backdrop-blur 배경
- Text Shadow - 다층 그림자 효과
```

### 스크롤 애니메이션
- AOS (Animate On Scroll)
- Fade Up + Scale
- 0.8s 트랜지션
- 딜레이 100ms ~ 400ms

---

## 🎨 특별 효과

### 1. 향상된 텍스트 가독성 (NEW!)
- 타이틀: 이중 text-shadow (rgba(0,0,0,0.5) + rgba(0,0,0,0.3))
- 설명 텍스트: backdrop-blur(10px) + 반투명 배경
- Gradient 텍스트: drop-shadow 효과
- 배지: backdrop-blur(20px) + border 강화

### 2. 화려한 배경 애니메이션 (NEW!)
- 3개의 대형 gradient orbs
- 4개의 다양한 모양 floating shapes
- 자연스러운 움직임 (translate, rotate, scale)
- Blur 효과로 부드러운 느낌

### 3. 호버 효과
- 이미지 줌 (scale 1.1)
- 버튼 리프트 (translateY -4px)
- 그림자 강화

---

## 📱 반응형 브레이크포인트

### 데스크톱 (1024px+)
- 2열 그리드 포트폴리오
- 좌우 분할 쇼케이스

### 태블릿 (768px ~ 1024px)
- 1열 그리드
- 스택 레이아웃

### 모바일 (768px 이하)
- 전체 1열
- 버튼 풀 너비
- 패딩 축소

---

## 🔧 최근 업데이트 (2026-03-14)

### ✅ 완료된 개선 사항

#### 버전 2.0 - 메인 문구 및 이미지 개선
1. 🎯 **메인 히어로 문구 변경**
   - 변경 전: "CREATE STUNNING CONTENT" (영문, 140px)
   - 변경 후: "콘텐츠로 매출을 만듭니다" (한글, 110px)
   - 한국 기업 정체성에 맞는 명확한 메시지
   - 크기 조정으로 더 균형잡힌 레이아웃

2. 🖼️ **포트폴리오 이미지 교체**
   - "틱톡 바이럴 캠페인" → "SNS 바이럴 캠페인" (한국 소셜미디어 마케팅)
   - "쿠팡 패션 카테고리" → "패션 쇼핑몰 디자인" (한국 패션 이커머스)
   - 모두 고화질 한국 실제 프로젝트 이미지

#### 버전 1.0 - 초기 개선
1. ✨ **히어로 섹션 배경 강화**
   - 3개의 움직이는 Gradient Orbs 추가
   - 4개의 Floating Shapes 추가
   - 각각 다른 크기, 색상, 애니메이션 속도

2. 🎨 **텍스트 가독성 향상**
   - 타이틀에 강력한 text-shadow 적용
   - 설명 텍스트에 backdrop-blur 배경
   - Gradient 텍스트에 glow 효과
   - 배지 스타일 강화

3. 🖼️ **고화질 한국 이미지로 전면 교체**
   - 쇼핑몰: 네이버 스마트스토어 상세페이지 (2560px)
   - 숏폼: 한국 숏폼 콘텐츠 썸네일 (pulse 애니메이션)
   - 포트폴리오: 한국 웹사이트/이커머스 포트폴리오 4개

4. 🎬 **숏폼 섹션 개선**
   - 정적 이미지를 pulse 애니메이션으로 생동감 부여
   - 3초 주기로 부드럽게 움직임

---

## 🚧 향후 개선 사항

### 추가 예정 기능
- [ ] 실제 한국 제품 홍보 영상 (MP4)
- [ ] 더 많은 포트폴리오 (6~8개)
- [ ] 고객 후기 섹션
- [ ] 가격표 섹션
- [ ] 제작 프로세스 타임라인
- [ ] 문의 폼 (Form Submission)
- [ ] 팀 소개 섹션

### 성능 최적화
- [ ] 이미지 WebP 변환
- [ ] Lazy Loading
- [ ] CSS/JS Minify
- [ ] Critical CSS

---

## 📞 실제 연락처 정보

- **회사명**: 콘텐츠크래프트 (CONTENT CRAFT)
- **대표**: 김대연 | CEO
- **전화**: 010-8941-2403
- **이메일**: contentcraft.korea@gmail.com
- **주소**: 인천시 서구 파랑로 495, 청라에이스하이테크시티 2동 823호

---

## 📄 라이선스

이 프로젝트는 콘텐츠크래프트의 공식 웹사이트로, 모든 디자인 및 콘텐츠의 저작권은 콘텐츠크래프트에 있습니다.

---

## 🙏 크레디트

- **디자인 & 개발**: AI-powered Web Development
- **폰트**: Google Fonts
- **아이콘**: Font Awesome
- **이미지**: 고화질 한국 콘텐츠 (네이버 스마트스토어, 한국 이커머스)

---

**© 2024 CONTENT CRAFT. All rights reserved.**

**강렬한 비주얼로 브랜드를 빛내는 콘텐츠 제작의 파트너** ✨
