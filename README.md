# magi-front

**Magi Frontend Design Assets** — DESIGN.md 8종 + shadcn registry v4 8 preset.

다른 프로덕트(seolmyung·kanpo·prub·jp-otc·exit-sys 등)가 *cp 한 줄* 또는 *shadcn install 한 줄*로 가져갈 수 있는 디자인 자산 레포. 위키가 아니며 코드도 직접 호스팅하지 않는다. 페르소나 산문(rationale) + 토큰(CSS 변수 + DTCG)만 둔다.

---

## 3-Layer 아키텍처

```
[Knowledge]  magi-wiki content/*           ← Pinecone 시맨틱 검색 (왜 이 결정인가)
[Assets]     magi-front (이 레포)          ← DESIGN.md + shadcn registry (Vercel)
[Interface]  ~/.claude/skills/front/       ← /front 슬래시 스킬 (단일 진입점)
```

각 레이어는 명확히 분리된다.

- **Knowledge** — 결정의 *근거*와 합의 흔적. magi-wiki entity/decision/incident.
- **Assets** — 실행 가능한 *코드 자산*. 이 레포가 그것.
- **Interface** — 사람과 에이전트의 *진입점*. `/front` 스킬이 페르소나 합의를 강제한 뒤 이 레포의 자산을 호출한다.

---

## 사용 패턴

### 1) DESIGN.md cp (사람이 읽고 적용)

```bash
# 페르소나 한 종 가져오기
curl -o ./DESIGN.md \
  https://magi-front.vercel.app/design-md/clinical.md

# 또는 GitHub raw
curl -o ./DESIGN.md \
  https://raw.githubusercontent.com/gojj1229/magi-front/main/design-md/clinical.md
```

DESIGN.md 8섹션 표준(brand·colors·type·spacing·radius·shadows·components·rationale)을 따른다. frontmatter에 hex/font/scale을 박아 둔다.

### 2) shadcn registry install (CLI가 토큰 주입)

```bash
# 페르소나 토큰을 프로젝트에 install (CSS 변수 + theme.css)
npx shadcn@latest add https://magi-front.vercel.app/r/clinical
```

각 preset은 `registry:base` 타입으로 묶여 있어 한 번에 CSS 변수 + theme.css가 주입된다. Tailwind v4 `cssVars.theme/light/dark` 스키마 준수.

> Vercel 배포 URL은 첫 deploy 후 README가 한 번 갱신된다. 도메인 연결 전까지는 위 패턴의 host만 다르다.

---

## 페르소나 8종

| persona | mood | primary use | language | status |
|---------|------|-------------|----------|--------|
| **clinical** | 정제 / 신뢰 | 의료·한의원 (seolmyung) | KR | v0.1 검증 |
| **editorial** | 지식 / 가독성 | 위키·교육 (kanpo) | JP-KO | v0.1 검증 |
| **community** | 따뜻함 / 사회성 | 한방 라이프 (prub) | KR | v0.1 검증 |
| **japanese-minimal** | 미니멀 / 약국 | OTC·약국 (jp-otc) | JP | v0.1 검증 |
| **luxury-trust** | 럭셔리 / 거래신뢰 | 카이토리 (exit-sys) | KR-JP | v0.1 후보 |
| **dev-technical** | 정보 명료 / SaaS | 대시보드·개발자 도구 | en-ko | v0.2 후보 |
| **playful-friendly** | 활기 / 캐주얼 | 컨슈머·온보딩·게임화 | ko-en | v0.2 후보 |
| **institutional** | 보수 / 신뢰 | 정부·금융·대기업 | ko-ja-en | v0.2 후보 |

각 페르소나 산문은 `design-md/<persona>.md`에서, 코드 자산은 `registry/styles/<persona>/`에서 본다.

> **status 표기** — `검증`은 internal 프로덕트 1회 이상 적용 흔적 있음. `후보`는 신설된 페르소나로 첫 실측 대기. luxury-trust는 Exit_sys 1차 적용 직후 `검증`으로 승격 예정.

---

## 페르소나 선택 가이드

5종 → 8종 확장 후 선택 비용이 늘었다. 다음 4질문으로 결정한다.

```
Q1. 무드 — 신뢰·정밀 / 친밀·따뜻 / 럭셔리·격식 / 활기·캐주얼 / 정보·명료 / 보수·기관 중?
Q2. 정보 종류 — 짧은 단위(훑는) vs 긴 단위(읽는) vs 데이터·표(검사하는)?
Q3. 언어 — KR / JP / KR-JP / JP-KO / en / 그 외?
Q4. 규제 도메인 — 의료법·약기법·금융 광고규제·정품검증 등 시각 시그널 규제 있음?
```

### 결정 트리

| 무드 (Q1) | 정보 (Q2) | 언어 (Q3) | 규제 (Q4) | → 페르소나 |
|---|---|---|---|---|
| 신뢰·정밀 | 짧음 | KR | 의료법 | **clinical** |
| 신뢰·정밀 | 짧음 | JP | 약기법 | **japanese-minimal** |
| 친밀·따뜻 | 긴 글 | JP-KO | – | **editorial** |
| 친밀·따뜻 | 짧음 (커뮤니티) | KR | – | **community** |
| 럭셔리·격식 | 짧음 (거래) | KR-JP | 정품검증 | **luxury-trust** |
| 정보·명료 | 데이터·표 | en-ko | – | **dev-technical** |
| 활기·캐주얼 | 짧음 (개인 경험) | ko-en | – | **playful-friendly** |
| 보수·기관 | 표·문서 | ko-ja-en | 금융·광고규제 | **institutional** |
| **매칭 없음** | – | – | – | ⚠ persona vacancy 후보 — `_inbox` 드롭 |

### 페르소나 경계 (혼동 방지)

비슷해 보이지만 *다른 페르소나*인 쌍:

- **clinical vs institutional** — clinical은 *환자에게 따뜻한 의료 정밀*, institutional은 *시민·고객에게 격식 있는 기관 무게감*. clinical은 deep teal + radius md, institutional은 deep navy + radius sm·accent 거의 X
- **community vs playful-friendly** — community는 *타인과 연결의 따뜻함*, playful은 *개인 경험의 활기*. community는 warm coral + 차분, playful은 vivid violet + 마이크로 애니메이션
- **dev-technical vs japanese-minimal** — dev는 *데이터·코드 명료* (Latin geometric sans), JP-min은 *일본 약국 정보밀도* (JP only sans, 약기법)
- **luxury-trust vs editorial** — luxury는 *거래신뢰* (charcoal + gold + sans body), editorial은 *long-form 가독성* (warm paper + serif body)

---

## 디렉토리 구조

```
magi-front/
├── design-md/                  # DESIGN.md 8종 (사람이 읽는 산문)
│   ├── clinical.md
│   ├── editorial.md
│   ├── community.md
│   ├── japanese-minimal.md
│   ├── luxury-trust.md
│   ├── dev-technical.md
│   ├── playful-friendly.md
│   └── institutional.md
├── registry/                   # shadcn registry v4 (기계가 install)
│   ├── registry.json           # 루트 매니페스트 (8 preset 인덱싱)
│   └── styles/
│       ├── clinical/{registry-item.json, theme.css, tokens.json, README.md}
│       ├── editorial/...
│       ├── community/...
│       ├── japanese-minimal/...
│       ├── luxury-trust/...
│       ├── dev-technical/...
│       ├── playful-friendly/...
│       └── institutional/...
├── public/                     # Vercel 정적 호스팅 루트 (빌드 산출물)
│   ├── design-md/              #   ↳ design-md/ 미러
│   └── r/                      #   ↳ registry-item.json 미러
├── scripts/
│   ├── build.mjs               # design-md/registry → public/ 미러
│   └── validate.mjs            # DESIGN.md ↔ registry 토큰 1:1 검증
├── vercel.json
└── package.json
```

`design-md/<persona>.md`의 frontmatter가 **단일 소스**이고 `registry/styles/<persona>/`의 토큰은 그 미러다. `npm run validate`로 두 쪽이 어긋나지 않는지 본다.

---

## 권장 진입점: `/front` 슬래시 스킬

직접 `curl` / `npx shadcn add`도 가능하지만, **권장 사용법**은 글로벌 스킬 `/front`다.

```
/front
```

`/front`는 다음을 강제한다.

1. 어떤 페르소나로 갈지 사용자와 합의 (페르소나 부재 = generic AI aesthetic 함정 차단)
2. magi-wiki entity 시맨틱 검색으로 *왜* 그 페르소나인지 확인
3. magi-front에서 DESIGN.md를 cp하거나 registry를 install
4. 구현 단계로 넘김

상세는 `~/.claude/skills/front/SKILL.md`.

---

## magi-wiki 참조 (Knowledge 레이어)

각 페르소나의 결정 근거·과거 incident·연관 컨셉은 magi-wiki에 박제되어 있다. ingest 완료 — 다음 파일이 magi-wiki 시맨틱 검색의 1차 회수 대상.

### Decision (2건)
- `decision/DEC-049-front-skill-charter-option-c.md` — 옵션 C(지식·자산 분리) 채택, 3-layer 아키텍처 결정
- `decision/DEC-128-magi-front-v0.2-persona-extension.md` — 페르소나 5→8 확장 결정 (gap 분석·경계 4쌍·9·10 6개월 후)

### Entity (10건 — 페르소나 8 + 자산 레포 + 모니터링 list)
- `entity/magi-front-asset-repo.md` — 이 레포 자체 (v0.1·v0.2 history + 8 install URL + monitoring-list 운영)
- `entity/magi-front-monitoring-list.md` — 89 brand × 9 카테고리 × 8 페르소나 매핑 (reference inbox 시드)
- `entity/persona-clinical.md` / `persona-editorial.md` / `persona-community.md` / `persona-japanese-minimal.md` / `persona-luxury-trust.md` — 검증된 5종 (각 entity 본문 §3에 monitoring-list 1차 소스 brand 매핑)
- `entity/persona-dev-technical.md` / `persona-playful-friendly.md` / `persona-institutional.md` — v0.2 신규 3종

### Incident (1건)
- `incident/INC-045-exit-sys-persona-vacancy.md` — 페르소나 부재 함정의 실측 사례. luxury-trust entity 박제 + DEC-049 + DEC-128로 5/5 요소 해소 진행 중 (Exit_sys 1차 실측 대기)

### Schema (target_type: reference 카테고리)
- `content/SCHEMA.md` v2.2 — 외부 brand 분석 박제용 신규 타입 도입. 명명 규칙: `<brand-id>-<persona>-candidate.md` (예: `stripe-dev-technical-candidate.md`). 본문 8섹션 표준 (What Saw → What Attracted → Where Applicable → Token Candidates → Trinity → Absorption Decision → Citation → Follow-up).

> ingest 흔적: magi-wiki 세션 311 (DEC-049 + INC-045 + asset-repo + persona × 5) → 세션 312-b (DEC-128 + persona × 3 + monitoring-list + SCHEMA v2.2 + persona × 5 갱신)

---

## Maintenance

자산 레포 특성상 *daily*가 아닌 *세션 마감 시 또는 변경 발생 시* 점검. 슬래시 명령 1개로 통합:

```
/magi-front-daily-commit
```

### 5단계 사이클

1. **자기 레포 dirty 점검** — `git status --short` + 최근 커밋 확인
2. **Health check** — `npm run validate` (56/56 PASS) + `npm run build` (26 파일) + curl 16 endpoint (HTTP 200)
3. **magi-wiki 역저장 후보 제안** — 페르소나 변경·monitoring-list 갱신·reference 분석·incident 발견 시 `_inbox` 드롭 안내 (SR-01 — 드롭만, magi-wiki 직접 commit·push 절대 X)
4. **Git 커밋·푸시** — dirty 있을 때만. 경로 명시 add (`-A` 금지) + 스코프 라벨 `[magi-front]`
5. **다음 cadence 알림** — Exit_sys 1차 실측 / reference inbox 첫 시범 / monitoring-list 분기별 / 9·10 페르소나 결정 / GitHub Actions cron 셋업

### 다른 프로젝트와의 차이 (의도적 경량)

- ✗ CLAUDE.md / DYNAMIC.md / daily_logs / _inbox / ingest 파이프라인 (LPS 비-9-컴포넌트)
- ✗ 코드맵 / 일별 로그 / 자체 wiki
- ✓ 자기 레포 commit · magi-wiki `_inbox` 드롭 안내 · Health check · cadence 알림

상세는 `~/.claude/commands/magi-front-daily-commit.md`.

### 자산 헬스 빠른 체크 (npm)

```bash
npm run validate   # DESIGN.md ↔ registry 토큰 1:1 (56/56 PASS 기대)
npm run build      # public/ 미러 빌드 (26 파일)
```

라이브 endpoint 16종 점검은 `/magi-front-daily-commit` Step 2.3에 박제.

---

## 라이선스

[MIT](./LICENSE) © 2026 gojj1229 (Magi System)
