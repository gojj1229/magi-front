---
brand: "Japanese Minimal — OTC·薬局 (약국) 정보밀도 미니멀"
persona: "japanese-minimal"
language: "ja"
colors:
  primary: "#0A0A0A"
  accent: "#1F8A4F"
  bg-primary: "#FFFFFF"
  bg-secondary: "#F5F5F5"
  text-primary: "#0A0A0A"
  text-secondary: "#5C5C5C"
  border: "#E0E0E0"
  status-success: "#1F8A4F"
  status-warning: "#C97A1F"
  status-error: "#B82828"
  status-info: "#2B5F8E"
type:
  heading: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif"
  body: "'Noto Sans JP', 'Hiragino Kaku Gothic ProN', sans-serif"
  scale: [11, 12, 13, 14, 18, 24]
  weight: [400, 500, 700]
spacing: [4, 8, 12, 16, 24, 40]
radius:
  sm: 4
shadows:
  sm: "0 1px 1px 0 rgb(0 0 0 / 0.04)"
  md: "0 2px 4px 0 rgb(0 0 0 / 0.06)"
  lg: "0 6px 16px -4px rgb(0 0 0 / 0.10)"
  modal: "0 16px 32px -8px rgb(0 0 0 / 0.18)"
---

# 1. Brand Identity

일본 OTC·약국·薬局 디지털 페르소나. 무드는 **薬局 점내 게시판의 깔끔함**이다. 차별 키워드는 *극단적 정보밀도* + *단일 액센트*. 사용 맥락은 일반의약품 (OTC) 정보·복약 안내·재고 현황·약국 운영 도구.

# 2. Colors

| role | hex | use |
|------|-----|-----|
| primary | `#0A0A0A` | 본문·헤딩 (near-black, 거의 순수) |
| accent | `#1F8A4F` | **유일한** 액센트 (약국·재고·success 동시) |
| bg-primary | `#FFFFFF` | 메인 배경 (순백 — 약국 진열장 톤) |
| bg-secondary | `#F5F5F5` | 카드·테이블 행 |
| text-primary | `#0A0A0A` | 본문 |
| text-secondary | `#5C5C5C` | 메타·소량·용량 단위 |
| border | `#E0E0E0` | 테이블·카드 구분선 |
| status-success | `#1F8A4F` | 재고·정상·복약 가능 (accent와 동일) |
| status-warning | `#C97A1F` | 주의·요주의 사용군 |
| status-error | `#B82828` | 금기·중단 (선명한 적색만 허용) |
| status-info | `#2B5F8E` | 안내 |

이 페르소나는 *단일 액센트* 원칙. accent와 status-success가 같은 컬러인 것은 의도다 — 색을 늘리지 않는다.

# 3. Typography

- **Heading**: Noto Sans JP. serif는 OTC 톤에 부적합 — 약국은 *읽는* 곳이 아니라 *확인*하는 곳.
- **Body**: Noto Sans JP. 12~13pt가 기본 base — 정보 밀도가 5 페르소나 중 가장 높다.
- **Scale**: `11 / 12 / 13 / 14 / 18 / 24`. heading이 24까지밖에 안 올라간다 (다른 페르소나는 36~44). 시각 위계를 *작게 유지*.
- **Weight**: 400 / 500 / 700. 일본어 한자 가독성을 위해 본문 500이 표준 (kana 본문은 400 가능).

# 4. Spacing

이산 스케일 `4 · 8 · 12 · 16 · 24 · 40`. 다른 페르소나(64까지)와 달리 64를 빼고 12를 추가했다 — *촘촘한* 정보 배치. 테이블 행 간격은 `8`, 셀 padding `12`.

# 5. Corner Radius

- `sm: 4` — **유일** (인풋·버튼·카드 전부 동일)

`md`·`lg`·`xl`·`full` 사용 금지. 일본 OTC 페르소나는 *각진* 형태가 정체성. 약국 진열장의 직각 격자 메타포.

# 6. Shadows

거의 보이지 않을 정도로 절제. 음영보다 *border*로 정보를 구분한다.

- `sm` — 카드 hover 시에만
- `md` — dropdown
- `lg` — sticky bar
- `modal` — 모달 한정

# 7. Core Components

- **Button**
  - variants: `primary` (filled black) / `secondary` (white + border) / `accent` (filled green — 단 1회/페이지)
  - sizes: `sm (28h)` / `md (32h)` / `lg (40h)` — clinical보다 작음
  - states: default / hover (1px border 강화) / disabled / loading
- **Table** — 5 페르소나 중 *유일하게* 핵심 컴포넌트. `bg-secondary` 행, border `#E0E0E0`, 셀 padding `8 12`
- **Card** — `radius: sm`, `padding: 12~16`, border 1px (shadow X)
- **Input** — height 32, `radius: sm`, focus border `accent` 1px (ring 사용 X)
- **Badge** — `radius: sm`, 11pt, padding `2 6`
- **Stepper / Quantity** — 약국 도구 전용 (재고·복약 횟수)
- **Modal** — `bg-primary`, `radius: sm`, `shadow: modal`

# 8. Design Rationale

japanese-minimal은 **정보 밀도를 잃지 않으면서 미적 청결을 유지하는** 좁은 띠를 노린다. 일본 약국은 매장 진열·복약 정보·재고 현황을 한 화면에 *동시에* 표시해야 하며, 그 어떤 정보도 색·형태로 *과장*되어서는 안 된다 — 약기법 (薬機法) 시각 시그널 규제.

base font 12~13인 이유는 일본어 *한자* 글리프가 small에서도 가독성이 유지되기 때문이다 (한글·라틴은 12에서 가독성이 떨어진다). 일본어 전용 페르소나에서만 가능한 결정이다.

radius `sm` 단일인 이유는 약국 진열장·OTC 패키지·정보 격자의 직각이 일본 약국의 시각 정체성이기 때문이다. 둥근 모서리는 *드럭스토어 마케팅*으로 잘못 읽힌다.

accent를 단일 색 (`#1F8A4F`)으로 한 이유는 일본 OTC UI에서 색을 늘리는 것이 곧 *효능 광고* 위반이기 때문이다. status-success도 같은 accent를 쓴다 — 색의 의미가 분기되지 않는다.

**Trinity 가드 (Balthasar — 안전)**: 일본 약기법 (薬機法) 준수 시각 시그널. ✓ / 별 / 등급 / 비교 그래프 / 효능 차이를 강조하는 색 분리 전부 금지. 가격·용량·복약 횟수 같은 *수치*만 강조한다. 효능은 텍스트로만 — 절대 시각 강조 X.

**안티 패턴 (이 페르소나에서 절대 X)**:

- 둥근 카드·pill 버튼 (페르소나 정체성 위반 — 드럭스토어 마케팅 톤)
- 색 2종 이상 동시 사용 (효능 강조 위반)
- bg가 `#FFFFFF` 외 (특히 cream·warm 계열 — 일본 약국 톤과 정반대)
- 본문 16 이상 (정보 밀도 손실)
- gradient·shadow 강조 (薬機法 시각 시그널)
- 친근 일러스트·이모지 (약국 톤과 어긋남)
- ✓·★·등급 표시 (Balthasar 위반)
