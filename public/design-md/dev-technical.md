---
brand: "Dev Technical / SaaS — 개발자 도구·대시보드 정점"
persona: "dev-technical"
language: "en-ko"
colors:
  primary: "#0F0F12"
  accent: "#0EA5E9"
  bg-primary: "#FAFAFA"
  bg-secondary: "#F4F4F5"
  text-primary: "#0F0F12"
  text-secondary: "#71717A"
  border: "#E4E4E7"
  status-success: "#22C55E"
  status-warning: "#F59E0B"
  status-error: "#EF4444"
  status-info: "#0EA5E9"
  dark-bg-primary: "#0A0A0F"
  dark-bg-secondary: "#18181B"
  dark-text-primary: "#FAFAFA"
  dark-text-secondary: "#A1A1AA"
  dark-border: "#27272A"
type:
  heading: "'Geist', 'Inter', system-ui, sans-serif"
  body: "'Geist', 'Inter', system-ui, sans-serif"
  mono: "'Geist Mono', 'JetBrains Mono', ui-monospace, monospace"
  scale: [12, 13, 14, 16, 22, 32]
  weight: [400, 500, 700]
spacing: [4, 8, 12, 16, 24, 40]
radius:
  sm: 4
shadows:
  sm: "0 1px 2px 0 rgb(15 15 18 / 0.04)"
  md: "0 2px 6px -1px rgb(15 15 18 / 0.06), 0 1px 3px -1px rgb(15 15 18 / 0.04)"
  lg: "0 8px 20px -4px rgb(15 15 18 / 0.08)"
  modal: "0 24px 48px -12px rgb(15 15 18 / 0.18)"
---

# 1. Brand Identity

개발자 도구·SaaS·대시보드 페르소나. 무드는 **터미널의 명료함**이다. 차별 키워드는 *near-monochrome + 단일 electric accent* + *정보 밀도 高* + *dark mode 1급 시민*. 사용 맥락은 admin 대시보드, 개발자 도구, 분석·로그 화면, B2B SaaS 마케팅·도큐먼트.

이 페르소나의 정점은 Linear / Vercel / Plausible / Notion (admin) / Stripe (developer side) / Figma의 톤. 우리 5종에 빈 슬롯이었다.

# 2. Colors

| role | hex (light) | hex (dark) | use |
|------|-------------|------------|-----|
| primary | `#0F0F12` | `#FAFAFA` | 본문·헤딩·CTA filled (mono) |
| accent | `#0EA5E9` | `#38BDF8` | 단일 electric — 링크·focus·active·info |
| bg-primary | `#FAFAFA` | `#0A0A0F` | 메인 배경 |
| bg-secondary | `#F4F4F5` | `#18181B` | 카드·코드 블록·테이블 행 |
| text-primary | `#0F0F12` | `#FAFAFA` | 본문 |
| text-secondary | `#71717A` | `#A1A1AA` | 메타·라벨·헬프 |
| border | `#E4E4E7` | `#27272A` | 외곽선·divider |
| status-success | `#22C55E` | `#22C55E` | 빌드 성공·OK·정상 |
| status-warning | `#F59E0B` | `#F59E0B` | 주의·deprecated |
| status-error | `#EF4444` | `#EF4444` | 빌드 실패·error |
| status-info | `#0EA5E9` | `#38BDF8` | accent와 동일 — 의미 분기 X |

primary가 mono인 이유는 *데이터·코드*가 화면의 주인공이기 때문. 컬러는 데이터 위계의 보조. status-info와 accent를 *같은 sky*로 두는 것은 의도 — 색을 늘리지 않는다.

# 3. Typography

- **Heading**: Geist (Vercel) / Inter / system-ui 순. *기하학적 sans*가 정점. serif·humanist sans 사용 X.
- **Body**: 동일 sans 패밀리. **본문 14~16pt**, line-height 1.5~1.6.
- **Mono**: Geist Mono / JetBrains Mono — 코드·로그·ID·해시·금액 단위 등 *기계 읽힘 텍스트* 전용.
- **Scale**: `12 / 13 / 14 / 16 / 22 / 32`. 헤딩이 다른 페르소나보다 작다 (32 max) — 정보 밀도 우선, 헤딩이 본문을 압도하지 않음.
- **Weight**: 400 (본문) / 500 (라벨·서브헤딩) / 700 (헤딩·CTA). 800+ 사용 X — playful 페르소나로 잘못 점프.

# 4. Spacing

이산 스케일 `4 · 8 · 12 · 16 · 24 · 40`. clinical(64)과 다르게 *촘촘함*. 64 미사용. japanese-minimal과 같은 정보 밀도 톤.

- 인라인: 4 / 8 / 12
- 컴포넌트 padding: 8 / 12 / 16
- 섹션 분리: 24 / 40

# 5. Corner Radius

- `sm: 4` — **유일** (luxury-trust·japanese-minimal과 동일하지만 의미 다름)

dev-technical의 4px 단일 = *Linear·Vercel 시각 코드*. 둥근 형태는 *카주얼·소비자 톤*으로 즉시 강등. radius `lg+`·`full` 사용 절대 금지.

# 6. Shadows

매우 절제. dev-technical UI는 *border로 정보 분리*하지 *shadow로 떠올리지* 않는다.

- `sm` — hover hint
- `md` — dropdown·popover
- `lg` — sticky bar
- `modal` — 모달 한정

dark mode에서 shadow는 거의 안 보인다 — border가 main divider.

# 7. Core Components

- **Button**
  - variants: `primary` (filled mono) / `secondary` (border) / `ghost` (text only) / `accent` (filled sky — focus·중요 액션 한정)
  - sizes: `sm (28h)` / `md (32h)` / `lg (40h)` — 작음. clinical(48)·playful(52) 대비
  - states: default / hover (배경 1단계 dim) / active / disabled (50% opacity) / loading (spinner mono)
- **Input** — height 32, `radius: sm`, focus border `accent` 1px (ring 사용 X — Linear 톤)
- **Code Block** — `bg-secondary`, `radius: sm`, `padding: 12 16`, mono font, syntax highlighting (별도 토큰)
- **Table** — *시그니처 컴포넌트*. 헤더 `bg-secondary` + `text-secondary`, 행 hover `bg-secondary` 절반 alpha
- **Badge / Tag** — `radius: sm`, mono font 12pt 옵션
- **Card** — `radius: sm`, `padding: 16~24`, border 1px (shadow X 기본)
- **Toast** — `radius: sm`, dark bg 기본 (light mode에서도)
- **Status Indicator** — 점 + 라벨. green(running) / amber(starting) / red(failed) / gray(idle)
- **Modal** — `bg-primary`, `radius: sm`, `shadow: modal`, backdrop `rgb(0 0 0 / 0.4)` (light) / `rgb(0 0 0 / 0.7)` (dark)

# 8. Design Rationale

dev-technical은 **데이터·코드가 주인공**인 페르소나. 사용자는 *5초간 훑어 정확히 결정*해야 한다 — 빌드 상태, 로그, 메트릭, 환경 변수. 화면이 *말을 걸면* 안 된다. 화면은 *상태를 정확히 보여주기만* 한다.

primary가 mono near-black인 이유는 *데이터의 콘트라스트가 첫 번째*이기 때문. 컬러를 추가할수록 *상태 색의 의미가 분기*해서 사용자가 헷갈린다. status-info와 accent를 같은 sky로 두는 것도 같은 이유 — 색은 *5종 status + 1 accent*에서 늘리지 않는다.

geometric sans (Geist/Inter) 단일은 *Latin 텍스트·코드·숫자*가 동일 보폭으로 흐르게 한다. 한국어가 들어오는 경우 Pretendard fallback으로 자연스럽게 받친다.

dark mode가 1급 시민인 이유는 개발자가 *밤에·터미널 옆에서·OLED 화면에서* 사용하기 때문이다. light mode는 마케팅·도큐먼트·새 사용자용 default — 그러나 admin·dashboard 본 화면은 dark가 기본일 수 있다.

heading scale 32 max인 것이 결정적이다. 다른 페르소나(40~48)는 *주목을 위한 헤딩*이지만 dev-technical은 *섹션 분리만* 하는 헤딩 — 본문보다 약간 큰 정도. 헤딩이 본문보다 크게 압도하면 정보 밀도 손실.

**Trinity 가드 (Melchior — 정확)**: ① 차트·테이블·메트릭 화면에서 *값 정확성*이 최우선. accent를 데이터 강조에 쓰지 말 것 (값이 *덜 정확해 보임*). ② mono font는 *기계 읽힘 텍스트* 전용 — 사람이 읽는 산문에 mono 사용 X. ③ status 5종(success·warning·error·info·neutral) 외 색 사용 X — 의미 분기 차단.

**안티 패턴 (이 페르소나에서 절대 X)**:

- pill·radius lg 이상 (카주얼·소비자 톤 — playful로 잘못 점프)
- 채도 높은 다색 사용 (brand 페르소나로 잘못 점프)
- gradient·neon glow·반짝이 효과 (luxury·playful 톤)
- 친근 일러스트·캐릭터 (playful 페르소나로 잘못 점프)
- 큰 헤딩 (40+) — 정보 밀도 손실
- serif heading·body (editorial로 잘못 점프)
- 본문에 mono font (기계 읽힘 텍스트가 아닌데 mono — 가독성 손실)
- accent를 데이터 강조에 사용 (값 정확성 손상 시그널)
- 채도 높은 다채색 차트 (값 비교 어려워짐 — 색은 status 5종만)
