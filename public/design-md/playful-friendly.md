---
brand: "Playful Friendly — 활기·소비자 브랜드 톤"
persona: "playful-friendly"
language: "ko-en"
colors:
  primary: "#8B5CF6"
  accent: "#FBBF24"
  bg-primary: "#FFFFFF"
  bg-secondary: "#FAF7FF"
  text-primary: "#1C1917"
  text-secondary: "#57534E"
  border: "#E7E5E4"
  status-success: "#84CC16"
  status-warning: "#FBBF24"
  status-error: "#F43F5E"
  status-info: "#8B5CF6"
  dark-bg-primary: "#1A1626"
  dark-bg-secondary: "#251F33"
  dark-text-primary: "#FAF7FF"
  dark-text-secondary: "#B5B0BF"
  dark-border: "#3D3447"
type:
  heading: "'Plus Jakarta Sans', 'Quicksand', 'Pretendard', sans-serif"
  body: "'Plus Jakarta Sans', 'Inter', 'Pretendard', sans-serif"
  scale: [14, 16, 18, 22, 30, 48]
  weight: [400, 600, 800]
spacing: [4, 8, 16, 24, 40, 64]
radius:
  sm: 8
  md: 12
  lg: 16
  xl: 24
  full: 9999
shadows:
  sm: "0 2px 4px 0 rgb(28 25 23 / 0.06)"
  md: "0 6px 14px -2px rgb(139 92 246 / 0.10), 0 2px 4px -2px rgb(28 25 23 / 0.04)"
  lg: "0 16px 32px -8px rgb(139 92 246 / 0.14)"
  modal: "0 32px 64px -16px rgb(28 25 23 / 0.22)"
---

# 1. Brand Identity

소비자·캐주얼 브랜드 페르소나. 무드는 **이른 아침의 에너지**다. 차별 키워드는 *vivid violet + golden yellow* + *둥근 형태 적극* + *큰 weight·큰 헤딩* + *애니메이션 친화*. 사용 맥락은 컨슈머 마케팅 페이지, 온보딩, 학습 앱, 라이프스타일 앱, 게임화 도구.

정점은 Duolingo / Notion (consumer-facing) / Headspace / Calm / Discord (consumer) / Spotify 퍼스널 페이지 / Airbnb 일부. **community와 다름** — community는 *타인과 연결의 따뜻함*, playful은 *개인 경험의 활기*.

# 2. Colors

| role | hex (light) | hex (dark) | use |
|------|-------------|------------|-----|
| primary | `#8B5CF6` | `#A78BFA` | CTA·핵심 인터랙션 (vivid violet) |
| accent | `#FBBF24` | `#FCD34D` | 보조 강조·축하·ribbon (golden yellow) |
| bg-primary | `#FFFFFF` | `#1A1626` | 메인 배경 |
| bg-secondary | `#FAF7FF` | `#251F33` | 카드·섹션 (violet 미세 tint) |
| text-primary | `#1C1917` | `#FAF7FF` | 본문 (warm near-black) |
| text-secondary | `#57534E` | `#B5B0BF` | 메타 |
| border | `#E7E5E4` | `#3D3447` | 외곽선 |
| status-success | `#84CC16` | `#A3E635` | 성공·정답·축하 (lime) |
| status-warning | `#FBBF24` | `#FCD34D` | 주의 (accent와 동일) |
| status-error | `#F43F5E` | `#FB7185` | 오류 (rose, 부드러운 red) |
| status-info | `#8B5CF6` | `#A78BFA` | 안내 (primary와 동일) |

primary violet은 *피부톤·자연색이 아닌 디지털 native 컬러*. community의 warm coral과 명확히 다름 — community는 *친밀한 사람*, playful은 *디지털 즐거움*. accent yellow는 *축하·ribbon·confetti 메타포* — vibrant 한 쌍이 즐거움 시그널.

# 3. Typography

- **Heading**: Plus Jakarta Sans / Quicksand — 둥근 geometric sans. 헤딩이 *친근하면서 또렷*해야 한다.
- **Body**: 동일 sans. 본문 16, line-height 1.6.
- **Scale**: `14 / 16 / 18 / 22 / 30 / 48`. 본문 16, heading 48까지 큼 — 큰 헤딩이 페르소나 정체성. dev-technical(32)과 정반대.
- **Weight**: 400 (본문) / 600 (서브헤딩·CTA) / 800 (메인 헤딩). 800+ extrabold가 *허용·권장*되는 유일한 페르소나.

# 4. Spacing

이산 스케일 `4 · 8 · 16 · 24 · 40 · 64`. clinical과 동일. 카드 padding 16~24, 섹션 간 40~64. 정보 밀도 낮게 — 한 화면에 너무 많이 X.

# 5. Corner Radius

- `sm: 8` — 뱃지·태그 (다른 페르소나의 sm보다 한 단계 큼)
- `md: 12` — 인풋·작은 버튼
- `lg: 16` — 카드·큰 버튼
- `xl: 24` — 모달·sheet·hero CTA
- `full: 9999` — 아바타·like·toggle·스티커

community와 함께 `full` 적극 허용. 둥근 형태가 페르소나 정체성. 직각 사용 *절대 금지* — dev-technical·institutional로 잘못 점프.

# 6. Shadows

부드럽고 *컬러 베이스가 있는* shadow. md/lg는 violet tint (`rgb(139 92 246 / X)`)로 은근한 컬러 후광.

- `sm` — 카드 default
- `md` — 카드 hover (살짝 떠오르며 violet hint)
- `lg` — 떠오르는 패널·sheet
- `modal` — 모달

# 7. Core Components

- **Button**
  - variants: `primary` (filled violet) / `secondary` (border violet) / `accent` (filled yellow — 축하·완료) / `ghost`
  - sizes: `sm (40h)` / `md (48h)` / `lg (56h)` — 5 페르소나 중 가장 큼 (터치 친화)
  - states: default / hover (살짝 scale 1.02) / active (scale 0.98) / disabled / loading
- **Card** — `bg-secondary`, `radius: lg`, `padding: 24`, `shadow: sm`
- **Avatar** — `radius: full`, sizes 32 / 48 / 72 (community보다 한 단계 큼)
- **Streak / Counter** — *시그니처*. 큰 숫자 (heading 48), accent ribbon, 가능 시 micro-animation
- **Confetti / Celebration** — 작업 완료 시 yellow accent burst
- **Pill Tab** — `radius: full`, active 시 violet bg + white text
- **Progress Ring** — gamification — 둥근 진행률 차트
- **Toast** — `radius: lg`, success/celebration variant

# 8. Design Rationale

playful-friendly는 *사용자가 즐거워야* 가치가 있는 페르소나. Duolingo가 매일 사용자를 끌어들이는 시각적 비결은 *둥근 형태 + 큰 색 + 큰 weight + micro-animation*의 누적이다. 같은 정보를 dev-technical로 보여주면 *과제*가 되고, playful로 보여주면 *놀이*가 된다.

primary violet `#8B5CF6`는 *디지털 즐거움*의 시각 코드. 채도가 높지만 너무 차갑지 않고, 너무 따뜻하지 않은 좁은 영역. saturated yellow `#FBBF24`와 페어링하면 *완벽 보색* — 시선이 지루하지 않다.

heading 48까지 크고 weight 800까지 가는 이유는 *대상 사용자가 빠르게 훑어*도 즐거움을 느껴야 하기 때문. 작은 헤딩은 *과제 톤*으로 읽힘. 굵고 크고 둥근 헤딩은 *놀이 톤*.

radius `full` 적극 허용은 community와 공통이지만, community는 *반려·친밀*의 둥근 형태이고 playful은 *놀이·축하*의 둥근 형태. micro-animation이 결정적 차이 — community는 차분, playful은 활기.

shadow에 violet tint 넣은 것은 의도. 순수 회색 shadow는 *생기 없음*으로 읽히지만, 약간의 brand color 후광은 *떠오르는 emotional weight*를 만든다.

**Trinity 가드 (Casper — 사용성)**: ① 즐거움이 *작업 방해*해선 안 됨. 모든 micro-animation은 0.2s 이내·사용자 액션 직후만. infinite loop·자동 재생 X. ② 가독성 우선 — 큰 weight가 늘 쓰기 좋은 건 아님. 본문은 400으로 유지. ③ 채도 높은 컬러 위에 텍스트 올릴 때 *콘트라스트 4.5:1* 유지 (WCAG AA).

**안티 패턴 (이 페르소나에서 절대 X)**:

- 직각 카드·radius `0` 또는 `4` (dev-technical·institutional로 잘못 점프)
- 채도 낮은 회색 톤 위주 (페르소나 정체성 손실)
- serif heading·body (editorial로 잘못 점프)
- 정보 밀도 高 (dev-technical·japanese-minimal로 잘못 점프)
- mono font 본문 (dev-technical 톤)
- 의료·금융·기관 톤 (clinical·institutional 페르소나)
- 자동 재생 애니메이션·infinite loop (사용성 위반)
- 화려함 우선 → 가독성 손실 (Casper 위반)
