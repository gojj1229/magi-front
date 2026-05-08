---
brand: "정제된 한국 의료 — 신뢰·가독성 우선"
persona: "clinical"
language: "ko"
colors:
  primary: "#0F6E7C"
  accent: "#4A8C7A"
  bg-primary: "#FAFBFC"
  bg-secondary: "#F2F5F7"
  text-primary: "#0F1419"
  text-secondary: "#5A6772"
  border: "#DCE3E8"
  status-success: "#2D7A4E"
  status-warning: "#B8702E"
  status-error: "#B83A3A"
  status-info: "#2B6CB0"
type:
  heading: "Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
  body: "Pretendard, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
  scale: [12, 14, 16, 20, 28, 40]
  weight: [400, 500, 700]
spacing: [4, 8, 16, 24, 40, 64]
radius:
  sm: 4
  md: 8
  lg: 12
shadows:
  sm: "0 1px 2px 0 rgb(15 20 25 / 0.04)"
  md: "0 2px 6px -1px rgb(15 20 25 / 0.06), 0 1px 3px -1px rgb(15 20 25 / 0.04)"
  lg: "0 8px 20px -4px rgb(15 20 25 / 0.08), 0 4px 8px -4px rgb(15 20 25 / 0.04)"
  modal: "0 24px 48px -12px rgb(15 20 25 / 0.18)"
---

# 1. Brand Identity

정제된 한국 의료 / 한의원 페르소나. 무드는 **차분한 신뢰**다. 차별 키워드는 *맑은 청록 (clean teal)* + *여백 절제*. 사용 맥락은 한의원·의료기관 웹·환자용 안내 화면. 환자가 처음 마주하는 화면에서 *과장 없이* 신뢰를 전달해야 하는 자리.

# 2. Colors

| role | hex | use |
|------|-----|-----|
| primary | `#0F6E7C` | 주요 CTA, 핵심 인터랙션 (예약·문의)만 |
| accent | `#4A8C7A` | 보조 강조, 인용·태그 (전체 면적 5% 미만) |
| bg-primary | `#FAFBFC` | 메인 배경 (쿨톤 off-white, 안정감) |
| bg-secondary | `#F2F5F7` | 카드·섹션 분리 |
| text-primary | `#0F1419` | 본문 (near-black, 콘트라스트 AAA) |
| text-secondary | `#5A6772` | 메타·보조 정보 |
| border | `#DCE3E8` | 카드·인풋 외곽선 |
| status-success | `#2D7A4E` | 예약 완료·정상 |
| status-warning | `#B8702E` | 주의 (효능 단언과 분리) |
| status-error | `#B83A3A` | 오류·취소 |
| status-info | `#2B6CB0` | 안내 |

primary는 채도를 의도적으로 낮춘 deep teal. 푸른 의료 톤의 관성에서 한 발 비킨 채도로 *기성 병원 UI*와 시각적으로 분리한다.

# 3. Typography

- **Heading**: Pretendard (한글 가독성 + Latin 균형). serif는 채택하지 않음 — 의료 정보는 *읽는* 텍스트가 아니라 *훑는* 텍스트.
- **Body**: Pretendard 동일. 본문 16, line-height 1.6. 한자·로마자·숫자 혼용 시 자간 -0.01em 기본.
- **Scale**: `12 / 14 / 16 / 20 / 28 / 40`. 본문 16이 기본 base. 헤딩 28 이상은 페이지 1개당 최대 1회.
- **Weight**: 400 (본문) / 500 (라벨·서브헤딩) / 700 (헤딩). 300 이하 금지 — 가독성 손실.

# 4. Spacing

이산 스케일 `4 · 8 · 16 · 24 · 40 · 64`. 임의값 금지. 버튼 padding·카드 gap·섹션 마진 전부 이 스케일.

- 인라인 (`gap`): 4 / 8 / 16
- 컴포넌트 내부 (`padding`): 8 / 16 / 24
- 섹션 분리: 40 / 64

# 5. Corner Radius

- `sm: 4` — 인풋·뱃지
- `md: 8` — **기본** (버튼·카드)
- `lg: 12` — 모달·큰 카드 한정

`xl` 이상·`full` (pill·circular) 사용 금지. 의료 페르소나는 *너무 둥근* 형태를 사용하지 않는다 — 친근함보다 정합·정밀이 우선.

# 6. Shadows

- `sm` — 카드 hover hint
- `md` — 카드 default
- `lg` — 떠오르는 패널 (예: dropdown)
- `modal` — 모달·시트

콘트라스트는 의도적으로 약하게. 의료 UI에서 강한 그림자는 *영업 톤*으로 읽힌다.

# 7. Core Components

- **Button**
  - variants: `primary` / `secondary` (border + text) / `ghost` (text only)
  - sizes: `sm (32h)` / `md (40h)` / `lg (48h)`
  - states: default / hover (primary +6% lightness) / disabled (40% opacity) / loading
- **Card** — `bg-secondary`, `radius: md`, `padding: 24`, `shadow: md`
- **Input** — height 40, `radius: sm`, focus ring `primary` 2px
- **Modal** — `bg-primary`, `radius: lg`, `shadow: modal`, backdrop `rgb(15 20 25 / 0.40)`
- **Badge / Tag** — `radius: sm`, status 컬러 사용

# 8. Design Rationale

clinical 페르소나의 핵심은 **의도된 차분함**이다. 한국 의료 시장에서 환자가 *처음* 보는 화면은 신뢰의 1차 결정 지점이다. 채도가 높은 청록을 쓰면 *영업적*으로 보이고, 채도를 너무 낮추면 *오래된 관공서*처럼 보인다. `#0F6E7C`는 그 사이 좁은 영역에 의도적으로 자리잡았다.

폰트가 Pretendard 단일인 이유는 *읽는 길이*보다 *훑는 정보*가 압도적이기 때문이다. 진료 시간·약 종류·예약 슬롯·증상 체크리스트는 serif로 흐르게 하면 안 된다. radius `md` 고정·`full` 금지 역시 같은 맥락 — 환자에게 친근함보다 *정밀*하게 보여야 한다.

여백 스케일을 `4·8·16·24·40·64`로 굵게 끊은 것도 의도다. 의료 화면은 *섹션 간 분리*가 명확해야 한다. 진료 안내와 가격·동의서·연락처가 같은 시각 단위에 들어가면 환자가 정보를 잘못 묶는다.

**Trinity 가드 (Balthasar — 안전)**: 의료법·약사법상 효능 단언 시각 시그널 금지. ✓ / 별 / 등급 표시 / 비교 그래프를 ‘이 약/시술이 다른 것보다 효과적임’을 *암시*하도록 쓰지 않는다. status-success는 **예약 완료**·**결제 정상**같은 *프로세스 결과*에만 쓰고, 효능 결과에는 절대 쓰지 않는다.

**안티 패턴 (이 페르소나에서 절대 X)**:

- 채도 높은 청·녹 그라디언트 (영업·헬스케어 스타트업 톤)
- pill·circular 버튼 (친근 톤 — clinical과 충돌)
- 효능 비교 그래프·별점·트로피 아이콘 (Balthasar 위반)
- 본문 14 이하 (가독성 우선 — 환자 중 시니어 비중 高)
- gradient text·neon glow (의료 신뢰와 정반대)
