---
brand: "지식 / 가독성 — 일본·한국 한방 위키 long-form"
persona: "editorial"
language: "ja-ko"
colors:
  primary: "#2A2520"
  accent: "#C8923A"
  bg-primary: "#FBF9F5"
  bg-secondary: "#F1ECE3"
  text-primary: "#1F1B16"
  text-secondary: "#6B5F50"
  border: "#E5DDCE"
  status-success: "#6B7B3E"
  status-warning: "#B8702E"
  status-error: "#A83838"
  status-info: "#5A6F8E"
type:
  heading: "'Noto Serif JP', 'Noto Serif KR', 'Source Serif Pro', serif"
  body: "'Noto Serif JP', 'Noto Serif KR', 'Source Serif Pro', serif"
  scale: [13, 15, 17, 22, 30, 44]
  weight: [400, 600, 700]
spacing: [4, 8, 16, 24, 40, 64]
radius:
  sm: 4
  md: 8
  lg: 12
shadows:
  sm: "0 1px 2px 0 rgb(31 27 22 / 0.04)"
  md: "0 2px 6px -1px rgb(31 27 22 / 0.06)"
  lg: "0 8px 20px -4px rgb(31 27 22 / 0.10)"
  modal: "0 24px 48px -12px rgb(31 27 22 / 0.20)"
---

# 1. Brand Identity

지식 페르소나. 일본·한국 한방 (kanpo / 한방) 위키·교육 컨텐츠를 위한 long-form 가독성 디자인. 무드는 **종이 위의 활자**다. 차별 키워드는 *세리프 본문* + *따뜻한 종이톤*. 사용 맥락은 위키·아카이브·교과서적 정보 페이지.

# 2. Colors

| role | hex | use |
|------|-----|-----|
| primary | `#2A2520` | 본문 텍스트·주요 링크 (heading 톤과 일치) |
| accent | `#C8923A` | 인용·하이라이트·외부 링크 (warm amber) |
| bg-primary | `#FBF9F5` | 메인 배경 (warm paper off-white) |
| bg-secondary | `#F1ECE3` | 인용 블록·각주·사이드바 (cream) |
| text-primary | `#1F1B16` | 본문 |
| text-secondary | `#6B5F50` | 메타·날짜·출처 |
| border | `#E5DDCE` | 구분선·각주 |
| status-success | `#6B7B3E` | 검증된 출처 |
| status-warning | `#B8702E` | 인용 주의 |
| status-error | `#A83838` | 오류·삭제됨 |
| status-info | `#5A6F8E` | 안내 |

bg가 cool off-white가 아닌 *warm* off-white인 이유는 long-form 본문에서 눈 피로를 낮추기 위함. accent amber는 *책에서 형광펜으로 칠한 자국*을 시각 메타포로 가져왔다.

# 3. Typography

- **Heading**: Noto Serif JP / Noto Serif KR. 일본어·한국어 혼재 시 동일 패밀리에서 글리프 통일.
- **Body**: 동일 serif. **본문 16~17pt**, line-height 1.7~1.8 (long-form 가독성).
- **Scale**: `13 / 15 / 17 / 22 / 30 / 44`. clinical보다 본문이 한 단계 크고 (17), heading이 더 큼 (44).
- **Weight**: 400 (본문) / 600 (강조·서브헤딩) / 700 (헤딩). 300 금지.
- **혼용 leading**: 한자(漢字)·히라가나·한글 같은 줄에서 line-height **1.7 이상** 절대 준수. 1.5 이하면 한자 위·아래 글리프가 충돌한다.

# 4. Spacing

이산 스케일 `4 · 8 · 16 · 24 · 40 · 64`. 본문 paragraph 간 `24`, 섹션 간 `40~64`. 인용 블록 padding `24`.

# 5. Corner Radius

- `sm: 4` — 인풋·각주 번호
- `md: 8` — 카드·뱃지
- `lg: 12` — **인용 블록**·이미지 카드

editorial은 둥근 형태가 *허용*된다. 종이를 모방하지만 디지털임을 인정하는 톤.

# 6. Shadows

매우 절제된 그림자. 종이 메타포는 *그림자가 거의 없는* 톤이다.

- `sm` — 카드 hover 힌트
- `md` — 부유 카드 (사이드바에서 빠져나온 카드)
- `lg` — 사진·이미지 강조
- `modal` — 모달 한정

# 7. Core Components

- **Button**
  - variants: `primary` (filled `#2A2520`) / `secondary` (border) / `link` (underlined)
  - sizes: `sm (32h)` / `md (40h)` / `lg (48h)`
  - states: default / hover (accent 1px underline) / disabled / loading
- **Card** — `bg-secondary`, `radius: lg`, `padding: 24`, `shadow: sm`
- **Quote / Blockquote** — `border-left: 3px solid accent`, `padding-left: 24`, italic body
- **Footnote** — superscript 번호 `accent`, hover시 popover
- **TOC (목차)** — sticky sidebar, active item `accent` 좌측 1px bar
- **Tag / Category** — `radius: sm`, `border 1px`, 텍스트 `text-secondary`
- **Modal** — `bg-primary`, `radius: lg`, `shadow: modal`

# 8. Design Rationale

editorial 페르소나는 *읽기 시간 5분 이상*의 글을 쓰는 사람을 위해 설계되었다. 한국 한방·일본 kanpo 정보는 본질적으로 long-form이며, 시각적으로는 *책*에 가까워야 한다. serif 본문 + warm paper bg + 1.7 line-height의 조합은 우연이 아니라 **읽기 피로 최소화**라는 단일 목적에서 도출된 세 결정이다.

primary가 `#2A2520`인 이유는 *순수 검정*이 종이 위에서 너무 강하기 때문이다. 책에서 잉크는 절대 `#000`이 아니다 — 흡수·번짐 후 약간 따뜻한 갈색 톤을 띤다. 디지털에서 그것을 모방한다.

accent amber `#C8923A`는 *형광펜* 메타포다. ‘여기 중요’를 텍스트 색이 아니라 *밑줄·인용 블록 좌측 바*로만 쓴다 — 본문 색을 바꾸면 시각 산만.

heading scale 44pt까지 큰 이유는 long-form 페이지에서 H1 한 번이 *책 표지*처럼 강해야 하기 때문이다. 페이지에 H1은 한 번뿐이라는 정보 위계가 시각적으로 강제된다.

**Trinity 가드 (Casper — 사용성)**: 일본어·한국어 혼용 페이지에서 line-height 1.7 이상 절대 준수. 한자 위·아래 글리프 충돌은 가독성을 *치명적*으로 깎는다. 또한 출처 표기는 본문 컬러가 아니라 `text-secondary`로 *분리*되어야 한다 (검증되지 않은 정보를 본문 톤으로 흘려보내지 않는다).

**안티 패턴 (이 페르소나에서 절대 X)**:

- sans-serif 본문 (페르소나 정체성 손실)
- bg-primary가 `#FFFFFF` 순백 (눈 피로 — 종이 메타포 위반)
- line-height 1.5 이하 (한자·한글 글리프 충돌)
- accent를 본문 강조에 사용 (밑줄·인용 블록만 허용)
- 화려한 그라디언트·neon (책 톤과 정반대)
- pill 버튼·circular avatar (편집 톤과 어긋남)
