---
brand: "Institutional / Corporate — 기관·정부·금융 보수 신뢰"
persona: "institutional"
language: "ko-ja-en"
colors:
  primary: "#1E3A5F"
  accent: "#2C5282"
  bg-primary: "#FFFFFF"
  bg-secondary: "#F8F9FA"
  text-primary: "#1A1F2E"
  text-secondary: "#4A5568"
  border: "#CBD5E0"
  status-success: "#2D7A4E"
  status-warning: "#B47914"
  status-error: "#9B1C1C"
  status-info: "#1E3A5F"
  dark-bg-primary: "#1A1F2E"
  dark-bg-secondary: "#252B3D"
  dark-text-primary: "#E2E8F0"
  dark-text-secondary: "#A0AEC0"
  dark-border: "#2D3748"
type:
  heading: "'Pretendard', 'Noto Sans KR', 'Noto Sans JP', sans-serif"
  body: "'Pretendard', 'Noto Sans KR', 'Noto Sans JP', sans-serif"
  scale: [12, 14, 15, 18, 24, 32]
  weight: [400, 500, 700]
spacing: [4, 8, 16, 24, 40, 64]
radius:
  sm: 4
shadows:
  sm: "0 1px 2px 0 rgb(26 31 46 / 0.04)"
  md: "0 2px 4px 0 rgb(26 31 46 / 0.06)"
  lg: "0 6px 16px -4px rgb(26 31 46 / 0.10)"
  modal: "0 16px 32px -8px rgb(26 31 46 / 0.16)"
---

# 1. Brand Identity

기관·정부·금융 페르소나. 무드는 **기관의 보수적 신뢰**다. 차별 키워드는 *deep navy + 거의 없는 accent* + *각진 sm radius* + *보수 typo* + *데이터 무게감*. 사용 맥락은 정부·공공기관 사이트, 은행·증권·보험, 대기업 IR·연차보고서, 법무법인·회계법인.

정점은 정부24 / 한국은행 / 금감원 / 4대 시중은행 / 삼성·LG 글로벌 / IBM Think / Goldman Sachs / 일본 메가뱅크. **clinical과 다름** — clinical은 *환자에게 따뜻한 의료 정밀*, institutional은 *시민·고객에게 격식 있는 기관 무게감*.

# 2. Colors

| role | hex (light) | hex (dark) | use |
|------|-------------|------------|-----|
| primary | `#1E3A5F` | `#5285B8` | 본문 헤딩·CTA filled (deep navy) |
| accent | `#2C5282` | `#6499D8` | 약한 보조 강조 (거의 안 보임 — 의도) |
| bg-primary | `#FFFFFF` | `#1A1F2E` | 메인 배경 (순백) |
| bg-secondary | `#F8F9FA` | `#252B3D` | 카드·테이블 행 |
| text-primary | `#1A1F2E` | `#E2E8F0` | 본문 |
| text-secondary | `#4A5568` | `#A0AEC0` | 메타·각주·출처 |
| border | `#CBD5E0` | `#2D3748` | 표·문서 구분선 |
| status-success | `#2D7A4E` | `#48BB78` | 정상·체결·승인 (deep green) |
| status-warning | `#B47914` | `#D69E2E` | 주의·미체결 (deep amber) |
| status-error | `#9B1C1C` | `#E53E3E` | 거절·이상거래 (deep red) |
| status-info | `#1E3A5F` | `#5285B8` | 안내 (primary와 동일) |

primary와 accent의 콘트라스트가 *의도적으로 약하다*. 채도 높은 accent는 *마케팅 톤*으로 즉시 강등 — institutional에선 강조도 *조용해야* 한다. status 컬러도 모두 deep saturation — 명도 높은 saturated 컬러 사용 X.

# 3. Typography

- **Heading**: Pretendard / Noto Sans KR / Noto Sans JP — *한국·일본 institutional 시각 표준*. serif heading 옵션은 *서구 institutional* 전용 (Goldman·법무법인). 한일 컨텍스트에선 sans 채택.
- **Body**: 동일 sans. 본문 14~15pt, line-height 1.6.
- **Scale**: `12 / 14 / 15 / 18 / 24 / 32`. 보수적 — heading 32 max. clinical(40)·playful(48)보다 한 단계 작음.
- **Weight**: 400 (본문) / 500 (라벨·서브헤딩) / 700 (헤딩 한정). 800+ 절대 금지. 300 이하도 금지 — institutional은 *극단 weight 회피*.

# 4. Spacing

이산 스케일 `4 · 8 · 16 · 24 · 40 · 64`. clinical과 동일. 표·문서 톤이라 행간 적절히 — 너무 좁으면 *혼란*, 너무 넓으면 *낭비*. 16/24가 표준.

# 5. Corner Radius

- `sm: 4` — **유일** (luxury-trust·dev-technical·japanese-minimal과 동일 4px이지만 의미 다름)

institutional의 4px = *기관의 절제된 형식*. 둥근 형태는 *친밀·캐주얼·마케팅* 시그널로 강등. 정부 문서·은행 명세서·연차보고서의 직각 격자 메타포. radius `md` 이상 사용 *절대 금지*.

# 6. Shadows

매우 절제. institutional UI는 *border와 spacing으로 정보 분리*하지 *shadow로 떠올리지* 않는다.

- `sm` — 카드 default (거의 안 보임)
- `md` — dropdown
- `lg` — 떠오르는 패널 (드물게)
- `modal` — 모달 한정

# 7. Core Components

- **Button**
  - variants: `primary` (filled navy) / `secondary` (border navy) / `link` (underlined navy text)
  - sizes: `sm (32h)` / `md (40h)` / `lg (48h)`
  - states: default / hover (배경 1단계 dim·1px shadow) / disabled / loading
  - **accent 컬러 button 사용 X** — institutional은 primary 일변
- **Table** — *시그니처 컴포넌트*. 헤더 `bg-secondary` + 700 weight, 행 hover `bg-secondary` 절반 alpha, border 1px 모든 셀
- **Form Input** — height 40, `radius: sm`, focus border `accent` 1px (ring X)
- **Document Card** — 공문서 카드. `bg-secondary`, `radius: sm`, padding 24, border 1px (shadow X)
- **Statement / Statement Row** — 거래·잔액·실적 표시. 우측 정렬 숫자, 통화 단위 `text-secondary` 작게
- **Badge / Status Chip** — `radius: sm`, padding `4 8`, deep saturated 컬러
- **Footer (시그니처)** — institutional 정체성. 사업자등록번호·주소·대표·연락처 등 *법적 정보 일관 노출*. 보통 페이지 전체 footer가 길고 정확
- **Modal** — `bg-primary`, `radius: sm`, `shadow: modal`

# 8. Design Rationale

institutional은 *법적·규제·신탁 신뢰*가 최우선. 사용자는 *돈·서류·승인*을 결정하는 화면에서 *정확함과 격식*을 본다. 시각적으로 *친근*하면 *비전문성 시그널*로 읽혀 신뢰가 깎인다.

primary `#1E3A5F` deep navy인 이유는 *한국·일본 정부 + 금융 표준*이기 때문. 정부24·한국은행·각 시중은행 첫 화면이 모두 navy 계열. 글로벌 IBM·Goldman·UBS도 navy/dark blue 일변. *직관적으로 institutional*인 색.

accent와 primary의 콘트라스트가 약한 이유는 의도다. 채도 높은 accent는 *주식 거래소·은행 광고지*로 즉시 강등. institutional의 강조는 *typography weight*와 *정렬·공간*으로 — 색이 아니다.

heading scale 32 max, weight 800+ 금지인 이유는 *극단적 시각 시그널 자체가 institutional 위반*이기 때문. 정부·기관은 *도드라지면 안 된다*. 시민·고객이 *내용*을 읽도록 시각이 *비켜준다*.

footer가 시그니처 컴포넌트인 이유는 institutional 페이지에서 *법적 정보의 일관 노출*이 신뢰의 가시 부분이기 때문. 사업자등록번호·주소·대표명·소비자센터 번호가 항상 같은 자리에 있음 → 사용자 무의식 신뢰 누적.

dark mode는 institutional에서 *보조* — 주 사용 패턴이 light mode (정부 사이트·은행 명세서). 그래도 모니터 보호·접근성으로 dark 제공.

**Trinity 가드 (Balthasar — 안전 / Melchior — 정확)**: ① 데이터·금액 정확성이 디자인 정확성보다 우선. 통화 단위·소수점·반올림 표기가 일관되지 않으면 institutional 신뢰 즉시 손상. ② 법적·규제 정합성 — 광고법·금융감독·약기법·의료법 시각 시그널 모두 회피. ③ 접근성 (WCAG AA) 필수 — 시민 다수가 사용. 시니어 친화 14pt 이상 권장.

**안티 패턴 (이 페르소나에서 절대 X)**:

- 채도 높은 accent (마케팅·소비자 톤으로 즉시 강등)
- pill·radius `lg` 이상 (캐주얼·playful로 잘못 점프)
- 큰 헤딩 (40+) — institutional은 *비켜주는* 시각
- weight 800+ extrabold (페르소나 정체성 위반)
- weight 300 이하 light (가독성 손실 + 비전문성)
- gradient·neon·반짝이 (모던 SaaS·럭셔리로 잘못 점프)
- 일러스트·캐릭터 (community·playful 톤)
- 과한 shadow·떠오르는 카드 (격식 손상)
- accent button 적극 사용 (primary navy 일변이 institutional 신호)
- 채도 높은 다채색 차트 (마케팅 톤 — saturated 단색 + grayscale로)
- 친근 micro-copy ("환영합니다 🎉" 등) — 격식 있는 톤만 ("이용해 주셔서 감사합니다")
