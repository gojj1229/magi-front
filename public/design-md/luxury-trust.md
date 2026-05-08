---
brand: "Luxury / Trust — 카이토리 (買取) KR-JP 럭셔리 거래신뢰"
persona: "luxury-trust"
language: "ko-ja"
colors:
  primary: "#1A1B1E"
  accent: "#B8956A"
  bg-primary: "#FAFAF8"
  bg-secondary: "#F2F0EA"
  text-primary: "#1A1B1E"
  text-secondary: "#6A665D"
  border: "#D9D5C9"
  status-success: "#7A8E5A"
  status-warning: "#C49968"
  status-error: "#B85858"
  status-info: "#6A8FA6"
  dark-bg-primary: "#0F1012"
  dark-bg-secondary: "#1F2024"
  dark-text-primary: "#F5F2EC"
  dark-text-secondary: "#9A968D"
  dark-border: "#2C2D31"
type:
  heading: "'Noto Serif KR', 'Noto Serif JP', 'Source Serif Pro', serif"
  body: "Pretendard, 'Apple SD Gothic Neo', 'Noto Sans JP', sans-serif"
  scale: [12, 14, 16, 20, 26, 40]
  weight: [400, 500, 700]
spacing: [4, 8, 16, 24, 40, 64]
radius:
  sm: 4
shadows:
  sm: "0 1px 2px 0 rgb(26 27 30 / 0.05)"
  md: "0 4px 12px -2px rgb(26 27 30 / 0.10)"
  lg: "0 16px 32px -8px rgb(26 27 30 / 0.14)"
  modal: "0 32px 64px -16px rgb(26 27 30 / 0.28)"
---

# 1. Brand Identity

럭셔리·거래신뢰 페르소나. 한일 카이토리 (買取 = 명품 매입) 시장을 위한 dual-language 디자인. 무드는 **dimly lit gallery에서 보는 시계 케이스**다. 차별 키워드는 *serif heading + sans body* + *gold/ochre 액센트* + *각진 sm radius*. 사용 맥락은 명품 매입 견적·매도자 대시보드·정품 검증 화면.

# 2. Colors

| role | hex (light) | hex (dark) | use |
|------|-------------|------------|-----|
| primary | `#1A1B1E` | `#1A1B1E` | 본문·헤딩·CTA filled (charcoal) |
| accent | `#B8956A` | `#C9A57F` | 골드·정품 검증·고가 강조 |
| bg-primary | `#FAFAF8` | `#0F1012` | 메인 배경 (off-white / near-black) |
| bg-secondary | `#F2F0EA` | `#1F2024` | 카드·섹션 |
| text-primary | `#1A1B1E` | `#F5F2EC` | 본문 |
| text-secondary | `#6A665D` | `#9A968D` | 메타·날짜 |
| border | `#D9D5C9` | `#2C2D31` | 외곽선 |
| status-success | `#7A8E5A` | `#7A8E5A` | 견적 확정·정품 인증 |
| status-warning | `#C49968` | `#C49968` | 검증 보류 |
| status-error | `#B85858` | `#B85858` | 거절·위조 의심 |
| status-info | `#6A8FA6` | `#6A8FA6` | 안내 |

5 페르소나 중 *유일하게* dark mode가 페르소나 정체성의 일부다. 럭셔리는 어두운 갤러리 조명 메타포에서 출발한다. light mode는 일본 시장 일부와 모바일 default를 위한 옵션.

accent gold `#B8956A`는 *brushed metal* 톤. 광택 강한 노랑 (`#FFD700` 등) 사용 절대 금지 — 럭셔리에서 saturated yellow는 즉시 *모조품* 시각 코드.

# 3. Typography

- **Heading**: Noto Serif KR / Noto Serif JP. *오로지 heading만* serif. luxury heading의 정통.
- **Body**: Pretendard / Noto Sans JP — 깔끔한 sans body. serif 본문은 가독성 손실 + editorial 페르소나와 충돌.
- **Scale**: `12 / 14 / 16 / 20 / 26 / 40`. heading 40 (clinical과 같음) — 압도하지 않고 *절제된 위계*.
- **Weight**: 400 (본문) / 500 (라벨) / 700 (heading·CTA). 300 금지.

heading serif + body sans 조합은 *럭셔리 잡지·시계 카탈로그*의 표준 페어링. luxury-trust의 시각 정체성은 이 단 한 줄에서 절반이 결정된다.

# 4. Spacing

이산 스케일 `4 · 8 · 16 · 24 · 40 · 64`. 럭셔리 페르소나는 *여백*이 곧 가치 — section 간 `64`를 적극 쓴다. 카드 padding `24~40`.

# 5. Corner Radius

- `sm: 4` — **유일** (japanese-minimal과 동일하지만 의미가 다름)

각진 형태 = 럭셔리 케이스·메탈 마감·시계 lugged 디자인의 시각 코드. radius `md` 이상 사용 절대 금지 — 둥근 형태는 *카주얼*로 즉시 강등된다.

# 6. Shadows

다른 페르소나보다 *깊은* 그림자. 갤러리 조명에서 떠오르는 오브제 메타포.

- `sm` — 카드 default
- `md` — 카드 hover (살짝 떠오르는 인상)
- `lg` — 정품 검증·견적 모달 트리거
- `modal` — 모달 (배경이 어두워지면서 더 깊게 떠오름)

dark mode에서는 그림자가 *어두운 배경에서 떠오르는 광택*으로 작동한다.

# 7. Core Components

- **Button**
  - variants: `primary` (filled charcoal) / `accent` (filled gold — 정품 검증·견적 확정 한정) / `secondary` (border) / `ghost`
  - sizes: `sm (36h)` / `md (44h)` / `lg (52h)`
  - states: default / hover (배경 1px brighter + 1px shadow up) / disabled / loading
- **Card** — `bg-secondary`, `radius: sm`, `padding: 24~40`, `shadow: sm`
- **Verification Badge** — 정품 검증 마크. `accent` border + serif label. *시그니처 컴포넌트*.
- **Quote / Estimate** — 견적 카드. 큰 숫자 (heading scale), 통화 단위 `text-secondary`
- **Image Gallery** — 명품 사진. `radius: sm`, 그림자 `md`, dark bg에서 더 강조
- **Step Indicator** — 거래 진행 단계 (촬영·검수·견적·결제). `accent` active state
- **Modal** — `bg-primary`, `radius: sm`, `shadow: modal`

# 8. Design Rationale

luxury-trust는 *비싼 물건을 사고 파는 사람*에게 신뢰를 전달해야 한다. 카이토리 시장에서 매도자는 평균 수십~수백만원의 거래를 *처음 보는 화면*에서 결정한다 — 따라서 럭셔리 시각 코드와 거래 신뢰 시각 코드를 *동시에* 만족해야 한다.

heading serif + body sans 페어링은 luxury-trust의 단일 결정 중 가장 큰 비중을 차지한다. heading만 serif인 *책 표지* 메타포는 럭셔리 잡지·시계 카탈로그·고급 와인 라벨의 표준이다. 본문까지 serif로 가면 editorial로 잘못 점프한다.

primary가 `#1A1B1E`인 이유는 *순수 검정*이 럭셔리에서 너무 강하기 때문이다. 약간의 푸른 회색이 섞인 charcoal은 *시계 다이얼·메탈 케이스* 톤에 가깝다.

accent gold `#B8956A`는 brushed metal — 광택 노랑 (`#FFD700`)의 saturated yellow는 즉시 *모조품* 시그널로 읽힌다. 럭셔리에서 saturation이 높으면 *값싸 보인다*.

radius `sm` 단일은 시계 lugged design·메탈 마감의 직각 시각 코드. 럭셔리에서 둥근 형태는 *카주얼*로 즉시 강등된다.

dark mode가 페르소나 정체성의 일부인 이유는 카이토리 시장의 매도자가 *밤*에 사진을 찍고 견적을 확인하는 행동 패턴 때문이다 — 어두운 화면에서 메탈 광택이 더 강조된다.

**Trinity 가드 (Balthasar — 안전 / Casper — 사용성)**: ① 정품 검증 시그널은 *오직* `accent` 컬러 + serif 라벨로만 표현. status-success 색을 정품 검증에 쓰지 않는다 (의미 분기). ② KR/JP 양국 가독성을 위해 본문은 무조건 sans (한자·한글 혼용 시 serif 본문은 가독성 치명적 손실). ③ 견적 숫자는 항상 통화 단위와 *분리* (`￥1,200,000` 식으로 단위가 작은 텍스트로).

**안티 패턴 (이 페르소나에서 절대 X)**:

- 광택 노랑 `#FFD700`·saturated yellow (모조품 시그널)
- pill·radius `lg+`·`full` (카주얼 톤 — 럭셔리 위반)
- serif 본문 (editorial로 잘못 점프 + KR/JP 가독성 손실)
- gradient·neon glow·반짝이 효과 (모조품 톤)
- 본문에 ✓·별·트로피 (clinical로 잘못 점프 + 거래 신뢰 톤 위반)
- 채도 높은 컬러 다수 사용 (luxury는 단색 + 단일 액센트)
- bg-primary가 cream·warm 계열 (community 톤과 충돌)
