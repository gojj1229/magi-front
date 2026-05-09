---
scope: "magi-front · cross-cutting design constitution"
applies-to: "all 8 personas (clinical · editorial · community · japanese-minimal · luxury-trust · dev-technical · playful-friendly · institutional)"
authority: "magi-front 자산 = 1급 Single Source of Truth. 타 프로젝트는 read-only 소비자."
---

# magi-front · 공통 헌법 (cross-cutting design constitution)

8 페르소나 각각의 `<persona>.md`는 *그 페르소나 한정* 헌법을 기술한다. 본 문서는 *페르소나를 가로지르는* 헌법 — 타 프로젝트(M_MAGI · F_MAGI · C_MAGI · ALLTHAT · Exit_sys 등)가 magi-front 자산을 채택할 때 *반드시* 따라야 하는 단일 룰셋.

---

# 1. SOT 헌법 (Single Source of Truth)

magi-front 자산은 1급 SOT다. 다음 4개 산출물이 단일 진실 소스다 (우선순위 순):

1. `design-md/<persona>.md` frontmatter (YAML 토큰 정의 — *최상위 SOT*)
2. `design-md/<persona>.md` 본문 (사람이 읽는 헌법)
3. `registry/styles/<persona>/registry-item.json` (`cssVars.light` / `cssVars.dark` — frontmatter의 미러)
4. `registry/styles/<persona>/theme.css` (CSS 토큰 — registry-item.json의 미러)

frontmatter ↔ registry-item.json 미러 검증은 `scripts/validate.mjs`가 56 토큰 1:1 비교로 강제한다.

## 1.1 타 프로젝트의 의무

타 프로젝트가 magi-front 페르소나를 채택할 때:

- ✅ **허용**: `curl -o ./DESIGN.md https://magi-front.vercel.app/design-md/<persona>.md` 후 *그대로* 적용
- ✅ **허용**: `npx shadcn@latest add https://magi-front.vercel.app/r/<persona>` 후 *그대로* 적용
- ⚠️ **제한적 허용**: dark/light 토큰 부족 시 *frontmatter에 정의된 dark-* 필드 사용*. frontmatter에 *없는* dark 토큰을 임의로 만드는 것은 **금지**.
- ❌ **금지**: magi-front SOT 토큰을 *임의로 보정*해서 자기 프로젝트에 박아넣기 (예: `accent: #B8956A`를 `#D4B287`로 임의 변경, dark `card: #1F2024`를 `#18191E`로 임의 변경)
- ❌ **금지**: magi-front에 정의되지 않은 토큰(예: 신규 verification 색, 신규 dark 변형)을 자기 프로젝트에서 *발명*

## 1.2 정당한 보정 절차 (SOT 우회 금지의 예외 경로)

화면 맥락이 magi-front SOT와 충돌하면 **임의 변경이 아니라 헌법 개정 제안**으로 해소한다:

1. 타 프로젝트가 보정이 필요하다고 판단 → 자기 화면을 *임시 우회 토큰*으로 작업
2. 작업 결과를 magi-wiki `_inbox/*.md` 에 드롭 (target_type: `synthesis` 또는 `decision`)
3. 보정 의도·근거·재현 조건을 명시 — 단순 취향이면 *임시 우회 토큰*만 자기 프로젝트에 남기고 magi-front SOT 변경 X
4. magi-wiki CTO가 ingest → magi-front에 반영 가치가 있으면 magi-front 측에 헌법 개정 제안
5. magi-front에서 frontmatter 갱신 + registry 갱신 + validate PASS + 라이브 endpoint 갱신 → SOT 일원화

이 절차는 INC-045 (페르소나 부재 → generic AI sans+회색 트랩) 의 자산 레포 측 답이다. *임의 추정* 자체가 INC-045 anti-pattern.

---

# 2. Verification ↔ Status palette 의미 분기 헌법

8 페르소나 *전체*에 적용. 색 토큰을 *축* 단위로 분리한다:

| palette | 의미 축 | 대표 토큰 | 적용 대상 |
|---|---|---|---|
| **status-** | 거래·작업 진행 상태 | `status-success` `status-warning` `status-error` `status-info` `status-approved-bg/fg` `status-progress-bg/fg` `status-returned-bg/fg` | 견적 확정·반려·진행 중·완료·취소 등 *상태 머신* |
| **verification-** (또는 페르소나별 `accent`) | 신원·정품·인증 검증 | `accent` (luxury-trust) · 페르소나별 verification 전용 토큰 | 정품 검증·본인 인증·SMS·이메일·KYC·전문가 인증 |
| **brand**·**accent**·**foreground**·**bg-*** | 시각 정체성 + 정보 위계 | 페르소나별 정의 | 본문·헤딩·CTA·배경 |

## 2.1 금지 사례

- ❌ SMS 인증 완료 pill에 `bg-status-approved-bg` 사용 (status palette 차용)
- ❌ 본인 인증 완료 배지에 `text-status-success` 사용
- ❌ 정품 검증 마크에 `border-status-info` 사용
- ❌ 거래 진행 단계 indicator에 `accent` 사용 (verification palette 차용 — 단, 페르소나가 명시적으로 허용한 경우 예외)

## 2.2 권장 사례

- ✅ 정품 검증 = `accent` + serif 라벨 (luxury-trust)
- ✅ SMS 인증 완료 = `accent` outline pill 또는 verification 전용 토큰
- ✅ 거래 진행 = `status-progress-bg/fg` + 페르소나 fallback color
- ✅ 견적 확정 = `status-approved-bg/fg`

## 2.3 색이 우연히 비슷한 경우의 처리

verification palette와 status palette가 우연히 비슷한 색이어도 **토큰을 섞지 않는다**. 의미 축이 다르므로 추후 개정 시 한쪽만 바뀌어도 다른 쪽이 망가지지 않게 격리. 디자인 토큰의 본질은 *값*이 아니라 *의미*다.

---

# 3. Persona Branching Pattern (페르소나 분기 헌법)

화면 1개 = 페르소나 1개가 기본이지만, 사용자 역할 분기·도메인 분기에서는 **한 제품 안에 N 페르소나 동시 적용**이 정당하다.

## 3.1 허용 분기 패턴

| 분기 축 | 예시 | 페르소나 매핑 |
|---|---|---|
| 사용자 역할 | 매도자 ↔ 매입자 (Exit_sys 카이토리) | playful-friendly ↔ luxury-trust |
| 도메인 모드 | 의료 진료 ↔ 커뮤니티 (M_MAGI) | clinical ↔ community |
| 전문성 수준 | 일반 사용자 ↔ 전문가 (F_MAGI) | playful-friendly ↔ dev-technical |
| 신뢰 강도 | 일반 정보 ↔ 결제·계약 | editorial ↔ institutional |

## 3.2 분기 적용 규칙

- 분기 *축*은 1개 (역할 + 도메인 동시 분기 금지 — 사용자가 자신의 위치를 잃는다)
- 페르소나 전환 *경계*는 명시적 — URL prefix(`/seller/*` ↔ `/buyer/*`) 또는 명시적 모드 토글
- 토큰은 페르소나 *루트 클래스*로 격리 (`.luxury-trust { ... }` `.kaitori-mint { ... }`) — global token 오염 금지
- 한 컴포넌트가 *두 페르소나에 다 쓰이면* 그 컴포넌트는 페르소나 의존 토큰을 직접 참조하지 않고 의미 토큰(`--text-primary` `--accent`)만 참조

## 3.3 자산 보존 사이클 (운영 정합)

- 직전 세션이 *reject*한 페르소나/토큰을 다음 세션이 *비용 0으로 회수*할 수 있게 자산은 항상 git 히스토리에 보존
- 한 화면에서 잠시 폐기된 페르소나가 다른 화면에서 재채택되는 건 정상 사이클 — magi-front 운영 헌법
- 페르소나 폐기는 magi-wiki `decision/DEC-*-persona-deprecation.md` 박제 후에만 이루어진다

---

# 4. Anti-Patterns (8 페르소나 공통)

페르소나별 안티 패턴은 각 `<persona>.md` §"안티 패턴" 섹션에 있다. 본 섹션은 *공통* 안티 패턴 — 페르소나를 가리지 않고 X.

- **임의 토큰 발명** — magi-front SOT에 없는 색·간격·radius 즉석 작명 (§1.1, §1.2 위반)
- **palette 차용** — verification에 status, status에 verification, brand에 status 등 의미 축 혼선 (§2 위반)
- **N 페르소나 동시 분기** — 한 화면에 2개 페르소나 토큰 동시 노출 (§3.2 위반 — 사용자 혼란)
- **dark mode 임의 추정** — light 토큰만 있고 dark가 정의 안 된 페르소나의 dark mode를 자기 프로젝트에서 발명 (§1.1 금지)
- **shadcn registry 우회** — registry로 install 가능한 토큰을 *손으로* 자기 프로젝트에 박는 것 (드리프트 발생, §1.1 권장 위반)

---

# 5. 헌법 개정 절차

magi-front 헌법 개정은 magi-wiki `_inbox` → `decision/DEC-*` 박제 → magi-front 갱신 사이클로만 이루어진다. magi-front 자기 레포에서 헌법 직접 개정 금지. 절차:

1. magi-wiki `_inbox/<date>-<topic>.md` 드롭 (target_type: `decision`)
2. magi-wiki CTO ingest → `decision/DEC-NNN-*.md` 박제
3. magi-front 측이 DEC 참조하여 `<persona>.md` 또는 `_GLOBAL.md` 갱신
4. validate PASS + build + 라이브 endpoint 검증
5. `git commit` — 메시지에 박제된 DEC ID 명시 (`docs: [magi-front] DEC-NNN 적용 — ...`)

본 헌법 자체의 개정도 동일 절차.

---

# References

- magi-wiki `incident/INC-045-exit-sys-persona-vacancy.md` — 페르소나 부재 함정 원전
- magi-wiki `decision/DEC-049-front-skill-charter-option-c.md` — 자산·지식 분리 헌장
- magi-wiki `decision/DEC-128-magi-front-v0.2-persona-extension.md` — 8 페르소나 확장 결정
- magi-wiki `entity/persona-luxury-trust.md` — luxury-trust 페르소나 entity
- magi-wiki `entity/magi-front-asset-repo.md` — 자산 레포 운영 entity
- magi-wiki `content/SCHEMA.md` v2.2 — target_type:reference 카테고리 신설

magi-front 측:

- `README.md` — 운영 매뉴얼 (Maintenance 섹션에 `/magi-front-daily-commit` 박제됨)
- `monitoring-list.json` — 외부 brand 89종 × 9 카테고리 시드 (분기별 갱신)
- `design-md/<persona>.md` × 8 — 페르소나별 헌법
- `registry/styles/<persona>/` × 8 — shadcn install 자산
