---
brand: "따뜻함 / 사회성 — 한방 라이프 커뮤니티"
persona: "community"
language: "ko"
colors:
  primary: "#E89B7A"
  accent: "#8FAB94"
  bg-primary: "#FBF6F1"
  bg-secondary: "#F4ECE2"
  text-primary: "#3A2E25"
  text-secondary: "#7A6856"
  border: "#EADFD0"
  status-success: "#7A9B5E"
  status-warning: "#D4944A"
  status-error: "#C76A6A"
  status-info: "#6E8FA6"
type:
  heading: "Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
  body: "Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
  scale: [12, 14, 16, 20, 26, 36]
  weight: [400, 500, 700]
spacing: [4, 8, 16, 24, 40, 64]
radius:
  sm: 8
  md: 12
  lg: 16
  xl: 24
shadows:
  sm: "0 1px 3px 0 rgb(58 46 37 / 0.05)"
  md: "0 4px 10px -2px rgb(58 46 37 / 0.08), 0 2px 4px -2px rgb(58 46 37 / 0.04)"
  lg: "0 12px 24px -6px rgb(58 46 37 / 0.10)"
  modal: "0 28px 56px -14px rgb(58 46 37 / 0.22)"
---

# 1. Brand Identity

따뜻한 생활 / 한방 라이프 커뮤니티 페르소나. 무드는 **이른 아침의 차 한 잔**이다. 차별 키워드는 *부드러운 코랄* + *둥근 형태*. 사용 맥락은 한방 라이프 커뮤니티·블로그·소셜 피드·일상 기록.

# 2. Colors

| role | hex | use |
|------|-----|-----|
| primary | `#E89B7A` | CTA·좋아요·핵심 인터랙션 (warm peach) |
| accent | `#8FAB94` | 보조 강조·태그·자연 모티프 (soft sage) |
| bg-primary | `#FBF6F1` | 메인 배경 (cream — 따뜻한 톤) |
| bg-secondary | `#F4ECE2` | 카드·섹션 (warm beige) |
| text-primary | `#3A2E25` | 본문 (warm charcoal — 검정 X) |
| text-secondary | `#7A6856` | 메타·작성일 |
| border | `#EADFD0` | 부드러운 외곽선 |
| status-success | `#7A9B5E` | 좋아요·성공 |
| status-warning | `#D4944A` | 주의 |
| status-error | `#C76A6A` | 오류 (날카롭지 않은 코랄) |
| status-info | `#6E8FA6` | 안내 |

community에서 *순수 검정*은 등장하지 않는다. 모든 어두운 톤이 갈색 베이스의 warm charcoal로 이동한다. 사회성·친밀의 시각 표현이다.

# 3. Typography

- **Heading**: Pretendard (친근 sans, 가벼운 톤). serif는 *거리감*을 만들어 community에 부적합.
- **Body**: Pretendard 동일. 14~16, line-height 1.6.
- **Scale**: `12 / 14 / 16 / 20 / 26 / 36`. clinical보다 heading이 작다 (36 vs 40) — 위계가 부드럽다.
- **Weight**: 400 / 500 / 700. 700은 닉네임·CTA 한정.

# 4. Spacing

이산 스케일 `4 · 8 · 16 · 24 · 40 · 64`. 카드 padding은 `16~24`로 clinical보다 작게 — 정보 밀도를 *낮추되* 카드 자체를 작게 잡는다.

# 5. Corner Radius

- `sm: 8` — 뱃지·태그
- `md: 12` — 버튼·인풋
- `lg: 16` — **카드** (커뮤니티 톤 — 둥근 형태)
- `xl: 24` — 시트·바텀시트
- `full: 9999` — 아바타·like 버튼

community는 5 페르소나 중 *유일하게* `full` 사용을 적극 허용한다. 둥근 형태 = 친밀함의 시각 코드.

# 6. Shadows

조금 더 *따뜻한* 그림자. 베이스 컬러를 갈색 톤으로 (`rgb(58 46 37)`).

- `sm` — 카드 default
- `md` — 카드 hover·dropdown
- `lg` — bottom sheet·sticky CTA
- `modal` — 모달

# 7. Core Components

- **Button**
  - variants: `primary` (filled coral) / `secondary` (filled cream) / `ghost`
  - sizes: `sm (36h)` / `md (44h)` / `lg (52h)` — 터치 타깃 한 단계 크게
  - states: default / hover / pressed / disabled
- **Card** — `bg-secondary`, `radius: lg (16)`, `padding: 16~24`, `shadow: sm`
- **Avatar** — `radius: full`, sizes 32 / 40 / 56
- **Like / Reaction** — `radius: full`, accent 컬러 트리거 시 살짝 scale up
- **Comment Thread** — `bg-secondary` 카드, indent 16
- **Tag** — `radius: sm (8)`, 양쪽 padding 12, accent border
- **Toast** — `radius: lg`, 자동 dismiss 4s

# 8. Design Rationale

community는 *친밀감*이 모든 결정의 우선 순위다. 같은 정보를 clinical로 보여주면 ‘진료 안내’가 되고, community로 보여주면 ‘이웃의 후기’가 된다 — 이 차이는 컬러·radius·spacing의 누적이다.

primary가 `#E89B7A` 코랄인 이유는 *피부톤*에 가까운 채도이기 때문이다. 사람의 톤에 가까운 색은 무의식적으로 *친밀함*을 트리거한다. 강한 빨강은 경고로 읽히고 노랑은 가벼운 마케팅으로 읽힌다 — 그 사이의 좁은 영역이 community의 자리.

radius `lg/xl/full`을 적극 쓰는 이유는 *부드러운 형태*가 사회성의 시각 코드이기 때문이다. 같은 카드라도 radius 4와 16은 다른 정서를 부른다. 4는 ‘업무 화면’, 16은 ‘친구의 메시지’.

순수 검정 대신 `#3A2E25` warm charcoal을 쓰는 이유는 community 페이지에서 검정 텍스트가 *과도하게 격식적*이기 때문이다. 갈색 톤이 섞인 텍스트는 같은 콘트라스트를 유지하면서도 친밀함을 잃지 않는다.

**Trinity 가드 (Casper — 사용성)**: 정보 밀도 의도적으로 낮게. 한 화면에 카드 4개 이상 노출 시 시각 피로 — community 페이지는 *천천히* 스크롤하는 곳이다. 빠른 정보 검색은 다른 페르소나의 일.

**안티 패턴 (이 페르소나에서 절대 X)**:

- 순수 검정 텍스트 `#000` (격식적 — 페르소나 정체성 위반)
- 채도 낮은 회색 톤 (community의 따뜻함과 정반대)
- 직각 카드 `radius: 0` (clinical 페르소나로 잘못 점프)
- serif 본문 (editorial 페르소나로 잘못 점프)
- 카드를 한 화면에 4개 이상 (정보 밀도 함정)
- 좁은 line-height (친밀감 손실)
